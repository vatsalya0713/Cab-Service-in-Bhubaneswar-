import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG, SERVICES } from "@/lib/constants";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Cab Services in Bhubaneswar | Local, Airport, Outstation & More",
  description: "Explore all cab services in Bhubaneswar — local city rides, airport transfers, outstation trips, corporate rentals, wedding cars, and pilgrimage packages. Book instantly on WhatsApp.",
  alternates: { canonical: `${SITE_CONFIG.url}/services` },
  openGraph: {
    title: "Cab Services in Bhubaneswar | All Services",
    url: `${SITE_CONFIG.url}/services`,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
  other: { "geo.region": "IN-OR", "geo.placename": "Bhubaneswar", "geo.position": "20.2961;85.8245", "ICBM": "20.2961, 85.8245" },
};

const ICON_MAP: Record<string, React.ReactNode> = {
  MapPin: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  Plane: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/></svg>,
  Route: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="6" cy="19" r="3"/><path d="M9 19h8.5a3.5 3.5 0 000-7h-11a3.5 3.5 0 010-7H15"/><circle cx="18" cy="5" r="3"/></svg>,
  Briefcase: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>,
  Heart: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>,
  Star: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
};

export default function ServicesPage() {
  return (
    <div>
      <section className="pt-24 pb-16" style={{ background: "linear-gradient(135deg, #A5811C 0%, #C9A227 100%)" }}>
        <div className="section-container">
          <Breadcrumbs items={[{ label: "Services" }]} className="text-white/60 mb-6" />
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Our Cab Services in Bhubaneswar</h1>
          <p className="text-white/70 max-w-2xl text-lg">From a quick city hop to a multi-day outstation tour, we have a cab and a fare structure tailored for every journey in Odisha.</p>
        </div>
      </section>

      <section className="section-container py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div key={service.id} className="card-base p-6 group hover:-translate-y-1.5 transition-transform duration-200">
              <Link href={`/services/${service.slug}`}>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 text-[#0B0E11]" style={{ background: "linear-gradient(135deg, #C9A227, #D9B84A)" }}>
                  {ICON_MAP[service.icon]}
                </div>
                <h2 className="font-bold text-xl text-[#F5F1E8] mb-2 group-hover:text-[#C9A227] transition-colors">{service.title}</h2>
                <p className="text-sm text-[#9BA3AE] mb-4 leading-relaxed">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-[#C9A227] bg-[#C9A227]/10 px-3 py-1 rounded-lg">From {service.startingPrice}</span>
                  <ArrowRight size={16} className="text-[#C9A227] transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
