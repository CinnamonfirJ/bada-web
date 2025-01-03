import { Montserrat } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"], // Specify subsets if needed
  weight: ["400", "700"], // Specify the weights you need
  style: ["normal", "italic"], // Optionally include styles
});

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
    <html lang='en' className={`${montserrat.className} font-sans`}>
      <body>{children}</body>
    </html>
  );
}
