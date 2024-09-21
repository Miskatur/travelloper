import type { Metadata } from "next";
import "./globals.css";
import { Playfair_Display, Lato } from "next/font/google";
import { NavBar } from "@/components/shared/Header/navbar";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
});
export const metadata: Metadata = {
  title: "Travelloper",
  description:
    "When A Professional Developer and Passionate Traveler meets, its become a Travelloper.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${lato.variable} antialiased`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
