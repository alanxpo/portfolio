import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alan Muro - Portfolio",
  description: "Este es mi sitio web de portafolio personal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}  antialiased max-w-3xl flex flex-col md:flex-row mx-4 lg:mx-auto`}
      >
        <main className="flex-auto min-w-0 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
