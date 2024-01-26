import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Providers } from "./providers";

const ubuntu = Ubuntu({ weight: ["400"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Entertainment Database",
  description: "Powered by Next.js, Tailwind CSS, and The Movie Database API.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        <Providers>
          <NavBar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
