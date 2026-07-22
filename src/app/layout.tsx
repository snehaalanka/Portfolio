import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "SnehaSree",
  description: "Portfolio of Sneha, Software Engineer building scalable web applications and AI-powered products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
  className={`${inter.variable} ${playfair.variable} ${cormorant.variable}`}
>
      <body className="min-h-full flex flex-col font-sans relative selection:bg-accent selection:text-white">
        <div className="grain-overlay pointer-events-none fixed inset-0 z-[9999] opacity-[0.03]"></div>
        <CustomCursor />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
