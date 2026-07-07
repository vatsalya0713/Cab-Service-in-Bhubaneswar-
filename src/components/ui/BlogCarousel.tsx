"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";

const BLOG_POSTS = [
  {
    id: "1",
    title: "Top 5 Places to Visit Near Bhubaneswar for a Weekend Getaway",
    excerpt: "Discover the best destinations around Bhubaneswar perfect for a short weekend trip with family and friends. From pristine beaches to ancient temples.",
    date: "July 12, 2026",
    image: "/images/blog/blog_places_getaway_1783419919518.png",
    category: "Travel Guide"
  },
  {
    id: "2",
    title: "How to Choose the Right Cab for Outstation Trips in Odisha",
    excerpt: "Planning a long trip to Puri or Chilika? Learn how to select the perfect vehicle type for your group size, budget, and comfort needs.",
    date: "July 5, 2026",
    image: "/images/blog/blog_outstation_cab_1783419931086.png",
    category: "Tips & Tricks"
  },
  {
    id: "3",
    title: "The Ultimate Guide to Bhubaneswar Airport Taxi Services",
    excerpt: "Everything you need to know about booking reliable, safe, and affordable airport transfers to and from Biju Patnaik International Airport.",
    date: "June 28, 2026",
    image: "/images/blog/blog_airport_taxi_1783419941750.png",
    category: "Services"
  },
  {
    id: "4",
    title: "Understanding Taxi Fares: Government Approved Rates in Odisha",
    excerpt: "A comprehensive breakdown of taxi pricing, tolls, and per-km charges so you can avoid hidden fees and travel with transparency.",
    date: "June 15, 2026",
    image: "/images/blog/blog_taxi_fares_1783419955798.png",
    category: "Pricing"
  }
];

export default function BlogCarousel() {
  return (
    <section className="py-16 md:py-24 bg-[#F8FAFC]">
      <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 md:mb-12 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#15456b] mb-4">Latest Travel Insights</h2>
            <p className="text-[#6B6B6E] text-base md:text-lg">Read our latest articles, guides, and tips for traveling around Bhubaneswar and Odisha.</p>
          </div>
          <Link href="/blog" className="hidden md:flex items-center gap-2 text-[#15456b] font-bold hover:text-[#FFB800] transition-colors group">
            View All Posts
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BLOG_POSTS.map((post, idx) => (
            <motion.div 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 group flex flex-col h-full"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image 
                  src={post.image} 
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-[#FFB800] text-[#15456b] text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                  {post.category}
                </div>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-3 font-medium">
                  <Calendar size={14} className="text-[#FFB800]" />
                  <span>{post.date}</span>
                </div>
                <h3 className="font-bold text-lg text-[#1f2937] leading-tight mb-2 group-hover:text-[#15456b] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3 flex-1">
                  {post.excerpt}
                </p>
                <Link href={`/blog/${post.id}`} className="text-[#15456b] text-sm font-bold flex items-center gap-1 mt-auto hover:text-[#FFB800] transition-colors w-fit">
                  Read Article <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-10 flex justify-center">
          <Link href="/blog" className="flex items-center gap-2 text-white font-bold bg-[#15456b] hover:bg-[#113654] px-8 py-3.5 rounded-xl transition-colors shadow-md">
            See More Articles <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
