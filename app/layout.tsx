

import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'], // choose what you need
    variable: '--font-montserrat',
  });
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Noryn Studios",
    description: "TIMELESS - MEANINGFUL - NORYN",
    keywords: ["Noryn", "Noryn Studio", "Noryn Studios"],
    icons: {
        icon: "/images/logo.png",
        shortcut: "/images/logo.png",
        apple: "/images/logo.png",
    },
    openGraph: {
        title: "Noryn Studios",
        description: "TIMELESS - MEANINGFUL - NORYN",
        images: [
            {
                url: "/images/logo.png",
                width: 800,
                height: 600,
            },
        ],
    type: "website",
        url: "https://norynstudios.com",
        siteName: "Noryn Studios",
    }
}

export default function RootLayout({
    children,
    }: Readonly<{
    children: React.ReactNode;
    }>) {
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased ${montserrat.variable}`}
        >
            <Navbar />
            {children}
        </body>
        </html>
    );
}
