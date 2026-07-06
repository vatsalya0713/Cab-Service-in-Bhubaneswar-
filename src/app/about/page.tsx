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
      <section className="pt-24 pb-16" style={{ background: "linear-gradient(135deg, #0F4C4C 0%, #136F63 100%)" }}>
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
            <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-[#136F63] bg-[#136F63]/10 mb-4">Our Story</div>
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

      {/* Aspira Med Group & ZoomDigital Section */}
      <section className="py-20" style={{ background: "#F0EDE6" }}>
        <div className="section-container">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-[#136F63] bg-[#136F63]/10 mb-4">Our Group</div>
            <h2 className="text-3xl font-bold text-[#1C1C1E] mb-4">Part of Aspira Med Group</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 border border-[#E7E2D8] shadow-md">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 text-white text-xl font-bold" style={{ background: "linear-gradient(135deg, #136F63, #1E8F7F)" }}>A</div>
              <h3 className="text-xl font-bold text-[#1C1C1E] mb-3">Aspira Med Group</h3>
              <p className="text-[#6B6B6E] text-sm leading-relaxed">
                Aspira Med Group is a diversified Odisha-based conglomerate with a portfolio spanning healthcare services, travel and transportation, and digital marketing. The group&apos;s mission is to deliver world-class, accessible services that improve quality of life for people across Odisha and beyond. Cab Service in Bhubaneswar is one of its key travel ventures, reflecting the group&apos;s commitment to making reliable mobility available to everyone.
              </p>
              <a href={SITE_CONFIG.parentCompany.url} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-sm font-semibold text-[#136F63] hover:underline">
                Visit Aspira Med Group →
              </a>
            </div>
            <div className="bg-white rounded-3xl p-8 border border-[#E7E2D8] shadow-md">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 text-white text-xl font-bold" style={{ background: "linear-gradient(135deg, #F2A93B, #D98F1F)" }}>Z</div>
              <h3 className="text-xl font-bold text-[#1C1C1E] mb-3">ZoomDigital.in</h3>
              <p className="text-[#6B6B6E] text-sm leading-relaxed">
                ZoomDigital.in is the digital marketing and web technology arm of Aspira Med Group. From SEO and social media marketing to high-performance website development, ZoomDigital.in powers the online presence of all Aspira ventures. The agency combines strategic digital marketing with beautiful, fast, and conversion-optimised websites — including this very platform you are visiting.
              </p>
              <a href={SITE_CONFIG.developer.url} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-sm font-semibold text-[#F2A93B] hover:underline">
                Visit ZoomDigital.in →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Directors */}
      <section className="section-container py-20">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-[#136F63] bg-[#136F63]/10 mb-4">Leadership</div>
          <h2 className="text-3xl font-bold text-[#1C1C1E] mb-4">Meet the Directors</h2>
          <p className="text-[#6B6B6E] max-w-2xl mx-auto text-sm">[REPLACE with actual director profiles and photos when available]</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {DIRECTORS.map((d) => (
            <div key={d.role} className="card-base p-6 text-center">
              <div className="w-20 h-20 rounded-full bg-[#136F63]/10 flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-[#136F63]">
                {d.initials}
              </div>
              <h3 className="font-bold text-[#1C1C1E] mb-1">{d.name}</h3>
              <div className="text-xs font-medium text-[#136F63] mb-3">{d.role}</div>
              <p className="text-sm text-[#6B6B6E] leading-relaxed">{d.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ background: "linear-gradient(135deg, #0F4C4C, #136F63)" }}>
        <div className="section-container text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Book Your Ride?</h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">Experience the Cab Service in Bhubaneswar difference — safe, comfortable, and always on time.</p>
          <a href={SITE_CONFIG.whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-[#0F4C4C] text-base tap-feedback" style={{ background: "linear-gradient(135deg, #F2A93B, #F7C46C)" }}>
            Book on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
