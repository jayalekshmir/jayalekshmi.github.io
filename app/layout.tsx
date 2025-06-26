import type { Metadata } from "next";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { inter, poppins } from "./fonts";

export const metadata: Metadata = {
  title: "Jayaleshmi's Protifolio",
  description:
    "Jayalekshmi's portfolio website showcasing her work and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} ${poppins.className} antialiased flex flex-col min-h-screen`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="app flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
