import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  Users,
  Target,
  Award,
  Calendar,
} from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen">
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/images/about-us.jpg")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/90 via-white/80 to-purple-50/90"></div>
        </div>

        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-10 right-10 w-20 h-20 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-10 left-20 w-20 h-20 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-8">
            <Badge variant="secondary" className="mx-auto w-fit">
              About Savant
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
              Building the Future of{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Business Intelligence
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Key milestones that shaped our company and defined our impact
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                year: "2022",
                title: "Company Founded",
                description:
                  "",
              },
              {
                year: "2024",
                title: "First AI Platform Launch",
                description:
                  "",
              },
              {
                year: "2025",
                title: "First Customer Acquired",
                description:
                  "",
              },
            ].map((milestone, index) => (
              <div key={index} className="flex items-center space-x-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                    <Calendar className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-2">
                    <Badge variant="secondary">{milestone.year}</Badge>
                    <h3 className="text-xl font-bold text-gray-900">
                      {milestone.title}
                    </h3>
                  </div>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Culture & Awards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Culture */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-gray-900">
                  Our Culture
                </h2>
                <p className="text-xl text-gray-600">
                  We foster an environment of innovation, collaboration, and
                  continuous learning.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Collaborative Excellence
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Cross-functional teams working together to solve complex
                      challenges
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Innovation First
                    </h3>
                    <p className="text-gray-600 text-sm">
                      20% time for personal projects and exploring new
                      technologies
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Growth Mindset
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Continuous learning budget and conference attendance for
                      all team members
                    </p>
                  </div>
                </div>
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
            Whether you&apos;re looking to transform your business or join our team,
            we&apos;d love to hear from you.
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
