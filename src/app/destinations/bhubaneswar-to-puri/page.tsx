import type { Metadata } from "next";
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/constants";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import QuoteForm from "@/components/ui/QuoteForm";
import { MapPin, Clock, IndianRupee } from "lucide-react";

export const metadata: Metadata = {
  title: "Bhubaneswar to Puri Cab | Taxi Fare, Distance & Booking",
  description: "Book a cab from Bhubaneswar to Puri starting ₹700. Distance 60 km, ~1.5 hrs. Visit Jagannath Temple, Puri Beach. One-way & round trip. 24/7 verified drivers. WhatsApp booking.",
  alternates: { canonical: `${SITE_CONFIG.url}/destinations/bhubaneswar-to-puri` },
  openGraph: { title: "Cab from Bhubaneswar to Puri | ₹700 One-Way", description: "Bhubaneswar to Puri cab — 60 km, ~1.5 hrs. Jagannath Temple & beach. Starting ₹700 sedan.", url: `${SITE_CONFIG.url}/destinations/bhubaneswar-to-puri`, images: [{ url: "/images/dest-puri.jpg", width: 1200, height: 630, alt: "Jagannath Temple Puri" }] },
  other: { "geo.region": "IN-OR", "geo.placename": "Bhubaneswar", "geo.position": "20.2961;85.8245", "ICBM": "20.2961, 85.8245" },
};

export default function BhubaneswarToPuriPage() {
  return (
    <div>
      <section className="pt-24 pb-0 relative" style={{ background: "linear-gradient(135deg, #0F4C4C 0%, #136F63 100%)" }}>
        <div className="section-container pb-16">
          <Breadcrumbs items={[{ label: "Destinations", href: "/destinations" }, { label: "Bhubaneswar to Puri" }]} className="text-white/60 mb-6" />
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Cab from Bhubaneswar to Puri</h1>
          <p className="text-white/70 max-w-2xl text-lg">60 km · ~1.5 hours · Starting ₹700 for a sedan. Visit the sacred Jagannath Temple, relax at Puri Beach, and return at your own pace.</p>
          <div className="flex gap-6 mt-6 text-white/80 text-sm">
            <span className="flex items-center gap-2"><MapPin size={15} className="text-[#F2A93B]" /> 60 km from Bhubaneswar</span>
            <span className="flex items-center gap-2"><Clock size={15} className="text-[#F2A93B]" /> ~1.5 hours drive</span>
            <span className="flex items-center gap-2"><IndianRupee size={15} className="text-[#F2A93B]" /> From ₹700 one-way</span>
          </div>
        </div>
      </section>

      <section className="section-container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <div className="relative h-72 rounded-3xl overflow-hidden shadow-xl">
              <Image src="/images/dest-puri.jpg" alt="Jagannath Temple in Puri, Odisha — a short cab ride from Bhubaneswar" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 66vw" priority />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1C1C1E] mb-4">Why Visit Puri from Bhubaneswar?</h2>
              <p className="text-[#6B6B6E] leading-relaxed mb-4">
                Puri is one of the four sacred dhams in Hinduism and home to the legendary Jagannath Temple — a towering Kalinga-architecture masterpiece that has drawn pilgrims and travellers for over a thousand years. Just 60 kilometres from Bhubaneswar, Puri is the most popular day-trip and weekend-getaway destination for residents of the state capital.
              </p>
              <p className="text-[#6B6B6E] leading-relaxed mb-4">
                Beyond the temple, Puri offers the long golden stretch of Puri Beach on the Bay of Bengal, the colourful Puri Rath Yatra procession (held annually in June-July), the Raghurajpur artist village nearby, and a thriving seafood scene along Marine Drive. A day in Puri is rarely enough — many visitors choose to stay overnight and use our round-trip cab service with driver accommodation.
              </p>
              <p className="text-[#6B6B6E] leading-relaxed">
                Our drivers know the Bhubaneswar–Puri highway well, including the fastest route through NH-16, the best parking spots near the Jagannath Temple (which has vehicle restrictions), and the recommended lunch stops for fresh Odishan food. Your Puri trip, handled end to end.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#1C1C1E] mb-4">Puri Cab Fare from Bhubaneswar</h3>
              <div className="overflow-x-auto rounded-2xl">
                <table className="w-full text-sm bg-white border border-[#E7E2D8]">
                  <thead style={{ background: "linear-gradient(135deg, #136F63, #1E8F7F)" }}>
                    <tr>
                      <th className="text-left px-4 py-3 text-white">Vehicle</th>
                      <th className="text-center px-4 py-3 text-white">One-Way</th>
                      <th className="text-center px-4 py-3 text-white">Round Trip</th>
                      <th className="text-center px-4 py-3 text-white">Seats</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Sedan", "₹700", "₹1,100", "4"],
                      ["MUV", "₹900", "₹1,400", "6"],
                      ["SUV", "₹1,100", "₹1,800", "7"],
                      ["Premium SUV", "₹1,400", "₹2,400", "7"],
                      ["Tempo Traveller", "₹2,200", "₹3,800", "14"],
                    ].map(([v, ow, rt, s], i) => (
                      <tr key={v} className={i % 2 === 0 ? "bg-white" : "bg-[#FAF7F2]"}>
                        <td className="px-4 py-3 font-medium">{v}</td>
                        <td className="px-4 py-3 text-center text-[#136F63] font-semibold">{ow}</td>
                        <td className="px-4 py-3 text-center text-[#6B6B6E]">{rt}</td>
                        <td className="px-4 py-3 text-center text-[#6B6B6E]">{s} pax</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#1C1C1E] mb-3">Highlights at Puri</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {["Jagannath Temple", "Puri Beach", "Chilika Gateway (Satapada)", "Raghurajpur Village", "Sudarshana Crafts Museum", "Marine Drive"].map((h) => (
                  <div key={h} className="card-base p-3 text-center text-sm font-medium text-[#136F63]">{h}</div>
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
