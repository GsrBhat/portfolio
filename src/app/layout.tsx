import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sai-rahul-bhat-portfolio.vercel.app"),
  title: {
    default: "SAI RAHUL BHAT GAADHI RAJU — Dual-Profile Portfolio",
    template: "%s | Sai Rahul Bhat Gaadhi Raju",
  },
  description: "Official portfolio of Sai Rahul Bhat Gaadhi Raju (B.Tech ECE, Anurag University 2027). Dual-perspective engineering portfolio covering Core VLSI & Hardware Engineering and Full-Stack Software Development.",
  authors: [{ name: "Sai Rahul Bhat Gaadhi Raju", url: "https://sai-rahul-bhat-portfolio.vercel.app" }],
  alternates: {
    canonical: "https://sai-rahul-bhat-portfolio.vercel.app",
  },
  openGraph: {
    title: "SAI RAHUL BHAT GAADHI RAJU — Dual-Profile Portfolio",
    description: "Electronics & VLSI Engineer | Full-Stack Software Developer — Anurag University (2027)",
    url: "https://sai-rahul-bhat-portfolio.vercel.app",
    siteName: "Sai Rahul Bhat Gaadhi Raju Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SAI RAHUL BHAT GAADHI RAJU — Portfolio",
    description: "Core VLSI & Hardware Engineering | Full-Stack Software Development",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${ibmPlexMono.variable} scroll-smooth`}>
      <body className="bg-editorial-bg text-editorial-primary font-sans antialiased selection:bg-slate-700 selection:text-white min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
