import type { Metadata } from "next";
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/constants";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import QuoteForm from "@/components/ui/QuoteForm";
import { MapPin, Clock, IndianRupee } from "lucide-react";

export const metadata: Metadata = {
  title: "Bhubaneswar to Berhampur Cab | Taxi Fare & Route",
  description: "Book cab from Bhubaneswar to Berhampur starting ₹1,900. 165 km, ~3.5 hrs. Gateway to Tara Tarini Temple & Odisha silk city. One-way & round trip. 24/7 service.",
  alternates: { canonical: `${SITE_CONFIG.url}/destinations/bhubaneswar-to-berhampur` },
  openGraph: { title: "Cab from Bhubaneswar to Berhampur | ₹1,900 One-Way", url: `${SITE_CONFIG.url}/destinations/bhubaneswar-to-berhampur`, images: [{ url: "/images/dest-berhampur.jpg", width: 1200, height: 630, alt: "Berhampur silk market" }] },
  other: { "geo.region": "IN-OR", "geo.placename": "Bhubaneswar", "geo.position": "20.2961;85.8245", "ICBM": "20.2961, 85.8245" },
};

export default function BhubaneswarToBerhampurPage() {
  return (
    <div>
      <section className="pt-24 pb-16" style={{ background: "linear-gradient(135deg, #0F4C4C 0%, #136F63 100%)" }}>
        <div className="section-container">
          <Breadcrumbs items={[{ label: "Destinations", href: "/destinations" }, { label: "Bhubaneswar to Berhampur" }]} className="text-white/60 mb-6" />
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Cab from Bhubaneswar to Berhampur</h1>
          <p className="text-white/70 max-w-2xl text-lg">165 km · ~3.5 hours · Starting ₹1,900. Travel to southern Odisha&apos;s commercial hub — home of the Tara Tarini Shrine, Odisha&apos;s renowned Bomkai silk, and the gateway to coastal temples.</p>
          <div className="flex flex-wrap gap-6 mt-6 text-white/80 text-sm">
            <span className="flex items-center gap-2"><MapPin size={15} className="text-[#F2A93B]" /> 165 km from Bhubaneswar</span>
            <span className="flex items-center gap-2"><Clock size={15} className="text-[#F2A93B]" /> ~3.5 hours drive</span>
            <span className="flex items-center gap-2"><IndianRupee size={15} className="text-[#F2A93B]" /> From ₹1,900 one-way</span>
          </div>
        </div>
      </section>

      <section className="section-container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <div className="relative h-72 rounded-3xl overflow-hidden shadow-xl">
              <Image src="/images/dest-berhampur.jpg" alt="Berhampur silk market — cab from Bhubaneswar to Berhampur" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 66vw" priority />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#1C1C1E] mb-4">Berhampur — Southern Odisha&apos;s Commercial Capital</h2>
              <p className="text-[#6B6B6E] leading-relaxed mb-4">
                Berhampur, commonly known as &ldquo;Silk City&rdquo; or &ldquo;Brahmapur,&rdquo; is the largest commercial city in southern Odisha and one of the state&apos;s most important economic centres. Located 165 kilometres south of Bhubaneswar along NH-16, it sits at the crossroads of heritage, trade, and natural beauty.
              </p>
              <p className="text-[#6B6B6E] leading-relaxed mb-4">
                The city is internationally known for its Bomkai and Berhampuri silk sarees — intricate handloom textiles woven with traditional motifs that have been registered as a Geographical Indication (GI) product. A visit to Berhampur is incomplete without browsing the bustling Bada Bazar textile market, where rows of silk merchants display some of the finest handwoven fabrics in India.
              </p>
              <p className="text-[#6B6B6E] leading-relaxed">
                Beyond shopping, Berhampur serves as the gateway to the Tara Tarini Temple — a Shakti Peetha shrine perched dramatically on the Kumari Hill overlooking the Rushikulya river, about 30 km from the city. The Gopalpur beach is also easily reachable from Berhampur, making it a natural base for exploring the southern coast.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#1C1C1E] mb-4">Berhampur Cab Fare from Bhubaneswar</h3>
              <div className="overflow-x-auto rounded-2xl">
                <table className="w-full text-sm bg-white border border-[#E7E2D8]">
                  <thead style={{ background: "linear-gradient(135deg, #136F63, #1E8F7F)" }}>
                    <tr>
                      <th className="text-left px-4 py-3 text-white">Vehicle</th>
                      <th className="text-center px-4 py-3 text-white">One-Way</th>
                      <th className="text-center px-4 py-3 text-white">Round Trip</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[["Sedan", "₹1,900", "₹3,000"], ["MUV", "₹2,400", "₹3,800"], ["SUV", "₹2,900", "₹4,800"], ["Tempo Traveller", "₹4,800", "₹8,000"]].map(([v, ow, rt], i) => (
                      <tr key={v} className={i % 2 === 0 ? "bg-white" : "bg-[#FAF7F2]"}>
                        <td className="px-4 py-3 font-medium">{v}</td>
                        <td className="px-4 py-3 text-center text-[#136F63] font-semibold">{ow}</td>
                        <td className="px-4 py-3 text-center text-[#6B6B6E]">{rt}</td>
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
