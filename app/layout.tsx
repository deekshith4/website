import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tracient - AI-Powered Business Solutions",
  description:
    "Transform your business with cutting-edge AI solutions, expert consulting, and innovative technology platforms.",
  icons: {
    icon: "/images/logo.jpeg",
    apple: "/images/logo.jpeg",
  },
  openGraph: {
    title: "Tracient - AI-Powered Business Solutions",
    description: "Transform your business with cutting-edge AI solutions",
    url: "https://tracient.io",
    siteName: "Tracient",
    images: [
      {
        url: "/images/logo.jpeg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
