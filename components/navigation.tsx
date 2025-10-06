"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/logo.jpeg"
              alt="Tracient Logo"
              width={40}
              height={40}
              className="w-30 h-30 rounded-lg"
            />
            <span className="text-xl font-bold text-gray-900">Tracient</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              About
            </Link>
            {/* <Link
              href="/services"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Services
            </Link> */}
            {/* <Link href="/process" className="text-gray-700 hover:text-blue-600 transition-colors">
              Process
            </Link> */}
            {/* <Link
              href="/caseStudy"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Case Studies
            </Link> */}
            {/* <Link
              href="/blogs"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Blog
            </Link> */}
            {/* <Link
              href="/careers"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Careers
            </Link> */}
            <Link
              href="/contact"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Button asChild>
              <Link href="/contact">Book a Demo</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Services
              </Link>
              <Link
                href="/process"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Process
              </Link>
              <Link
                href="/case-studies"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Case Studies
              </Link>
              <Link
                href="/blog"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/careers"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Careers
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Contact
              </Link>
              <Button asChild className="w-fit">
                <Link href="/contact">Book a Demo</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
