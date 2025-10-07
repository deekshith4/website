import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

import {
  ArrowRight,
  Brain,
  TrendingUp,
  Shield,
  Zap,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-purple-600/20 via-transparent to-indigo-600/20"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-br from-blue-600/20 via-transparent to-cyan-600/20"></div>
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-20 lg:min-h-screen">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-purple-200 px-4 py-2 rounded-full text-sm font-medium border border-white/20">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                AI-POWERED PLATFORM
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Transform your business with{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Tracient
                </span>
              </h1>

              <p className="text-xl text-purple-100 leading-relaxed">
                At Savant Solutions, we understand the critical importance of
                keeping your operations running smoothly and eliminating
                unplanned downtime. That&apos;s why we built Tracient specifically
                for small and medium-sized businesses, guided by four core
                principles:
              </p>

              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { number: "01", title: "Maximize equipment uptime" },
                    { number: "02", title: "Improve yield" },
                    { number: "03", title: "Enhance product quality" },
                    { number: "04", title: "Ensure data traceability" },
                  ].map((principle, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 group hover:translate-x-2 transition-transform duration-300"
                    >
                      <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                        <span className="text-white text-sm font-bold">
                          {principle.number}
                        </span>
                      </div>
                      <span className="text-purple-100 font-medium group-hover:text-white transition-colors">
                        {principle.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Brain className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      Powered by Advanced Machine Learning
                    </h4>
                    <p className="text-purple-100 text-sm leading-relaxed">
                      Powered by our patent-pending machine learning platform,
                      Tracient ingests and analyzes millions of real-time data
                      points from industrial assets. It detects anomalies,
                      identifies potential failure modes early, and delivers
                      actionable insights directly to technicians—enabling
                      predictive maintenance and fast, informed responses that
                      prevent costly disruptions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                <Button
                  size="lg"
                  asChild
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-0"
                >
                  <Link href="/contact" className="flex items-center gap-2">
                    Book a Demo
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative flex items-center justify-center h-full min-h-[600px] lg:min-h-[700px]">
              <div className="grid grid-cols-2 gap-4 w-full max-w-2xl mx-auto">
                {/* Row 1 */}
                <div className="relative group">
                  <div className="absolute  bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-white/10 backdrop-blur-sm rounded-xl shadow-2xl border border-white/20 overflow-hidden transform  group-hover:rotate-0 transition-all duration-500 group-hover:shadow-cyan-500/25 h-40">
                    <Image
                      src="/images/img_1.png"
                      alt="AI Analytics"
                      width={200}
                      height={160}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>

                <div className="relative group ">
                  <div className="absolute  bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-white/10 backdrop-blur-sm rounded-xl shadow-2xl border border-white/20 overflow-hidden transform  group-hover:rotate-0 transition-all duration-500 group-hover:shadow-purple-500/25 h-40">
                    <Image
                      src="/images/img_2.png"
                      alt="Real-time Monitoring"
                      width={200}
                      height={160}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>

                <div className="relative group ">
                  <div className="absolute bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-white/10 backdrop-blur-sm rounded-xl shadow-2xl border border-white/20 overflow-hidden transform  group-hover:rotate-0 transition-all duration-500 group-hover:shadow-green-500/25 h-40">
                    <Image
                      src="/images/img_3.png"
                      alt="Predictive Analytics"
                      width={200}
                      height={160}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="relative group ">
                  <div className="absolute  bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-white/10 backdrop-blur-sm rounded-xl shadow-2xl border border-white/20 overflow-hidden transform  group-hover:rotate-0 transition-all duration-500 group-hover:shadow-orange-500/25 h-40">
                    <Image
                      src="/images/img_4.png"
                      alt="Data Visualization"
                      width={200}
                      height={160}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>

                <div className="relative group ">
                  <div className="absolute  bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-white/10 backdrop-blur-sm rounded-xl shadow-2xl border border-white/20 overflow-hidden transform  group-hover:rotate-0 transition-all duration-500 group-hover:shadow-cyan-500/25 h-40">
                    <Image
                      src="/images/img_5.png"
                      alt="Machine Learning"
                      width={200}
                      height={160}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>

                <div className="relative group">
                  <div className="absolute  bg-gradient-to-r from-pink-500/20 to-rose-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-white/10 backdrop-blur-sm rounded-xl shadow-2xl border border-white/20 overflow-hidden transform  group-hover:rotate-0 transition-all duration-500 group-hover:shadow-pink-500/25 h-40">
                    <Image
                      src="/images/img_6.png"
                      alt="IoT Integration"
                      width={200}
                      height={160}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>

              {/* Floating Icons - Adjusted Positions */}
              <div className="absolute top-20 right-4 w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-2xl shadow-2xl transform rotate-12 flex items-center justify-center hover:rotate-0 transition-transform duration-300 border border-white/20">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>

              <div className="absolute bottom-20 left-4 w-14 h-14 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl shadow-2xl transform -rotate-6 flex items-center justify-center hover:rotate-0 transition-transform duration-300 border border-white/20">
                <Shield className="h-5 w-5 text-white" />
              </div>

              <div className="absolute top-1/2 -right-11 w-12 h-12 bg-gradient-to-r from-orange-400 to-red-400 rounded-lg shadow-2xl transform rotate-45 flex items-center justify-center hover:rotate-0 transition-transform duration-300 border border-white/20">
                <Zap className="h-4 w-4 text-white" />
              </div>

              {/* Background Grid */}
              <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]"></div>
            </div>
          </div>
        </div>

        {/* Bottom Gradient Border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
      </section>

      {/* What We Do Section */}
      <section className="py-24 bg-white relative">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Elegant Header */}
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <div className="w-2 h-2 bg-blue-600 rounded-full mx-auto mb-2"></div>
              <div className="text-sm font-semibold text-blue-600 tracking-widest uppercase">
                Our Capabilities
              </div>
            </div>
            <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 tracking-tight">
              What We <span className="font-semibold">Do</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
              We deliver comprehensive AI solutions that transform how
              businesses operate, compete, and grow in the digital age.
            </p>
          </div>

          {/* Sophisticated Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* AI Platform Card */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
              <div className="relative bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden">
                <div className="p-10">
                  {/* Elegant Icon */}
                  <div className="mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-500">
                      <Brain className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 tracking-tight">
                    AI Platform
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-8 text-lg font-light">
                    Custom AI solutions that automate processes, enhance
                    decision-making, and unlock new revenue streams for your
                    business.
                  </p>

                  {/* Subtle CTA */}
                </div>

                {/* Accent bar */}
                <div className="h-1 bg-gradient-to-r from-blue-600 to-blue-700 w-full"></div>
              </div>
            </div>

            {/* Expert Consulting Card */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
              <div className="relative bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden">
                <div className="p-10">
                  {/* Elegant Icon */}
                  <div className="mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-500">
                      <Shield className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 tracking-tight">
                    Expert Consulting
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-8 text-lg font-light">
                    Strategic guidance from industry experts to help you
                    navigate digital transformation and maximize your technology
                    investments.
                  </p>

                  {/* Subtle CTA */}
                </div>

                {/* Accent bar */}
                <div className="h-1 bg-gradient-to-r from-green-600 to-green-700 w-full"></div>
              </div>
            </div>
          </div>

          {/* Bottom Elegant CTA */}
          <div className="text-center mt-20">
            <div className="inline-flex items-center gap-6 px-8 py-4 bg-gray-50 rounded-2xl border border-gray-200">
              <div className="text-left">
                <div className="text-sm text-gray-600 font-light">
                  Ready to begin?
                </div>
                <div className="text-lg font-semibold text-gray-900">
                  Let&apos;s discuss your project
                </div>
              </div>
              <Link href="/contact">
                <button className="px-8 py-3 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-transform">
                  Start Conversation
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              How We Work
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our proven methodology ensures successful project delivery and
              measurable business impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                desc: "Deep dive into your business needs and challenges",
              },
              {
                step: "02",
                title: "Strategy",
                desc: "Develop a comprehensive roadmap and solution architecture",
              },
              {
                step: "03",
                title: "Development",
                desc: "Build and implement your custom AI solutions",
              },
              {
                step: "04",
                title: "Support",
                desc: "Ongoing optimization and dedicated support",
              },
            ].map((item, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white font-bold text-lg">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link href="/process">
                View Full Process <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div> */}
        </div>
      </section>

      {/* Client Logos Section */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-lg text-gray-600 font-medium">
              Trusted by industry leaders worldwide
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            {[
              "TechCorp",
              "InnovateLab",
              "FutureScale",
              "DataDriven",
              "SmartSys",
              "NextGen",
            ].map((company, index) => (
              <div key={index} className="text-center">
                <div className="h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500 font-semibold">{company}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Testimonials Preview */}
      {/* <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              What Our Clients Say
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-8 text-center space-y-4">
                  <Quote className="h-8 w-8 text-white/60 mx-auto" />
                  <p className="text-white text-lg leading-relaxed">
                    "Savant transformed our operations with their AI platform.
                    We've seen a 40% increase in efficiency and $2M in cost
                    savings."
                  </p>
                  <div className="space-y-2">
                    <p className="text-white font-semibold">Sarah Johnson</p>
                    <p className="text-white/80 text-sm">CEO, TechCorp</p>
                  </div>
                  <div className="flex justify-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-8 text-center space-y-4">
                  <Quote className="h-8 w-8 text-white/60 mx-auto" />
                  <p className="text-white text-lg leading-relaxed">
                    "The consulting team's expertise helped us navigate our
                    digital transformation seamlessly. Exceptional results and
                    support."
                  </p>
                  <div className="space-y-2">
                    <p className="text-white font-semibold">Michael Chen</p>
                    <p className="text-white/80 text-sm">CTO, InnovateLab</p>
                  </div>
                  <div className="flex justify-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Revolutionize your operations with our AI-powered solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="text-lg px-8 py-6">
              <Link href="/contact">
                Book a Demo <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            {/* <Button
              size="lg"
              variant="outline"
              asChild
              className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-gray-900"
            >
              <Link href="/case-studies">View Success Stories</Link>
            </Button> */}
          </div>
        </div>
      </section>
    </div>
  );
}
