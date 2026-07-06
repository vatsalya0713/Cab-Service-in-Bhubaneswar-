import type { Metadata } from "next";
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/constants";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import QuoteForm from "@/components/ui/QuoteForm";
import { MapPin, Clock, IndianRupee } from "lucide-react";

export const metadata: Metadata = {
  title: "Bhubaneswar to Cuttack Cab | Taxi Fare ₹450 | Silver City",
  description: "Book cab from Bhubaneswar to Cuttack starting ₹450. Just 30 km, ~45 min. Visit Barabati Fort, Cuttack Chandi Temple, silver filigree markets. 24/7 service.",
  alternates: { canonical: `${SITE_CONFIG.url}/destinations/bhubaneswar-to-cuttack` },
  openGraph: { title: "Cab from Bhubaneswar to Cuttack | ₹450 One-Way", url: `${SITE_CONFIG.url}/destinations/bhubaneswar-to-cuttack`, images: [{ url: "/images/dest-cuttack.jpg", width: 1200, height: 630, alt: "Barabati Fort Cuttack" }] },
  other: { "geo.region": "IN-OR", "geo.placename": "Bhubaneswar", "geo.position": "20.2961;85.8245", "ICBM": "20.2961, 85.8245" },
};

export default function BhubaneswarToCuttackPage() {
  return (
    <div>
      <section className="pt-24 pb-16" style={{ background: "linear-gradient(135deg, #A5811C 0%, #C9A227 100%)" }}>
        <div className="section-container">
          <Breadcrumbs items={[{ label: "Destinations", href: "/destinations" }, { label: "Bhubaneswar to Cuttack" }]} className="text-white/60 mb-6" />
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Cab from Bhubaneswar to Cuttack</h1>
          <p className="text-white/70 max-w-2xl text-lg">30 km · ~45 minutes · Starting ₹450. Explore the Silver City of Odisha — historic Barabati Fort, the Cuttack Chandi Temple, and world-renowned silver filigree craft markets.</p>
          <div className="flex flex-wrap gap-6 mt-6 text-white/80 text-sm">
            <span className="flex items-center gap-2"><MapPin size={15} className="text-[#C9A227]" /> 30 km from Bhubaneswar</span>
            <span className="flex items-center gap-2"><Clock size={15} className="text-[#C9A227]" /> ~45 minutes drive</span>
            <span className="flex items-center gap-2"><IndianRupee size={15} className="text-[#C9A227]" /> From ₹450 one-way</span>
          </div>
        </div>
      </section>

      <section className="section-container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <div className="relative h-72 rounded-3xl overflow-hidden shadow-xl">
              <Image src="/images/dest-cuttack.jpg" alt="Barabati Fort in Cuttack — cab from Bhubaneswar to Silver City" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 66vw" priority />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#F5F1E8] mb-4">Cuttack — Odisha&apos;s Historic Silver City</h2>
              <p className="text-[#9BA3AE] leading-relaxed mb-4">
                Cuttack, just 30 kilometres and under an hour from Bhubaneswar, is Odisha&apos;s former capital and its oldest city — a living museum of Odishan culture, heritage, and craftsmanship. Founded over 1,000 years ago on a riverine island between the Mahanadi and Kathajodi rivers, the city earned its &ldquo;Silver City&rdquo; moniker from its centuries-old tradition of <em>tarakasi</em> (silver filigree) — an art form where master craftsmen weave impossibly fine silver wire into ornaments and sculptures.
              </p>
              <p className="text-[#9BA3AE] leading-relaxed mb-4">
                The Barabati Fort, built by the Ganga dynasty in the 14th century, is Cuttack&apos;s most iconic landmark — a partially preserved fort with a moat and gateway that overlooks a large stadium complex used for international cricket matches. The Cuttack Chandi Temple, dedicated to Goddess Chandi, draws thousands of devotees, especially during the Dussehra festival when Cuttack hosts one of Odisha&apos;s most spectacular celebrations.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#F5F1E8] mb-4">Cuttack Cab Fare from Bhubaneswar</h3>
              <div className="overflow-x-auto rounded-2xl">
                <table className="w-full text-sm bg-[#12161B] border border-[#23272C]">
                  <thead style={{ background: "linear-gradient(135deg, #C9A227, #D9B84A)" }}>
                    <tr>
                      <th className="text-left px-4 py-3 text-white">Vehicle</th>
                      <th className="text-center px-4 py-3 text-white">One-Way</th>
                      <th className="text-center px-4 py-3 text-white">Round Trip</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[["Sedan", "₹450", "₹700"], ["MUV", "₹600", "₹950"], ["SUV", "₹750", "₹1,200"], ["Tempo Traveller", "₹1,500", "₹2,500"]].map(([v, ow, rt], i) => (
                      <tr key={v} className={i % 2 === 0 ? "bg-[#12161B]" : "bg-[#0B0E11]"}>
                        <td className="px-4 py-3 font-medium">{v}</td>
                        <td className="px-4 py-3 text-center text-[#C9A227] font-semibold">{ow}</td>
                        <td className="px-4 py-3 text-center text-[#9BA3AE]">{rt}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div><div className="sticky top-24"><QuoteForm /></div></div>
        </div>
      </section>
    </div>
  );
}
