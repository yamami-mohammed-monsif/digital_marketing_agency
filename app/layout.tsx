import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/Navigation/NavBar";

export const metadata: Metadata = {
  title: "digital marketing agency",
  description:
    "We provide comprehensive marketing solutions that help our clients reach their maximum potential.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body>
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
