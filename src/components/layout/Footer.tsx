import Link from "next/link";
import { Phone, Mail, MapPin, Clock, CarTaxiFront } from "lucide-react";
import { SITE_CONFIG, NAV_LINKS, DESTINATIONS } from "@/lib/constants";

const FooterLinkGroup = ({ title, links }: { title: string; links: { label: string; href: string }[] }) => (
  <div>
    <h3 className="font-bold text-white text-sm mb-4 tracking-wide uppercase">{title}</h3>
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className="text-sm text-white/60 hover:text-[#FFC107] transition-colors"
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
      style={{ background: "linear-gradient(180deg, #0d2a40 0%, #15456b 100%)" }}
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
                style={{ background: "#FFB800" }}
              >
                <CarTaxiFront size={24} className="text-[#15456b]" strokeWidth={2.5} />
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
              <a href={`tel:${SITE_CONFIG.phone}`} className="flex items-center gap-2 text-sm text-white/70 hover:text-[#FFC107] transition-colors">
                <Phone size={15} className="text-[#FFC107] flex-shrink-0" />
                {SITE_CONFIG.phone}
              </a>
              <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-center gap-2 text-sm text-white/70 hover:text-[#FFC107] transition-colors">
                <Mail size={15} className="text-[#FFC107] flex-shrink-0" />
                {SITE_CONFIG.email}
              </a>
              <div className="flex items-start gap-2 text-sm text-white/60">
                <MapPin size={15} className="text-[#FFC107] flex-shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.address}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/60">
                <Clock size={15} className="text-[#FFC107] flex-shrink-0" />
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
            className="text-[#FFC107] hover:text-white transition-colors font-semibold"
            aria-label="ZoomDigital.in - Digital Marketing Agency"
          >
            ZoomDigital
          </a>
        </p>
      </div>
    </footer>
  );
}
