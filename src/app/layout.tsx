import type { Metadata } from "next";
import "./globals.css";
import { helveticaNeue, geistSans, geistMono } from "@/font";

export const metadata: Metadata = {
  title: "The Good Co | Brainstormex",
  description: "This is the description for the Good Co website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${helveticaNeue.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
