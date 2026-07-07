"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, ChevronDown, CarTaxiFront, Home, Briefcase, Car, MapPin, BookOpen, ChevronRight } from "lucide-react";
import { SITE_CONFIG, NAV_LINKS, SERVICES, DESTINATIONS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
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
        <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-8 flex items-center justify-between gap-2 lg:gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group touch-target flex-shrink-0" aria-label="Cab Service in Bhubaneswar - Home">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: "linear-gradient(135deg, #15456b, #206599)" }}>
              <CarTaxiFront size={20} className="text-white" />
            </div>
            <div className="leading-none">
              <div className={cn("font-bold text-[15px] leading-tight transition-colors whitespace-nowrap",
                scrolled ? "text-[#15456b]" : "text-white")}>
                Cab Service in Bhubaneswar
              </div>
              <div className={cn("text-[10px] leading-tight transition-colors whitespace-nowrap",
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
                <div key={link.href} className={cn("group", !isServices && !isDestinations && "relative")}
                  onMouseEnter={() => hasDropdown && setActiveDropdown(link.href)}
                  onMouseLeave={() => setActiveDropdown(null)}>
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center gap-1 px-2 xl:px-3 py-2 rounded-lg text-[14.5px] font-medium transition-all duration-200 touch-target",
                      scrolled
                        ? "text-[#1C1C1E] hover:text-[#15456b] hover:bg-[#15456b]/8"
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
                          initial={{ opacity: 0, y: 8, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.98 }}
                          transition={{ duration: 0.15 }}
                          className={cn(
                            "absolute top-full mt-1 bg-white shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] border-b border-[#e2e8f0] z-50 overflow-hidden",
                            isServices || isDestinations ? "left-0 right-0 w-full" : "left-0 w-56 py-1 rounded-2xl border"
                          )}
                        >
                          {isServices && (
                            <div className="section-container">
                              <div className="flex">
                                <div className="flex-1 p-6 lg:p-8">
                                  <div className="text-[10px] font-bold text-[#6B6B6E] tracking-wider mb-4 uppercase">All Services</div>
                                  <div className="grid grid-cols-2 gap-x-8 gap-y-6">
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
                                          <div className="font-bold text-sm text-[#1C1C1E] group-hover/item:text-[#15456b] transition-colors">{customTitles[s.slug] || s.title}</div>
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
                                      <div className="font-bold text-sm text-[#1C1C1E] group-hover/item:text-[#15456b] transition-colors">Cheapest Cab Rates</div>
                                      <div className="text-[11px] text-[#6B6B6E] mt-0.5 leading-tight">From ₹12/km — no hidden charges ever</div>
                                    </div>
                                  </Link>
                                </div>
                              </div>
                              <div className="w-[300px] bg-[#15456b] p-6 text-white flex flex-col justify-center">
                                <div className="text-xs font-semibold text-[#FFB800] mb-2">⭐ 4.9/5 • 5,000+ Trips</div>
                                <div className="text-lg font-bold mb-1">Instant Taxi Booking</div>
                                <div className="text-[11px] text-white/70 mb-5">Confirm via WhatsApp in 60 seconds</div>
                                
                                <a href={`tel:${SITE_CONFIG.phone}`} className="w-full bg-[#FFB800] hover:bg-[#F2A900] text-[#1C1C1E] font-bold py-2.5 rounded-lg flex items-center justify-center gap-2 mb-3 text-sm transition-colors">
                                  <Phone size={14} /> {SITE_CONFIG.phone}
                                </a>
                                <a href={SITE_CONFIG.whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-2.5 rounded-lg flex items-center justify-center gap-2 text-sm transition-colors">
                                  WhatsApp Now
                                </a>
                              </div>
                            </div>
                          </div>
                        )}

                          {isDestinations && (
                            <div className="section-container">
                              <div className="flex">
                                <div className="flex-1 p-6 lg:p-8 bg-white">
                                  <div className="text-[10px] font-bold text-[#9CA3AF] tracking-wider mb-4 uppercase">Popular Routes from Bhubaneswar</div>
                                  <div className="grid grid-cols-2 gap-4">
                                    {DESTINATIONS.slice(0, 4).map((d) => {
                                      const emoji = d.slug.includes("puri") ? "🛕" : d.slug.includes("konark") ? "☀️" : d.slug.includes("chilika") ? "🦢" : "🏙️";
                                      return (
                                        <Link key={d.id} href={`/destinations/${d.slug}`} className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all group/dest">
                                          <div className="text-2xl">{emoji}</div>
                                          <div className="flex-1">
                                            <div className="font-bold text-sm text-[#1C1C1E] group-hover/dest:text-[#15456b] transition-colors">Bhubaneswar → {d.name}</div>
                                            <div className="text-[11px] text-gray-500 mt-0.5 flex gap-2">
                                              <span>⏱ {d.duration}</span>
                                              <span className="font-medium text-[#10B981]">from {d.startingFare}</span>
                                            </div>
                                          </div>
                                          <div className="text-gray-300 group-hover/dest:text-[#15456b] group-hover/dest:translate-x-0.5 transition-all">→</div>
                                        </Link>
                                      );
                                    })}
                                  </div>
                                </div>
                                <div className="w-[300px] bg-[#15456b] p-6 text-white flex flex-col justify-center border-l border-gray-100">
                                  <div className="text-xs font-semibold text-[#FFB800] mb-2">⭐ Trusted by thousands</div>
                                  <div className="text-lg font-bold mb-1">Explore Odisha</div>
                                  <div className="text-[11px] text-white/70 mb-5">Book your outstation cab easily</div>
                                  
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
                            </div>
                          )}

                          {!isServices && !isDestinations && "children" in link && (link as { children?: { href: string; label: string }[] }).children && (
                            <div className="py-1">
                              {(link as { children: { href: string; label: string }[] }).children.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  className="block px-4 py-2.5 text-sm font-medium text-[#1C1C1E] hover:text-[#15456b] hover:bg-[#15456b]/5 transition-colors"
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
              className="hidden sm:flex items-center justify-center gap-1.5 px-3 xl:px-4 py-2 rounded-lg text-[14.5px] font-semibold text-[#111827] bg-[#FFC107] hover:bg-[#F5B600] transition-all duration-200 shadow-sm tap-feedback whitespace-nowrap"
            >
              <Phone size={15} />
              <span>Call Now</span>
            </a>

            <a
              href={SITE_CONFIG.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              id="nav-whatsapp-btn"
              className="hidden sm:flex items-center gap-1.5 px-3 xl:px-4 py-2 rounded-lg text-[14.5px] font-semibold text-white bg-[#25D366] hover:bg-[#20bd5a] transition-all duration-200 touch-target tap-feedback whitespace-nowrap"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>

            {/* Mobile Hamburger Menu Button */}
            <button
              onClick={() => setDrawerOpen(true)}
              aria-label="Open menu"
              className={cn(
                "lg:hidden flex items-center justify-center p-2 rounded-lg transition-colors touch-target ml-1",
                scrolled ? "text-[#1C1C1E] bg-gray-100 hover:bg-gray-200" : "text-white bg-white/10 hover:bg-white/20"
              )}
            >
              <Menu size={24} />
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
              <div className="flex items-center justify-between p-5 border-b border-gray-100 bg-gray-50/50">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm" style={{ background: "linear-gradient(135deg, #15456b, #206599)" }}>
                    <CarTaxiFront size={18} className="text-white" />
                  </div>
                  <div className="leading-tight">
                    <div className="font-extrabold text-[15px] text-[#15456b]">Cab Service</div>
                    <div className="text-[10px] font-medium text-[#6B6B6E] uppercase tracking-wider">Bhubaneswar</div>
                  </div>
                </div>
                <button
                  onClick={() => setDrawerOpen(false)}
                  aria-label="Close menu"
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#f4f7f9] text-[#1C1C1E] hover:bg-[#e2e8f0] transition-colors touch-target"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Drawer CTA */}
              <div className="p-4 border-b border-[#e2e8f0] bg-white">
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={SITE_CONFIG.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 w-full py-3.5 rounded-xl font-semibold text-white text-[15px] bg-[#25D366] hover:bg-[#20bd5a] transition-all tap-feedback shadow-sm"
                    onClick={() => setDrawerOpen(false)}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp
                  </a>
                  <a
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="flex items-center justify-center gap-1.5 w-full py-3.5 rounded-xl font-semibold text-[#111827] bg-[#FFC107] hover:bg-[#F5B600] text-[15px] transition-all tap-feedback shadow-sm"
                    onClick={() => setDrawerOpen(false)}
                  >
                    <Phone size={18} />
                    Call Now
                  </a>
                </div>
              </div>

              {/* Drawer Links */}
              <nav className="p-4 space-y-2.5 bg-gray-50/30 flex-1 overflow-y-auto" aria-label="Mobile navigation">
                {NAV_LINKS.map((link) => {
                  const hasChildren = "children" in link && link.children;
                  const isExpanded = mobileExpanded === link.label;

                  const getIcon = (label: string) => {
                    switch (label) {
                      case "Home": return { icon: <Home size={20} className="text-[#15456b]" />, bg: "bg-[#F0F6FF]" };
                      case "Services": return { icon: <Briefcase size={20} className="text-[#15456b]" />, bg: "bg-[#F0F6FF]" };
                      case "Fleet": return { icon: <Car size={20} className="text-[#15456b]" />, bg: "bg-[#F0F6FF]" };
                      case "Destinations": return { icon: <MapPin size={20} className="text-[#15456b]" />, bg: "bg-[#F0F6FF]" };
                      case "Blog": return { icon: <BookOpen size={20} className="text-[#15456b]" />, bg: "bg-[#F0F6FF]" };
                      case "Contact": return { icon: <Phone size={20} className="text-[#15456b]" />, bg: "bg-[#F0F6FF]" };
                      default: return { icon: <ChevronRight size={20} className="text-[#15456b]" />, bg: "bg-[#F0F6FF]" };
                    }
                  };

                  const { icon, bg } = getIcon(link.label);

                  return (
                    <div key={link.href} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                      {hasChildren ? (
                        <button
                          onClick={() => setMobileExpanded(isExpanded ? null : link.label)}
                          className="w-full flex items-center justify-between px-4 py-4 text-left"
                        >
                          <div className="flex items-center gap-3">
                            <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center", bg)}>
                              {icon}
                            </div>
                            <span className="font-bold text-[15px] text-[#1C1C1E]">{link.label}</span>
                          </div>
                          <div className={cn("w-8 h-8 rounded-full flex items-center justify-center transition-colors", isExpanded ? "bg-[#15456b] text-white" : "bg-gray-50 text-gray-400")}>
                            <ChevronDown
                              size={18}
                              className={cn("transition-transform duration-300", isExpanded && "rotate-180")}
                            />
                          </div>
                        </button>
                      ) : (
                        <Link
                          href={link.href}
                          onClick={() => setDrawerOpen(false)}
                          className="w-full flex items-center px-4 py-4 text-left group"
                        >
                          <div className="flex items-center gap-3 w-full">
                            <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center", bg)}>
                              {icon}
                            </div>
                            <span className="font-bold text-[15px] text-[#1C1C1E]">{link.label}</span>
                          </div>
                        </Link>
                      )}

                      <AnimatePresence>
                        {hasChildren && isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="bg-gray-50/50 border-t border-gray-100"
                          >
                            <div className="p-3 grid grid-cols-1 gap-2">
                              {link.children!.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  onClick={() => setDrawerOpen(false)}
                                  className="flex items-center gap-3 p-3 rounded-xl bg-white border border-gray-100 hover:border-[#15456b]/30 shadow-sm transition-all"
                                >
                                  <div className="w-1.5 h-1.5 rounded-full bg-[#15456b]/40"></div>
                                  <span className="text-sm font-semibold text-[#1C1C1E]">{child.label}</span>
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </nav>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
