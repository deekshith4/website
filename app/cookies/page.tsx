import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <Badge variant="secondary" className="mx-auto w-fit">
            Cookie Policy
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our Cookie Policy
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transparency about how we use cookies and similar technologies
          </p>
        </div>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-8 space-y-8">
            {/* Introduction */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                We Respect Your Privacy
              </h2>
              <p className="text-gray-600 leading-relaxed">
                At Savant Solutions, we believe in being transparent about our practices. 
                We want you to know that we do not use any cookies or tracking 
                technologies that collect personal data.
              </p>
            </div>

            {/* No Data Collection */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">
                No Data Collection
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our website operates without collecting any personal information 
                through cookies. We don't use analytics cookies, advertising cookies, 
                or any other tracking mechanisms that would monitor your browsing behavior.
              </p>
            </div>

            {/* Essential Cookies */}
            {/* <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">
                Essential Functionality
              </h3>
              <p className="text-gray-600 leading-relaxed">
                The only cookies we might use are strictly necessary for the basic 
                functioning of our website. These are temporary session cookies that 
                help with navigation and are automatically deleted when you close your browser.
              </p>
            </div> */}

            {/* Third-Party Services */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">
                Third-Party Services
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We don't integrate with third-party services that would place cookies 
                on your device. Your visit to our website remains completely private.
              </p>
            </div>

            {/* Your Control */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">
                Your Control
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Since we don't use tracking cookies, there's no need for you to manage 
                cookie preferences on our site. You can browse freely knowing that your 
                privacy is protected.
              </p>
            </div>

            {/* Updates */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">
                Policy Updates
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Should our practices change in the future, we will update this policy 
                and provide clear notice of any changes. We are committed to maintaining 
                our privacy-first approach.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Questions?
              </h3>
              <p className="text-gray-600">
                If you have any questions about our cookie policy, please don't hesitate to{" "}
                <a href="/contact" className="text-blue-600 hover:text-blue-700 underline">
                  contact us
                </a>
                .
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}