import { Header } from "@/components/header";
import { SettingsProvider } from "@/components/settings-provider";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lari Tsyuriumov — Backend engineer",
  description:
    "Portfolio of Lari Tsyuriumov, a backend engineer focused on reliable Python services.",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        <SettingsProvider>
          <Header />
          <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {children}
          </main>
        </SettingsProvider>
      </body>
    </html>
  );
}
