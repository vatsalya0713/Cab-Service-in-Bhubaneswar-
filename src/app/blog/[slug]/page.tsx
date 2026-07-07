import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE_CONFIG } from "@/lib/constants";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Link from "next/link";
import { Clock, Tag, ArrowLeft } from "lucide-react";

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  content: string;
}

const BLOG_DATA: BlogPost[] = [
  {
    slug: "bhubaneswar-to-puri-travel-guide",
    title: "Bhubaneswar to Puri by Cab: A Complete Travel Guide",
    description: "Everything you need to know about travelling from Bhubaneswar to Puri by cab — best time to visit, places to see, fare breakdown, and travel tips.",
    date: "2024-12-15",
    readTime: "5 min read",
    category: "Travel Guide",
    content: `
## Getting to Puri from Bhubaneswar

Puri is the most popular outstation destination from Bhubaneswar, and for good reason. Home to the sacred Jagannath Temple and the beautiful Puri Beach on the Bay of Bengal, this coastal pilgrimage town is only 60 kilometres from the state capital.

### The Route

The most common route from Bhubaneswar to Puri is via NH-316 (formerly NH-203), a well-maintained, dual-lane highway that passes through Pipli — famous for its colourful appliqué craft. The journey takes approximately 1.5 hours in normal traffic conditions.

### Best Time to Visit

Puri can be visited year-round, but the most comfortable months are October through February. The summer months (April–June) can be hot and humid, but the sea breeze at the beach makes it bearable. The Rath Yatra festival in June–July is an extraordinary experience but means much heavier traffic and larger crowds.

### Cab Fare from Bhubaneswar to Puri

A sedan cab one-way costs approximately ₹700, while an SUV one-way starts at ₹1,100. Round trips offer better value — a sedan round trip costs around ₹1,100. These fares cover fuel, driver, and basic tolls.

### What to See in Puri

**Jagannath Temple:** The spiritual heart of Puri. Non-Hindus are not permitted inside, but the temple exterior is magnificent and the atmosphere outside is unlike anything else in India.

**Puri Beach:** One of Odisha's most beautiful beaches — wide, golden, and relatively clean near the northern end. Early mornings are magical.

**Sudarshana Crafts Museum:** A showcase of Odisha's rich handicraft tradition, located near the main beach.

**Raghurajpur:** A 45-minute drive from Puri, this Heritage Crafts Village is home to Pattachitra painters — a must for art lovers.

### Tips for Your Puri Cab Trip

- Book your cab the evening before to ensure early morning availability
- Ask your driver about the best parking spots near the Jagannath Temple (vehicle restrictions apply)
- Carry water, as Puri can be warm and busy
- If combining with Konark, start with Konark (east of Puri) and then proceed to Puri
    `,
  },
  {
    slug: "konark-sun-temple-visit-guide",
    title: "Visiting the Konark Sun Temple: Tips for First-Time Visitors",
    description: "How to make the most of your visit to the UNESCO World Heritage Konark Sun Temple — what to see, best visiting times, and how to book a cab from Bhubaneswar.",
    date: "2024-11-28",
    readTime: "4 min read",
    category: "Travel Guide",
    content: `
## The Konark Sun Temple — A UNESCO Wonder

The Konark Sun Temple is among the finest examples of medieval Indian architecture. Built in the 13th century in the form of a gigantic chariot of the Sun God Surya, with 24 elaborately carved stone wheels, it stands 65 kilometres from Bhubaneswar.

### Getting There by Cab

The cab journey from Bhubaneswar to Konark takes approximately 1.5 hours via NH-316. The fare for a sedan starts at ₹800 one-way. Many visitors combine Konark with Puri — our drivers can plan the optimal route.

### Best Time to Visit Konark

Sunrise and late afternoon are the most beautiful times at the temple, when the stone glows golden in the slanted light. The site opens at 6 AM. Avoid midday in summer as the open archaeological park offers little shade.

### What to See

The main temple hall (Jagamohana) and the dancing hall are the key structures. Spend time examining the intricate erotic carvings on the exterior walls — these are consistent with Tantric traditions and have significant artistic and scholarly value. The Konark Museum next to the complex houses sculptures retrieved from the original site.

### The Konark Dance Festival

Held every December against the illuminated backdrop of the temple, this five-day classical dance festival features performances by India's finest artists. If you are visiting in December, try to attend.
    `,
  },
  {
    slug: "chilika-lake-dolphin-spotting",
    title: "Dolphin Spotting at Chilika Lake: Your Complete Guide",
    description: "Chilika Lake is home to rare Irrawaddy dolphins. Plan your dolphin-spotting day trip from Bhubaneswar with our outstation cab service.",
    date: "2024-11-10",
    readTime: "6 min read",
    category: "Nature",
    content: `
## Chilika Lake — A Natural Wonder of Odisha

Chilika Lake, Asia's largest brackish water lagoon, stretches across 1,100 square kilometres of coastal Odisha. It is home to one of the world's rarest cetaceans — the Irrawaddy dolphin — and serves as a critical habitat for over 160 species of migratory birds.

### Getting to Chilika from Bhubaneswar

The most popular entry point for dolphin watching is Satapada, approximately 100 km from Bhubaneswar. Our cab service covers this route starting at ₹1,100 one-way for a sedan. The journey takes around 2.5 hours via NH-16 and state roads.

### Dolphin Spotting Tips

- Best season: October to March (clearer water, active dolphins)
- Hire a local motorboat at Satapada jetty (₹200–₹600 per person)
- Best time of day: Early morning (6–9 AM)
- Dolphins are most active in calm weather

### Other Wildlife at Chilika

The Nalabana Bird Sanctuary within the lake core zone is home to flamingos, grey pelicans, bar-headed geese, and several globally threatened species. A separate boat trip into Nalabana is highly recommended.

### Kalijai Temple

This tiny island shrine in the middle of the lake is accessible by boat. It is an important pilgrimage site and particularly atmospheric during the annual Kalijai festival (January–February).
    `,
  },
  {
    slug: "corporate-cab-rental-bhubaneswar",
    title: "Why Monthly Corporate Cab Rental Makes Business Sense in Bhubaneswar",
    description: "A detailed breakdown of the cost savings, reliability benefits, and employee satisfaction improvements that come with a dedicated corporate cab contract.",
    date: "2024-10-22",
    readTime: "4 min read",
    category: "Corporate",
    content: `
## The Case for Corporate Cab Rental in Bhubaneswar

Bhubaneswar is one of India's fastest-growing business cities, with a rapidly expanding IT sector in Infocity, major healthcare institutions, government offices, and an increasing number of multinational businesses establishing their presence. Employee transportation is one of the most common operational headaches — and one that a monthly corporate cab contract solves entirely.

### Predictable Costs

With a corporate cab contract, you pay a fixed monthly rate per vehicle, eliminating the variable costs and invoice surprises that come with ad-hoc bookings. Our detailed monthly trip logs make it easy for your accounts team to reconcile expenses.

### Reliability Over App-Based Alternatives

Corporate cab contracts mean a dedicated driver who knows your employees, your office location, and your shift timings. Unlike consumer ride-hailing apps, there is no surge pricing, no driver cancellations, and no hunting for a cab during peak hours.

### Employee Safety and Satisfaction

Our corporate drivers undergo police background verification and professional conduct training. All vehicles are GPS-tracked, giving HR teams visibility of employee movement for duty of care compliance.

### How to Get Started

Contact us via WhatsApp or phone with your employee count, office location, shift timings, and expected monthly kilometres. We will provide a customised proposal within 24 hours.
    `,
  },
  {
    slug: "airport-cab-bhubaneswar-guide",
    title: "Airport Cab Bhubaneswar: Booking, Timing & Fare Guide",
    description: "Everything you need to know about booking an airport cab at Biju Patnaik International Airport.",
    date: "2024-10-05",
    readTime: "3 min read",
    category: "Airport",
    content: `
## Airport Cab Service at Biju Patnaik International Airport

Biju Patnaik International Airport (BPIA) in Bhubaneswar handles millions of passengers annually, with domestic flights connecting the city to Delhi, Mumbai, Bangalore, Hyderabad, Kolkata, and Chennai, plus international connections.

### How Our Airport Cab Service Works

1. **Book in advance via WhatsApp** — Share your flight number, arrival or departure time, and pickup address
2. **We track your flight** — For arrivals, we monitor your flight status in real time and adjust driver timing accordingly
3. **Driver meets you** — Our driver arrives at the designated pickup zone with your name displayed

### Fares from Bhubaneswar Airport

Sedan one-way starts at ₹700 for most city areas. SUV one-way starts at ₹1,100. All fares are fixed and agreed upon at booking — no surge pricing at 3 AM.

### Tips for Airport Travel in Bhubaneswar

- Book at least 2 hours before your flight for departure trips
- For arrival pickups, book in advance and share your flight number
- Early morning and late night flights are fully covered by our 24/7 service
    `,
  },
  {
    slug: "odisha-golden-triangle-tour",
    title: "The Odisha Golden Triangle: Bhubaneswar, Puri & Konark in One Day",
    description: "How to plan the perfect one-day Odisha Golden Triangle road trip covering all three iconic destinations.",
    date: "2024-09-18",
    readTime: "5 min read",
    category: "Tour Guide",
    content: `
## The Odisha Golden Triangle

Odisha's Golden Triangle refers to three of the state's most iconic destinations — Bhubaneswar (the Temple City), Puri (the Pilgrim City), and Konark (the Sun Temple Town). Together, they can be covered in a single, well-planned day trip from Bhubaneswar.

### Recommended Itinerary

**6:00 AM** — Pickup from your hotel in Bhubaneswar

**7:00–9:30 AM** — Visit Lingaraj Temple, Mukteshvara Temple, and Rajarani Temple in Bhubaneswar. These three temples represent the finest Kalinga architecture and can be explored in about 2 hours.

**9:30 AM–11:30 AM** — Drive to Konark (65 km) and explore the Sun Temple complex and museum.

**12:00 PM** — Drive to Puri (35 km from Konark).

**1:00–2:00 PM** — Lunch at Marine Drive or one of Puri's famous seafood restaurants.

**2:00–4:00 PM** — Jagannath Temple visit and darshan.

**4:00–5:30 PM** — Relax at Puri Beach.

**5:30 PM** — Drive back to Bhubaneswar (60 km).

**7:00 PM** — Arrive back in Bhubaneswar.

### How to Book This Package

We offer this as a structured package starting at ₹2,800 for a sedan (4 passengers) and ₹3,500 for an SUV (7 passengers). All tolls and driver allowance are included. Book via WhatsApp and we will confirm within minutes.
    `,
  },
];

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_DATA.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_DATA.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `${SITE_CONFIG.url}/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${SITE_CONFIG.url}/blog/${slug}`,
      images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
    },
    other: { "geo.region": "IN-OR", "geo.placename": "Bhubaneswar", "geo.position": "20.2961;85.8245", "ICBM": "20.2961, 85.8245" },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_DATA.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <div>
      <section className="pt-24 pb-16" style={{ background: "linear-gradient(135deg, #0d2a40 0%, #15456b 100%)" }}>
        <div className="section-container">
          <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: post.title }]} className="text-white/60 mb-6" />
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#FFC107]/20 text-[#ffcd38] flex items-center gap-1">
              <Tag size={11} /> {post.category}
            </span>
            <span className="text-xs text-white/60 flex items-center gap-1"><Clock size={11} /> {post.readTime}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 max-w-3xl">{post.title}</h1>
          <p className="text-white/60 text-sm">{new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</p>
        </div>
      </section>

      <section className="section-container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          <article className="lg:col-span-3 prose prose-sm max-w-none">
            {post.content.split("\n\n").map((block, i) => {
              if (block.startsWith("## ")) {
                return <h2 key={i} className="text-2xl font-bold text-[#1C1C1E] mb-4 mt-8">{block.replace("## ", "")}</h2>;
              }
              if (block.startsWith("### ")) {
                return <h3 key={i} className="text-xl font-bold text-[#1C1C1E] mb-3 mt-6">{block.replace("### ", "")}</h3>;
              }
              if (block.startsWith("**") && block.endsWith("**")) {
                return <p key={i} className="font-semibold text-[#1C1C1E] mb-2">{block.replace(/\*\*/g, "")}</p>;
              }
              if (block.match(/^\d+\. /)) {
                const lines = block.split("\n");
                return <ol key={i} className="list-decimal pl-5 space-y-1 text-[#6B6B6E] text-sm mb-4">{lines.map((l, j) => <li key={j}>{l.replace(/^\d+\. /, "")}</li>)}</ol>;
              }
              if (block.startsWith("- ")) {
                const lines = block.split("\n");
                return <ul key={i} className="list-disc pl-5 space-y-1 text-[#6B6B6E] text-sm mb-4">{lines.map((l, j) => <li key={j}>{l.replace(/^- /, "")}</li>)}</ul>;
              }
              if (block.trim()) {
                return <p key={i} className="text-[#6B6B6E] leading-relaxed mb-4 text-sm">{block}</p>;
              }
              return null;
            })}
            
            <div className="mt-10 p-6 bg-[#f0f7ff] rounded-2xl border border-[#e0f0ff] text-center">
              <h3 className="text-xl font-bold text-[#15456b] mb-2">Need a Reliable Cab Service?</h3>
              <p className="text-[#6B6B6E] text-sm mb-5 max-w-md mx-auto">Get clean cars, verified drivers, and transparent pricing for your next trip in and around Bhubaneswar.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href={SITE_CONFIG.whatsappLink} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-xl font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] transition-colors flex items-center justify-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Book on WhatsApp
                </a>
                <a href={`tel:${SITE_CONFIG.phone}`} className="px-6 py-3 rounded-xl font-bold text-[#15456b] bg-[#FFB800] hover:bg-[#F2A900] transition-colors flex items-center justify-center gap-2">
                  Call Now
                </a>
              </div>
            </div>
          </article>

          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              <div className="card-base p-5">
                <h3 className="font-bold text-[#1C1C1E] mb-3">Book a Cab Now</h3>
                <p className="text-sm text-[#6B6B6E] mb-4">Ready to visit? Book your cab in 60 seconds via WhatsApp.</p>
                <a href={SITE_CONFIG.whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full text-center py-3 rounded-xl font-bold text-white text-sm bg-[#25D366] hover:bg-[#20bd5a] transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Book on WhatsApp
                </a>
              </div>
              <Link href="/blog" className="flex items-center gap-2 text-sm text-[#15456b] font-medium hover:underline">
                <ArrowLeft size={14} /> Back to All Articles
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
