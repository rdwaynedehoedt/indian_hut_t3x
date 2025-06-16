import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import { Caveat } from "next/font/google";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import PageRevealTransition from "../components/ui/PageRevealTransition";
import ScrollToTop from "../components/ui/ScrollToTop";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-handwritten",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Indian Hut | Heritage Restaurant - Galle Fort",
  description: "A heritage-inspired café and restaurant blending old-world charm with modern minimalism in the heart of Galle Fort, Sri Lanka.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${caveat.variable} antialiased bg-sand text-charcoal min-h-screen flex flex-col`}
      >
        <Header />
        <PageRevealTransition>
          <div className="flex-grow">
            {children}
          </div>
        </PageRevealTransition>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
