import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Lahiru — Full-Stack Developer",
  description:
    "Full-stack developer in Stockholm building production-grade web platforms — Next.js, React, Node, Prisma, Stripe, plus 4+ years of WordPress & WooCommerce delivery for real clients.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
