import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navigation from "./_components/Navigation";
import Footer from "./_components/Footer";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VUECAKES",
  description: "VUECAKES website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.className} w-screen overflow-hidden`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
