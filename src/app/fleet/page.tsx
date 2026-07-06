import type { Metadata } from "next";
import Image from "next/image";
import { SITE_CONFIG, FLEET } from "@/lib/constants";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Cab Fleet in Bhubaneswar | Sedan, SUV, MUV & Tempo Traveller",
  description: "Explore our full fleet in Bhubaneswar — sedan ₹11/km, MUV ₹13/km, SUV ₹15/km, Premium SUV ₹17/km, Tempo Traveller ₹21/km. All AC, GPS-tracked, sanitized.",
  alternates: { canonical: `${SITE_CONFIG.url}/fleet` },
  openGraph: { title: "Cab Fleet in Bhubaneswar | All Vehicles", url: `${SITE_CONFIG.url}/fleet`, images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }] },
  other: { "geo.region": "IN-OR", "geo.placename": "Bhubaneswar", "geo.position": "20.2961;85.8245", "ICBM": "20.2961, 85.8245" },
};

export default function FleetPage() {
  return (
    <div>
      <section className="pt-24 pb-16" style={{ background: "linear-gradient(135deg, #0F4C4C 0%, #136F63 100%)" }}>
        <div className="section-container">
          <Breadcrumbs items={[{ label: "Our Fleet" }]} className="text-white/60 mb-6" />
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Our Cab Fleet in Bhubaneswar</h1>
          <p className="text-white/70 max-w-2xl text-lg">Five vehicle categories — from fuel-efficient sedans to spacious tempo travellers — all AC-equipped, GPS-tracked, regularly sanitized, and driven by verified professionals.</p>
        </div>
      </section>

      <section className="section-container py-16">
        <div className="space-y-10">
          {FLEET.map((vehicle, i) => (
            <div key={vehicle.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
              <div className={`relative h-72 rounded-3xl overflow-hidden shadow-xl ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <Image
                  src={vehicle.image}
                  alt={`${vehicle.name} cab for hire in Bhubaneswar — starting ₹${vehicle.perKm}/km`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading={i === 0 ? "eager" : "lazy"}
                />
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="text-2xl font-bold text-[#1C1C1E]">{vehicle.name}</h2>
                  <span className="px-3 py-1 rounded-lg text-sm font-bold text-[#136F63] bg-[#136F63]/10">₹{vehicle.perKm}/km</span>
                </div>
                <p className="text-[#6B6B6E] mb-6 leading-relaxed">{vehicle.description}</p>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="card-base p-3 text-center">
                    <div className="font-bold text-[#136F63] text-lg">{vehicle.seating}</div>
                    <div className="text-xs text-[#6B6B6E] mt-0.5">Passengers</div>
                  </div>
                  <div className="card-base p-3 text-center">
                    <div className="font-bold text-[#136F63] text-sm">{vehicle.localPackage}</div>
                    <div className="text-xs text-[#6B6B6E] mt-0.5">Local Package</div>
                  </div>
                  <div className="card-base p-3 text-center">
                    <div className="font-bold text-[#136F63] text-sm">{vehicle.airportOneway}</div>
                    <div className="text-xs text-[#6B6B6E] mt-0.5">Airport One-Way</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {vehicle.features.map((f) => (
                    <div key={f} className="flex items-center gap-1.5 text-sm text-[#136F63]">
                      <CheckCircle size={14} className="flex-shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>

                <a
                  href={SITE_CONFIG.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white tap-feedback"
                  style={{ background: "linear-gradient(135deg, #136F63, #1E8F7F)" }}
                >
                  Book {vehicle.name} on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
