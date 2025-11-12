// @ts-ignore: allow side-effect CSS import without type declarations
import "./globals.css";
import type { Metadata } from "next";
import Header from "@/sections/Header";
import Footer from "@/sections/Footer";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mansur Bala | Data-Driven Physicist & Computational Analyst",
  description:
    "Portfolio of Mansur Mohammed Bala — bridging Physics, Data Science, and Computational Modeling to explore nuclear systems, simulations, and data insights.",
  keywords: [
    "Mansur Bala",
    "Data Scientist",
    "Physicist",
    "Computational Modeling",
    "Nuclear Physics",
    "Python",
    "Data Analysis",
    "Nigerian Physicist",
  ],
  openGraph: {
    title: "Mansur Bala | Data-Driven Physicist & Computational Analyst",
    description:
      "Physics-driven Data Scientist exploring simulation, computation, and analysis in complex systems.",
    url: "https://mansurbala.com",
    siteName: "Mansur Bala Portfolio",
    images: [{ url: "/og-image.png", width: 1920, height: 1080 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mansur Bala | Data-Driven Physicist & Computational Analyst",
    description:
      "Portfolio of Mansur Mohammed Bala — Physics meets Data Science.",
    creator: "@Mr_mansuuR",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} bg-background text-foreground flex min-h-screen flex-col font-sans`}
      >
        <Header />
        <main className="pt-16 md:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
