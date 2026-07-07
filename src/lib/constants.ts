// Site-wide constants and configuration
export const SITE_CONFIG = {
  name: "Cab Service in Bhubaneswar",
  tagline: "Your Reliable Cab Service in Bhubaneswar — Anytime, Anywhere",
  domain: "cabserviceinbhubaneswar.com",
  url: "https://cabserviceinbhubaneswar.com",
  phone: "+91 9958829539",
  phoneRaw: "919958829539",
  email: "info@cabserviceinbhubaneswar.com",
  address: "[REPLACE_FULL_ADDRESS], Bhubaneswar, Odisha, India",
  whatsappLink: "https://wa.me/919958829539?text=Hi%2C%20I%20need%20a%20cab%20in%20Bhubaneswar",
  geo: {
    region: "IN-OR",
    placename: "Bhubaneswar",
    lat: "20.2961",
    long: "85.8245",
  },
  parentCompany: {
    name: "Aspira Med Group",
    url: "https://www.aspiramedinternational.com",
  },
  developer: {
    name: "ZoomDigital",
    url: "https://www.zoomdigital.in/",
  },
  ogImage: "/images/og-image.jpg",
  indexNowKey: "a3f8d2c1e9b47f6a0d5e8c2b1a9f7e3d",
} as const;

export const FLEET = [
  {
    id: "sedan",
    name: "Sedan",
    description: "Dzire-class compact sedan for comfortable city and outstation travel",
    seating: 4,
    perKm: 11,
    localPackage: "₹1,100 (8hr/80km)",
    airportOneway: "₹700",
    image: "/images/fleet-sedan.jpg",
    features: ["AC", "GPS Tracking", "Music", "Sanitized"],
  },
  {
    id: "muv",
    name: "MUV",
    description: "Ertiga-class 7-seater MUV perfect for family outings and group travel",
    seating: 6,
    perKm: 13,
    localPackage: "₹1,300 (8hr/80km)",
    airportOneway: "₹900",
    image: "/images/fleet-muv.jpg",
    features: ["AC", "GPS Tracking", "Music", "Sanitized"],
  },
  {
    id: "suv",
    name: "SUV",
    description: "Innova-class SUV offering superior comfort on long outstation routes",
    seating: 7,
    perKm: 15,
    localPackage: "₹1,500 (8hr/80km)",
    airportOneway: "₹1,100",
    image: "/images/fleet-suv.jpg",
    features: ["AC", "GPS Tracking", "Music", "Sanitized"],
  },
  {
    id: "premium-suv",
    name: "Premium SUV",
    description: "Crysta-class executive SUV for corporate clients and luxury transfers",
    seating: 7,
    perKm: 17,
    localPackage: "₹1,800 (8hr/80km)",
    airportOneway: "₹1,400",
    image: "/images/fleet-premium-suv.jpg",
    features: ["AC", "GPS Tracking", "Music", "Sanitized"],
  },
  {
    id: "tempo",
    name: "Tempo Traveller",
    description: "12–17 seat group vehicle for pilgrimages, corporate events, and family trips",
    seating: 14,
    perKm: 21,
    localPackage: "₹2,200 (8hr/80km)",
    airportOneway: "₹2,000",
    image: "/images/fleet-tempo.jpg",
    features: ["AC", "GPS Tracking", "Music", "Sanitized"],
  },
] as const;

export const VEHICLE_COLOR_MAP: Record<string, { bg: string; text: string }> = {
  "Dzire": { bg: "#EFF4FF", text: "#2563EB" },
  "Ertiga": { bg: "#EEF9F1", text: "#22A559" },
  "Innova": { bg: "#FFF3EA", text: "#E0651E" },
};

export const DESTINATIONS = [
  {
    id: "puri",
    slug: "bhubaneswar-to-puri",
    name: "Puri",
    distance: "60",
    duration: "1.5 hrs",
    startingFare: 700,
    description: "Home of Jagannath Temple & pristine Bay of Bengal beaches",
    highlights: ["Jagannath Temple", "Puri Beach", "Chilika Gateway"],
    image: "/images/dest-puri.jpg",
    vehicles: ["Dzire", "Ertiga", "Innova"],
    badge: "Most booked",
    label: "POPULAR ROUTE",
  },
  {
    id: "konark",
    slug: "bhubaneswar-to-konark",
    name: "Konark",
    distance: "65",
    duration: "1.5 hrs",
    startingFare: 800,
    description: "UNESCO World Heritage Sun Temple — a marvel of Kalinga architecture",
    highlights: ["Sun Temple", "Archaeological Museum", "Chandrabhaga Beach"],
    image: "/images/dest-konark.jpg",
    vehicles: ["Dzire", "Ertiga", "Innova"],
    badge: "Trending",
    label: undefined,
  },
  {
    id: "chilika",
    slug: "bhubaneswar-to-chilika",
    name: "Chilika Lake",
    distance: "100",
    duration: "2.5 hrs",
    startingFare: 1100,
    description: "Asia's largest brackish water lagoon — dolphins, birds & island shrines",
    highlights: ["Irrawaddy Dolphins", "Nalabana Bird Sanctuary", "Kalijai Temple"],
    image: "/images/dest-chilika.jpg",
    vehicles: ["Dzire", "Ertiga", "Innova", "Tempo Traveller"],
    badge: undefined,
    label: "FEATURED ROUTE",
  },
  {
    id: "cuttack",
    slug: "bhubaneswar-to-cuttack",
    name: "Cuttack",
    distance: "30",
    duration: "45 min",
    startingFare: 450,
    description: "Odisha's Silver City with Barabati Fort and exquisite silver filigree",
    highlights: ["Barabati Fort", "Cuttack Chandi Temple", "Silver Filigree Market"],
    image: "/images/dest-cuttack.jpg",
    vehicles: ["Dzire", "Ertiga"],
    badge: "Best value",
    label: undefined,
  },
  {
    id: "gopalpur",
    slug: "bhubaneswar-to-gopalpur",
    name: "Gopalpur",
    distance: "170",
    duration: "4 hrs",
    startingFare: 2000,
    description: "A peaceful colonial-era beach town on the Bay of Bengal",
    highlights: ["Gopalpur Beach", "Lighthouse", "Local Seafood"],
    image: "/images/dest-gopalpur.jpg",
    vehicles: ["Dzire", "Ertiga", "Innova"],
    badge: undefined,
    label: undefined,
  },
  {
    id: "berhampur",
    slug: "bhubaneswar-to-berhampur",
    name: "Berhampur",
    distance: "165",
    duration: "3.5 hrs",
    startingFare: 1900,
    description: "Southern Odisha's commercial hub and gateway to coastal temples",
    highlights: ["Tara Tarini Temple", "Silk Weaving", "Silk City Market"],
    image: "/images/dest-berhampur.jpg",
    vehicles: ["Dzire", "Ertiga", "Innova"],
    badge: undefined,
    label: undefined,
  },
] as const;

export const SERVICES = [
  {
    id: "local-taxi",
    slug: "local-taxi",
    title: "Local City Rides",
    description: "Seamless point-to-point travel within Bhubaneswar at transparent metered rates",
    startingPrice: "₹11/km",
    icon: "MapPin",
    color: "teal",
  },
  {
    id: "airport-taxi",
    slug: "airport-taxi",
    title: "Airport Pickup & Drop",
    description: "On-time airport transfers to/from Biju Patnaik International Airport with flight tracking",
    startingPrice: "₹700",
    icon: "Plane",
    color: "blue",
  },
  {
    id: "outstation-taxi",
    slug: "outstation-taxi",
    title: "Outstation Trips",
    description: "Comfortable one-way and round-trip cabs to Puri, Konark, Chilika, and beyond",
    startingPrice: "₹11/km",
    icon: "Route",
    color: "amber",
  },
  {
    id: "corporate-rental",
    slug: "corporate-rental",
    title: "Corporate & Monthly Rental",
    description: "Dedicated cab solutions for corporate offices, hospitals, and IT campuses on monthly contracts",
    startingPrice: "Custom",
    icon: "Briefcase",
    color: "purple",
  },
  {
    id: "wedding-cars",
    slug: "wedding-cars",
    title: "Wedding & Luxury Cars",
    description: "Beautifully decorated premium vehicles for wedding processions, sangeet nights, and honeymoon trips",
    startingPrice: "Custom",
    icon: "Heart",
    color: "rose",
  },
  {
    id: "temple-packages",
    slug: "outstation-taxi",
    title: "Temple & Pilgrimage Packages",
    description: "Curated Odisha pilgrimage circuits covering Puri, Konark, Bhubaneswar temples in one seamless trip",
    startingPrice: "₹2,500",
    icon: "Star",
    color: "orange",
  },
] as const;

export const WHY_US = [
  {
    icon: "Clock",
    title: "24/7 Availability",
    description: "Our fleet is ready round-the-clock — whether it's an early morning flight or a late-night arrival",
  },
  {
    icon: "BadgeCheck",
    title: "No Hidden Charges",
    description: "The price we quote is the price you pay — tolls, taxes, and parking are communicated upfront",
  },
  {
    icon: "ShieldCheck",
    title: "Verified Drivers",
    description: "Every driver undergoes police verification, background checks, and professional training",
  },
  {
    icon: "Sparkles",
    title: "Clean Sanitized Fleet",
    description: "All vehicles are cleaned, sanitized, and inspected before every trip for your safety and comfort",
  },
  {
    icon: "Navigation",
    title: "Live GPS Tracking",
    description: "Real-time vehicle tracking lets you share your trip details with family for added peace of mind",
  },
  {
    icon: "MessageCircle",
    title: "Instant WhatsApp Booking",
    description: "Book your cab in under 60 seconds via WhatsApp — no app downloads, no waiting on hold",
  },
  {
    icon: "Star",
    title: "Highly Rated Service",
    description: "Consistently rated 4.8★ across platforms by thousands of satisfied customers in Bhubaneswar",
  },
  {
    icon: "Shield",
    title: "Fully Insured Rides",
    description: "All vehicles carry comprehensive insurance so you travel with total confidence every time",
  },
] as const;

export const FAQ = [
  {
    q: "What is the cab fare from Bhubaneswar to Puri?",
    a: "The starting fare from Bhubaneswar to Puri is ₹700 for a sedan one-way (approximately 60 km). MUV and SUV options start from ₹900 and ₹1,100 respectively. Return trip fares are also available at discounted rates."
  },
  {
    q: "Is your cab service available 24 hours a day, 7 days a week?",
    a: "Yes, we operate 24/7, 365 days a year — including public holidays and festival seasons. You can book a cab at any hour by calling us or sending a WhatsApp message, and we will confirm your vehicle within minutes."
  },
  {
    q: "How do I book a cab quickly in Bhubaneswar?",
    a: "The fastest way to book is via WhatsApp — simply tap the 'Book on WhatsApp' button on our site and share your pickup location, destination, and travel time. A team member will confirm your cab and driver details in under 60 seconds."
  },
  {
    q: "Are your drivers verified and trained?",
    a: "All our drivers hold valid commercial driving licences and have undergone police background checks before joining us. They also complete a professional conduct and route-knowledge induction and are regularly refreshed on safe-driving standards."
  },
  {
    q: "Do you offer corporate or monthly cab rental packages?",
    a: "Yes, we provide customised monthly rental agreements for corporates, IT parks, hospitals, and government offices. Packages are tailored to shift timings, employee count, and route requirements — contact us for a personalised quotation."
  },
  {
    q: "Do you track incoming flights for airport pickup?",
    a: "Yes, for airport pickup bookings we actively monitor your flight status so our driver adjusts arrival time if your flight is delayed or early. You will not be charged extra for flight delays beyond your control."
  },
  {
    q: "What is your cancellation policy?",
    a: "Cancellations made more than 2 hours before the scheduled pickup are free of charge. Cancellations within 2 hours may attract a nominal convenience fee. For prepaid bookings, refunds are processed within 3–5 business days."
  },
  {
    q: "Do you decorate cars for weddings?",
    a: "Yes, our wedding car service includes floral decoration with fresh marigold and rose garlands, ribbon bows, and a 'Just Married' signage if requested. We offer both sedan and premium SUV options for baraat processions, and coordination with the venue is part of the service."
  },
] as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Local City Rides", href: "/services/local-taxi" },
      { label: "Airport Pickup & Drop", href: "/services/airport-taxi" },
      { label: "Outstation Trips", href: "/services/outstation-taxi" },
      { label: "Corporate Rental", href: "/services/corporate-rental" },
      { label: "Wedding Cars", href: "/services/wedding-cars" },
    ],
  },
  { label: "Fleet", href: "/fleet" },
  {
    label: "Destinations",
    href: "/destinations",
    children: [
      { label: "Bhubaneswar to Puri", href: "/destinations/bhubaneswar-to-puri" },
      { label: "Bhubaneswar to Konark", href: "/destinations/bhubaneswar-to-konark" },
      { label: "Bhubaneswar to Chilika", href: "/destinations/bhubaneswar-to-chilika" },
      { label: "Bhubaneswar to Cuttack", href: "/destinations/bhubaneswar-to-cuttack" },
      { label: "Bhubaneswar to Gopalpur", href: "/destinations/bhubaneswar-to-gopalpur" },
      { label: "Bhubaneswar to Berhampur", href: "/destinations/bhubaneswar-to-berhampur" },
    ],
  },
  { label: "Packages", href: "/packages" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;
