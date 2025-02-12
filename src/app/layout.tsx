import Footer from "@/components/molecules/Footer";
import Navbar from "@/components/molecules/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../assets/css/globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// const poppins = Poppins({
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-poppins",
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
// });

export const metadata: Metadata = {
  title: "P2P Social Media",
  description: "P2P Social Media",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}  antialiased bg-background text-foreground`}
      >
        <div className="noise-overlay" />
        <div className="right-glow" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
