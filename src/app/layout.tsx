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
  title: {
    default:
      "Velocity Digital Labs LLC | Web Development, AI Automations & Digital Marketing",
    template: "%s | Velocity Digital Labs LLC",
  },
  description:
    "Velocity Digital Labs LLC is a Delaware-registered digital agency specializing in web development, AI automations, and digital marketing. We build scalable SaaS products, e-commerce platforms, and intelligent automation solutions for businesses worldwide.",
  keywords: [
    "web development agency",
    "AI automation",
    "digital marketing agency",
    "SaaS development",
    "Next.js development",
    "React development",
    "custom software development",
    "e-commerce development",
    "Velocity Digital Labs",
    "VeloCards",
    "VeloCalls",
    "ClickzProtect",
    "DevOS",
    "JustAnalytics",
    "VelocityPay",
    "premium domains for sale",
    "Digistreets",
    "Rajat Pratap Singh",
  ],
  authors: [{ name: "Velocity Digital Labs LLC" }],
  creator: "Velocity Digital Labs LLC",
  publisher: "Velocity Digital Labs LLC",
  metadataBase: new URL("https://velocitydigitallabs.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Velocity Digital Labs LLC | Web Development, AI & Digital Marketing",
    description:
      "We build high-performance web applications, AI automations, and digital marketing solutions. Explore our portfolio of 10+ products including VeloCards, VeloCalls, ClickzProtect, and more.",
    url: "https://velocitydigitallabs.com",
    siteName: "Velocity Digital Labs LLC",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Velocity Digital Labs LLC",
    description:
      "Full-stack digital agency — Web Development, AI Automations & Digital Marketing. 10+ products built and launched.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Velocity Digital Labs LLC",
  legalName: "Velocity Digital Labs, LLC",
  url: "https://velocitydigitallabs.com",
  email: "admin@velocitydigitallabs.com",
  telephone: "+1-323-978-4263",
  foundingDate: "2026-02-12",
  founder: {
    "@type": "Person",
    name: "Rajat Pratap Singh",
    url: "https://rajatpratapsingh.com",
    jobTitle: "Founder & CEO",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "131 Continental Dr, Suite 305",
    addressLocality: "Newark",
    addressRegion: "DE",
    postalCode: "19713",
    addressCountry: "US",
  },
  sameAs: [
    "https://rajatpratapsingh.com",
    "https://digistreets.org",
    "https://github.com/specifiedcodes",
  ],
  knowsAbout: [
    "Web Development",
    "AI Automations",
    "Digital Marketing",
    "SaaS Development",
    "E-Commerce",
    "SEO",
  ],
  areaServed: "Worldwide",
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    minValue: 1,
    maxValue: 10,
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Velocity Digital Labs LLC",
  url: "https://velocitydigitallabs.com",
  telephone: "+1-323-978-4263",
  email: "admin@velocitydigitallabs.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "131 Continental Dr, Suite 305",
    addressLocality: "Newark",
    addressRegion: "DE",
    postalCode: "19713",
    addressCountry: "US",
  },
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
