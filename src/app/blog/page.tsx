import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Cab Service Blog | Tips, Routes & Odisha Travel Guides",
  description: "Travel tips, route guides, and Odisha destination guides from Cab Service in Bhubaneswar. Read our blog for cab fare tips, pilgrimage planning, and more.",
  alternates: { canonical: `${SITE_CONFIG.url}/blog` },
  openGraph: { title: "Blog | Cab Service in Bhubaneswar", url: `${SITE_CONFIG.url}/blog`, images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }] },
  other: { "geo.region": "IN-OR", "geo.placename": "Bhubaneswar", "geo.position": "20.2961;85.8245", "ICBM": "20.2961, 85.8245" },
};

const BLOG_POSTS = [
  {
    slug: "bhubaneswar-to-puri-travel-guide",
    title: "Bhubaneswar to Puri by Cab: A Complete Travel Guide",
    excerpt: "Everything you need to know about travelling from Bhubaneswar to Puri by cab — best time to visit, places to see, fare breakdown, and travel tips.",
    date: "2024-12-15",
    readTime: "5 min read",
    category: "Travel Guide",
    image: "/images/blog/blog_places_getaway_1783419919518.png"
  },
  {
    slug: "konark-sun-temple-visit-guide",
    title: "Visiting the Konark Sun Temple: Tips for First-Time Visitors",
    excerpt: "How to make the most of your visit to the UNESCO World Heritage Konark Sun Temple — what to see, best visiting times, and how to book a cab from Bhubaneswar.",
    date: "2024-11-28",
    readTime: "4 min read",
    category: "Travel Guide",
    image: "/images/blog/blog_outstation_cab_1783419931086.png"
  },
  {
    slug: "chilika-lake-dolphin-spotting",
    title: "Dolphin Spotting at Chilika Lake: Your Complete Guide",
    excerpt: "Chilika Lake is home to rare Irrawaddy dolphins. Here is how to plan your dolphin-spotting day trip from Bhubaneswar with our outstation cab service.",
    date: "2024-11-10",
    readTime: "6 min read",
    category: "Nature",
    image: "/images/blog/blog_airport_taxi_1783419941750.png"
  },
  {
    slug: "corporate-cab-rental-bhubaneswar",
    title: "Why Monthly Corporate Cab Rental Makes Business Sense in Bhubaneswar",
    excerpt: "A detailed breakdown of the cost savings, reliability benefits, and employee satisfaction improvements that come with a dedicated corporate cab contract.",
    date: "2024-10-22",
    readTime: "4 min read",
    category: "Corporate",
    image: "/images/blog/blog_taxi_fares_1783419955798.png"
  },
  {
    slug: "airport-cab-bhubaneswar-guide",
    title: "Airport Cab Bhubaneswar: Booking, Timing & Fare Guide",
    excerpt: "Everything you need to know about booking an airport cab at Biju Patnaik International Airport — when to book, which vehicle to choose, and what to expect.",
    date: "2024-10-05",
    readTime: "3 min read",
    category: "Airport",
    image: "/images/blog/blog_places_getaway_1783419919518.png"
  },
  {
    slug: "odisha-golden-triangle-tour",
    title: "The Odisha Golden Triangle: Bhubaneswar, Puri & Konark in One Day",
    excerpt: "How to plan the perfect one-day Odisha Golden Triangle road trip — covering all three iconic destinations with a single well-planned cab journey.",
    date: "2024-09-18",
    readTime: "5 min read",
    category: "Tour Guide",
    image: "/images/blog/blog_outstation_cab_1783419931086.png"
  }
];

export default function BlogPage() {
  return (
    <div>
      <section className="pt-24 pb-16" style={{ background: "linear-gradient(135deg, #0d2a40 0%, #15456b 100%)" }}>
        <div className="section-container">
          <Breadcrumbs items={[{ label: "Blog" }]} className="text-white/60 mb-6" />
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Travel Tips & Guides</h1>
          <p className="text-white/70 max-w-2xl text-lg">Route guides, destination insights, and cab travel tips from Bhubaneswar — everything you need to plan your next Odisha journey.</p>
        </div>
      </section>

      <section className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 group flex flex-col h-full">
              <div className="relative h-48 w-full overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-[#FFB800] text-[#15456b] text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                  {post.category}
                </div>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-3 font-medium">
                  <Clock size={14} className="text-[#FFB800]" />
                  <span>{post.readTime}</span>
                </div>
                <h2 className="font-bold text-lg text-[#1f2937] mb-2 group-hover:text-[#15456b] transition-colors leading-snug line-clamp-2">{post.title}</h2>
                <p className="text-sm text-[#6B6B6E] leading-relaxed mb-4 line-clamp-3 flex-1">{post.excerpt}</p>
                <span className="text-xs text-[#6B6B6E] font-medium">{new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
