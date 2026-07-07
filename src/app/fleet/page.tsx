import type { Metadata } from "next";
import Image from "next/image";
import { SITE_CONFIG, FLEET } from "@/lib/constants";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { CheckCircle, Phone } from "lucide-react";

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
      <section className="pt-24 pb-16" style={{ background: "linear-gradient(135deg, #0d2a40 0%, #15456b 100%)" }}>
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
                  <span className="px-3 py-1 rounded-lg text-sm font-bold text-[#15456b] bg-[#15456b]/10">₹{vehicle.perKm}/km</span>
                </div>
                <p className="text-[#6B6B6E] mb-6 leading-relaxed">{vehicle.description}</p>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="card-base p-3 text-center">
                    <div className="font-bold text-[#15456b] text-lg">{vehicle.seating}</div>
                    <div className="text-xs text-[#6B6B6E] mt-0.5">Passengers</div>
                  </div>
                  <div className="card-base p-3 text-center">
                    <div className="font-bold text-[#15456b] text-sm">{vehicle.localPackage}</div>
                    <div className="text-xs text-[#6B6B6E] mt-0.5">Local Package</div>
                  </div>
                  <div className="card-base p-3 text-center">
                    <div className="font-bold text-[#15456b] text-sm">{vehicle.airportOneway}</div>
                    <div className="text-xs text-[#6B6B6E] mt-0.5">Airport One-Way</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {vehicle.features.map((f) => (
                    <div key={f} className="flex items-center gap-1.5 text-sm text-[#15456b]">
                      <CheckCircle size={14} className="flex-shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-[1fr_3.25rem] gap-3">
                  <a
                    href={`tel:${SITE_CONFIG.phoneRaw}`}
                    className="flex items-center justify-center gap-2 w-full h-[3.25rem] rounded-xl text-sm font-semibold text-[#111827] bg-[#FFC107] hover:bg-[#F5B600] transition-all tap-feedback"
                  >
                    <Phone size={16} />
                    Call Now
                  </a>
                  <a
                    href={SITE_CONFIG.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-[3.25rem] h-[3.25rem] rounded-xl text-white transition-all tap-feedback bg-[#25D366] hover:bg-[#20bd5a]"
                    aria-label="Book on WhatsApp"
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
