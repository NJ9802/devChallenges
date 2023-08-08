import "./globals.css";
import type { Metadata } from "next";
import "material-symbols/outlined.css";
import Header from "@/components/header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Random Quote Generator",
  description: "devChallenges",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
