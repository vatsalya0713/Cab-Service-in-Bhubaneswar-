import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "About Us — Cab Service in Bhubaneswar | Aspira Med Group",
  description: "Learn about Cab Service in Bhubaneswar — a 24/7 taxi company under Aspira Med Group. Meet our directors and learn how ZoomDigital.in powers our digital presence.",
  alternates: { canonical: `${SITE_CONFIG.url}/about` },
  openGraph: {
    title: "About Cab Service in Bhubaneswar | Aspira Med Group",
    description: "A trusted 24/7 cab service in Bhubaneswar under Aspira Med Group. Verified drivers, transparent fares, premium fleet.",
    url: `${SITE_CONFIG.url}/about`,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630, alt: "About Cab Service in Bhubaneswar" }],
  },
  other: {
    "geo.region": "IN-OR",
    "geo.placename": "Bhubaneswar",
    "geo.position": "20.2961;85.8245",
    "ICBM": "20.2961, 85.8245",
  },
};

const DIRECTORS = [
  {
    name: "[REPLACE — Director Name]",
    role: "Founder & Managing Director",
    bio: "With over a decade of experience in travel and transportation management, our Founder drives the vision of making premium cab services accessible to every traveller in Odisha.",
    initials: "MD",
  },
  {
    name: "[REPLACE — Director Name]",
    role: "Director — Operations",
    bio: "Our Operations Director oversees fleet management, driver training, and day-to-day service quality, ensuring every ride meets our high standards of safety and comfort.",
    initials: "DO",
  },
  {
    name: "[REPLACE — Director Name]",
    role: "Director — Digital & Marketing",
    bio: "Heading the digital growth strategy through ZoomDigital.in, our Digital Director ensures the company&apos;s online presence reaches every potential customer across Odisha and beyond.",
    initials: "DD",
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="pt-24 pb-16" style={{ background: "linear-gradient(135deg, #0d2a40 0%, #15456b 100%)" }}>
        <div className="section-container">
          <Breadcrumbs items={[{ label: "About Us" }]} className="text-white/60 mb-6" />
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">About Cab Service in Bhubaneswar</h1>
          <p className="text-white/70 max-w-2xl text-lg">Six years of safe rides, 10,000+ happy passengers, and a commitment to making every journey across Odisha comfortable and affordable.</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-container py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-[#15456b] bg-[#15456b]/10 mb-4">Our Story</div>
            <h2 className="text-3xl font-bold text-[#1C1C1E] mb-5">Born in Bhubaneswar, Built for Odisha</h2>
            <p className="text-[#6B6B6E] leading-relaxed mb-4">
              Cab Service in Bhubaneswar was founded with one simple belief: every person in this city deserves a safe, comfortable, and fairly-priced cab ride — whether they are heading to the airport at 2 AM, visiting the Lingaraj Temple on a festival morning, or embarking on a week-long pilgrimage to Puri and Konark.
            </p>
            <p className="text-[#6B6B6E] leading-relaxed mb-4">
              Over six years, we have built a fleet that covers everything from compact sedans for solo travellers to 14-seater tempo travellers for large group pilgrimages. Every vehicle in our fleet is regularly serviced, sanitized, and GPS-tracked. Every driver undergoes police verification, route training, and a professional conduct orientation before joining our team.
            </p>
            <p className="text-[#6B6B6E] leading-relaxed">
              Today, we serve individuals, families, corporate employees, hospital patients, wedding guests, and pilgrims — all with the same standard of care and the same promise: no hidden charges, on-time arrival, and a clean, comfortable ride every single time.
            </p>
          </div>
          <div className="relative h-80 rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/images/about-team.jpg"
              alt="Cab Service in Bhubaneswar team — Aspira Med Group office"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>


      {/* Meet the Directors */}
      <section className="section-container py-20">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-[#15456b] bg-[#15456b]/10 mb-4">Leadership</div>
          <h2 className="text-3xl font-bold text-[#1C1C1E] mb-4">Meet the Directors</h2>
          <p className="text-[#6B6B6E] max-w-2xl mx-auto text-sm">[REPLACE with actual director profiles and photos when available]</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {DIRECTORS.map((d) => (
            <div key={d.role} className="card-base p-6 text-center">
              <div className="w-20 h-20 rounded-full bg-[#15456b]/10 flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-[#15456b]">
                {d.initials}
              </div>
              <h3 className="font-bold text-[#1C1C1E] mb-1">{d.name}</h3>
              <div className="text-xs font-medium text-[#15456b] mb-3">{d.role}</div>
              <p className="text-sm text-[#6B6B6E] leading-relaxed">{d.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ background: "linear-gradient(135deg, #0d2a40, #15456b)" }}>
        <div className="section-container text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Book Your Ride?</h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">Experience the Cab Service in Bhubaneswar difference — safe, comfortable, and always on time.</p>
          <a href={SITE_CONFIG.whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-base bg-[#25D366] hover:bg-[#20bd5a] tap-feedback transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Book on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
