import type { Metadata } from "next";
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/constants";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import QuoteForm from "@/components/ui/QuoteForm";
import { MapPin, Clock, IndianRupee } from "lucide-react";

export const metadata: Metadata = {
  title: "Bhubaneswar to Gopalpur Cab | Beach Town Taxi Fare",
  description: "Book cab from Bhubaneswar to Gopalpur Beach starting ₹2,000. 170 km, ~4 hrs. Colonial beach town on Bay of Bengal. One-way & round trip. Verified drivers. WhatsApp booking.",
  alternates: { canonical: `${SITE_CONFIG.url}/destinations/bhubaneswar-to-gopalpur` },
  openGraph: { title: "Cab from Bhubaneswar to Gopalpur | ₹2,000 One-Way", url: `${SITE_CONFIG.url}/destinations/bhubaneswar-to-gopalpur`, images: [{ url: "/images/dest-gopalpur.jpg", width: 1200, height: 630, alt: "Gopalpur beach at sunset" }] },
  other: { "geo.region": "IN-OR", "geo.placename": "Bhubaneswar", "geo.position": "20.2961;85.8245", "ICBM": "20.2961, 85.8245" },
};

export default function BhubaneswarToGopalpurPage() {
  return (
    <div>
      <section className="pt-24 pb-16" style={{ background: "linear-gradient(135deg, #A5811C 0%, #C9A227 100%)" }}>
        <div className="section-container">
          <Breadcrumbs items={[{ label: "Destinations", href: "/destinations" }, { label: "Bhubaneswar to Gopalpur" }]} className="text-white/60 mb-6" />
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Cab from Bhubaneswar to Gopalpur</h1>
          <p className="text-white/70 max-w-2xl text-lg">170 km · ~4 hours · Starting ₹2,000. Escape to Gopalpur-on-Sea — a tranquil, colonial-era beach town with a lighthouse, gentle waves, and fresh seafood on the Bay of Bengal.</p>
          <div className="flex flex-wrap gap-6 mt-6 text-white/80 text-sm">
            <span className="flex items-center gap-2"><MapPin size={15} className="text-[#C9A227]" /> 170 km from Bhubaneswar</span>
            <span className="flex items-center gap-2"><Clock size={15} className="text-[#C9A227]" /> ~4 hours drive</span>
            <span className="flex items-center gap-2"><IndianRupee size={15} className="text-[#C9A227]" /> From ₹2,000 one-way</span>
          </div>
        </div>
      </section>

      <section className="section-container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <div className="relative h-72 rounded-3xl overflow-hidden shadow-xl">
              <Image src="/images/dest-gopalpur.jpg" alt="Gopalpur beach at golden sunset — taxi from Bhubaneswar to Gopalpur" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 66vw" priority />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#F5F1E8] mb-4">Gopalpur — A Beach Town Like No Other</h2>
              <p className="text-[#9BA3AE] leading-relaxed mb-4">
                Gopalpur-on-Sea, perched on Odisha&apos;s southern coast, is one of India&apos;s oldest beach resorts. Established during British colonial rule as a summer retreat and trading port, the town has retained a charming old-world character — wide, unhurried streets lined with heritage bungalows, a picturesque lighthouse at the rocky northern headland, and a sandy beach where fishing boats share space with leisurely visitors.
              </p>
              <p className="text-[#9BA3AE] leading-relaxed">
                Unlike the busier beaches of Puri, Gopalpur remains beautifully quiet — ideal for a weekend getaway where the agenda is simple: walks on the sand, fresh prawn and crab at a beachside eatery, and watching the sun dip into the Bay of Bengal. Our drivers can arrange a multi-day trip including overnight stays, with a return cab scheduled at your convenience.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#F5F1E8] mb-4">Gopalpur Cab Fare from Bhubaneswar</h3>
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
                    {[["Sedan", "₹2,000", "₹3,200"], ["MUV", "₹2,500", "₹4,000"], ["SUV", "₹3,000", "₹5,000"], ["Tempo Traveller", "₹5,000", "₹8,500"]].map(([v, ow, rt], i) => (
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
