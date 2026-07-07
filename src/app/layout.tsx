import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/lib/constants";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GlobalCTA from "@/components/ui/GlobalCTA";
import MobileBottomNav from "@/components/layout/MobileBottomNav";
import StickyWhatsApp from "@/components/layout/StickyWhatsApp";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
  preload: true,
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const GEO_META = {
  "geo.region": "IN-OR",
  "geo.placename": "Bhubaneswar",
  "geo.position": "20.2961;85.8245",
  "ICBM": "20.2961, 85.8245",
};

const ORG_JSONLD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["TaxiService", "LocalBusiness"],
      "@id": `${SITE_CONFIG.url}/#taxiservice`,
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
      logo: `${SITE_CONFIG.url}/images/logo.png`,
      image: `${SITE_CONFIG.url}${SITE_CONFIG.ogImage}`,
      description: "24/7 cab service in Bhubaneswar offering local city rides, airport transfers, outstation trips to Puri, Konark, Chilika, Cuttack, Gopalpur, and Berhampur. Verified drivers, transparent fares.",
      telephone: SITE_CONFIG.phone,
      email: SITE_CONFIG.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Bramheswar, Ln 3, Palasuni",
        addressLocality: "Bhubaneswar",
        addressRegion: "Odisha",
        postalCode: "751025",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 20.2961,
        longitude: 85.8245,
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
      priceRange: "₹₹",
      areaServed: [
        { "@type": "City", name: "Bhubaneswar" },
        { "@type": "City", name: "Puri" },
        { "@type": "City", name: "Cuttack" },
        { "@type": "City", name: "Konark" },
        { "@type": "City", name: "Berhampur" },
        { "@type": "State", name: "Odisha" },
      ],
      currenciesAccepted: "INR",
      paymentAccepted: "Cash, UPI, Card",
      sameAs: [],
    },
    {
      "@type": "Organization",
      "@id": `${SITE_CONFIG.url}/#aspiramedgroup`,
      name: "Aspira Med Group",
      url: SITE_CONFIG.parentCompany.url,
      description: "Aspira Med Group is a diversified Odisha-based conglomerate with interests in healthcare, travel, and digital marketing.",
      subOrganization: [
        {
          "@type": "Organization",
          name: "ZoomDigital.in",
          url: SITE_CONFIG.developer.url,
          description: "ZoomDigital.in is the digital marketing and web development arm of Aspira Med Group.",
        },
      ],
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} | 24/7 Taxi & Cab Rental`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description:
    "Book a cab in Bhubaneswar 24/7 — local city rides, airport transfers, outstation trips to Puri, Konark, Chilika, Cuttack. Verified drivers, transparent fares, instant WhatsApp booking.",
  keywords: [
    "cab service bhubaneswar",
    "cab services in bhubaneswar",
    "Cheapest cab services in bhubaneswar",
    "Best taxi service in Bhubaneswar",
    "Top 10 taxi service in Bhubaneswar",
    "Taxi service in bhubaneswar for outstation",
    "Cheapest taxi service in Bhubaneswar",
    "Cab services in bhubaneswar price",
    "Government approved taxi fare in Bhubaneswar",
    "Bhubaneswar cab service contact number",
    "Best cab service in bhubaneswar to",
    "Cheap cab service in bhubaneswar to",
    "Cab service in bhubaneswar to price",
    "Taxi service in bhubaneswar airport",
    "cab services from bhubaneswar to rourkela",
    "cab service from bhubaneswar to kolkata",
    "taxi service in bhubaneswar",
    "best taxi service in bhubaneswar",
    "taxi service in bhubaneswar to puri",
    "local taxi service in bhubaneswar",
    "airport taxi service in bhubaneswar",
    "cheapest taxi service in bhubaneswar for outstation",
    "top rated taxi service in bhubaneswar",
    "best outstation taxi service in bhubaneswar",
    "best taxi service in bhubaneswar odisha",
    "Taxi service in bhubaneswar contact number",
    "taxi bhubaneswar",
    "bhubaneswar to puri cab",
    "airport cab bhubaneswar",
    "outstation taxi bhubaneswar",
    "cab booking bhubaneswar",
    "24/7 taxi bhubaneswar",
    "cab rental odisha",
  ],
  authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.url }],
  creator: SITE_CONFIG.developer.name,
  publisher: SITE_CONFIG.name,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} | 24/7 Taxi & Cab Rental`,
    description:
      "Book a cab in Bhubaneswar 24/7 — local city rides, airport transfers, outstation trips to Puri, Konark, Chilika. Verified drivers, transparent fares.",
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: "Cab Service in Bhubaneswar — Premium 24/7 Taxi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} | 24/7 Taxi & Cab Rental`,
    description:
      "Book a cab in Bhubaneswar 24/7. Local rides, airport transfers, outstation trips. Verified drivers, transparent fares.",
    images: [SITE_CONFIG.ogImage],
  },
  other: GEO_META,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${plusJakartaSans.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSONLD) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <Navbar />
        <main className="pb-[env(safe-area-inset-bottom)] md:pb-0">
          {children}
        </main>
        <GlobalCTA />
        <Footer />
        <MobileBottomNav />
        <StickyWhatsApp />
      </body>
    </html>
  );
}
