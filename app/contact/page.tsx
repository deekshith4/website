"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Loader2,
  CheckCircle,
  XCircle,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/send_mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", company: "", message: "" });
      } else {
        setSubmitStatus("error");
        setErrorMessage(
          data.error || "Failed to send message. Please try again."
        );
      }
    } catch (error) {
      console.error("Failed to send email:", error);
      setSubmitStatus("error");
      setErrorMessage(
        "Network error. Please check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <Badge variant="secondary" className="mx-auto w-fit">
              Get in Touch
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
              Let&apos;s Build Something{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Amazing Together
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your business with AI? Schedule a demo or get
              in touch with our team to discuss your specific needs and
              challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-gray-900">
                  Send us a Message
                </h2>
                <p className="text-xl text-gray-600">
                  Fill out the form below and we&apos;ll get back to you within
                  24 hours.
                </p>
              </div>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Send className="h-5 w-5 text-blue-600" />
                    <span>Contact Form</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {/* Status Messages */}
                  {submitStatus === "success" && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <span className="text-green-800 font-medium">
                          Message sent successfully!
                        </span>
                      </div>
                      <p className="text-green-600 text-sm mt-1 ml-7">
                        Thank you for your message. We&apos;ll get back to you
                        within 24 hours.
                      </p>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <XCircle className="h-5 w-5 text-red-600" />
                        <span className="text-red-800 font-medium">
                          Failed to send message
                        </span>
                      </div>
                      <p className="text-red-600 text-sm mt-1 ml-7">
                        {errorMessage}
                      </p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@company.com"
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project or how we can help..."
                        rows={14}
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          Send Message <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-gray-500 text-center">
                      By submitting this form, you agree to our privacy policy
                      and allow us to contact you regarding your inquiry.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-gray-900">
                  Get in Touch
                </h2>
                <p className="text-xl text-gray-600">
                  Prefer to reach out directly? Here are all the ways to contact
                  us.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="p-6 border-l-4 border-l-blue-600">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Email Us
                      </h3>
                      <p className="text-gray-600 text-sm mb-2">
                        For general inquiries and support
                      </p>
                      <a
                        href="mailto:info@savant-solutions.com"
                        className="text-blue-600 hover:underline"
                      >
                        info@savant-solutions.com
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-l-4 border-l-purple-600">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Call Us
                      </h3>
                      <p className="text-gray-600 text-sm mb-2">
                        Speak directly with our team
                      </p>
                      <a
                        href="tel:+15551234567"
                        className="text-purple-600 hover:underline"
                      >
                        --
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-l-4 border-l-green-600">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-3">
                        Our Locations
                      </h3>

                      <div className="space-y-4">
                        <div>
                          <p className="font-medium text-gray-800 text-sm mb-1">
                            Headquarters
                          </p>
                          <address className="text-green-600 not-italic text-sm">
                            Michigan, USA
                          </address>
                        </div>

                        <div className="border-t pt-3">
                          <p className="font-medium text-gray-800 text-sm mb-1">
                            R&D Center
                          </p>
                          <address className="text-green-600 not-italic text-sm">
                            F-404, Tower F, AdarshLakefront Apartment,
                            <br />
                            Bellandur, Bangalore - 560103
                            <br />
                            Karnataka, India
                          </address>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-l-4 border-l-orange-600">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Business Hours
                      </h3>
                      <p className="text-gray-600 text-sm mb-2">
                        When we&apos;re available
                      </p>
                      <div className="text-orange-600 text-sm">
                        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p>Saturday: Closed </p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Map placeholder */}
            </div>
          </div>
          <Card className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 p-6">
            <div className="h-64 bg-gray-100 rounded-lg overflow-hidden">
              <div className="h-64 bg-gray-100 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.963734447534!2d77.6811112757792!3d12.918096987888007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU1JzA1LjIiTiA3N8KwNDAnNTkuMiJF!5e0!3m2!1sen!2sin!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                ></iframe>
              </div>
            </div>
            <div className="mt-4 text-center">
              <p className="text-gray-500 font-medium">
                SavantEdge Infotech Pvt. Ltd
              </p>
              <p className="text-sm text-gray-400">
                F-404, Tower F, Adarsh Lakefront Apartment, Bellandur, Bangalore
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about our services and process.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How long does a typical AI implementation take?",
                answer:
                  "Implementation timelines vary based on project complexity, but most projects are completed within 3-6 months from discovery to deployment.",
              },
              {
                question:
                  "Do you work with small businesses or just enterprises?",
                answer:
                  "We work with businesses of all sizes. Our solutions are scalable and can be tailored to fit different budgets and requirements.",
              },
              {
                question:
                  "What kind of support do you provide after implementation?",
                answer:
                  "We offer comprehensive ongoing support including monitoring, optimization, training, and 24/7 technical assistance.",
              },
              {
                question: "Can you integrate with our existing systems?",
                answer:
                  "Yes, our solutions are designed to integrate seamlessly with most existing business systems and workflows.",
              },
            ].map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
