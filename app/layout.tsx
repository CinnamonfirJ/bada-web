import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const montserrat = {
  link: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap",
  variable: "--font-montserrat",
};

export const metadata: Metadata = {
  title: "Bada",
  description: "A Social Web App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={`${montserrat.variable} font-sans`}>
      <body>{children}</body>
    </html>
  );
}
