import type { Metadata } from "next";
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/constants";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import QuoteForm from "@/components/ui/QuoteForm";
import { MapPin, Clock, IndianRupee } from "lucide-react";

export const metadata: Metadata = {
  title: "Bhubaneswar to Konark Cab | Sun Temple Taxi Fare & Booking",
  description: "Book a cab from Bhubaneswar to Konark Sun Temple starting ₹800. 65 km, ~1.5 hrs. UNESCO World Heritage site. One-way & round trip with verified drivers. WhatsApp booking.",
  alternates: { canonical: `${SITE_CONFIG.url}/destinations/bhubaneswar-to-konark` },
  openGraph: { title: "Cab from Bhubaneswar to Konark | ₹800 One-Way", url: `${SITE_CONFIG.url}/destinations/bhubaneswar-to-konark`, images: [{ url: "/images/dest-konark.jpg", width: 1200, height: 630, alt: "Konark Sun Temple chariot wheel" }] },
  other: { "geo.region": "IN-OR", "geo.placename": "Bhubaneswar", "geo.position": "20.2961;85.8245", "ICBM": "20.2961, 85.8245" },
};

export default function BhubaneswarToKonarkPage() {
  return (
    <div>
      <section className="pt-24 pb-16" style={{ background: "linear-gradient(135deg, #0d2a40 0%, #15456b 100%)" }}>
        <div className="section-container">
          <Breadcrumbs items={[{ label: "Destinations", href: "/destinations" }, { label: "Bhubaneswar to Konark" }]} className="text-white/60 mb-6" />
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Cab from Bhubaneswar to Konark</h1>
          <p className="text-white/70 max-w-2xl text-lg">65 km · ~1.5 hours · Starting ₹800. Experience the awe-inspiring Konark Sun Temple — a UNESCO World Heritage masterpiece of ancient Kalinga architecture.</p>
          <div className="flex flex-wrap gap-6 mt-6 text-white/80 text-sm">
            <span className="flex items-center gap-2"><MapPin size={15} className="text-[#FFC107]" /> 65 km from Bhubaneswar</span>
            <span className="flex items-center gap-2"><Clock size={15} className="text-[#FFC107]" /> ~1.5 hours drive</span>
            <span className="flex items-center gap-2"><IndianRupee size={15} className="text-[#FFC107]" /> From ₹800 one-way</span>
          </div>
        </div>
      </section>

      <section className="section-container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <div className="relative h-72 rounded-3xl overflow-hidden shadow-xl">
              <Image src="/images/dest-konark.jpg" alt="Konark Sun Temple chariot wheel — book a cab from Bhubaneswar" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 66vw" priority />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1f2937] mb-4">Konark — The Sun Temple of Odisha</h2>
              <p className="text-[#6B6B6E] leading-relaxed mb-4">
                Built in the 13th century by King Narasimhadeva I of the Eastern Ganga dynasty, the Konark Sun Temple stands as one of India&apos;s most extraordinary architectural achievements. Designed in the form of a colossal chariot with 24 intricately carved stone wheels pulled by seven horses, the temple was designated a UNESCO World Heritage Site in 1984 — a title it wears with quiet, ancient dignity.
              </p>
              <p className="text-[#6B6B6E] leading-relaxed mb-4">
                Located just 65 kilometres from Bhubaneswar, Konark is most often combined with a Puri visit to form the classic &ldquo;Golden Triangle&rdquo; of Odisha tourism. Our drivers can plan the most efficient route to cover both destinations in a single day. The Konark Dance Festival, held every December against the backdrop of the illuminated temple, is another remarkable reason to visit.
              </p>
              <p className="text-[#6B6B6E] leading-relaxed">
                The nearby Chandrabhaga Beach is just a short walk from the temple complex and offers a beautiful, uncrowded shoreline for a quiet stroll after exploring the archaeological wonder. Our cabs wait at a designated area near the complex so you can take your time without worrying about transport.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#1f2937] mb-4">Konark Cab Fare from Bhubaneswar</h3>
              <div className="overflow-x-auto rounded-2xl">
                <table className="w-full text-sm bg-[#f4f7f9] border border-[#e2e8f0]">
                  <thead style={{ background: "linear-gradient(135deg, #FFC107, #F5B600)" }}>
                    <tr>
                      <th className="text-left px-4 py-3 text-white">Vehicle</th>
                      <th className="text-center px-4 py-3 text-white">One-Way</th>
                      <th className="text-center px-4 py-3 text-white">Round Trip</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Sedan", "₹800", "₹1,300"],
                      ["MUV", "₹1,000", "₹1,700"],
                      ["SUV", "₹1,200", "₹2,000"],
                      ["Premium SUV", "₹1,500", "₹2,600"],
                      ["Tempo Traveller", "₹2,500", "₹4,200"],
                    ].map(([v, ow, rt], i) => (
                      <tr key={v} className={i % 2 === 0 ? "bg-[#f4f7f9]" : "bg-[#ffffff]"}>
                        <td className="px-4 py-3 font-medium">{v}</td>
                        <td className="px-4 py-3 text-center text-[#FFC107] font-semibold">{ow}</td>
                        <td className="px-4 py-3 text-center text-[#6B6B6E]">{rt}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#1f2937] mb-3">What to See in Konark</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {["Sun Temple Complex", "Chariot Wheel Carvings", "Archaeological Museum", "Chandrabhaga Beach", "Konark Dance Festival", "Ramachandi Temple"].map((h) => (
                  <div key={h} className="card-base p-3 text-center text-sm font-medium text-[#FFC107]">{h}</div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <div className="sticky top-24">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
