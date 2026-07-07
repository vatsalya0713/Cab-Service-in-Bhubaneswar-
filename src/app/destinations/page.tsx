import type { Metadata } from "next";
import { SITE_CONFIG, DESTINATIONS } from "@/lib/constants";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import QuoteForm from "@/components/ui/QuoteForm";
import Image from "next/image";
import Link from "next/link";
import { DestinationCard } from "@/components/shared/DestinationCard";

export const metadata: Metadata = {
  title: "Destinations from Bhubaneswar | Cab to Puri, Konark, Chilika & More",
  description: "Explore all outstation cab destinations from Bhubaneswar — Puri, Konark, Chilika Lake, Cuttack, Gopalpur, Berhampur. Book one-way or round trips with verified drivers.",
  alternates: { canonical: `${SITE_CONFIG.url}/destinations` },
  openGraph: { title: "Cab Destinations from Bhubaneswar", url: `${SITE_CONFIG.url}/destinations`, images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }] },
  other: { "geo.region": "IN-OR", "geo.placename": "Bhubaneswar", "geo.position": "20.2961;85.8245", "ICBM": "20.2961, 85.8245" },
};

export default function DestinationsPage() {
  return (
    <div>
      <section className="pt-24 pb-16" style={{ background: "linear-gradient(135deg, #0d2a40 0%, #15456b 100%)" }}>
        <div className="section-container">
          <Breadcrumbs items={[{ label: "Destinations" }]} className="text-white/60 mb-6" />
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Cab Destinations from Bhubaneswar</h1>
          <p className="text-white/70 max-w-2xl text-lg">Your gateway to Odisha&apos;s finest heritage sites, beaches, and lakes — with comfortable cabs and experienced drivers who know every route.</p>
        </div>
      </section>

      <section className="section-container py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DESTINATIONS.map((dest) => (
            <DestinationCard
              key={dest.id}
              originCity="Bhubaneswar"
              destinationCity={dest.name}
              distanceKm={Number(dest.distance)}
              durationHrs={dest.duration}
              startingFare={dest.startingFare}
              vehicles={dest.vehicles}
              badge={dest.badge}
              label={dest.label}
              href={`/destinations/${dest.slug}`}
              whatsappMessage={`Hi, I want to book a cab from Bhubaneswar to ${dest.name}`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
