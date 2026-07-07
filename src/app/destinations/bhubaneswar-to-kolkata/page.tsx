import type { Metadata } from "next";
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/constants";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import QuoteForm from "@/components/ui/QuoteForm";
import { MapPin, Clock, IndianRupee } from "lucide-react";

export const metadata: Metadata = {
  title: "Bhubaneswar to Kolkata Cab | Taxi Fare & Booking",
  description: "Book a cab from Bhubaneswar to Kolkata starting ₹5000. Distance 440 km, ~9 hrs. One-way & round trip. 24/7 verified drivers. WhatsApp booking.",
  alternates: { canonical: `${SITE_CONFIG.url}/destinations/bhubaneswar-to-kolkata` },
  openGraph: { title: "Cab from Bhubaneswar to Kolkata", description: "Bhubaneswar to Kolkata cab — 440 km, ~9 hrs.", url: `${SITE_CONFIG.url}/destinations/bhubaneswar-to-kolkata`, images: [{ url: "/images/dest-kolkata.jpg", width: 1200, height: 630, alt: "Kolkata City" }] },
  other: { "geo.region": "IN-OR", "geo.placename": "Bhubaneswar", "geo.position": "20.2961;85.8245", "ICBM": "20.2961, 85.8245" },
};

export default function BhubaneswarToPuriPage() {
  return (
    <div>
      <section className="pt-24 pb-0 relative" style={{ background: "linear-gradient(135deg, #0d2a40 0%, #15456b 100%)" }}>
        <div className="section-container pb-16">
          <Breadcrumbs items={[{ label: "Destinations", href: "/destinations" }, { label: "Bhubaneswar to Kolkata" }]} className="text-white/60 mb-6" />
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Cab from Bhubaneswar to Kolkata</h1>
          <p className="text-white/70 max-w-2xl text-lg">440 km · ~9 hours · Starting ₹5000. Travel interstate safely to the City of Joy with our verified outstation drivers.</p>
          <div className="flex gap-6 mt-6 text-white/80 text-sm">
            <span className="flex items-center gap-2"><MapPin size={15} className="text-[#FFC107]" /> 440 km from Bhubaneswar</span>
            <span className="flex items-center gap-2"><Clock size={15} className="text-[#FFC107]" /> ~9 hours drive</span>
            <span className="flex items-center gap-2"><IndianRupee size={15} className="text-[#FFC107]" /> From ₹5000 one-way</span>
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
              <h2 className="text-2xl font-bold text-[#1f2937] mb-4">Why Visit Puri from Bhubaneswar?</h2>
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
              <h3 className="text-xl font-bold text-[#1f2937] mb-4">Puri Cab Fare from Bhubaneswar</h3>
              <div className="overflow-x-auto rounded-2xl">
                <table className="w-full text-sm bg-[#f4f7f9] border border-[#e2e8f0]">
                  <thead style={{ background: "linear-gradient(135deg, #FFC107, #F5B600)" }}>
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
                      <tr key={v} className={i % 2 === 0 ? "bg-[#f4f7f9]" : "bg-[#ffffff]"}>
                        <td className="px-4 py-3 font-medium">{v}</td>
                        <td className="px-4 py-3 text-center text-[#FFC107] font-semibold">{ow}</td>
                        <td className="px-4 py-3 text-center text-[#6B6B6E]">{rt}</td>
                        <td className="px-4 py-3 text-center text-[#6B6B6E]">{s} pax</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#1f2937] mb-3">Highlights at Kolkata</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {["Victoria Memorial", "Howrah Bridge", "Dakshineswar Temple", "Eco Park", "Park Street", "New Market"].map((h) => (
                  <div key={h} className="card-base p-3 text-center text-sm font-medium text-[#FFC107]">{h}</div>
                ))}
              </div>
            </div>

            <div className="mt-8 p-6 bg-[#f0f7ff] rounded-2xl border border-[#e0f0ff] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-[#15456b] mb-1">Ready to book this trip?</h3>
                <p className="text-sm text-[#6B6B6E]">Confirm instantly via WhatsApp in just 60 seconds.</p>
              </div>
              <a href={SITE_CONFIG.whatsappLink} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-xl font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] transition-colors flex items-center justify-center gap-2 whitespace-nowrap">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Book via WhatsApp
              </a>
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
