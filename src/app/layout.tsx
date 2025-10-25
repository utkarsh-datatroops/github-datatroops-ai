'use client';
import "./globals.css";

import { soraFont, spaceGroteskFont } from "@/improved-fonts";
import DataTroopsHealthcareBot from "@/sections/healthcare-chatbot";
import Header from "@/sections/Header";
import Footer from "@/sections/Footer";
import ContactUs from "@/sections/ContactUs";
import SchemaMarkup from '@/utils/SchemaMarkup';
import { useCallback} from 'react';
import { navigationLinks } from '@/utils/NavigationLinks';
import {usePathname } from 'next/navigation';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const currentNavItem = useCallback(() => {
    const homePath = '/';
    return (
      navigationLinks.find((navLink) => navLink.path === pathname) ||
      navigationLinks.find((navLink) => navLink.path === homePath) ||
      null
    );
  }, [pathname, navigationLinks]);

  const currentItem = currentNavItem();

  return (
    <html lang="en">
      <head>
        {/* Favicon & Manifest */}
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Google Search Console */}
        <meta
          name="google-site-verification"
          content="1TYhmkD3y6UWTxcHJNRrMyZR9CKWosLYWTp5Pl_yz_Q"
        />

        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-TLMQVM25');
            `,
          }}
        />

        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-YMXQJDZG43"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-YMXQJDZG43');
            `,
          }}
        />

        <SchemaMarkup currentItem={currentItem} />
      </head>
      <body
        className={`${soraFont.variable} ${spaceGroteskFont.variable} antialiased bg-[var(--color-10002B)] text-gray-300 font-body`}
      >
        {/* GTM <noscript> fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TLMQVM25"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <DataTroopsHealthcareBot />
        <Header />
        {children}
        <ContactUs />
        <Footer />
      </body>
    </html>
  );
}
