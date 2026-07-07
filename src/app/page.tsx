"use client";
import type { Easing } from "framer-motion";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  MapPin, Plane, Route, Briefcase, Heart, Star, Phone, Shield, BadgeCheck,
  Navigation, MessageCircle, Clock, Sparkles, ShieldCheck, ArrowRight
} from "lucide-react";
import StatsCounter from "@/components/ui/StatsCounter";
import HeroLeadForm from "@/components/ui/HeroLeadForm";
import { DestinationCard } from "@/components/shared/DestinationCard";
import FAQAccordion from "@/components/ui/FAQAccordion";
import QuoteForm from "@/components/ui/QuoteForm";
import BlogCarousel from "@/components/ui/BlogCarousel";
import { SITE_CONFIG, FLEET, DESTINATIONS, SERVICES, WHY_US, FAQ } from "@/lib/constants";

const STATS = [
  { value: 10000, suffix: "+", label: "Rides Completed" },
  { value: 48, suffix: "★", label: "Avg Rating", prefix: "" },
  { value: 24, suffix: "/7", label: "Availability" },
  { value: 100, suffix: "%", label: "Verified Drivers" },
  { value: 6, suffix: "+", label: "Years Experience" },
  { value: 11, suffix: "/km", label: "Starting Fare ₹" },
];

const SERVICE_ICONS: Record<string, { emoji: string, bg: string, border: string }> = {
  MapPin: { emoji: "🚕", bg: "bg-[#f0f7ff]", border: "border-[#e0f0ff]" },
  Plane: { emoji: "✈️", bg: "bg-[#f0fdf4]", border: "border-[#dcfce7]" },
  Route: { emoji: "🚘", bg: "bg-[#fff7ed]", border: "border-[#ffedd5]" },
  Briefcase: { emoji: "💼", bg: "bg-[#fdf4ff]", border: "border-[#fae8ff]" },
  Heart: { emoji: "🎀", bg: "bg-[#fff1f2]", border: "border-[#ffe4e6]" },
  Star: { emoji: "🛕", bg: "bg-[#fefce8]", border: "border-[#fef9c3]" },
};

const WHY_ICONS: Record<string, React.ReactNode> = {
  Clock: <Clock size={22} />,
  BadgeCheck: <BadgeCheck size={22} />,
  ShieldCheck: <ShieldCheck size={22} />,
  Sparkles: <Sparkles size={22} />,
  Navigation: <Navigation size={22} />,
  MessageCircle: <MessageCircle size={22} />,
  Star: <Star size={22} />,
  Shield: <Shield size={22} />,
};

const TESTIMONIALS = [
  {
    name: "Ritu Mahapatra",
    city: "Bhubaneswar",
    service: "Airport Drop",
    rating: 5,
    quote: "Booked a cab at 4 AM for an early flight and the driver was at my door exactly on time. Clean car, smooth ride, and absolutely no drama. Will definitely use again!",
  },
  {
    name: "Sanjay Panda",
    city: "Cuttack",
    service: "Bhubaneswar to Puri",
    rating: 5,
    quote: "Took an Innova-class SUV for a family trip to Puri. The driver knew all the best spots, helped carry our luggage, and waited patiently at the temple. Great service.",
  },
  {
    name: "Priyanka Das",
    city: "Bhubaneswar",
    service: "Corporate Monthly Rental",
    rating: 5,
    quote: "Our company has been using their monthly corporate cab service for over a year. Drivers are professional, punctual, and always courteous to our employees.",
  },
  {
    name: "Arun Kumar",
    city: "Delhi (visited Odisha)",
    service: "Konark & Chilika Day Trip",
    rating: 5,
    quote: "Booked for a day trip from Bhubaneswar covering Konark and Chilika. The driver was knowledgeable about local history and made the trip educational and fun!",
  },
  {
    name: "Meena Swain",
    city: "Puri",
    service: "Wedding Car Rental",
    rating: 5,
    quote: "They arranged a beautifully decorated SUV for our son's wedding. Floral garlands, ribbons, everything was perfect. Our family was very impressed. Thank you!",
  },
  {
    name: "Dr. Ramesh Sahoo",
    city: "Bhubaneswar",
    service: "Local City Rides",
    rating: 4,
    quote: "I use their cabs for hospital visits almost every week. Always reliable, fair pricing, and the cars are clean. My go-to cab service in Bhubaneswar now.",
  },
];

const EASE_OUT: Easing = "easeOut";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: EASE_OUT },
});

const scrollReveal = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 as const },
  transition: { duration: 0.5, ease: EASE_OUT },
};

export default function HomePage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="overflow-x-hidden">
      {/* ====== HERO SECTION ====== */}
      <section className="relative min-h-[100svh] flex items-center bg-[#0d2a40]" style={{ backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px)", backgroundSize: "24px 24px" }}>
        {/* Decorative circles */}
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-[#1e88e5]/10 blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-[#ffca28]/5 blur-2xl" aria-hidden="true" />

        <div className="section-container relative z-10 pt-24 pb-16 lg:pt-32">
          <div className="grid md:grid-cols-[1fr_340px] lg:grid-cols-[1fr_400px] xl:grid-cols-[1.1fr_450px] gap-8 lg:gap-16 items-center justify-between">
            {/* Left Content */}
            <div className="max-w-2xl">
              {/* Badge */}
              <motion.div {...(shouldReduceMotion ? {} : fadeUp(0))} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#20405c] border border-white/10 text-white/90 text-xs sm:text-sm font-medium mb-6 backdrop-blur-sm shadow-sm">
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#4ade80] animate-pulse"></span> 🚕 Open Now — Bhubaneswar&apos;s #1 Taxi Service</span>
              </motion.div>

              {/* H1 */}
              <motion.h1
                {...(shouldReduceMotion ? {} : fadeUp(0.1))}
                className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-5 leading-[1.1]"
              >
                Best <span className="text-[#FFC107]">Taxi Service</span><br/>in Bhubaneswar
              </motion.h1>

              {/* Subtext */}
              <motion.p
                {...(shouldReduceMotion ? {} : fadeUp(0.2))}
                className="text-base sm:text-lg text-white/80 mb-6 max-w-xl leading-relaxed"
              >
                Voyage Travels – Trusted cab service in Bhubaneswar for <strong className="font-semibold text-white">airport transfers, Puri tours, Konark trips</strong> & local rides.
                <br />
                <span className="inline-block mt-2">Safe · Affordable · 24/7 Available.</span>
              </motion.p>

              {/* Checklist Pills */}
              <motion.div {...(shouldReduceMotion ? {} : fadeUp(0.25))} className="grid grid-cols-2 gap-2.5 mb-10 w-full max-w-lg lg:max-w-xl">
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white/90 text-[13px] font-medium w-full">
                  <span className="flex items-center justify-center w-4 h-4 shrink-0 rounded bg-[#22c55e] text-white text-[11px]">✓</span> No Hidden Charges
                </div>
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white/90 text-[13px] font-medium w-full">
                  <span className="flex items-center justify-center w-4 h-4 shrink-0 rounded bg-[#22c55e] text-white text-[11px]">✓</span> Verified Drivers
                </div>
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white/90 text-[13px] font-medium w-full">
                  <span className="flex items-center justify-center w-4 h-4 shrink-0 rounded bg-[#22c55e] text-white text-[11px]">✓</span> GPS Tracked
                </div>
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white/90 text-[13px] font-medium w-full">
                  <span className="flex items-center justify-center w-4 h-4 shrink-0 rounded bg-[#22c55e] text-white text-[11px]">✓</span> AC Vehicles
                </div>
              </motion.div>

              {/* CTAs */}
              <motion.div {...(shouldReduceMotion ? {} : fadeUp(0.3))} className="grid grid-cols-2 gap-3 sm:gap-4 mb-12 w-full max-w-lg lg:max-w-xl mx-auto sm:mx-0">
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  id="hero-call-btn"
                  className="flex items-center justify-center gap-2 px-2 sm:px-6 py-3.5 rounded-xl font-bold text-[14px] sm:text-[15px] text-[#111827] bg-[#FFC107] hover:bg-[#F5B600] transition-colors shadow-lg tap-feedback w-full"
                >
                  <Phone size={18} className="text-[#111827]" />
                  Call Now
                </a>
                <a
                  href={SITE_CONFIG.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-whatsapp-btn"
                  className="flex items-center justify-center gap-2 px-2 sm:px-6 py-3.5 rounded-xl font-bold text-[14px] sm:text-[15px] text-white bg-[#25D366] hover:bg-[#20bd5a] transition-colors shadow-lg tap-feedback w-full"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </a>
              </motion.div>

              {/* Stats Grid */}
              <motion.div {...(shouldReduceMotion ? {} : fadeUp(0.4))} className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-lg lg:max-w-xl">
                <div className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl bg-[#203a4f] border border-white/5 shadow-sm text-center">
                  <div className="text-xl mb-1">😊</div>
                  <div className="font-bold text-white text-lg">1000+</div>
                  <div className="text-[10px] text-white/60 font-medium">Happy Customers</div>
                </div>
                <div className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl bg-[#203a4f] border border-white/5 shadow-sm text-center">
                  <div className="text-xl mb-1 text-yellow-400">★</div>
                  <div className="font-bold text-white text-lg">4.9<span className="text-[13px] text-white/70">★</span></div>
                  <div className="text-[10px] text-white/60 font-medium">Google Rating</div>
                </div>
                <div className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl bg-[#203a4f] border border-white/5 shadow-sm text-center">
                  <div className="text-xl mb-1">🕛</div>
                  <div className="font-bold text-white text-lg">24/7</div>
                  <div className="text-[10px] text-white/60 font-medium">Available</div>
                </div>
                <div className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl bg-[#203a4f] border border-white/5 shadow-sm text-center">
                  <div className="flex items-center justify-center w-5 h-5 bg-[#22c55e] text-white text-[12px] rounded-sm mb-2">✓</div>
                  <div className="font-bold text-white text-lg">100%</div>
                  <div className="text-[10px] text-white/60 font-medium">Verified Drivers</div>
                </div>
              </motion.div>
            </div>

            {/* Right Content - Lead Form */}
            <motion.div 
              {...(shouldReduceMotion ? {} : fadeUp(0.3))}
              className="w-full md:justify-self-end mt-12 md:mt-0"
            >
              <HeroLeadForm />
            </motion.div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0 z-10 w-full overflow-hidden leading-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-[60px] block">
            <path d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 60Z" fill="#f4f7f9" />
          </svg>
        </div>
      </section>

      {/* ====== SERVICES GRID ====== */}
      <section className="section-container py-20" aria-labelledby="services-heading">
        <motion.div {...scrollReveal} className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-[#15456b] bg-[#15456b]/10 mb-4">Our Services</div>
          <h2 id="services-heading" className="text-3xl sm:text-4xl font-bold text-[#1C1C1E] mb-4">Everything You Need, One Reliable Service</h2>
          <p className="text-[#6B6B6E] max-w-2xl mx-auto">Whether you need a quick city ride or a multi-day outstation journey, our fleet and drivers are ready to take you there safely and comfortably.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.97 }}
              className="card-base p-6 group cursor-pointer"
            >
              <Link href={`/services/${service.slug}`}>
                <div className={`w-16 h-16 rounded-3xl flex items-center justify-center mb-5 text-3xl transition-transform group-hover:scale-110 border-4 ${SERVICE_ICONS[service.icon].bg} ${SERVICE_ICONS[service.icon].border} drop-shadow-sm`}>
                  {SERVICE_ICONS[service.icon].emoji}
                </div>
                <h3 className="font-bold text-lg text-[#1C1C1E] mb-2 group-hover:text-[#15456b] transition-colors">{service.title}</h3>
                <p className="text-sm text-[#6B6B6E] mb-4 leading-relaxed">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-[#15456b]">Starting {service.startingPrice}</span>
                  <ArrowRight size={16} className="text-[#15456b] transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ====== FLEET SECTION ====== */}
      <section className="py-20" style={{ background: "linear-gradient(180deg, #f4f7f9 0%, #F0EDE6 100%)" }} aria-labelledby="fleet-heading">
        <div className="section-container">
          <motion.div {...scrollReveal} className="text-center mb-12">
            <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-[#15456b] bg-[#15456b]/10 mb-4">Our Fleet</div>
            <h2 id="fleet-heading" className="text-3xl sm:text-4xl font-bold text-[#1C1C1E] mb-4">Choose Your Ride</h2>
            <p className="text-[#6B6B6E] max-w-2xl mx-auto">From compact sedans to spacious tempo travellers — every vehicle is AC-equipped, GPS-tracked, sanitized, and driven by a verified professional.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FLEET.map((vehicle, i) => (
              <motion.div
                key={vehicle.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.97 }}
                className="bg-white rounded-3xl border border-[#e2e8f0] shadow-md overflow-hidden group"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={vehicle.image}
                    alt={`${vehicle.name} cab for hire in Bhubaneswar`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-lg text-[#1C1C1E]">{vehicle.name}</h3>
                    <span className="text-sm font-bold text-[#15456b] bg-[#15456b]/10 px-2 py-1 rounded-lg">₹{vehicle.perKm}/km</span>
                  </div>
                  <p className="text-sm text-[#6B6B6E] mb-4">{vehicle.description}</p>

                  <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[#6B6B6E]">Local Package</span>
                      <span className="font-semibold text-[#1C1C1E]">{vehicle.localPackage}</span>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[#6B6B6E]">Airport One-Way</span>
                      <span className="font-semibold text-[#1C1C1E]">{vehicle.airportOneway}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {vehicle.features.map((f) => (
                      <span key={f} className="text-[10px] font-medium px-2 py-1 rounded-full bg-[#15456b]/8 text-[#15456b] border border-[#15456b]/20">{f}</span>
                    ))}
                    <span className="text-[10px] font-medium px-2 py-1 rounded-full bg-[#FFC107]/10 text-[#e0a800] border border-[#FFC107]/30">{vehicle.seating} Seats</span>
                  </div>

                  <div className="grid grid-cols-[1fr_3.25rem] gap-3">
                    <a
                      href={`tel:${SITE_CONFIG.phoneRaw}`}
                      className="flex items-center justify-center gap-2 w-full h-[3.25rem] rounded-xl text-sm font-semibold text-[#111827] bg-[#FFC107] hover:bg-[#F5B600] transition-all tap-feedback"
                    >
                      <Phone size={16} />
                      Call Now
                    </a>
                    <a
                      href={SITE_CONFIG.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-[3.25rem] h-[3.25rem] rounded-xl text-white transition-all tap-feedback bg-[#25D366] hover:bg-[#20bd5a]"
                      aria-label="Book on WhatsApp"
                    >
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...scrollReveal} className="text-center mt-8">
            <Link href="/fleet" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-[#15456b] border-2 border-[#15456b] hover:bg-[#15456b] hover:text-white transition-all tap-feedback">
              View Full Fleet Details <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ====== DESTINATIONS ====== */}
      <section className="section-container py-20" aria-labelledby="destinations-heading">
        <motion.div {...scrollReveal} className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-[#FFC107] bg-[#FFC107]/10 mb-4">Popular Routes</div>
          <h2 id="destinations-heading" className="text-3xl sm:text-4xl font-bold text-[#1C1C1E] mb-4">Explore Odisha with Us</h2>
          <p className="text-[#6B6B6E] max-w-2xl mx-auto">Every route, every destination — we know the roads of Odisha inside out. Book a one-way or round trip to any of these popular destinations.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DESTINATIONS.map((dest, i) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
              className="h-full"
            >
              <DestinationCard
                originCity="Bhubaneswar"
                destinationCity={dest.name}
                distanceKm={Number(dest.distance)}
                durationHrs={dest.duration}
                startingFare={dest.startingFare}
                vehicles={dest.vehicles}
                badge={dest.badge}
                label={dest.label}
                href={`/destinations/${dest.slug}`}
                whatsappMessage={`Hi, I want to book a cab from Bhubaneswar to ${dest.name}`}
              />
            </motion.div>
          ))}
        </div>

        <motion.div {...scrollReveal} className="text-center mt-8">
          <Link href="/destinations" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-[#15456b] border-2 border-[#15456b] hover:bg-[#15456b] hover:text-white transition-all tap-feedback">
            View All Destinations <ArrowRight size={16} />
          </Link>
        </motion.div>
      </section>

      {/* ====== WHY CHOOSE US ====== */}
      <section className="py-20" style={{ background: "linear-gradient(135deg, #0d2a40 0%, #15456b 100%)" }} aria-labelledby="why-us-heading">
        <div className="section-container">
          <motion.div {...scrollReveal} className="text-center mb-12">
            <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-[#FFC107] bg-[#FFC107]/20 mb-4">Why Choose Us</div>
            <h2 id="why-us-heading" className="text-3xl sm:text-4xl font-bold text-white mb-4">What Makes Us Different</h2>
            <p className="text-white/70 max-w-2xl mx-auto">We don&apos;t just drive you — we ensure every aspect of your journey is comfortable, safe, and stress-free from the moment you book.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {WHY_US.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.07, ease: "easeOut" }}
                whileHover={{ y: -4 }}
                className="rounded-2xl p-5 bg-white/10 border border-white/15 backdrop-blur-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FFC107]/20 border border-[#FFC107]/30 flex items-center justify-center text-[#FFC107] mb-3">
                  {WHY_ICONS[item.icon]}
                </div>
                <h3 className="font-bold text-white mb-1.5 text-sm">{item.title}</h3>
                <p className="text-white/60 text-xs leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== TESTIMONIALS ====== */}
      <section className="section-container py-20" aria-labelledby="testimonials-heading">
        <motion.div {...scrollReveal} className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-[#15456b] bg-[#15456b]/10 mb-4">Customer Reviews</div>
          <h2 id="testimonials-heading" className="text-3xl sm:text-4xl font-bold text-[#1C1C1E] mb-4">What Our Passengers Say</h2>
          <p className="text-[#6B6B6E] max-w-2xl mx-auto text-sm">
            [SAMPLE — REPLACE WITH REAL REVIEWS] These are placeholder reviews representing the kind of feedback we consistently receive from our customers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.07, ease: "easeOut" }}
              className="card-base p-5"
            >
              <div className="flex items-center gap-1 text-[#FFC107] mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} fill="currentColor" />
                ))}
              </div>
              <p className="text-sm text-[#6B6B6E] leading-relaxed mb-4 italic">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#15456b]/10 flex items-center justify-center text-[#15456b] font-bold text-sm flex-shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-sm text-[#1C1C1E]">{t.name}</div>
                  <div className="text-xs text-[#6B6B6E]">{t.city} · {t.service}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ====== PRICING TABLE ====== */}
      <section className="py-20" style={{ background: "#F0EDE6" }} aria-labelledby="pricing-heading">
        <div className="section-container">
          <motion.div {...scrollReveal} className="text-center mb-12">
            <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-[#15456b] bg-[#15456b]/10 mb-4">Transparent Pricing</div>
            <h2 id="pricing-heading" className="text-3xl sm:text-4xl font-bold text-[#1C1C1E] mb-4">No Hidden Charges, Ever</h2>
            <p className="text-[#6B6B6E] max-w-2xl mx-auto">All fares include fuel surcharge. Tolls, parking, and state permits (if any) are communicated before your trip.</p>
          </motion.div>

          <motion.div {...scrollReveal} className="overflow-x-auto rounded-2xl shadow-md">
            <table className="w-full bg-white text-sm border-collapse" role="table" aria-label="Cab fare pricing table">
              <thead>
                <tr style={{ background: "linear-gradient(135deg, #15456b, #206599)" }}>
                  <th className="text-left px-5 py-4 text-white font-semibold">Vehicle Type</th>
                  <th className="px-4 py-4 text-white font-semibold text-center">Per KM</th>
                  <th className="px-4 py-4 text-white font-semibold text-center">8hr / 80km</th>
                  <th className="px-4 py-4 text-white font-semibold text-center">Airport One-Way</th>
                  <th className="px-4 py-4 text-white font-semibold text-center">Capacity</th>
                </tr>
              </thead>
              <tbody>
                {FLEET.map((v, i) => (
                  <tr key={v.id} className={i % 2 === 0 ? "bg-white" : "bg-[#f4f7f9]"}>
                    <td className="px-5 py-4 font-medium text-[#1C1C1E]">{v.name}</td>
                    <td className="px-4 py-4 text-center text-[#15456b] font-semibold">₹{v.perKm}/km</td>
                    <td className="px-4 py-4 text-center text-[#6B6B6E]">{v.localPackage}</td>
                    <td className="px-4 py-4 text-center text-[#6B6B6E]">{v.airportOneway}</td>
                    <td className="px-4 py-4 text-center text-[#6B6B6E]">{v.seating} pax</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>
      {/* ====== BLOG CAROUSEL ====== */}
      <BlogCarousel />

      {/* ====== WHY CHOOSE US ====== */}
      <section className="section-container py-20 bg-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#15456b] mb-4">Why Choose Voyage Travels?</h2>
          <p className="text-[#6B6B6E] text-base md:text-lg max-w-2xl mx-auto">We don't just provide a ride; we provide peace of mind. Here is why thousands of travelers in Odisha trust our cab services.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-[#f8fafc] border border-gray-100 hover:shadow-lg transition-all">
            <div className="w-14 h-14 rounded-2xl bg-[#FFB800]/20 flex items-center justify-center mb-6">
              <ShieldCheck size={28} className="text-[#15456b]" />
            </div>
            <h3 className="text-xl font-bold text-[#1f2937] mb-3">100% Safe & Verified</h3>
            <p className="text-[#6B6B6E] leading-relaxed">All our drivers undergo strict background verification. Our fleet consists of well-maintained, sanitized, and GPS-tracked vehicles ensuring absolute safety for late-night airport drops and outstation trips.</p>
          </div>
          <div className="p-8 rounded-3xl bg-[#f8fafc] border border-gray-100 hover:shadow-lg transition-all">
            <div className="w-14 h-14 rounded-2xl bg-[#FFB800]/20 flex items-center justify-center mb-6">
              <BadgeCheck size={28} className="text-[#15456b]" />
            </div>
            <h3 className="text-xl font-bold text-[#1f2937] mb-3">No Hidden Charges</h3>
            <p className="text-[#6B6B6E] leading-relaxed">What we quote is what you pay. We strictly follow transparent pricing with zero hidden fees. Experience the most affordable and cheapest taxi service in Bhubaneswar without compromising on quality.</p>
          </div>
          <div className="p-8 rounded-3xl bg-[#f8fafc] border border-gray-100 hover:shadow-lg transition-all">
            <div className="w-14 h-14 rounded-2xl bg-[#FFB800]/20 flex items-center justify-center mb-6">
              <Clock size={28} className="text-[#15456b]" />
            </div>
            <h3 className="text-xl font-bold text-[#1f2937] mb-3">24/7 Availability</h3>
            <p className="text-[#6B6B6E] leading-relaxed">Flight landing at 2 AM? Sudden plan to visit Puri? No problem. Our cab service is fully operational 24 hours a day, 7 days a week, 365 days a year, always just a WhatsApp message away.</p>
          </div>
        </div>
      </section>


      {/* ====== FAQ SECTION ====== */}
      <section className="section-container py-20" aria-labelledby="faq-heading">
        <motion.div {...scrollReveal} className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-[#15456b] bg-[#15456b]/10 mb-4">FAQ</div>
          <h2 id="faq-heading" className="text-3xl sm:text-4xl font-bold text-[#1C1C1E] mb-4">Frequently Asked Questions</h2>
          <p className="text-[#6B6B6E] max-w-2xl mx-auto">Everything you need to know about booking a cab in Bhubaneswar answered simply and directly.</p>
        </motion.div>
        <div className="max-w-3xl mx-auto">
          <FAQAccordion faqs={FAQ as unknown as { q: string; a: string }[]} />
        </div>
      </section>



      {/* ====== QUOTE FORM ====== */}
      <section className="section-container py-20" aria-labelledby="quote-heading">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div {...scrollReveal}>
            <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-[#FFC107] bg-[#FFC107]/10 mb-4">Get a Quote</div>
            <h2 id="quote-heading" className="text-3xl sm:text-4xl font-bold text-[#1C1C1E] mb-4">Book Your Cab in 60 Seconds</h2>
            <p className="text-[#6B6B6E] mb-6 leading-relaxed">Fill in your trip details and we&apos;ll prepare a personalised WhatsApp quote instantly. No waiting, no lengthy forms — just fast, friendly service.</p>
            <div className="space-y-3">
              {["No booking fees or hidden charges", "24/7 instant WhatsApp response", "Confirmed driver details before pickup", "Free cancellation 2+ hours ahead"].map((p) => (
                <div key={p} className="flex items-center gap-2 text-sm text-[#6B6B6E]">
                  <div className="w-5 h-5 rounded-full bg-[#15456b]/15 flex items-center justify-center flex-shrink-0">
                    <BadgeCheck size={12} className="text-[#15456b]" />
                  </div>
                  {p}
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div {...scrollReveal}>
            <QuoteForm />
          </motion.div>
        </div>
      </section>

      {/* ====== SEO & POPULAR SEARCHES ====== */}
      <section className="bg-white border-t border-gray-100 py-12">
        <div className="section-container">
          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Popular Searches</h3>
          <div className="flex flex-wrap gap-2.5">
            {[
              "cab services in bhubaneswar",
              "Cheapest cab services in bhubaneswar",
              "Best taxi service in Bhubaneswar",
              "Top 10 taxi service in Bhubaneswar",
              "Taxi service in bhubaneswar for outstation",
              "Cheapest taxi service in Bhubaneswar",
              "Cab services in bhubaneswar price",
              "Government approved taxi fare in Bhubaneswar",
              "Bhubaneswar cab service contact number",
              "Best cab service in bhubaneswar to",
              "Cheap cab service in bhubaneswar to",
              "Cab service in bhubaneswar to price",
              "Taxi service in bhubaneswar airport",
              "taxi service in bhubaneswar to puri",
              "local taxi service in bhubaneswar",
              "airport taxi service in bhubaneswar",
              "cheapest taxi service in bhubaneswar for outstation",
              "top rated taxi service in bhubaneswar",
              "best outstation taxi service in bhubaneswar",
              "best taxi service in bhubaneswar odisha",
              "cab services from bhubaneswar to rourkela",
              "cab service from bhubaneswar to kolkata"
            ].map((kw, i) => {
              const slug = kw.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
              return (
                <Link 
                  key={i} 
                  href={`/search/${slug}`}
                  className="px-3 py-1.5 rounded-md bg-gray-50 border border-gray-100 text-xs font-medium text-[#15456b] hover:bg-[#15456b] hover:text-white transition-colors"
                >
                  {kw}
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
