import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  HelpCircle,
} from "lucide-react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";

export function Footer() {
  const faqs = [
    {
      question: "How long does a typical AI implementation take?",
      answer: "Implementation timelines vary based on project complexity, but most projects are completed within 3-6 months from discovery to deployment.",
    },
    {
      question: "Do you work with small businesses or just enterprises?",
      answer: "We work with businesses of all sizes. Our solutions are scalable and can be tailored to fit different budgets and requirements.",
    },
    {
      question: "What kind of support do you provide after implementation?",
      answer: "We offer comprehensive ongoing support including monitoring, optimization, training, and 24/7 technical assistance.",
    },
    {
      question: "Can you integrate with our existing systems?",
      answer: "Yes, our solutions are designed to integrate seamlessly with most existing business systems and workflows.",
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image
                src="/images/logo.jpeg"
                alt="Tracient Logo"
                width={40}
                height={40}
                className="w-30 h-30 rounded-lg"
              />
              <span className="text-xl font-bold">Tracient</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transforming businesses with cutting-edge AI solutions, expert
              consulting, and innovative technology platforms.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link
                href="/"
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                About Us
              </Link>
               <Link
                href="/features"
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                Features
              </Link>
              <Link
                href="/contact"
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                Contact
              </Link>
              {/* FAQ Link */}
              <Dialog>
                <DialogTrigger asChild>
                  <button className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors text-sm cursor-pointer">
                    <HelpCircle className="h-4 w-4" />
                    <span>FAQ</span>
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-gray-900">
                      Frequently Asked Questions
                    </DialogTitle>
                    <DialogDescription className="text-lg text-gray-600">
                      Quick answers to common questions about our services and process.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-6 mt-6">
                    {faqs.map((faq, index) => (
                      <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                        <h3 className="font-semibold text-gray-900 text-lg mb-3">
                          {faq.question}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </Card>
                    ))}
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            {/* <h3 className="text-lg font-semibold">Services</h3>
            <div className="space-y-2">
              <Link
                href="/services/ai-solutions"
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                AI Solutions
              </Link>
              <Link
                href="/services/consulting"
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                Consulting
              </Link>
              <Link
                href="/services/implementation"
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                Implementation
              </Link>
              <Link
                href="/services/support"
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                Support & Maintenance
              </Link>
            </div> */}
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Stay Connected</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Mail className="h-4 w-4" />
                <span>info@savant-solutions.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Phone className="h-4 w-4" />
                <span>+91 9400031100</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <MapPin className="h-4 w-4" />
                <span>Bangalore, Karnataka, India</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-800" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-gray-400">
            © 2025 Savant Solutions. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link
              href="/cookies"
              className="hover:text-white transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}