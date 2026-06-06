import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dakdigitalmarketer.com"),
  title: {
    default: "Free 1:1 Digital Marketing Consultation | DAK Digital Marketer",
    template: "%s | DAK Digital Marketer"
  },
  description:
    "Book a free 1:1 digital marketing consultation for your business and get a simple customized growth plan.",
  openGraph: {
    title: "Get a Free 1:1 Digital Marketing Consultation for Your Business",
    description:
      "Find out what is stopping your business from getting more leads, customers, and sales online.",
    url: "https://dakdigitalmarketer.com",
    siteName: "DAK Digital Marketer",
    images: [
      {
        url: "/dak-logo.png",
        width: 1083,
        height: 392,
        alt: "DAK Digital Marketer logo"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Get a Free 1:1 Digital Marketing Consultation for Your Business",
    description:
      "Get a simple customized growth plan for your business.",
    images: ["/dak-logo.png"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1271212358143810');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1271212358143810&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
