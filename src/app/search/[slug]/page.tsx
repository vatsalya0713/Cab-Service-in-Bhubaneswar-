import { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import HeroLeadForm from "@/components/ui/HeroLeadForm";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { MapPin, ShieldCheck, Clock, BadgeCheck } from "lucide-react";

// Convert slug back to title
function slugToTitle(slug: string) {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const title = slugToTitle(params.slug);
  return {
    title: `${title} | Cab Service in Bhubaneswar`,
    description: `Looking for ${title.toLowerCase()}? We offer the best taxi and cab services in Bhubaneswar with transparent pricing, verified drivers, and 24/7 support.`,
    alternates: {
      canonical: `${SITE_CONFIG.url}/search/${params.slug}`,
    },
    openGraph: {
      title: `${title} - Cab Service`,
      description: `Book your ride today for ${title.toLowerCase()} with Voyage Travels.`,
      url: `${SITE_CONFIG.url}/search/${params.slug}`,
    },
  };
}

export default function SearchLandingPage({ params }: { params: { slug: string } }) {
  const title = slugToTitle(params.slug);

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-24 pb-16 min-h-[500px] flex items-center relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0d2a40 0%, #15456b 100%)" }}>
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none" />
        <div className="section-container relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 text-center lg:text-left">
              <Breadcrumbs items={[{ label: title }]} className="text-white/60 mb-6 justify-center lg:justify-start" />
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white text-sm font-medium border border-white/20 mb-6">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#25D366]"></span>
                </span>
                Available for Booking
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.15] mb-6 tracking-tight">
                {title}
              </h1>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
                You're looking for the best <strong>{title.toLowerCase()}</strong>. We provide premium cab services, verified drivers, and transparent pricing in and around Bhubaneswar.
              </p>
              
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-sm text-white/90">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"><ShieldCheck size={16} className="text-[#FFC107]" /></div>
                  <span className="font-medium">Verified Drivers</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"><Clock size={16} className="text-[#FFC107]" /></div>
                  <span className="font-medium">24/7 Service</span>
                </div>
              </div>
            </div>
            
            <div className="w-full max-w-[420px] lg:max-w-[460px] flex-shrink-0 animate-in fade-in slide-in-from-right-8 duration-700">
              <HeroLeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#15456b] mb-4">Why Book With Us?</h2>
            <p className="text-gray-600 text-lg">We guarantee the best experience for your journey, ensuring safety, comfort, and affordability every time you ride with us.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#f8fafc] p-8 rounded-2xl border border-gray-100 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#15456b]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin size={32} className="text-[#15456b]" />
              </div>
              <h3 className="text-xl font-bold text-[#1C1C1E] mb-3">On-Time Pickup</h3>
              <p className="text-gray-600">Our drivers always arrive exactly at the designated pickup location on time, ensuring you never miss a flight, train, or meeting.</p>
            </div>
            <div className="bg-[#f8fafc] p-8 rounded-2xl border border-gray-100 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#15456b]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <BadgeCheck size={32} className="text-[#15456b]" />
              </div>
              <h3 className="text-xl font-bold text-[#1C1C1E] mb-3">Transparent Pricing</h3>
              <p className="text-gray-600">What you see is what you pay. We don't believe in hidden charges, surge pricing, or last-minute fee hikes.</p>
            </div>
            <div className="bg-[#f8fafc] p-8 rounded-2xl border border-gray-100 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#15456b]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheck size={32} className="text-[#15456b]" />
              </div>
              <h3 className="text-xl font-bold text-[#1C1C1E] mb-3">Safe & Verified</h3>
              <p className="text-gray-600">All our vehicles are regularly inspected, and our drivers go through rigorous background checks before they hit the road.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
