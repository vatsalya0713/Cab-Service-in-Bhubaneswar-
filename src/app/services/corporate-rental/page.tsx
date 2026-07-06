import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import QuoteForm from "@/components/ui/QuoteForm";

export const metadata: Metadata = {
  title: "Corporate Cab Rental in Bhubaneswar | Monthly Car Hire",
  description: "Corporate cab and monthly car rental in Bhubaneswar for IT parks, hospitals, and offices. Dedicated drivers, flexible shift schedules, transparent billing. Get a custom quote.",
  alternates: { canonical: `${SITE_CONFIG.url}/services/corporate-rental` },
  openGraph: { title: "Corporate Cab Rental Bhubaneswar | Monthly Car Hire", url: `${SITE_CONFIG.url}/services/corporate-rental`, images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }] },
  other: { "geo.region": "IN-OR", "geo.placename": "Bhubaneswar", "geo.position": "20.2961;85.8245", "ICBM": "20.2961, 85.8245" },
};

export default function CorporateRentalPage() {
  return (
    <div>
      <section className="pt-24 pb-16" style={{ background: "linear-gradient(135deg, #0F4C4C 0%, #136F63 100%)" }}>
        <div className="section-container">
          <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Corporate Rental" }]} className="text-white/60 mb-6" />
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Corporate Cab Rental in Bhubaneswar</h1>
          <p className="text-white/70 max-w-2xl text-lg">Dedicated employee transportation for IT companies, hospitals, manufacturing plants, and government offices — reliable, compliant, and cost-effective.</p>
        </div>
      </section>

      <section className="section-container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-[#1C1C1E] mb-4">Monthly & Long-Term Cab Contracts</h2>
            <p className="text-[#6B6B6E] mb-4 leading-relaxed">
              Running a business in Bhubaneswar comes with the constant challenge of reliable employee commutation. Whether you operate an IT campus in Infocity, a hospital in Nayapalli, or a corporate office in Janpath, our corporate cab rental service takes this headache entirely off your plate.
            </p>
            <p className="text-[#6B6B6E] mb-4 leading-relaxed">
              We provide dedicated vehicles and professional drivers on monthly contracts, with flexible scheduling to cover multiple shifts, early morning pickups, and late-night drops. All our corporate drivers are uniformed, background-verified, and trained in professional conduct.
            </p>
            <p className="text-[#6B6B6E] mb-6 leading-relaxed">
              Our billing is transparent, monthly, and backed by detailed trip logs so your accounts team always knows exactly what is being paid for. We also provide dedicated account managers for corporate clients to handle scheduling changes and special requests.
            </p>

            <h3 className="font-bold text-[#1C1C1E] mb-3">Who We Serve</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {["IT & Software Companies", "Hospitals & Clinics", "Manufacturing Plants", "Government Offices", "Hotels & Hospitality", "Schools & Colleges", "BPO / Call Centres", "Pharmaceutical Companies"].map((tag) => (
                <span key={tag} className="text-xs px-3 py-1.5 rounded-full bg-[#136F63]/10 text-[#136F63] border border-[#136F63]/20 font-medium">{tag}</span>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                { label: "Contract Type", value: "Monthly / Annual" },
                { label: "Min. Fleet", value: "1 Vehicle" },
                { label: "Billing", value: "Transparent & Itemised" },
                { label: "Drivers", value: "Background Verified" },
              ].map((item) => (
                <div key={item.label} className="card-base p-4">
                  <div className="text-xs text-[#6B6B6E]">{item.label}</div>
                  <div className="font-semibold text-[#1C1C1E] mt-1 text-sm">{item.value}</div>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <a href={SITE_CONFIG.whatsappLink} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center py-3.5 rounded-xl font-bold text-white text-sm tap-feedback" style={{ background: "linear-gradient(135deg, #136F63, #1E8F7F)" }}>
                Get Corporate Quote
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
