import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Users, Target, Award, Calendar } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen">
      <section className="relative py-12 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/images/about-us.jpg")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/90 via-white/80 to-purple-50/90"></div>
        </div>

        <div className="absolute top-6 left-6 w-16 h-16 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-6 right-6 w-16 h-16 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-6 left-12 w-16 h-16 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-6">
            <Badge variant="secondary" className="mx-auto w-fit">
              About Savant
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
              Building the Future of{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Business Intelligence
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Founded in 2022, Savant has been at the forefront of AI
              innovation, helping businesses transform their operations and
              achieve unprecedented growth.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 border-0 shadow-lg">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Our Mission
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  To democratize AI technology and make it accessible to
                  businesses of all sizes, enabling them to compete and thrive
                  in the digital economy.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-0 shadow-lg">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  A world where every business, regardless of size or industry,
                  can harness the power of AI to solve complex problems and
                  create value.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-0 shadow-lg">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Values</h3>
                <p className="text-gray-600 leading-relaxed">
                  Innovation, integrity, and impact drive everything we do. We
                  believe in transparent partnerships and measurable results.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <Badge variant="secondary" className="mx-auto w-fit">
              Our Story
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Journey & Culture
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From humble beginnings to shaping the future of business
              intelligence
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Timeline Section */}
            <div className="space-y-8">
              <div className="text-left mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Milestones
                </h3>
                <p className="text-gray-600">
                  Key moments that defined our growth and impact
                </p>
              </div>

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

                {[
                  {
                    year: "2022",
                    title: "Company Founded",
                    description:
                      "Started with a vision to democratize AI for businesses of all sizes",
                    icon: "🚀",
                  },
                  {
                    year: "2024",
                    title: "First AI Platform Launch",
                    description:
                      "Released our flagship intelligence platform",
                    icon: "🎯",
                  },
                  {
                    year: "2025",
                    title: "First Enterprise Customer",
                    description:
                      "Onboarded our first Fortune client",
                    icon: "🏆",
                  },
                ].map((milestone, index) => (
                  <div
                    key={index}
                    className="relative flex items-start space-x-6 mb-8 last:mb-0 group"
                  >
                    <div className="flex-shrink-0 relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <span className="text-2xl">{milestone.icon}</span>
                      </div>
                    </div>
                    <div className="flex-1 pt-2">
                      <div className="flex items-center space-x-4 mb-3">
                        <Badge
                          variant="secondary"
                          className="bg-blue-100 text-blue-700"
                        >
                          {milestone.year}
                        </Badge>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {milestone.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Culture Section */}
            <div className="space-y-8">
              <div className="text-left mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Our Culture
                </h3>
                <p className="text-gray-600">
                  The values that drive our innovation and success
                </p>
              </div>

              <div className="grid gap-6">
                {[
                  {
                    icon: <Users className="h-6 w-6 text-blue-600" />,
                    title: "Collaborative Excellence",
                    description:
                      "Cross-functional teams working together to solve complex challenges and deliver exceptional results",
                    gradient: "from-blue-500 to-blue-600",
                  },
                  {
                    icon: <Target className="h-6 w-6 text-purple-600" />,
                    title: "Innovation First",
                    description:
                      "Dedicated time for research, experimentation, and exploring cutting-edge technologies",
                    gradient: "from-purple-500 to-purple-600",
                  },
                  {
                    icon: <Award className="h-6 w-6 text-green-600" />,
                    title: "Growth Mindset",
                    description:
                      "Continuous learning, professional development, and career advancement opportunities",
                    gradient: "from-green-500 to-green-600",
                  },
                ].map((value, index) => (
                  <div
                    key={index}
                    className="group p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 hover:border-transparent transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${value.gradient} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        {/* Force white color on the icon */}
                        <div className="text-white [&>svg]:text-white">
                          {value.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 text-lg mb-2 group-hover:text-gray-800 transition-colors">
                          {value.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Join Our Mission
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Whether you&apos;re looking to transform your business or join our
            team, we&apos;d love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-white text-white hover:bg-white text-blue-600"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
