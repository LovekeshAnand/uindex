import type { Metadata } from "next";
import localFont from "next/font/local";
import { Instrument_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const urbanic = localFont({ src: "./fonts/Urbanic.otf", variable: "--font-urbanic" });
const instrument = Instrument_Sans({ subsets: ["latin"], variable: "--font-instrument" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

export const metadata: Metadata = {
  title: "Uindex — every UI library, indexed",
  description: "A searchable index of UI libraries across the internet.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${urbanic.variable} ${instrument.variable} ${jetbrains.variable} antialiased scroll-smooth`}>
      <body className="min-h-full overflow-x-hidden font-sans text-sm">{children}</body>
    </html>
  );
}
