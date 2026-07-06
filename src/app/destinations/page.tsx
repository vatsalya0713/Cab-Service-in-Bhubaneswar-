import type { Metadata } from "next";
import { SITE_CONFIG, DESTINATIONS } from "@/lib/constants";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import QuoteForm from "@/components/ui/QuoteForm";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, ArrowRight } from "lucide-react";

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
      <section className="pt-24 pb-16" style={{ background: "linear-gradient(135deg, #0F4C4C 0%, #136F63 100%)" }}>
        <div className="section-container">
          <Breadcrumbs items={[{ label: "Destinations" }]} className="text-white/60 mb-6" />
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Cab Destinations from Bhubaneswar</h1>
          <p className="text-white/70 max-w-2xl text-lg">Your gateway to Odisha&apos;s finest heritage sites, beaches, and lakes — with comfortable cabs and experienced drivers who know every route.</p>
        </div>
      </section>

      <section className="section-container py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DESTINATIONS.map((dest) => (
            <div key={dest.id} className="bg-white rounded-3xl border border-[#E7E2D8] shadow-md overflow-hidden group hover:-translate-y-1.5 transition-transform duration-200">
              <Link href={`/destinations/${dest.slug}`}>
                <div className="relative h-52 overflow-hidden">
                  <Image src={dest.image} alt={`Cab from Bhubaneswar to ${dest.name}`} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="text-white font-bold text-xl">{dest.name}</span>
                  </div>
                  <div className="absolute top-3 right-3 bg-[#F2A93B] text-white text-xs font-bold px-2.5 py-1 rounded-lg">
                    From {dest.startingFare}
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-sm text-[#6B6B6E] mb-3 leading-relaxed">{dest.description}</p>
                  <div className="flex items-center gap-4 text-xs text-[#6B6B6E] mb-4">
                    <span className="flex items-center gap-1.5"><MapPin size={12} className="text-[#136F63]" /> {dest.distance}</span>
                    <span className="flex items-center gap-1.5"><Clock size={12} className="text-[#136F63]" /> {dest.duration}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {dest.highlights.map((h) => (
                      <span key={h} className="text-[10px] px-2 py-1 rounded-full bg-[#136F63]/8 text-[#136F63] border border-[#136F63]/15 font-medium">{h}</span>
                    ))}
                  </div>
                  <div className="flex items-center gap-1 text-sm font-semibold text-[#136F63] group-hover:gap-2 transition-all">
                    View Route Details <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
