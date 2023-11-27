import type { Metadata } from "next";
import { Work_Sans, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const ws = Work_Sans({
  subsets: ["latin"],
  variable: "--font-ws",
  display: "swap",
});

export const metadata: Metadata = {
  title: "JSLovers",
  description: "This is community website of JSLovers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
