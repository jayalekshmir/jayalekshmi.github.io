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
    <html lang="en">
      <body className={`${inter.className} ${poppins.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="app">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
