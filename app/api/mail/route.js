import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  // Check if the request method is POST
  if (request.method !== 'POST') {
    return NextResponse.json(
      { error: 'Method not allowed' },
      { status: 405 }
    );
  }

  try {
    // Parse the request body
    const { name, email, company, message } = await request.json();

    // Validate required fields
    if (!name || !name.trim()) {
      return NextResponse.json(
        { error: 'Name is required' },
        { status: 400 }
      );
    }

    if (!email || !email.trim()) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    if (!message || !message.trim()) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Check if environment variables are set
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error('Missing email configuration');
      return NextResponse.json(
        { error: 'Email service is not configured properly' },
        { status: 500 }
      );
    }

    // Create email transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'deekshith@crocustech.net',
        pass: 'Digisol4..',
      },
    });

    // Verify transporter configuration
    await transporter.verify();

    // Email content
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: 'deekshith@gmail.com', // Your target email
      subject: `New Contact Form Submission from ${name.trim()}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #f4f4f4; padding: 20px; border-radius: 5px; }
              .content { background: white; padding: 20px; border: 1px solid #ddd; border-radius: 5px; }
              .field { margin-bottom: 15px; }
              .label { font-weight: bold; color: #555; }
              .value { color: #333; }
              .message { background: #f9f9f9; padding: 15px; border-left: 4px solid #007bff; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>New Contact Form Submission</h2>
                <p>You have received a new message from your website contact form.</p>
              </div>
              <div class="content">
                <div class="field">
                  <span class="label">Name:</span>
                  <span class="value">${name.trim()}</span>
                </div>
                <div class="field">
                  <span class="label">Email:</span>
                  <span class="value">${email.trim()}</span>
                </div>
                <div class="field">
                  <span class="label">Company:</span>
                  <span class="value">${company ? company.trim() : 'Not provided'}</span>
                </div>
                <div class="field">
                  <span class="label">Message:</span>
                  <div class="message">${message.trim().replace(/\n/g, '<br>')}</div>
                </div>
                <div class="field">
                  <span class="label">Submitted At:</span>
                  <span class="value">${new Date().toLocaleString()}</span>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
        New Contact Form Submission

        Name: ${name.trim()}
        Email: ${email.trim()}
        Company: ${company ? company.trim() : 'Not provided'}
        
        Message:
        ${message.trim()}

        Submitted at: ${new Date().toLocaleString()}
      `,
      replyTo: email.trim(), // This allows you to reply directly to the sender
    };

    // Send email
    const result = await transporter.sendMail(mailOptions);
    
    console.log('Email sent successfully:', result.messageId);

    return NextResponse.json(
      { 
        message: 'Email sent successfully!',
        messageId: result.messageId
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);

    // Handle specific error cases
    if (error.code === 'EAUTH') {
      return NextResponse.json(
        { error: 'Email authentication failed. Please check your email configuration.' },
        { status: 500 }
      );
    }

    if (error.code === 'EENVELOPE') {
      return NextResponse.json(
        { error: 'Invalid email address provided.' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}

// Optional: Add OPTIONS method for CORS preflight requests
export async function OPTIONS() {
  return NextResponse.json({}, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}