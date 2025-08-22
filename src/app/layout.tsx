import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import type { Metadata } from "next";
import { Epilogue, Manrope } from "next/font/google";
import "./globals.css";


const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
})


export const metadata: Metadata = {
  title: "CI Tech",
  description: "CITECH Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${epilogue.variable} ${manrope.variable} antialiased overscroll-none`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
