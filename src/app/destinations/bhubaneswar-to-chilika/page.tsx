import type { Metadata } from "next";
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/constants";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import QuoteForm from "@/components/ui/QuoteForm";
import { MapPin, Clock, IndianRupee } from "lucide-react";

export const metadata: Metadata = {
  title: "Bhubaneswar to Chilika Lake Cab | Taxi Fare & Booking",
  description: "Book cab from Bhubaneswar to Chilika Lake starting ₹1,100. 100 km, ~2.5 hrs. Asia's largest brackish lagoon — dolphins, bird sanctuary, island shrine. Verified drivers.",
  alternates: { canonical: `${SITE_CONFIG.url}/destinations/bhubaneswar-to-chilika` },
  openGraph: { title: "Cab to Chilika Lake from Bhubaneswar | ₹1,100", url: `${SITE_CONFIG.url}/destinations/bhubaneswar-to-chilika`, images: [{ url: "/images/dest-chilika.jpg", width: 1200, height: 630, alt: "Chilika Lake fishing boats at sunset" }] },
  other: { "geo.region": "IN-OR", "geo.placename": "Bhubaneswar", "geo.position": "20.2961;85.8245", "ICBM": "20.2961, 85.8245" },
};

export default function BhubaneswarToChilikaPage() {
  return (
    <div>
      <section className="pt-24 pb-16" style={{ background: "linear-gradient(135deg, #A5811C 0%, #C9A227 100%)" }}>
        <div className="section-container">
          <Breadcrumbs items={[{ label: "Destinations", href: "/destinations" }, { label: "Bhubaneswar to Chilika" }]} className="text-white/60 mb-6" />
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Cab from Bhubaneswar to Chilika Lake</h1>
          <p className="text-white/70 max-w-2xl text-lg">100 km · ~2.5 hours · Starting ₹1,100. Witness Asia&apos;s largest brackish water lagoon — home to Irrawaddy dolphins, migratory flamingos, and the sacred Kalijai Island shrine.</p>
          <div className="flex flex-wrap gap-6 mt-6 text-white/80 text-sm">
            <span className="flex items-center gap-2"><MapPin size={15} className="text-[#C9A227]" /> 100 km from Bhubaneswar</span>
            <span className="flex items-center gap-2"><Clock size={15} className="text-[#C9A227]" /> ~2.5 hours drive</span>
            <span className="flex items-center gap-2"><IndianRupee size={15} className="text-[#C9A227]" /> From ₹1,100 one-way</span>
          </div>
        </div>
      </section>

      <section className="section-container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <div className="relative h-72 rounded-3xl overflow-hidden shadow-xl">
              <Image src="/images/dest-chilika.jpg" alt="Chilika Lake fishermen at sunset — book a cab from Bhubaneswar" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 66vw" priority />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#F5F1E8] mb-4">Chilika Lake — Asia&apos;s Largest Brackish Lagoon</h2>
              <p className="text-[#9BA3AE] leading-relaxed mb-4">
                Chilika Lake stretches across 1,100 square kilometres of coastal Odisha, making it the largest brackish water lagoon in Asia and the second largest in the world. The lake is a Ramsar Wetland of International Importance, hosting over 160 species of migratory birds every winter — including flamingos, grey pelicans, bar-headed geese, and rare species that fly in from Central Asia, Siberia, and Iran.
              </p>
              <p className="text-[#9BA3AE] leading-relaxed mb-4">
                The lake&apos;s Satapada peninsula is the best spot to witness the rare Irrawaddy dolphins — playful, round-headed creatures that are found in only a handful of locations worldwide. Local boat operators offer guided dolphin-spotting tours from Satapada&apos;s small jetty. Our drivers know the quickest route from Bhubaneswar to Satapada, which is approximately 100 km via NH-316.
              </p>
              <p className="text-[#9BA3AE] leading-relaxed">
                The Kalijai Temple, perched on an island in the centre of the lake, is a popular pilgrimage destination accessible only by boat. Combined with the Nalabana Bird Sanctuary (a protected core zone within the lake), Chilika offers a genuinely wild and meditative experience unlike anywhere else in India.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#F5F1E8] mb-4">Chilika Cab Fare from Bhubaneswar</h3>
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
                    {[["Sedan", "₹1,100", "₹1,800"], ["MUV", "₹1,400", "₹2,200"], ["SUV", "₹1,700", "₹2,800"], ["Tempo Traveller", "₹3,000", "₹5,000"]].map(([v, ow, rt], i) => (
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
