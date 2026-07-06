import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import QuoteForm from "@/components/ui/QuoteForm";

export const metadata: Metadata = {
  title: "Local Taxi in Bhubaneswar | City Rides Starting ₹11/km",
  description: "Book a local taxi in Bhubaneswar for point-to-point city rides, hourly rentals, and 8hr/80km packages. Verified drivers, AC cabs, transparent fares. Call or WhatsApp now.",
  alternates: { canonical: `${SITE_CONFIG.url}/services/local-taxi` },
  openGraph: { title: "Local Taxi in Bhubaneswar | City Rides", url: `${SITE_CONFIG.url}/services/local-taxi`, images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }] },
  other: { "geo.region": "IN-OR", "geo.placename": "Bhubaneswar", "geo.position": "20.2961;85.8245", "ICBM": "20.2961, 85.8245" },
};

export default function LocalTaxiPage() {
  return (
    <div>
      <section className="pt-24 pb-16" style={{ background: "linear-gradient(135deg, #0F4C4C 0%, #136F63 100%)" }}>
        <div className="section-container">
          <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Local City Rides" }]} className="text-white/60 mb-6" />
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Local Taxi in Bhubaneswar</h1>
          <p className="text-white/70 max-w-2xl text-lg">Reliable, metered, and always affordable — your trusted city cab partner for every destination within Bhubaneswar.</p>
        </div>
      </section>

      <section className="section-container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-[#1C1C1E] mb-4">Bhubaneswar City Cab Service</h2>
            <p className="text-[#6B6B6E] mb-4 leading-relaxed">
              Whether you are travelling from Patia to Saheed Nagar, from the railway station to Unit 6, or from Khandagiri to the hospital, our local city cab service offers the most reliable door-to-door transportation within Bhubaneswar. Every cab is air-conditioned, GPS-tracked, and driven by a verified professional who knows the city&apos;s lanes and shortcuts.
            </p>
            <p className="text-[#6B6B6E] mb-4 leading-relaxed">
              We offer transparent per-kilometre billing starting at just ₹11/km for sedans, with no minimum distance requirement and no surge pricing. For those who need a cab for multiple hours or errands across the day, our 8-hour / 80-km local package offers excellent value.
            </p>
            <p className="text-[#6B6B6E] mb-6 leading-relaxed">
              Our cabs are available 24/7 for late-night hospital visits, early morning office commutes, school runs, and every daily need in between. Booking takes less than a minute via WhatsApp.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { label: "Sedan Rate", value: "₹11/km" },
                { label: "MUV Rate", value: "₹13/km" },
                { label: "SUV Rate", value: "₹15/km" },
                { label: "8hr Package", value: "From ₹1,100" },
              ].map((item) => (
                <div key={item.label} className="card-base p-4 text-center">
                  <div className="text-xl font-bold text-[#136F63]">{item.value}</div>
                  <div className="text-xs text-[#6B6B6E] mt-1">{item.label}</div>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-bold text-[#1C1C1E] mb-3">Popular Areas We Cover</h3>
            <div className="flex flex-wrap gap-2 mb-8">
              {["Bhubaneswar Railway Station", "Lingaraj Temple Area", "AIIMS Bhubaneswar", "Patia", "Khandagiri", "Infocity", "Janpath", "Unit Areas", "Nayapalli", "Sailashree Vihar"].map((area) => (
                <span key={area} className="text-xs px-3 py-1.5 rounded-full bg-[#136F63]/10 text-[#136F63] border border-[#136F63]/20 font-medium">{area}</span>
              ))}
            </div>

            <div className="flex gap-4">
              <a href={SITE_CONFIG.whatsappLink} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center py-3.5 rounded-xl font-bold text-white text-sm tap-feedback" style={{ background: "linear-gradient(135deg, #136F63, #1E8F7F)" }}>
                Book on WhatsApp
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
