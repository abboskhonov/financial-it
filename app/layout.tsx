import { Libre_Baskerville, Inter } from "next/font/google";

import "./globals.css";
import { cn } from "@/lib/utils";

const libre = Libre_Baskerville({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("antialiased", inter.variable, libre.variable)}
    >
      <body className="bg-background text-foreground font-sans">
        {children}
      </body>
    </html>
  );
}
