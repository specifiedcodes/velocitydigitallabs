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
  title: "Velocity Digital Labs LLC | Web Development, AI & Digital Marketing",
  description:
    "Velocity Digital Labs LLC builds high-performance web applications, AI automations, and digital marketing solutions. Explore our portfolio of products including VeloCards, VeloCalls, ClickzProtect, and more.",
  keywords: [
    "web development",
    "AI automation",
    "digital marketing",
    "software development",
    "Velocity Digital Labs",
  ],
  openGraph: {
    title: "Velocity Digital Labs LLC",
    description:
      "Building the future of digital — Web Development, AI Automations & Digital Marketing.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
