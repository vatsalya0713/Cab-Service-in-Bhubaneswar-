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
      <section className="pt-24 pb-16" style={{ background: "linear-gradient(135deg, #0d2a40 0%, #15456b 100%)" }}>
        <div className="section-container">
          <Breadcrumbs items={[{ label: "Contact Us" }]} className="text-white/60 mb-6" />
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-white/70 max-w-2xl text-lg">We are available 24 hours a day, 7 days a week. Reach out on WhatsApp for the fastest response — most bookings are confirmed within minutes.</p>
        </div>
      </section>

      <section className="section-container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-[#1C1C1E] mb-6">Get in Touch</h2>

            <div className="space-y-4 mb-8">
              <a href={SITE_CONFIG.whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 card-base p-4 hover:-translate-y-0.5 transition-transform duration-200">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 text-white bg-[#25D366]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-[#1C1C1E]">WhatsApp (Fastest)</div>
                  <div className="text-sm text-[#6B6B6E]">{SITE_CONFIG.phone} — Instant Response</div>
                </div>
              </a>

              <a href={`tel:${SITE_CONFIG.phone}`} className="flex items-center gap-4 card-base p-4 hover:-translate-y-0.5 transition-transform duration-200">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 text-[#111827]" style={{ background: "linear-gradient(135deg, #FFC107, #F5B600)" }}>
                  <Phone size={22} />
                </div>
                <div>
                  <div className="font-bold text-[#1C1C1E]">Call Us</div>
                  <div className="text-sm text-[#6B6B6E]">{SITE_CONFIG.phone} — 24/7</div>
                </div>
              </a>

              <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-center gap-4 card-base p-4 hover:-translate-y-0.5 transition-transform duration-200">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 text-[#111827]" style={{ background: "linear-gradient(135deg, #FFC107, #F5B600)" }}>
                  <Mail size={22} />
                </div>
                <div>
                  <div className="font-bold text-[#1C1C1E]">Email</div>
                  <div className="text-sm text-[#6B6B6E]">{SITE_CONFIG.email}</div>
                </div>
              </a>

              <div className="flex items-start gap-4 card-base p-4">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 text-white bg-[#6B6B6E]">
                  <MapPin size={22} />
                </div>
                <div>
                  <div className="font-bold text-[#1C1C1E]">Office Address</div>
                  <div className="text-sm text-[#6B6B6E]">Bhubaneswar, Odisha — 751001, India<br />[REPLACE with exact office address]</div>
                </div>
              </div>

              <div className="flex items-center gap-4 card-base p-4">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 text-white bg-[#ffffff]">
                  <Clock size={22} />
                </div>
                <div>
                  <div className="font-bold text-[#1C1C1E]">Operating Hours</div>
                  <div className="text-sm text-[#6B6B6E]">Open 24 Hours · 7 Days a Week · 365 Days a Year</div>
                </div>
              </div>
            </div>

            {/* Google Maps placeholder */}
            <div className="rounded-2xl overflow-hidden h-64 bg-[#e2e8f0] flex items-center justify-center border border-[#e2e8f0]">
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
            <h2 className="text-2xl font-bold text-[#1C1C1E] mb-6">Send Us a Trip Enquiry</h2>
            <QuoteForm />
          </div>
        </div>
      </section>
    </div>
  );
}
