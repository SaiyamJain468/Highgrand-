import type { Metadata } from "next";
import { Inter, Bebas_Neue, Playfair_Display } from "next/font/google";
import "./globals.css";
import React from "react";
import { NextAuthProvider } from "@/components/NextAuthProvider";
import { CartProvider } from "@/lib/context/CartContext";
import { Toaster } from "react-hot-toast";
import DynamicTitle from "@/components/DynamicTitle";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"], variable: "--font-bebas" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "HIGHGRAND | Premium Oversized Clothing",
  description: "Premium oversized t-shirts with editorial street fashion culture. Designed to make a statement.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${bebas.variable} ${playfair.variable} bg-brand-black text-brand-white font-inter antialiased`}>
        <NextAuthProvider>
          <CartProvider>
            <DynamicTitle />
            <Toaster position="bottom-right" reverseOrder={false} />
            {children}
          </CartProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
