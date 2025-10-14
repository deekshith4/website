import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <Badge variant="secondary" className="mx-auto w-fit">
            Privacy Policy
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            How we protect and respect your personal information
          </p>
        </div>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-8 space-y-12">
            {/* Introduction */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Our Commitment to Privacy
              </h2>
              <p className="text-gray-600 leading-relaxed">
                At Savant Solutions, we are committed to protecting your privacy and being 
                transparent about our data practices. This policy explains how we 
                handle information when you interact with our services.
              </p>
            </div>

            {/* Information We Don't Collect */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Information We Don't Collect
              </h3>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  We want to be clear about what we don't collect:
                </p>
                <ul className="space-y-3 text-gray-600 list-disc list-inside">
                  <li>We don't collect personal information through our website</li>
                  <li>We don't use tracking technologies or analytics cookies</li>
                  <li>We don't sell, trade, or rent your personal data</li>
                  <li>We don't use third-party advertising networks</li>
                  <li>We don't store your browsing history or behavior</li>
                </ul>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Contact Information
              </h3>
              <p className="text-gray-600 leading-relaxed">
                If you choose to contact us through our website form or email, 
                we only collect the information you voluntarily provide. This 
                typically includes your name, email address, and message content. 
                We use this information solely to respond to your inquiry.
              </p>
            </div>

            {/* Data Security */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Data Security
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We implement appropriate security measures to protect any information 
                you choose to share with us. Our systems are designed to prevent 
                unauthorized access, disclosure, or modification of your information.
              </p>
            </div>

            {/* Third-Party Services */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Third-Party Services
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We don't share your information with third-party services for 
                marketing or analytics purposes. Any third-party services we use 
                for essential business functions are carefully vetted to ensure 
                they meet our privacy standards.
              </p>
            </div>

            {/* Your Rights */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Your Rights
              </h3>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  You have the right to:
                </p>
                <ul className="space-y-3 text-gray-600 list-disc list-inside">
                  <li>Know what information we have about you</li>
                  <li>Request deletion of your information</li>
                  <li>Opt-out of any communications</li>
                  <li>Ask questions about our privacy practices</li>
                </ul>
              </div>
            </div>

            {/* Policy Updates */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Policy Updates
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We may update this privacy policy from time to time. Any changes 
                will be posted on this page with an updated revision date. We 
                encourage you to review this policy periodically.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Contact Us
              </h3>
              <p className="text-gray-600">
                If you have any questions about this Privacy Policy, please contact us at{" "}
                <a href="mailto:info@savant-solutions.com" className="text-blue-600 hover:text-blue-700 underline">
                  info@savant-solutions.com
                </a>
                .
              </p>
            </div>

            <div className="text-sm text-gray-500 text-center pt-8 border-t">
              Last updated: {new Date().getFullYear()}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}