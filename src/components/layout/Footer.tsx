import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { SITE_CONFIG, NAV_LINKS, DESTINATIONS } from "@/lib/constants";

const FooterLinkGroup = ({ title, links }: { title: string; links: { label: string; href: string }[] }) => (
  <div>
    <h3 className="font-bold text-white text-sm mb-4 tracking-wide uppercase">{title}</h3>
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className="text-sm text-[#0B0E11]/60 hover:text-[#C9A227] transition-colors"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default function Footer() {
  return (
    <footer
      className="text-white"
      style={{ background: "linear-gradient(180deg, #A5811C 0%, #0A3333 100%)" }}
      aria-label="Site footer"
    >
      {/* Main Footer Content */}
      <div className="section-container py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #C9A227, #D9B84A)" }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h11a2 2 0 012 2v3m3 0h2l2 3v4h-2m-5 0H9m6 0a2 2 0 11-4 0 2 2 0 014 0zm-7 0a2 2 0 11-4 0 2 2 0 014 0z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <div className="font-bold text-white whitespace-nowrap">Cab Service in Bhubaneswar</div>
                <div className="text-xs text-white/60">Managed by Voyage Travels</div>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed mb-6">
              Bhubaneswar&apos;s trusted 24/7 taxi and cab rental service. Verified drivers, transparent fares, and comfortable rides to every corner of Odisha.
            </p>
            <div className="space-y-3">
              <a href={`tel:${SITE_CONFIG.phone}`} className="flex items-center gap-2 text-sm text-[#0B0E11]/70 hover:text-[#C9A227] transition-colors">
                <Phone size={15} className="text-[#C9A227] flex-shrink-0" />
                {SITE_CONFIG.phone}
              </a>
              <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-center gap-2 text-sm text-[#0B0E11]/70 hover:text-[#C9A227] transition-colors">
                <Mail size={15} className="text-[#C9A227] flex-shrink-0" />
                {SITE_CONFIG.email}
              </a>
              <div className="flex items-start gap-2 text-sm text-white/60">
                <MapPin size={15} className="text-[#C9A227] flex-shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.address}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/60">
                <Clock size={15} className="text-[#C9A227] flex-shrink-0" />
                Available 24/7 — 365 days a year
              </div>
            </div>
          </div>

          {/* Services Column */}
          <FooterLinkGroup
            title="Our Services"
            links={[
              { label: "Local City Rides", href: "/services/local-taxi" },
              { label: "Airport Pickup & Drop", href: "/services/airport-taxi" },
              { label: "Outstation Trips", href: "/services/outstation-taxi" },
              { label: "Corporate Rental", href: "/services/corporate-rental" },
              { label: "Wedding Cars", href: "/services/wedding-cars" },
              { label: "Packages", href: "/packages" },
            ]}
          />

          {/* Destinations Column */}
          <FooterLinkGroup
            title="Popular Routes"
            links={DESTINATIONS.map((d) => ({
              label: `Bhubaneswar → ${d.name}`,
              href: `/destinations/${d.slug}`,
            }))}
          />

          {/* Quick Links Column */}
          <FooterLinkGroup
            title="Quick Links"
            links={[
              { label: "Our Fleet", href: "/fleet" },
              { label: "Gallery", href: "/gallery" },
              { label: "About Us", href: "/about" },
              { label: "Blog", href: "/blog" },
              { label: "Contact Us", href: "/contact" },
              { label: "Privacy Policy", href: "/privacy-policy" },
              { label: "Terms of Service", href: "/terms" },
            ]}
          />
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10" />

      {/* Bottom Bar */}
      <div className="section-container py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-white/40 text-center sm:text-left">
          © {new Date().getFullYear()} Cab Service in Bhubaneswar. Managed by Voyage Travels.
        </p>
        <p className="text-xs text-white/40 text-center sm:text-right">
          Designed &amp; Developed by{" "}
          <a
            href={SITE_CONFIG.developer.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C9A227] hover:text-[#0B0E11] transition-colors font-semibold"
            aria-label="ZoomDigital.in - Digital Marketing Agency"
          >
            ZoomDigital
          </a>
        </p>
      </div>
    </footer>
  );
}
