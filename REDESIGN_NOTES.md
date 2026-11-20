# NexaPro website redesign — notes

Run locally: `npm install` → `npm run dev` (http://localhost:5173). Build: `npm run build`.
Deploy on Vercel as before (`vercel.json` now includes SPA rewrites). `npm run deploy` (gh-pages) still works; a `404.html` copy is created at build for SPA routing.

## Same stack as before
Vite + React 18 + Tailwind + react-icons + EmailJS. Only new dependency: `react-router-dom` (multi-page routing).

## What was preserved
- **Form pipeline** — `src/components/Contact/Contact.jsx` uses the same EmailJS service (`service_wj1qll9`), template (`template_pvtw0fs`), public key and parameter names (`from_name, company_name, from_email, phone_number, service_required, message, to_email`). New fields (project type, budget, contact method, page URL) are added to the `message` body, so they show up in the existing email template with no dashboard change. They are also sent as extra params (`project_type`, `budget`, `contact_method`, `page_url`) in case you want to add them to the template.
- Contact email, phone, form inbox, LinkedIn, GitHub — unchanged (`src/data/content.js`).
- Logo files in `/public` — unchanged.
- Old anchor links (`/#contact`, `/#services`, `/#about`) now redirect to the new pages.

## Where content lives
| File | What |
|---|---|
| `src/data/content.js` | Company info, nav, why-us, process, engagement models, form options |
| `src/data/services.js` | 2 division pages + 13 service pages (problems, capabilities, stack, FAQs…) |
| `src/data/caseStudies.js` | Case studies & solution blueprints |
| `src/data/industries.js` | Industries page |
| `src/data/careers.js` | Job openings (empty → general applications) |
| `src/components/ProblemSolution/scenarios.jsx` | Homepage problem → solution animation stories |

## Needs your input
1. **Real case studies** — the original site had no portfolio, so `caseStudies.js` contains 7 *solution blueprints* (clearly labelled on the site; no client names or results). Add real projects with `kind: "case-study"`, `client`, `results` and `screenshots`; they appear first automatically.
2. **WhatsApp** — uses +91 63502 82519 (the number on the old Contact section). Confirm it is on WhatsApp.
3. **Careers** — add openings in `careers.js`. Resume = link field + email option (EmailJS free plan can't take file uploads).
4. **Legal pages** — Privacy/Terms are general templates; get them reviewed.
5. Review service-page tool/stack lists and the 6+/10+ year claims (carried over from the old site).

## Behaviour
- Brand intro: ~2 s, once per browser session (`sessionStorage`), skipped for reduced-motion users; click/Esc skips it.
- Problem → solution stage autoplays only when on screen; pause button; keyboard tabs; static under reduced motion.
- Spam protection: honeypot field + minimum fill time.
- Per-page title/description/canonical, Organization, Service, FAQPage, BreadcrumbList and Article JSON-LD.
