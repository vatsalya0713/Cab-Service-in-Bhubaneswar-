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
    color: "#136F63",
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
    color: "#F2A93B",
  },
];

export default function PackagesPage() {
  return (
    <div>
      <section className="pt-24 pb-16" style={{ background: "linear-gradient(135deg, #0F4C4C 0%, #136F63 100%)" }}>
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
                <a href={SITE_CONFIG.whatsappLink} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center py-3 rounded-xl font-bold text-white text-sm tap-feedback" style={{ background: `linear-gradient(135deg, ${pkg.color}, ${pkg.color}CC)` }}>
                  Book This Package on WhatsApp
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
