import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import QuoteForm from "@/components/ui/QuoteForm";

export const metadata: Metadata = {
  title: "Wedding Car Rental in Bhubaneswar | Decorated Cabs & Luxury SUVs",
  description: "Book decorated wedding cars in Bhubaneswar for baraat processions, reception nights, and honeymoon trips. Premium SUVs with floral decoration. Get a custom wedding quote.",
  alternates: { canonical: `${SITE_CONFIG.url}/services/wedding-cars` },
  openGraph: { title: "Wedding Car Rental Bhubaneswar | Luxury Decorated Cabs", url: `${SITE_CONFIG.url}/services/wedding-cars`, images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }] },
  other: { "geo.region": "IN-OR", "geo.placename": "Bhubaneswar", "geo.position": "20.2961;85.8245", "ICBM": "20.2961, 85.8245" },
};

export default function WeddingCarsPage() {
  return (
    <div>
      <section className="pt-24 pb-16" style={{ background: "linear-gradient(135deg, #6B1C4C 0%, #9B2C6C 50%, #C44075 100%)" }}>
        <div className="section-container">
          <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Wedding Cars" }]} className="text-white/60 mb-6" />
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Wedding Car Rental in Bhubaneswar</h1>
          <p className="text-white/70 max-w-2xl text-lg">Make your most important day unforgettable — with beautifully decorated premium cabs and SUVs for every wedding occasion.</p>
        </div>
      </section>

      <section className="section-container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-[#1C1C1E] mb-4">Weddings Deserve the Best Ride</h2>
            <p className="text-[#6B6B6E] mb-4 leading-relaxed">
              From the moment the baraat sets out to the final farewell at the reception, the vehicles in a wedding procession carry not just people, but memories that will last a lifetime. Our wedding car rental service in Bhubaneswar ensures that those memories are accompanied by elegance, comfort, and impeccable professionalism.
            </p>
            <p className="text-[#6B6B6E] mb-4 leading-relaxed">
              We offer a range of premium vehicles — from spacious white SUVs to chauffeur-driven executive cars — decorated with fresh marigold and rose garlands, satin ribbons, and a &ldquo;Just Married&rdquo; sign if you wish. Our team coordinates with your wedding venue and event manager to ensure seamless pickup and drop timings throughout the ceremony.
            </p>
            <p className="text-[#6B6B6E] mb-6 leading-relaxed">
              Beyond the main event, we also provide cabs for sangeet nights, mehendi functions, and honeymoon transfers to destinations like Puri Beach, Gopalpur, or the Bhubaneswar airport for international honeymoons.
            </p>

            <h3 className="font-bold text-[#1C1C1E] mb-3">Wedding Cab Occasions We Cover</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {["Baraat Procession", "Wedding Day Transfers", "Sangeet Night", "Mehendi Function", "Reception Night", "Guest Pickups", "Honeymoon Transfer", "Airport Drop After Wedding"].map((tag) => (
                <span key={tag} className="text-xs px-3 py-1.5 rounded-full bg-rose-50 text-rose-700 border border-rose-200 font-medium">{tag}</span>
              ))}
            </div>

            <div className="bg-[#FAF7F2] rounded-2xl p-5 mb-6 border border-[#E7E2D8]">
              <h4 className="font-bold text-[#1C1C1E] mb-2">Decoration Includes</h4>
              <ul className="text-sm text-[#6B6B6E] space-y-1.5">
                <li>✓ Fresh marigold and rose garlands on bonnet and doors</li>
                <li>✓ Satin ribbon bows</li>
                <li>✓ &ldquo;Just Married&rdquo; signage (optional)</li>
                <li>✓ Interior flower petals on rear seat (on request)</li>
                <li>✓ Uniformed chauffeur</li>
              </ul>
            </div>

            <div className="flex gap-4">
              <a href={SITE_CONFIG.whatsappLink} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center py-3.5 rounded-xl font-bold text-white text-sm tap-feedback" style={{ background: "linear-gradient(135deg, #9B2C6C, #C44075)" }}>
                Get Wedding Quote
              </a>
              <a href={`tel:${SITE_CONFIG.phone}`} className="flex-1 flex items-center justify-center py-3.5 rounded-xl font-bold text-[#1C1C1E] border-2 border-[#1C1C1E] text-sm tap-feedback hover:bg-[#1C1C1E]/5">
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
