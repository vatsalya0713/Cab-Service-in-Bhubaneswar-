import type { Metadata } from "next";
import { SITE_CONFIG, DESTINATIONS } from "@/lib/constants";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import QuoteForm from "@/components/ui/QuoteForm";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Outstation Cab from Bhubaneswar | Puri, Konark, Chilika & More",
  description: "Book outstation cab from Bhubaneswar to Puri, Konark, Chilika, Cuttack, Gopalpur, Berhampur and beyond. One-way and round trips. Starting ₹11/km. 24/7 service.",
  alternates: { canonical: `${SITE_CONFIG.url}/services/outstation-taxi` },
  openGraph: { title: "Outstation Cab from Bhubaneswar", url: `${SITE_CONFIG.url}/services/outstation-taxi`, images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }] },
  other: { "geo.region": "IN-OR", "geo.placename": "Bhubaneswar", "geo.position": "20.2961;85.8245", "ICBM": "20.2961, 85.8245" },
};

export default function OutstationTaxiPage() {
  return (
    <div>
      <section className="pt-24 pb-16" style={{ background: "linear-gradient(135deg, #0F4C4C 0%, #136F63 100%)" }}>
        <div className="section-container">
          <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Outstation Trips" }]} className="text-white/60 mb-6" />
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Outstation Cab from Bhubaneswar</h1>
          <p className="text-white/70 max-w-2xl text-lg">Comfortable one-way and round-trip outstation cabs to Puri, Konark, Chilika, Cuttack, and beyond — at honest per-kilometre rates with no surprises.</p>
        </div>
      </section>

      <section className="section-container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-[#1C1C1E] mb-4">Explore Odisha from Bhubaneswar</h2>
            <p className="text-[#6B6B6E] mb-4 leading-relaxed">
              Odisha is home to some of India&apos;s most spectacular heritage sites, natural wonders, and pilgrimage destinations — and we are your best partner to reach them. Our outstation cab service covers every popular route from Bhubaneswar across the state, with experienced drivers who know the roads, the rest stops, and the must-see stops along the way.
            </p>
            <p className="text-[#6B6B6E] mb-6 leading-relaxed">
              We offer both one-way and round-trip outstation bookings. For round trips, you have the flexibility to set your own return time — no rushing. Our drivers wait for you at the destination so you can explore at your own pace. Night halts can be arranged on multi-day trips at an additional driver allowance.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {DESTINATIONS.map((dest) => (
                <Link key={dest.id} href={`/destinations/${dest.slug}`} className="card-base p-4 flex gap-4 items-center group hover:-translate-y-1 transition-transform duration-200">
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                    <Image src={dest.image} alt={`Cab to ${dest.name} from Bhubaneswar`} fill className="object-cover" sizes="64px" loading="lazy" />
                  </div>
                  <div>
                    <div className="font-bold text-sm text-[#1C1C1E] group-hover:text-[#136F63] transition-colors">{dest.name}</div>
                    <div className="text-xs text-[#6B6B6E]">{dest.distance} · {dest.duration}</div>
                    <div className="text-xs font-semibold text-[#136F63] mt-1">From {dest.startingFare}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <QuoteForm />
          </div>
        </div>
      </section>
    </div>
  );
}
