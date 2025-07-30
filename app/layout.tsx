import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MenuHeader from "@/components/menuHeader";
import "../styles/globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mateus Ranzani - Portfolio",
  description: "Portfolio NextJs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        <MenuHeader/>
        {children}
      </body>
    </html>
  );
}
