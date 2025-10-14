import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <Badge variant="secondary" className="mx-auto w-fit">
            Terms of Service
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Guidelines for using our website and services
          </p>
        </div>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-8 space-y-12">
            {/* Introduction */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Welcome to Savant Solutions
              </h2>
              <p className="text-gray-600 leading-relaxed">
                These Terms of Service govern your use of our website and services. 
                By accessing or using Savant Solutions, you agree to be bound by these terms.
              </p>
            </div>

            {/* Use of Services */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Use of Our Services
              </h3>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  You may use our services only as permitted by law. We may suspend 
                  or terminate your access if you do not comply with our terms or policies.
                </p>
                <ul className="space-y-3 text-gray-600 list-disc list-inside">
                  <li>Don't misuse our services</li>
                  <li>Don't interfere with our services or try to access them using a method other than the interface we provide</li>
                  <li>Don't use our services to distribute malware or malicious content</li>
                  <li>Don't attempt to reverse engineer our technology</li>
                </ul>
              </div>
            </div>

            {/* Intellectual Property */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Intellectual Property
              </h3>
              <p className="text-gray-600 leading-relaxed">
                All content on our website, including text, graphics, logos, and 
                software, is the property of Savant Solutions and protected by intellectual 
                property laws. You may not use our content without our express permission.
              </p>
            </div>

            {/* Disclaimer */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Disclaimer
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our services are provided "as is" without any warranties, express 
                or implied. We don't guarantee that our services will be uninterrupted, 
                secure, or error-free.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Limitation of Liability
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To the extent permitted by law, Savant Solutions shall not be liable for any 
                indirect, incidental, special, consequential, or punitive damages, 
                or any loss of profits or revenues.
              </p>
            </div>

            {/* Privacy */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Privacy
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our Privacy Policy explains how we handle information. By using our 
                services, you agree that we can use such data in accordance with our 
                privacy policy.
              </p>
            </div>

            {/* Changes to Terms */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Changes to Terms
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We may modify these terms or any additional terms that apply to a 
                service. We'll post notice of modifications to our terms on this page. 
                Changes will not apply retroactively.
              </p>
            </div>

            {/* Governing Law */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Governing Law
              </h3>
              <p className="text-gray-600 leading-relaxed">
                These terms are governed by the laws of the jurisdiction where 
                Savant Solutions is established, without regard to conflict of law principles.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Questions?
              </h3>
              <p className="text-gray-600">
                If you have any questions about these Terms of Service, please contact us at{" "}
                <a href="mailto:info@savant-solutions.com" className="text-blue-600 hover:text-blue-700 underline">
                  info@savant-solutions.com
                </a>
                .
              </p>
            </div>

            <div className="text-sm text-gray-500 text-center pt-8 border-t">
              Effective date: {new Date().getFullYear()}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}