import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ARUMDAUM",
  description: "ARUMDAUM",
  generator: "ARUMDAUM",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body>{children}</body>
    </html>
  );
}
