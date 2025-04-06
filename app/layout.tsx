import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/Navigation/NavBar";
import Footer from "@/components/Footer";
// Import the fonts from next/font
import { Manrope, Poppins } from "next/font/google";

// Configure Manrope font
const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

// Configure Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Digital Marketing Agency | Creative Solutions",
  description:
    "We provide comprehensive marketing solutions that help our clients reach their maximum potential.",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" />
        <link rel="preload" href="/hero-image.webp" as="image" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
