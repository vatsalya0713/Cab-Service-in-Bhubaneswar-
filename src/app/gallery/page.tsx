import type { Metadata } from "next";
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/constants";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Gallery | Cab Service in Bhubaneswar — Fleet & Destinations",
  description: "Browse our photo gallery showcasing our cab fleet, beautiful Odisha destinations, professional drivers, and happy customers. Book your cab in Bhubaneswar today.",
  alternates: { canonical: `${SITE_CONFIG.url}/gallery` },
  openGraph: { title: "Gallery | Cab Service in Bhubaneswar", url: `${SITE_CONFIG.url}/gallery`, images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }] },
  other: { "geo.region": "IN-OR", "geo.placename": "Bhubaneswar", "geo.position": "20.2961;85.8245", "ICBM": "20.2961, 85.8245" },
};

const GALLERY_IMAGES = [
  { src: "/images/gallery-1.jpg", alt: "Professional cab driver opening door for passengers in Bhubaneswar" },
  { src: "/images/gallery-2.jpg", alt: "Clean, comfortable cab interior with AC and GPS in Bhubaneswar" },
  { src: "/images/gallery-3.jpg", alt: "Happy Indian family boarding SUV cab for outstation trip from Bhubaneswar" },
  { src: "/images/gallery-4.jpg", alt: "Premium white SUV cab at hotel entrance — luxury cab service in Bhubaneswar" },
  { src: "/images/gallery-5.jpg", alt: "Jagannath Temple Puri — popular outstation destination from Bhubaneswar" },
  { src: "/images/gallery-6.jpg", alt: "Professional team at Aspira Med Group Bhubaneswar office" },
  { src: "/images/fleet-sedan.jpg", alt: "White sedan cab — ₹11/km city taxi in Bhubaneswar" },
  { src: "/images/fleet-muv.jpg", alt: "Silver MUV minivan — 7-seater family cab in Bhubaneswar" },
  { src: "/images/dest-konark.jpg", alt: "Konark Sun Temple chariot wheel — day trip destination from Bhubaneswar" },
  { src: "/images/dest-chilika.jpg", alt: "Chilika Lake fishermen at sunset — book outstation cab from Bhubaneswar" },
  { src: "/images/dest-cuttack.jpg", alt: "Barabati Fort Cuttack — popular day trip from Bhubaneswar" },
  { src: "/images/dest-gopalpur.jpg", alt: "Gopalpur beach at golden hour — book cab from Bhubaneswar to Gopalpur" },
];

export default function GalleryPage() {
  return (
    <div>
      <section className="pt-24 pb-16" style={{ background: "linear-gradient(135deg, #0d2a40 0%, #15456b 100%)" }}>
        <div className="section-container">
          <Breadcrumbs items={[{ label: "Gallery" }]} className="text-white/60 mb-6" />
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Gallery</h1>
          <p className="text-white/70 max-w-2xl text-lg">A visual tour of our fleet, our drivers, and the beautiful destinations we cover across Odisha.</p>
        </div>
      </section>

      <section className="section-container py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {GALLERY_IMAGES.map((img, i) => (
            <div key={i} className={`relative rounded-2xl overflow-hidden shadow-md hover:-translate-y-1 transition-transform duration-200 ${i === 0 || i === 4 ? "col-span-2 row-span-2 h-80" : "h-48"}`}>
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                loading={i < 4 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
