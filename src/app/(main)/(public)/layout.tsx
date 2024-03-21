import Script from 'next/script'

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {

  return <>
        {children}
      {/* <Script src="/main.js" strategy="lazyOnload" /> */}
    </>;
}
