import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import QuoteForm from "@/components/ui/QuoteForm";
import { Phone } from "lucide-react";

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

            <div className="bg-[#f4f7f9] rounded-2xl p-5 mb-6 border border-[#e2e8f0]">
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
              <a href={SITE_CONFIG.whatsappLink} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-white text-sm bg-[#25D366] hover:bg-[#20bd5a] tap-feedback transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Get Wedding Quote
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
