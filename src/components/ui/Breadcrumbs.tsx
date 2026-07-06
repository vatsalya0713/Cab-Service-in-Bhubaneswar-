import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  const allItems = [{ label: "Home", href: "/" }, ...items];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href ? `https://cabserviceinbhubaneswar.com${item.href}` : undefined,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav
        aria-label="Breadcrumb"
        className={`flex items-center gap-1.5 text-sm flex-wrap ${className || ""}`}
      >
        {allItems.map((item, index) => (
          <div key={index} className="flex items-center gap-1.5">
            {index > 0 && <ChevronRight size={13} className="text-[#9BA3AE] flex-shrink-0" />}
            {index === 0 && <Home size={13} className="text-[#9BA3AE] flex-shrink-0" />}
            {item.href && index < allItems.length - 1 ? (
              <Link
                href={item.href}
                className="text-[#9BA3AE] hover:text-[#C9A227] transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-[#F5F1E8] font-medium" aria-current="page">
                {item.label}
              </span>
            )}
          </div>
        ))}
      </nav>
    </>
  );
}
