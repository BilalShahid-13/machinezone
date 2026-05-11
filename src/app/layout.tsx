import GamingFooter from "@/components/footer";
import Navbar from "@/components/navbar";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Machine Zone | Next-Gen Mobile Simulation & Gaming",
  description: "Welcome to the Machine Zone. We engineer high-octane racing simulations, precision car stunts, and satisfying ASMR experiences. Pushing the boundaries of mobile entertainment.",
  keywords: ["Machine Zone", "Mobile Gaming", "Simulation Engineering", "Stunt Games", "ASMR Simulation"],
  authors: [{ name: "Machine Zone Team" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <GamingFooter />
        <Toaster />
      </body>
    </html>
  );
}
