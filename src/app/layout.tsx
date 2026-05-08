import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Kenna Hansen | UX Designer",
  description: "Kenna Hansen — user experience strategist based in Chicago, IL passionate about crafting data-driven, accessible, user-centered experiences.",
  icons: {
    icon: "/uploads/2024/01/cropped-Artboard-37@2x.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
