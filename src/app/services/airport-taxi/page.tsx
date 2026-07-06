import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import QuoteForm from "@/components/ui/QuoteForm";

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
      <section className="pt-24 pb-16" style={{ background: "linear-gradient(135deg, #0F4C4C 0%, #136F63 100%)" }}>
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
              <table className="w-full text-sm bg-white border border-[#E7E2D8]">
                <thead style={{ background: "linear-gradient(135deg, #136F63, #1E8F7F)" }}>
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
                    <tr key={v} className={i % 2 === 0 ? "bg-white" : "bg-[#FAF7F2]"}>
                      <td className="px-4 py-3 font-medium">{v}</td>
                      <td className="px-4 py-3 text-center text-[#136F63] font-semibold">{ow}</td>
                      <td className="px-4 py-3 text-center text-[#6B6B6E]">{rt}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex gap-4">
              <a href={SITE_CONFIG.whatsappLink} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center py-3.5 rounded-xl font-bold text-white text-sm tap-feedback" style={{ background: "linear-gradient(135deg, #136F63, #1E8F7F)" }}>
                Book Airport Cab
              </a>
              <a href={`tel:${SITE_CONFIG.phone}`} className="flex-1 flex items-center justify-center py-3.5 rounded-xl font-bold text-[#136F63] border-2 border-[#136F63] text-sm tap-feedback hover:bg-[#136F63]/5">
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
