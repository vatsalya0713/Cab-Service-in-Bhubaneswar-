import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import QuoteForm from "@/components/ui/QuoteForm";

export const metadata: Metadata = {
  title: "Bhubaneswar Cab Packages | Pilgrimage, Beach & City Tours",
  description: "Book curated cab packages in Bhubaneswar — Odisha Golden Triangle, Chilika & Beach Package, and Bhubaneswar City Temple Tour. All-inclusive fares with experienced drivers.",
  alternates: { canonical: `${SITE_CONFIG.url}/packages` },
  openGraph: { title: "Cab Packages from Bhubaneswar | Tour Packages", url: `${SITE_CONFIG.url}/packages`, images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }] },
  other: { "geo.region": "IN-OR", "geo.placename": "Bhubaneswar", "geo.position": "20.2961;85.8245", "ICBM": "20.2961, 85.8245" },
};

const PACKAGES = [
  {
    id: "golden-triangle",
    title: "Odisha Golden Triangle",
    subtitle: "Bhubaneswar · Puri · Konark",
    duration: "1 Day",
    seatingFor: "Up to 7 passengers",
    startingPrice: "₹2,800",
    vehicle: "SUV recommended",
    description: "Cover the three most iconic destinations in Odisha in a single day. Your journey begins at sunrise in Bhubaneswar, where our driver picks you up and heads to Konark Sun Temple to beat the tourist crowds. After exploring the UNESCO site, continue to Puri for a darshan at Jagannath Temple and lunch overlooking Puri Beach. Return to Bhubaneswar by evening via the scenic coastal highway.",
    itinerary: [
      "Pickup from Bhubaneswar (6–7 AM)",
      "Konark Sun Temple (2–3 hrs)",
      "Puri Jagannath Temple darshan",
      "Lunch at Marine Drive, Puri",
      "Puri Beach (1 hr)",
      "Return to Bhubaneswar by 7–8 PM",
    ],
    includes: ["All tolls", "Fuel", "Driver allowance", "24/7 support"],
    color: "#15456b",
  },
  {
    id: "chilika-beach",
    title: "Chilika Lake & Beach Escape",
    subtitle: "Bhubaneswar · Chilika · Puri",
    duration: "1 Day",
    seatingFor: "Up to 6 passengers",
    startingPrice: "₹2,500",
    vehicle: "MUV recommended",
    description: "Start your morning with the natural wonder of Chilika Lake — India&apos;s largest brackish water lagoon — where you can spot Irrawaddy dolphins on a boat excursion (boat fare separate) and watch migratory birds at Nalabana. After the lake experience, drive to Puri for a relaxed afternoon at the beach before returning to Bhubaneswar.",
    itinerary: [
      "Pickup from Bhubaneswar (6 AM)",
      "Chilika Lake — Satapada (dolphin watching by boat)",
      "Nalabana Bird Sanctuary viewpoint",
      "Lunch at Chilika shore",
      "Puri Beach (afternoon)",
      "Return to Bhubaneswar by 7 PM",
    ],
    includes: ["All tolls", "Fuel", "Driver allowance", "24/7 support"],
    color: "#1E6091",
  },
  {
    id: "bhubaneswar-temples",
    title: "Bhubaneswar Temple City Tour",
    subtitle: "All within Bhubaneswar",
    duration: "Half Day (4–5 hrs)",
    seatingFor: "Up to 4 passengers",
    startingPrice: "₹1,200",
    vehicle: "Sedan or MUV",
    description: "Bhubaneswar, often called the &lsquo;Temple City of India&rsquo;, is home to over 700 ancient temples — many from the 7th to 12th century AD, representing the finest Kalinga architecture in existence. This guided cab tour covers the most significant temples in the city with a knowledgeable driver who can narrate the history and mythology of each site.",
    itinerary: [
      "Lingaraj Temple (7th century — Bhubaneswar&apos;s most iconic)",
      "Mukteshvara Temple (10th century — jewel of Odishan architecture)",
      "Rajarani Temple (11th century — finest decorative carvings)",
      "Brahmeswara Temple (9th century)",
      "Udayagiri & Khandagiri Caves (Jain heritage caves)",
      "Nandankanan Zoological Park (optional)",
    ],
    includes: ["Cab for 4–5 hrs", "Knowledgeable driver", "All parking fees", "24/7 support"],
    color: "#FFC107",
  },
];

export default function PackagesPage() {
  return (
    <div>
      <section className="pt-24 pb-16" style={{ background: "linear-gradient(135deg, #0d2a40 0%, #15456b 100%)" }}>
        <div className="section-container">
          <Breadcrumbs items={[{ label: "Packages" }]} className="text-white/60 mb-6" />
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Curated Cab Packages from Bhubaneswar</h1>
          <p className="text-white/70 max-w-2xl text-lg">Hassle-free, all-inclusive day packages designed for families, pilgrims, and travellers who want to explore the best of Odisha without any planning stress.</p>
        </div>
      </section>

      <section className="section-container py-16">
        <div className="grid grid-cols-1 gap-10 max-w-4xl mx-auto">
          {PACKAGES.map((pkg) => (
            <div key={pkg.id} className="card-base p-8">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
                <div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full text-white mb-2 inline-block" style={{ background: pkg.color }}>{pkg.duration}</span>
                  <h2 className="text-2xl font-bold text-[#1C1C1E] mt-2">{pkg.title}</h2>
                  <p className="text-[#6B6B6E] text-sm">{pkg.subtitle}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="text-2xl font-bold" style={{ color: pkg.color }}>{pkg.startingPrice}</div>
                  <div className="text-xs text-[#6B6B6E]">Starting price · {pkg.vehicle}</div>
                </div>
              </div>

              <p className="text-[#6B6B6E] mb-6 leading-relaxed text-sm" dangerouslySetInnerHTML={{ __html: pkg.description }} />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-bold text-[#1C1C1E] mb-3 text-sm">Itinerary</h3>
                  <ol className="space-y-2">
                    {pkg.itinerary.map((step, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[#6B6B6E]">
                        <span className="w-5 h-5 rounded-full text-white text-xs flex items-center justify-center flex-shrink-0 font-semibold mt-0.5" style={{ background: pkg.color }}>{i + 1}</span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
                <div>
                  <h3 className="font-bold text-[#1C1C1E] mb-3 text-sm">What&apos;s Included</h3>
                  <ul className="space-y-2">
                    {pkg.includes.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-[#6B6B6E]">
                        <span className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: `${pkg.color}15`, color: pkg.color }}>✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a href={SITE_CONFIG.whatsappLink} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-white text-sm bg-[#25D366] hover:bg-[#20bd5a] tap-feedback transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Book on WhatsApp
                </a>
                <a href={`tel:${SITE_CONFIG.phone}`} className="flex-1 flex items-center justify-center py-3 rounded-xl font-bold text-sm border-2 tap-feedback hover:opacity-80 transition-opacity" style={{ color: pkg.color, borderColor: pkg.color }}>
                  Call for Custom Quote
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mb-2 text-center">Need a Custom Package?</h2>
          <p className="text-[#6B6B6E] text-center mb-8">Tell us your destinations, number of passengers, and dates — we&apos;ll build a personalised itinerary with a fixed all-inclusive quote.</p>
          <QuoteForm />
        </div>
      </section>
    </div>
  );
}
