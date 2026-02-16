import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "CyberCars",
  description: "Futuristic car experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{margin:0}}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

