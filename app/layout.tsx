import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dakdigitalmarketer.com"),
  title: {
    default: "Free Digital Marketing Consultation | DAK Digital Marketer",
    template: "%s | DAK Digital Marketer"
  },
  description:
    "Book a free 1:1 digital marketing consultation and get a customized marketing plan to grow your business online.",
  openGraph: {
    title: "Get a Customized Marketing Plan to Grow Your Business Online",
    description:
      "Book a free 1:1 digital marketing consultation and see what needs to improve in your current marketing.",
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
    title: "Get a Customized Marketing Plan to Grow Your Business Online",
    description:
      "Book a free 1:1 digital marketing consultation and get a clear strategy made for your business.",
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
      <body>{children}</body>
    </html>
  );
}
