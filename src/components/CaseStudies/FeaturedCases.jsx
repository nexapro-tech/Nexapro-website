import { Link } from "react-router-dom";
import { sortedCaseStudies } from "../../data/caseStudies";
import SectionHead from "../Sections/SectionHead";
import CaseCard from "../Sections/CaseCard";
import Reveal from "../Reveal";
import Icon from "../Icon";

export default function FeaturedCases({ limit = 3, exclude }) {
  const items = sortedCaseStudies().filter((c) => c.featured && c.slug !== exclude).slice(0, limit);
  const hasReal = items.some((c) => c.kind === "case-study");
  return (
    <section className="border-t border-line py-20 md:py-28" aria-labelledby="fc-title">
      <div className="wrap">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHead
            eyebrow={hasReal ? "Featured case studies" : "Solution blueprints"}
            title={<span id="fc-title">How we take a problem apart — and put a working system together.</span>}
            lead={
              hasReal
                ? undefined
                : "Each blueprint walks through the business challenge, technical approach, architecture and the technologies we use for that kind of project."
            }
          />
          <Link to="/case-studies" className="link-arrow shrink-0">
            All case studies <Icon name="arrow" />
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((c, i) => (
            <Reveal key={c.slug} delay={i * 100} className="h-full">
              <CaseCard item={c} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
