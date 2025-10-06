import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";

export function Footer() {
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
                href="/contact"
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4"></div>

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
                <span>--</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <MapPin className="h-4 w-4" />
                <span>Bangalore, Karnataka, India</span>
              </div>
            </div>

            {/* <div className="space-y-2">
              <p className="text-sm text-gray-400">
                Subscribe to our newsletter
              </p>
              <div className="flex space-x-2">
                <Input
                  placeholder="Enter your email"
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                />
                <Button size="sm" variant="secondary">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div> */}
          </div>
        </div>

        <Separator className="my-8 bg-gray-800" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-gray-400">
            © 2025 Savant. All rights reserved.
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
