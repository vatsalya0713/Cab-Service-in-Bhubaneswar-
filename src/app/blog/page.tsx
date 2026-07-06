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
  },
  {
    slug: "konark-sun-temple-visit-guide",
    title: "Visiting the Konark Sun Temple: Tips for First-Time Visitors",
    excerpt: "How to make the most of your visit to the UNESCO World Heritage Konark Sun Temple — what to see, best visiting times, and how to book a cab from Bhubaneswar.",
    date: "2024-11-28",
    readTime: "4 min read",
    category: "Travel Guide",
  },
  {
    slug: "chilika-lake-dolphin-spotting",
    title: "Dolphin Spotting at Chilika Lake: Your Complete Guide",
    excerpt: "Chilika Lake is home to rare Irrawaddy dolphins. Here is how to plan your dolphin-spotting day trip from Bhubaneswar with our outstation cab service.",
    date: "2024-11-10",
    readTime: "6 min read",
    category: "Nature",
  },
  {
    slug: "corporate-cab-rental-bhubaneswar",
    title: "Why Monthly Corporate Cab Rental Makes Business Sense in Bhubaneswar",
    excerpt: "A detailed breakdown of the cost savings, reliability benefits, and employee satisfaction improvements that come with a dedicated corporate cab contract.",
    date: "2024-10-22",
    readTime: "4 min read",
    category: "Corporate",
  },
  {
    slug: "airport-cab-bhubaneswar-guide",
    title: "Airport Cab Bhubaneswar: Booking, Timing & Fare Guide",
    excerpt: "Everything you need to know about booking an airport cab at Biju Patnaik International Airport — when to book, which vehicle to choose, and what to expect.",
    date: "2024-10-05",
    readTime: "3 min read",
    category: "Airport",
  },
  {
    slug: "odisha-golden-triangle-tour",
    title: "The Odisha Golden Triangle: Bhubaneswar, Puri & Konark in One Day",
    excerpt: "How to plan the perfect one-day Odisha Golden Triangle road trip — covering all three iconic destinations with a single well-planned cab journey.",
    date: "2024-09-18",
    readTime: "5 min read",
    category: "Tour Guide",
  },
];

export default function BlogPage() {
  return (
    <div>
      <section className="pt-24 pb-16" style={{ background: "linear-gradient(135deg, #A5811C 0%, #C9A227 100%)" }}>
        <div className="section-container">
          <Breadcrumbs items={[{ label: "Blog" }]} className="text-white/60 mb-6" />
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Travel Tips & Guides</h1>
          <p className="text-white/70 max-w-2xl text-lg">Route guides, destination insights, and cab travel tips from Bhubaneswar — everything you need to plan your next Odisha journey.</p>
        </div>
      </section>

      <section className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="card-base p-6 group hover:-translate-y-1.5 transition-transform duration-200 block">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#C9A227]/10 text-[#C9A227]">{post.category}</span>
                <span className="text-xs text-[#9BA3AE] flex items-center gap-1"><Clock size={11} /> {post.readTime}</span>
              </div>
              <h2 className="font-bold text-lg text-[#F5F1E8] mb-2 group-hover:text-[#C9A227] transition-colors leading-snug">{post.title}</h2>
              <p className="text-sm text-[#9BA3AE] leading-relaxed mb-4">{post.excerpt}</p>
              <span className="text-xs text-[#9BA3AE]">{new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
