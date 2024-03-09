import type { Metadata } from "next";
import {  Manrope } from "next/font/google";
import "./globals.css";

const inter = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ACD - Accessibility Complaince Dashboard",
  description: "The Inclusive Friends Association - Acessibility Compliance Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
