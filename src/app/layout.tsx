import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Crypto Trading Simülatörü",
  description: "Profesyonel crypto trading simülatörü - Risk almadan gerçek piyasa verileriyle trading deneyimi",
  keywords: "crypto, trading, simulator, bitcoin, ethereum, binance",
  authors: [{ name: "İndicSigs" }],
  creator: "İndicSigs",
  publisher: "İndicSigs",
  robots: "index, follow",
  metadataBase: new URL('https://trading-signal-demo.vercel.app'),
  openGraph: {
    title: "Crypto Trading Simülatörü",
    description: "Profesyonel crypto trading simülatörü - Risk almadan gerçek piyasa verileriyle trading deneyimi",
    url: 'https://trading-signal-demo.vercel.app',
    siteName: 'İndicSigs Trading Simulator',
    locale: 'tr_TR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="theme-color" content="#6366f1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900`}
      >
        {children}
      </body>
    </html>
  );
}