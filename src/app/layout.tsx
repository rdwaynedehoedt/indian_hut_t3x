import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import { Caveat } from "next/font/google";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import PageRevealTransition from "../components/ui/PageRevealTransition";
import ScrollToTop from "../components/ui/ScrollToTop";
import "./globals.css";

// Optimize font loading
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false, // We don't need to preload mono font
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  weight: ["400", "500", "600", "700"], // Only load needed weights
});

const caveat = Caveat({
  variable: "--font-handwritten",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Indian Hut | Heritage Restaurant - Galle Fort",
  description: "A heritage-inspired café and restaurant blending old-world charm with modern minimalism in the heart of Galle Fort, Sri Lanka.",
  metadataBase: new URL('https://indianhut.lk'),
  // Add performance optimization hints
  applicationName: 'Indian Hut',
  appleWebApp: { 
    capable: true,
    statusBarStyle: 'default',
    title: 'Indian Hut',
  },
  formatDetection: {
    telephone: true,
    date: false,
    address: true,
    email: true,
    url: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#F7F3E8", // Match sand color
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
        {/* Add preconnect for faster resource loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Add DNS prefetch */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
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
