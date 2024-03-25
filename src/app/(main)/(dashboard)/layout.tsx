import { Manrope } from "next/font/google";
const inter = Manrope({ subsets: ["latin"] });

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
