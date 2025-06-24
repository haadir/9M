import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const montreal = localFont({
  src: [
    {
      path: "/fonts/Montreal/ppneuemontreal-book.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "/fonts/Montreal/ppneuemontreal-medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "/fonts/Montreal/ppneuemontreal-bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "/fonts/Montreal/ppneuemontreal-italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "/fonts/Montreal/ppneuemontreal-semibolditalic.otf",
      weight: "600",
      style: "italic",
    },
  ],
  variable: "--font-montreal",
  display: "swap",
});

const editorial = localFont({
  src: [
    {
      path: "/fonts/Editorial/PPEditorialNew-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "/fonts/Editorial/PPEditorialNew-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "/fonts/Editorial/PPEditorialNew-Ultrabold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "/fonts/Editorial/PPEditorialNew-UltraboldItalic.otf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-editorial",
  display: "swap",
});

export const metadata: Metadata = {
  title: "9M",
  description: "Building the future of digital ventures.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montreal.variable} ${editorial.variable}`}>
      <head>
        <link rel="icon" href="/9M-Logo.svg" type="image/svg+xml" />
      </head>
      <body className={montreal.className}>{children}</body>
    </html>
  );
}
