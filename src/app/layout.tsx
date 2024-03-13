import type { Metadata } from "next";
import {  Manrope } from "next/font/google";
import "./globals.css";
import { cookies } from "next/headers";
import { incrementVisits } from "@/serverActions/incrementVisits";

const inter = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ACD - Accessibility Complaince Dashboard",
  description: "The Inclusive Friends Association - Acessibility Compliance Dashboard",
};

export default  async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const visited = cookies().get('__visited');
  if(!visited) await incrementVisits()

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
