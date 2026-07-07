import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import QuoteForm from "@/components/ui/QuoteForm";
import { Phone } from "lucide-react";

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
      <section className="pt-24 pb-16" style={{ background: "linear-gradient(135deg, #0d2a40 0%, #15456b 100%)" }}>
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
                <span key={tag} className="text-xs px-3 py-1.5 rounded-full bg-[#15456b]/10 text-[#15456b] border border-[#15456b]/20 font-medium">{tag}</span>
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
              <a href={SITE_CONFIG.whatsappLink} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-white text-sm bg-[#25D366] hover:bg-[#20bd5a] tap-feedback transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Get Corporate Quote
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
