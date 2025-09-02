import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import type { Metadata } from "next";
import { Epilogue, Manrope } from "next/font/google";
import "./globals.css";
import { AOSWrapper } from "@/components/AosWrapper";


const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
})


export const metadata: Metadata = {
  title: "CITECH | Blockchain Sustainability Platform for Construction",
  description: "CITECH empowers the construction industry with blockchain technology to achieve sustainability, generate carbon credits, and unlock new revenue streams.",
  openGraph: {
    title: 'CITECH | Blockchain Sustainability Platform for Construction',
    description: 'CITECH empowers the construction industry with blockchain technology to achieve sustainability, generate carbon credits, and unlock new revenue streams.',
    type: "website",
    siteName: 'CITECH',
    images: [
      {
        url: 'https://citech.my/opengraph-image.png',
        width: 1200,
        height: 627,
        alt: 'CITECH',
      }
    ],
  },
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
        <AOSWrapper>
          {children}
        </AOSWrapper>
        <Footer />
      </body>
    </html>
  );
}
