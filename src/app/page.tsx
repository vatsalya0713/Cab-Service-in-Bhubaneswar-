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
import FAQAccordion from "@/components/ui/FAQAccordion";
import QuoteForm from "@/components/ui/QuoteForm";
import { SITE_CONFIG, FLEET, DESTINATIONS, SERVICES, WHY_US, FAQ } from "@/lib/constants";

const STATS = [
  { value: 10000, suffix: "+", label: "Rides Completed" },
  { value: 48, suffix: "★", label: "Avg Rating", prefix: "" },
  { value: 24, suffix: "/7", label: "Availability" },
  { value: 100, suffix: "%", label: "Verified Drivers" },
  { value: 6, suffix: "+", label: "Years Experience" },
  { value: 11, suffix: "/km", label: "Starting Fare ₹" },
];

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  MapPin: <MapPin size={24} />,
  Plane: <Plane size={24} />,
  Route: <Route size={24} />,
  Briefcase: <Briefcase size={24} />,
  Heart: <Heart size={24} />,
  Star: <Star size={24} />,
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
      <section className="relative min-h-[100svh] flex items-center" style={{ background: "linear-gradient(135deg, #0F4C4C 0%, #136F63 50%, #1A5F55 100%)" }}>
        {/* Hero BG Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-banner.jpg"
            alt="Cab service in Bhubaneswar — a cab driving on city road at golden hour"
            fill
            className="object-cover mix-blend-overlay opacity-40"
            priority
            sizes="100vw"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F4C4C]/90 via-[#0F4C4C]/70 to-transparent" />
        </div>

        {/* Decorative circles */}
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-[#F2A93B]/10 blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-white/5 blur-2xl" aria-hidden="true" />

        <div className="section-container relative z-10 pt-24 pb-16">
          <div className="max-w-3xl">
            {/* Badge */}
            <motion.div {...(shouldReduceMotion ? {} : fadeUp(0))} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F2A93B]/20 border border-[#F2A93B]/40 text-[#F7C46C] text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-[#F2A93B] animate-pulse" />
              Bhubaneswar&apos;s Trusted Ride Partner · Available 24/7
            </motion.div>

            {/* H1 */}
            <motion.h1
              {...(shouldReduceMotion ? {} : fadeUp(0.1))}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight"
            >
              Your Reliable{" "}
              <span className="text-[#F2A93B]">Cab Service</span>{" "}
              in Bhubaneswar — Anytime, Anywhere
            </motion.h1>

            {/* Subtext */}
            <motion.p
              {...(shouldReduceMotion ? {} : fadeUp(0.2))}
              className="text-lg text-white/80 mb-8 max-w-2xl leading-relaxed"
            >
              From quick local city rides and airport transfers to scenic outstation trips through Puri, Konark, and Chilika — we provide safe, comfortable, and transparent cab services across Odisha with fully verified drivers.
            </motion.p>

            {/* CTAs */}
            <motion.div {...(shouldReduceMotion ? {} : fadeUp(0.3))} className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href={SITE_CONFIG.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-whatsapp-btn"
                className="flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl font-bold text-base text-white shadow-lg transition-all tap-feedback"
                style={{ background: "linear-gradient(135deg, #F2A93B, #D98F1F)" }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Book on WhatsApp
              </a>
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                id="hero-call-btn"
                className="flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl font-bold text-base text-white border-2 border-white/30 hover:border-white/60 hover:bg-white/10 transition-all tap-feedback"
              >
                <Phone size={20} />
                Call Now
              </a>
            </motion.div>

            {/* Stats Strip */}
            <motion.div {...(shouldReduceMotion ? {} : fadeUp(0.4))}>
              <StatsCounter stats={STATS} />
            </motion.div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 60Z" fill="#FAF7F2"/>
          </svg>
        </div>
      </section>

      {/* ====== SERVICES GRID ====== */}
      <section className="section-container py-20" aria-labelledby="services-heading">
        <motion.div {...scrollReveal} className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-[#136F63] bg-[#136F63]/10 mb-4">Our Services</div>
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
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 text-white transition-transform group-hover:scale-110"
                  style={{ background: "linear-gradient(135deg, #136F63, #1E8F7F)" }}>
                  {SERVICE_ICONS[service.icon]}
                </div>
                <h3 className="font-bold text-lg text-[#1C1C1E] mb-2 group-hover:text-[#136F63] transition-colors">{service.title}</h3>
                <p className="text-sm text-[#6B6B6E] mb-4 leading-relaxed">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-[#136F63]">Starting {service.startingPrice}</span>
                  <ArrowRight size={16} className="text-[#136F63] transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ====== FLEET SECTION ====== */}
      <section className="py-20" style={{ background: "linear-gradient(180deg, #FAF7F2 0%, #F0EDE6 100%)" }} aria-labelledby="fleet-heading">
        <div className="section-container">
          <motion.div {...scrollReveal} className="text-center mb-12">
            <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-[#136F63] bg-[#136F63]/10 mb-4">Our Fleet</div>
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
                className="bg-white rounded-3xl border border-[#E7E2D8] shadow-md overflow-hidden group"
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
                    <span className="text-sm font-bold text-[#136F63] bg-[#136F63]/10 px-2 py-1 rounded-lg">₹{vehicle.perKm}/km</span>
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
                      <span key={f} className="text-[10px] font-medium px-2 py-1 rounded-full bg-[#136F63]/8 text-[#136F63] border border-[#136F63]/20">{f}</span>
                    ))}
                    <span className="text-[10px] font-medium px-2 py-1 rounded-full bg-[#F2A93B]/10 text-[#D98F1F] border border-[#F2A93B]/30">{vehicle.seating} Seats</span>
                  </div>

                  <a
                    href={SITE_CONFIG.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold text-white transition-all tap-feedback"
                    style={{ background: "linear-gradient(135deg, #136F63, #1E8F7F)" }}
                  >
                    Book this Vehicle
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...scrollReveal} className="text-center mt-8">
            <Link href="/fleet" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-[#136F63] border-2 border-[#136F63] hover:bg-[#136F63] hover:text-white transition-all tap-feedback">
              View Full Fleet Details <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ====== DESTINATIONS ====== */}
      <section className="section-container py-20" aria-labelledby="destinations-heading">
        <motion.div {...scrollReveal} className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-[#F2A93B] bg-[#F2A93B]/10 mb-4">Popular Routes</div>
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
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.97 }}
              className="bg-white rounded-3xl border border-[#E7E2D8] shadow-md overflow-hidden group"
            >
              <Link href={`/destinations/${dest.slug}`}>
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={dest.image}
                    alt={`Cab from Bhubaneswar to ${dest.name} — ${dest.description}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="text-white font-bold text-lg">{dest.name}</span>
                  </div>
                  <div className="absolute top-3 right-3 bg-[#F2A93B] text-white text-xs font-bold px-2.5 py-1 rounded-lg">
                    From {dest.startingFare}
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm text-[#6B6B6E] mb-3 leading-relaxed">{dest.description}</p>
                  <div className="flex items-center gap-4 text-xs text-[#6B6B6E]">
                    <span className="flex items-center gap-1"><MapPin size={12} className="text-[#136F63]" /> {dest.distance}</span>
                    <span className="flex items-center gap-1"><Clock size={12} className="text-[#136F63]" /> {dest.duration}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div {...scrollReveal} className="text-center mt-8">
          <Link href="/destinations" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-[#136F63] border-2 border-[#136F63] hover:bg-[#136F63] hover:text-white transition-all tap-feedback">
            View All Destinations <ArrowRight size={16} />
          </Link>
        </motion.div>
      </section>

      {/* ====== WHY CHOOSE US ====== */}
      <section className="py-20" style={{ background: "linear-gradient(135deg, #0F4C4C 0%, #136F63 100%)" }} aria-labelledby="why-us-heading">
        <div className="section-container">
          <motion.div {...scrollReveal} className="text-center mb-12">
            <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-[#F2A93B] bg-[#F2A93B]/20 mb-4">Why Choose Us</div>
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
                <div className="w-10 h-10 rounded-xl bg-[#F2A93B]/20 border border-[#F2A93B]/30 flex items-center justify-center text-[#F2A93B] mb-3">
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
          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-[#136F63] bg-[#136F63]/10 mb-4">Customer Reviews</div>
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
              <div className="flex items-center gap-1 text-[#F2A93B] mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} fill="currentColor" />
                ))}
              </div>
              <p className="text-sm text-[#6B6B6E] leading-relaxed mb-4 italic">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#136F63]/10 flex items-center justify-center text-[#136F63] font-bold text-sm flex-shrink-0">
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
            <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-[#136F63] bg-[#136F63]/10 mb-4">Transparent Pricing</div>
            <h2 id="pricing-heading" className="text-3xl sm:text-4xl font-bold text-[#1C1C1E] mb-4">No Hidden Charges, Ever</h2>
            <p className="text-[#6B6B6E] max-w-2xl mx-auto">All fares include fuel surcharge. Tolls, parking, and state permits (if any) are communicated before your trip.</p>
          </motion.div>

          <motion.div {...scrollReveal} className="overflow-x-auto rounded-2xl shadow-md">
            <table className="w-full bg-white text-sm border-collapse" role="table" aria-label="Cab fare pricing table">
              <thead>
                <tr style={{ background: "linear-gradient(135deg, #136F63, #1E8F7F)" }}>
                  <th className="text-left px-5 py-4 text-white font-semibold">Vehicle Type</th>
                  <th className="px-4 py-4 text-white font-semibold text-center">Per KM</th>
                  <th className="px-4 py-4 text-white font-semibold text-center">8hr / 80km</th>
                  <th className="px-4 py-4 text-white font-semibold text-center">Airport One-Way</th>
                  <th className="px-4 py-4 text-white font-semibold text-center">Capacity</th>
                </tr>
              </thead>
              <tbody>
                {FLEET.map((v, i) => (
                  <tr key={v.id} className={i % 2 === 0 ? "bg-white" : "bg-[#FAF7F2]"}>
                    <td className="px-5 py-4 font-medium text-[#1C1C1E]">{v.name}</td>
                    <td className="px-4 py-4 text-center text-[#136F63] font-semibold">₹{v.perKm}/km</td>
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

      {/* ====== FAQ SECTION ====== */}
      <section className="section-container py-20" aria-labelledby="faq-heading">
        <motion.div {...scrollReveal} className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-[#136F63] bg-[#136F63]/10 mb-4">FAQ</div>
          <h2 id="faq-heading" className="text-3xl sm:text-4xl font-bold text-[#1C1C1E] mb-4">Frequently Asked Questions</h2>
          <p className="text-[#6B6B6E] max-w-2xl mx-auto">Everything you need to know about booking a cab in Bhubaneswar answered simply and directly.</p>
        </motion.div>
        <div className="max-w-3xl mx-auto">
          <FAQAccordion faqs={FAQ as unknown as { q: string; a: string }[]} />
        </div>
      </section>

      {/* ====== ABOUT / OUR GROUP SECTION ====== */}
      <section className="py-20" style={{ background: "#F0EDE6" }} aria-labelledby="about-group-heading">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div {...scrollReveal}>
              <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-[#136F63] bg-[#136F63]/10 mb-4">Our Group</div>
              <h2 id="about-group-heading" className="text-3xl sm:text-4xl font-bold text-[#1C1C1E] mb-4">Part of Aspira Med Group</h2>
              <p className="text-[#6B6B6E] leading-relaxed mb-4">
                Cab Service in Bhubaneswar is a proud venture of <strong className="text-[#1C1C1E]">Aspira Med Group</strong> — a diversified Odisha-based conglomerate with interests spanning healthcare, travel, and digital innovation. Aspira Med Group&apos;s mission is to deliver world-class services that make life better for people across the region.
              </p>
              <p className="text-[#6B6B6E] leading-relaxed mb-6">
                The group&apos;s digital marketing and web technology arm, <a href="https://www.zoomdigital.in/" target="_blank" rel="noopener noreferrer" className="text-[#136F63] font-semibold hover:underline">ZoomDigital.in</a>, powers the online presence of all Aspira ventures, combining strategic marketing with beautiful, high-performance digital experiences.
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white tap-feedback" style={{ background: "linear-gradient(135deg, #136F63, #1E8F7F)" }}>
                Learn More About Us <ArrowRight size={16} />
              </Link>
            </motion.div>
            <motion.div
              {...scrollReveal}
              className="relative"
            >
              <div className="relative h-80 rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/images/about-team.jpg"
                  alt="Aspira Med Group team working in Bhubaneswar office"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg p-4 border border-[#E7E2D8]">
                <div className="text-2xl font-bold text-[#136F63]">6+</div>
                <div className="text-xs text-[#6B6B6E]">Years in Service</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====== QUOTE FORM ====== */}
      <section className="section-container py-20" aria-labelledby="quote-heading">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div {...scrollReveal}>
            <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-[#F2A93B] bg-[#F2A93B]/10 mb-4">Get a Quote</div>
            <h2 id="quote-heading" className="text-3xl sm:text-4xl font-bold text-[#1C1C1E] mb-4">Book Your Cab in 60 Seconds</h2>
            <p className="text-[#6B6B6E] mb-6 leading-relaxed">Fill in your trip details and we&apos;ll prepare a personalised WhatsApp quote instantly. No waiting, no lengthy forms — just fast, friendly service.</p>
            <div className="space-y-3">
              {["No booking fees or hidden charges", "24/7 instant WhatsApp response", "Confirmed driver details before pickup", "Free cancellation 2+ hours ahead"].map((p) => (
                <div key={p} className="flex items-center gap-2 text-sm text-[#6B6B6E]">
                  <div className="w-5 h-5 rounded-full bg-[#136F63]/15 flex items-center justify-center flex-shrink-0">
                    <BadgeCheck size={12} className="text-[#136F63]" />
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

      {/* ====== FINAL CTA BANNER ====== */}
      <section className="py-16" style={{ background: "linear-gradient(135deg, #0F4C4C 0%, #136F63 100%)" }} aria-labelledby="cta-heading">
        <div className="section-container text-center">
          <motion.div {...scrollReveal}>
            <h2 id="cta-heading" className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Go? We&apos;re Always On.</h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">Our cabs are available 24 hours a day, 7 days a week, 365 days a year — rain or shine, festival or holiday.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={SITE_CONFIG.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                id="footer-cta-whatsapp"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-[#0F4C4C] text-base transition-all tap-feedback"
                style={{ background: "linear-gradient(135deg, #F2A93B, #F7C46C)" }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Book on WhatsApp
              </a>
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                id="footer-cta-call"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-base border-2 border-white/30 hover:border-white hover:bg-white/10 transition-all tap-feedback"
              >
                <Phone size={20} />
                {SITE_CONFIG.phone}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
