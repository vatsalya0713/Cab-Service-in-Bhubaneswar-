import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_CONFIG.url;
  const now = new Date();

  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "daily", priority: 1.0 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/services/local-taxi`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/services/airport-taxi`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/services/outstation-taxi`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/services/corporate-rental`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/services/wedding-cars`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/fleet`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/destinations`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/destinations/bhubaneswar-to-puri`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${base}/destinations/bhubaneswar-to-konark`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${base}/destinations/bhubaneswar-to-chilika`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${base}/destinations/bhubaneswar-to-cuttack`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${base}/destinations/bhubaneswar-to-gopalpur`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/destinations/bhubaneswar-to-berhampur`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/packages`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/gallery`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}
