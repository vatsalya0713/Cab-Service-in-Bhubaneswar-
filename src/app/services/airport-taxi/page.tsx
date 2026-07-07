import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import QuoteForm from "@/components/ui/QuoteForm";
import { Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Airport Cab in Bhubaneswar | BPIA Pickup & Drop Service",
  description: "Book airport cab in Bhubaneswar for pickup and drop at Biju Patnaik International Airport. Flight tracking, on-time guaranteed. Sedan from ₹700. Available 24/7.",
  alternates: { canonical: `${SITE_CONFIG.url}/services/airport-taxi` },
  openGraph: { title: "Airport Cab Bhubaneswar | BPIA Pickup & Drop", url: `${SITE_CONFIG.url}/services/airport-taxi`, images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }] },
  other: { "geo.region": "IN-OR", "geo.placename": "Bhubaneswar", "geo.position": "20.2961;85.8245", "ICBM": "20.2961, 85.8245" },
};

export default function AirportTaxiPage() {
  return (
    <div>
      <section className="pt-24 pb-16" style={{ background: "linear-gradient(135deg, #0d2a40 0%, #15456b 100%)" }}>
        <div className="section-container">
          <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Airport Taxi" }]} className="text-white/60 mb-6" />
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Airport Cab in Bhubaneswar</h1>
          <p className="text-white/70 max-w-2xl text-lg">On-time pickups and drops at Biju Patnaik International Airport — with real-time flight tracking, so we wait for you, not the other way around.</p>
        </div>
      </section>

      <section className="section-container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-[#1C1C1E] mb-4">Bhubaneswar Airport Transfer Service</h2>
            <p className="text-[#6B6B6E] mb-4 leading-relaxed">
              Missing a flight or waiting at an empty arrivals gate is stressful — and with our airport cab service, you will never have to worry about either. We monitor your flight status in real time and adjust our driver&apos;s arrival accordingly, whether your flight lands early or runs late.
            </p>
            <p className="text-[#6B6B6E] mb-4 leading-relaxed">
              Our drivers know Biju Patnaik International Airport (BPIA) inside out — the correct terminal drop-off zones, the fastest routes from different city areas, and how to navigate peak-hour traffic. Whether you are catching a 5 AM IndiGo flight or a midnight connecting service, our cab will be there.
            </p>
            <p className="text-[#6B6B6E] mb-6 leading-relaxed">
              Airport cab fares are fixed and agreed upon before your journey. There are no surge charges during rain, traffic, or odd hours. The price you see when you book is the price you pay.
            </p>

            <h3 className="text-xl font-bold text-[#1C1C1E] mb-3">Airport Fare Guide</h3>
            <div className="overflow-x-auto rounded-2xl mb-6">
              <table className="w-full text-sm bg-white border border-[#e2e8f0]">
                <thead style={{ background: "linear-gradient(135deg, #15456b, #206599)" }}>
                  <tr>
                    <th className="text-left px-4 py-3 text-white">Vehicle</th>
                    <th className="text-center px-4 py-3 text-white">One-Way</th>
                    <th className="text-center px-4 py-3 text-white">Round Trip</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Sedan (4 seats)", "₹700", "₹1,200"],
                    ["MUV (6 seats)", "₹900", "₹1,600"],
                    ["SUV (7 seats)", "₹1,100", "₹2,000"],
                    ["Premium SUV", "₹1,400", "₹2,500"],
                  ].map(([v, ow, rt], i) => (
                    <tr key={v} className={i % 2 === 0 ? "bg-white" : "bg-[#f4f7f9]"}>
                      <td className="px-4 py-3 font-medium">{v}</td>
                      <td className="px-4 py-3 text-center text-[#15456b] font-semibold">{ow}</td>
                      <td className="px-4 py-3 text-center text-[#6B6B6E]">{rt}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex gap-4">
              <a href={SITE_CONFIG.whatsappLink} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-white text-sm bg-[#25D366] hover:bg-[#20bd5a] tap-feedback transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Book Airport Cab
              </a>
              <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-[#111827] bg-[#FFC107] hover:bg-[#F5B600] text-sm tap-feedback shadow-sm">
                <Phone size={16} />
                Call Now
              </a>
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
