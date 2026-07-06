import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import QuoteForm from "@/components/ui/QuoteForm";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Cab Service in Bhubaneswar | WhatsApp, Phone & Address",
  description: "Contact Cab Service in Bhubaneswar — call or WhatsApp 24/7 to book a cab, get a quote, or enquire about our services. Office located in Bhubaneswar, Odisha.",
  alternates: { canonical: `${SITE_CONFIG.url}/contact` },
  openGraph: { title: "Contact Cab Service in Bhubaneswar", url: `${SITE_CONFIG.url}/contact`, images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }] },
  other: { "geo.region": "IN-OR", "geo.placename": "Bhubaneswar", "geo.position": "20.2961;85.8245", "ICBM": "20.2961, 85.8245" },
};

export default function ContactPage() {
  return (
    <div>
      <section className="pt-24 pb-16" style={{ background: "linear-gradient(135deg, #A5811C 0%, #C9A227 100%)" }}>
        <div className="section-container">
          <Breadcrumbs items={[{ label: "Contact Us" }]} className="text-white/60 mb-6" />
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-white/70 max-w-2xl text-lg">We are available 24 hours a day, 7 days a week. Reach out on WhatsApp for the fastest response — most bookings are confirmed within minutes.</p>
        </div>
      </section>

      <section className="section-container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-[#F5F1E8] mb-6">Get in Touch</h2>

            <div className="space-y-4 mb-8">
              <a href={SITE_CONFIG.whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 card-base p-4 hover:-translate-y-0.5 transition-transform duration-200">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 text-[#0B0E11]" style={{ background: "linear-gradient(135deg, #C9A227, #A5811C)" }}>
                  <MessageCircle size={22} />
                </div>
                <div>
                  <div className="font-bold text-[#F5F1E8]">WhatsApp (Fastest)</div>
                  <div className="text-sm text-[#C9A227]">{SITE_CONFIG.phone} — Instant Response</div>
                </div>
              </a>

              <a href={`tel:${SITE_CONFIG.phone}`} className="flex items-center gap-4 card-base p-4 hover:-translate-y-0.5 transition-transform duration-200">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 text-[#0B0E11]" style={{ background: "linear-gradient(135deg, #C9A227, #D9B84A)" }}>
                  <Phone size={22} />
                </div>
                <div>
                  <div className="font-bold text-[#F5F1E8]">Call Us</div>
                  <div className="text-sm text-[#C9A227]">{SITE_CONFIG.phone} — 24/7</div>
                </div>
              </a>

              <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-center gap-4 card-base p-4 hover:-translate-y-0.5 transition-transform duration-200">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 text-[#0B0E11]" style={{ background: "linear-gradient(135deg, #C9A227, #A5811C)" }}>
                  <Mail size={22} />
                </div>
                <div>
                  <div className="font-bold text-[#F5F1E8]">Email</div>
                  <div className="text-sm text-[#9BA3AE]">{SITE_CONFIG.email}</div>
                </div>
              </a>

              <div className="flex items-start gap-4 card-base p-4">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 text-white bg-[#9BA3AE]">
                  <MapPin size={22} />
                </div>
                <div>
                  <div className="font-bold text-[#F5F1E8]">Office Address</div>
                  <div className="text-sm text-[#9BA3AE]">Bhubaneswar, Odisha — 751001, India<br />[REPLACE with exact office address]</div>
                </div>
              </div>

              <div className="flex items-center gap-4 card-base p-4">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 text-white bg-[#F5F1E8]">
                  <Clock size={22} />
                </div>
                <div>
                  <div className="font-bold text-[#F5F1E8]">Operating Hours</div>
                  <div className="text-sm text-[#9BA3AE]">Open 24 Hours · 7 Days a Week · 365 Days a Year</div>
                </div>
              </div>
            </div>

            {/* Google Maps placeholder */}
            <div className="rounded-2xl overflow-hidden h-64 bg-[#23272C] flex items-center justify-center border border-[#23272C]">
              <iframe
                title="Cab Service in Bhubaneswar — Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119743.75706060756!2d85.75843!3d20.29598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190896aa0d07a5%3A0x9e7bb2ccb9eb0e4d!2sBhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1704000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#F5F1E8] mb-6">Send Us a Trip Enquiry</h2>
            <QuoteForm />
          </div>
        </div>
      </section>
    </div>
  );
}
