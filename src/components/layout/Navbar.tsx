"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { SITE_CONFIG, NAV_LINKS, SERVICES, DESTINATIONS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  return (
    <>
      {/* Main Navbar */}
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          scrolled
            ? "bg-white shadow-lg py-2"
            : "bg-transparent py-4"
        )}
        style={{ willChange: "transform" }}
        role="banner"
      >
        <div className="section-container flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group touch-target" aria-label="Cab Service in Bhubaneswar - Home">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: "linear-gradient(135deg, #136F63, #1E8F7F)" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h11a2 2 0 012 2v3m3 0h2l2 3v4h-2m-5 0H9m6 0a2 2 0 11-4 0 2 2 0 014 0zm-7 0a2 2 0 11-4 0 2 2 0 014 0z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="leading-none">
              <div className={cn("font-bold text-sm leading-tight transition-colors",
                scrolled ? "text-[#136F63]" : "text-white")}>
                Cab Service in Bhubaneswar
              </div>
              <div className={cn("text-[10px] leading-tight transition-colors",
                scrolled ? "text-[#6B6B6E]" : "text-white/80")}>
                Managed by Voyage Travels
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {NAV_LINKS.map((link) => {
              const isServices = link.label === "Services";
              const isDestinations = link.label === "Destinations";
              const hasDropdown = ("children" in link && link.children) || isServices || isDestinations;

              return (
                <div key={link.href} className="relative group"
                  onMouseEnter={() => hasDropdown && setActiveDropdown(link.href)}
                  onMouseLeave={() => setActiveDropdown(null)}>
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 touch-target",
                      scrolled
                        ? "text-[#1C1C1E] hover:text-[#136F63] hover:bg-[#136F63]/8"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                    )}
                  >
                    {link.label}
                    {hasDropdown && <ChevronDown size={14} className="mt-0.5 transition-transform group-hover:rotate-180" />}
                  </Link>

                  {/* Dropdowns */}
                  {hasDropdown && (
                    <AnimatePresence>
                      {activeDropdown === link.href && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.96 }}
                          transition={{ duration: 0.15 }}
                          className={cn(
                            "absolute top-full mt-1 bg-white rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] border border-[#E7E2D8] z-50 overflow-hidden",
                            isServices ? "-left-[300px] w-[800px]" : 
                            isDestinations ? "-left-[400px] w-[900px]" : 
                            "left-0 w-56 py-1"
                          )}
                        >
                          {isServices && (
                            <div className="flex">
                              <div className="flex-1 p-6">
                                <div className="text-[10px] font-bold text-[#6B6B6E] tracking-wider mb-4 uppercase">All Services</div>
                                <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                                  {SERVICES.map((s) => {
                                    const styles = {
                                      "local-taxi": { emoji: "🚕", bg: "bg-[#F0F6FF]" },
                                      "airport-taxi": { emoji: "✈️", bg: "bg-[#EFFFF3]" },
                                      "outstation-taxi": { emoji: "🗺️", bg: "bg-[#F0F5FF]" },
                                      "corporate-rental": { emoji: "🏢", bg: "bg-[#F3F4F6]" },
                                      "wedding-cars": { emoji: "💐", bg: "bg-[#F0F6FF]" },
                                      "temple-packages": { emoji: "🛕", bg: "bg-[#FFF8EB]" },
                                    }[s.slug] || { emoji: "🚕", bg: "bg-[#F0F6FF]" };
                                    
                                    // Custom text for screenshot match
                                    const customTitles: Record<string, string> = {
                                      "local-taxi": "Local Taxi Bhubaneswar",
                                      "airport-taxi": "Airport Taxi Service",
                                      "outstation-taxi": "Outstation Taxi",
                                      "corporate-rental": "Corporate Cab Service",
                                      "wedding-cars": "Wedding & Luxury Cars"
                                    };
                                    
                                    const customDescs: Record<string, string> = {
                                      "local-taxi": "City rides, hourly packages, daily commute",
                                      "airport-taxi": "Biju Patnaik Airport — pickup & drop 24/7",
                                      "outstation-taxi": "Odisha & beyond — comfortable long rides",
                                      "corporate-rental": "Monthly contracts, GST invoices for business",
                                      "wedding-cars": "Barat, bride entry & decorated premium cars"
                                    };

                                    return (
                                      <Link key={s.id} href={`/services/${s.slug}`} className="flex items-start gap-3 group/item rounded-lg p-2 hover:bg-gray-50 transition-colors">
                                        <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0", styles.bg)}>
                                          {styles.emoji}
                                        </div>
                                        <div>
                                          <div className="font-bold text-sm text-[#1C1C1E] group-hover/item:text-[#136F63] transition-colors">{customTitles[s.slug] || s.title}</div>
                                          <div className="text-[11px] text-[#6B6B6E] mt-0.5 leading-tight">{customDescs[s.slug] || s.description}</div>
                                        </div>
                                      </Link>
                                    );
                                  })}
                                  <Link href="/services/outstation-taxi" className="flex items-start gap-3 group/item rounded-lg p-2 hover:bg-gray-50 transition-colors">
                                    <div className="w-10 h-10 rounded-xl bg-[#F0F6FF] flex items-center justify-center text-xl flex-shrink-0">
                                      💰
                                    </div>
                                    <div>
                                      <div className="font-bold text-sm text-[#1C1C1E] group-hover/item:text-[#136F63] transition-colors">Cheapest Cab Rates</div>
                                      <div className="text-[11px] text-[#6B6B6E] mt-0.5 leading-tight">From ₹12/km — no hidden charges ever</div>
                                    </div>
                                  </Link>
                                </div>
                              </div>
                              <div className="w-[300px] bg-[#0A3D3D] p-6 text-white flex flex-col justify-center">
                                <div className="text-xs font-semibold text-yellow-400 mb-2">⭐ 4.9/5 • 5,000+ Trips</div>
                                <div className="text-lg font-bold mb-1">Instant Taxi Booking</div>
                                <div className="text-[11px] text-white/70 mb-5">Confirm via WhatsApp in 60 seconds</div>
                                
                                <a href={`tel:${SITE_CONFIG.phone}`} className="w-full bg-[#FFB800] hover:bg-[#F2A900] text-[#1C1C1E] font-bold py-2.5 rounded-lg flex items-center justify-center gap-2 mb-3 text-sm transition-colors">
                                  <Phone size={14} /> {SITE_CONFIG.phone}
                                </a>
                                <a href={SITE_CONFIG.whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-2.5 rounded-lg flex items-center justify-center gap-2 text-sm transition-colors">
                                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                  </svg>
                                  WhatsApp Now
                                </a>
                              </div>
                            </div>
                          )}

                          {isDestinations && (
                            <div className="flex">
                              <div className="flex-1 p-6 bg-white">
                                <div className="text-[10px] font-bold text-[#9CA3AF] tracking-wider mb-4 uppercase">Popular Routes from Bhubaneswar</div>
                                <div className="grid grid-cols-2 gap-4">
                                  {DESTINATIONS.slice(0, 4).map((d) => {
                                    const emoji = d.slug.includes("puri") ? "🛕" : d.slug.includes("konark") ? "☀️" : d.slug.includes("chilika") ? "🦢" : "🏙️";
                                    return (
                                      <Link key={d.id} href={`/destinations/${d.slug}`} className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all group/dest">
                                        <div className="text-2xl">{emoji}</div>
                                        <div className="flex-1">
                                          <div className="font-bold text-sm text-[#1C1C1E] group-hover/dest:text-[#136F63] transition-colors">Bhubaneswar → {d.name}</div>
                                          <div className="text-[11px] text-gray-500 mt-0.5 flex gap-2">
                                            <span>⏱ {d.duration}</span>
                                            <span className="font-medium text-[#10B981]">from {d.startingFare}</span>
                                          </div>
                                        </div>
                                        <div className="text-gray-300 group-hover/dest:text-[#136F63] group-hover/dest:translate-x-0.5 transition-all">→</div>
                                      </Link>
                                    );
                                  })}
                                </div>
                              </div>
                              <div className="w-[280px] p-6 bg-white border-l border-gray-100">
                                <div className="text-[10px] font-bold text-[#9CA3AF] tracking-wider mb-4 uppercase">View All</div>
                                <div className="flex flex-col gap-2 mb-6">
                                  <Link href="/packages" className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gray-50 hover:bg-gray-100 font-bold text-xs text-[#374151] transition-colors">
                                    <span>🗺️</span> Tour Packages
                                  </Link>
                                  <Link href="/services/outstation-taxi" className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gray-50 hover:bg-gray-100 font-bold text-xs text-[#374151] transition-colors">
                                    <span>🚗</span> Outstation Taxi
                                  </Link>
                                  <Link href="/fleet" className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gray-50 hover:bg-gray-100 font-bold text-xs text-[#374151] transition-colors">
                                    <span>🚙</span> View All Vehicles
                                  </Link>
                                </div>
                                <a href={SITE_CONFIG.whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full bg-[#0F4C4C] hover:bg-[#136F63] text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 text-sm transition-colors">
                                  📞 Book Now
                                </a>
                              </div>
                            </div>
                          )}

                          {!isServices && !isDestinations && "children" in link && link.children && (
                            <div className="py-1">
                              {link.children.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  className="block px-4 py-2.5 text-sm font-medium text-[#1C1C1E] hover:text-[#136F63] hover:bg-[#136F63]/5 transition-colors"
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              id="nav-call-btn"
              className={cn(
                "hidden sm:flex items-center justify-center gap-2 w-[125px] h-[44px] rounded-full transition-all duration-200 touch-target",
                scrolled
                  ? "text-[#136F63] border-2 border-[#136F63] hover:bg-[#136F63]/5"
                  : "text-white border-2 border-white/80 hover:bg-white/10"
              )}
            >
              <Phone size={18} />
              <div className="hidden md:flex flex-col items-start text-[13px] font-bold leading-[1.1]">
                <span>Call</span>
                <span>Now</span>
              </div>
            </a>

            <a
              href={SITE_CONFIG.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              id="nav-whatsapp-btn"
              className="hidden sm:flex items-center justify-center gap-1.5 w-[125px] h-[44px] rounded-full text-sm font-bold text-white transition-all duration-200 touch-target tap-feedback"
              style={{ background: "#136F63" }}
            >
              WhatsApp
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setDrawerOpen(true)}
              id="nav-menu-btn"
              aria-label="Open menu"
              className={cn(
                "lg:hidden w-10 h-10 flex items-center justify-center rounded-lg transition-colors touch-target",
                scrolled ? "text-[#1C1C1E] hover:bg-[#E7E2D8]" : "text-white hover:bg-white/10"
              )}
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer (z-60) */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            {/* Overlay */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-[60] lg:hidden"
              onClick={() => setDrawerOpen(false)}
              aria-hidden="true"
            />
            {/* Drawer Panel */}
            <motion.div
              key="drawer"
              ref={drawerRef}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-[85vw] max-w-sm bg-white z-[60] lg:hidden overflow-y-auto"
              role="dialog"
              aria-label="Navigation menu"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-5 border-b border-[#E7E2D8]">
                <div>
                  <div className="font-bold text-sm text-[#136F63]">Cab Service in Bhubaneswar</div>
                  <div className="text-[10px] text-[#6B6B6E]">Managed by Voyage Travels</div>
                </div>
                <button
                  onClick={() => setDrawerOpen(false)}
                  aria-label="Close menu"
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#FAF7F2] text-[#1C1C1E] hover:bg-[#E7E2D8] transition-colors touch-target"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Drawer Links */}
              <nav className="p-4 space-y-1" aria-label="Mobile navigation">
                {NAV_LINKS.map((link) => (
                  <div key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setDrawerOpen(false)}
                      className="block px-4 py-3 rounded-xl font-semibold text-[#1C1C1E] hover:text-[#136F63] hover:bg-[#136F63]/5 transition-colors touch-target"
                    >
                      {link.label}
                    </Link>
                    {"children" in link && link.children && (
                      <div className="pl-4 mt-1 space-y-1">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setDrawerOpen(false)}
                            className="block px-3 py-2.5 rounded-lg text-sm text-[#6B6B6E] hover:text-[#136F63] hover:bg-[#136F63]/5 transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              {/* Drawer CTA */}
              <div className="p-4 border-t border-[#E7E2D8] space-y-3 mt-4">
                <a
                  href={SITE_CONFIG.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-white text-base transition-all tap-feedback"
                  style={{ background: "linear-gradient(135deg, #136F63, #1E8F7F)" }}
                  onClick={() => setDrawerOpen(false)}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Book on WhatsApp
                </a>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-[#136F63] border-2 border-[#136F63] text-base transition-all hover:bg-[#136F63]/5 tap-feedback"
                  onClick={() => setDrawerOpen(false)}
                >
                  <Phone size={18} />
                  Call Now
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
