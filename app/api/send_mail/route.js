import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, company, message } = await request.json();
    console.log("Received form data:", { name, email, company, message });

    if (!name || !name.trim()) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }

    if (!email || !email.trim()) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    if (!message || !message.trim()) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address" },
        { status: 400 }
      );
    }

    if (!process.env.APP_USER || !process.env.APP_PASSWORD) {
      console.error("Missing email configuration");
      return NextResponse.json(
        { error: "Email service is not configured properly" },
        { status: 500 }
      );
    }


    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: process.env.APP_USER,
        pass: process.env.APP_PASSWORD,
      },
    });

    try {
      await transporter.verify();
      console.log("SMTP connection verified successfully");
    } catch (verifyError) {
      console.error("SMTP verification failed:", verifyError);
      return NextResponse.json(
        { error: "Email service configuration failed" },
        { status: 500 }
      );
    }

    const mailOptions = {
      from: {
        name: "Contact Form",
        address: process.env.APP_USER,
      },
      to: "info@savant-solutions.com",
      subject: `New Contact Form Submission from ${name.trim()}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <div style="background: #f9f9f9; padding: 20px; border-radius: 5px;">
            <p><strong>Name:</strong> ${name.trim()}</p>
            <p><strong>Email:</strong> ${email.trim()}</p>
            <p><strong>Company:</strong> ${
              company ? company.trim() : "Not provided"
            }</p>
            <p><strong>Message:</strong></p>
            <div style="background: white; padding: 15px; border-left: 4px solid #007bff;">
              ${message.trim().replace(/\n/g, "<br>")}
            </div>
            <p><strong>Submitted At:</strong> ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
      text: `
        New Contact Form Submission

        Name: ${name.trim()}
        Email: ${email.trim()}
        Company: ${company ? company.trim() : "Not provided"}
        
        Message:
        ${message.trim()}

        Submitted at: ${new Date().toLocaleString()}
      `,
      replyTo: email.trim(),
    };

    const result = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", result.messageId);

    return NextResponse.json(
      {
        message: "Email sent successfully!",
        messageId: result.messageId,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);

    if (error.code === "EAUTH") {
      return NextResponse.json(
        {
          error:
            "Gmail authentication failed. Please check your email and app password configuration.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
