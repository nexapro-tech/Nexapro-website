import { Link } from "react-router-dom";
import { companyInfo } from "../../data/content";

export default function Breadcrumbs({ items }) {
  const all = [{ label: "Home", to: "/" }, ...items];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.label,
      item: it.to ? companyInfo.siteUrl + it.to : undefined,
    })),
  };
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex flex-wrap items-center gap-2 font-mono text-[11.5px] text-slate-500">
        {all.map((it, i) => (
          <li key={i} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden="true">/</span>}
            {it.to && i < all.length - 1 ? (
              <Link to={it.to} className="hover:text-primary-soft">{it.label}</Link>
            ) : (
              <span aria-current="page" className="text-slate-300">{it.label}</span>
            )}
          </li>
        ))}
      </ol>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </nav>
  );
}
