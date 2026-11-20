import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { navMain } from "../../data/content";
import { divisions, servicesByDivision } from "../../data/services";
import Icon from "../Icon";

const legacy = servicesByDivision("legacy");
const modern = servicesByDivision("modern");

function Logo() {
  return (
    <Link to="/" className="group flex items-center gap-3" aria-label="NexaPro Technologies — home">
      <img
        src="/logo-circle.png"
        alt=""
        width="44"
        height="44"
        className="h-11 w-11 rounded-full transition-transform duration-500 group-hover:rotate-[-12deg]"
      />
      <span className="leading-none">
        <span className="block font-display text-[19px] font-semibold tracking-tight text-white">
          Nexa<span className="text-primary">Pro</span>
        </span>
        <span className="mt-1 block font-mono text-[9.5px] uppercase tracking-[0.34em] text-primary-soft/80">
          Technologies
        </span>
      </span>
    </Link>
  );
}

function MegaColumn({ division, items, onNavigate, tone }) {
  return (
    <div>
      <Link
        to={`/services/${division.slug}`}
        onClick={onNavigate}
        className="group mb-4 flex items-center justify-between border-b border-line pb-3"
      >
        <span>
          <span className={`block font-mono text-[10.5px] uppercase tracking-[0.2em] ${tone}`}>{division.years}</span>
          <span className="mt-1 block font-display text-[15px] text-white">{division.name}</span>
        </span>
        <Icon name="arrowUp" className="text-slate-500 transition group-hover:text-primary" />
      </Link>
      <ul className="grid gap-0.5">
        {items.map((s) => (
          <li key={s.slug}>
            <NavLink
              to={`/services/${s.slug}`}
              onClick={onNavigate}
              className={({ isActive }) =>
                `group flex items-start gap-3 rounded-md px-2.5 py-2 transition-colors hover:bg-white/[0.04] ${
                  isActive ? "bg-white/[0.05]" : ""
                }`
              }
            >
              <Icon name={s.icon} className="mt-0.5 shrink-0 text-primary/80" />
              <span>
                <span className="block text-[14px] text-white">{s.title}</span>
                <span className="block text-[12.5px] leading-snug text-slate-400">{s.short}</span>
              </span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const { pathname } = useLocation();
  const megaRef = useRef(null);
  const closeTimer = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMegaOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setMegaOpen(false);
        setMobileOpen(false);
      }
    };
    const onClick = (e) => {
      if (megaRef.current && !megaRef.current.contains(e.target)) setMegaOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, []);

  const openMega = () => {
    clearTimeout(closeTimer.current);
    setMegaOpen(true);
  };
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setMegaOpen(false), 160);
  };

  const servicesActive = pathname.startsWith("/services");
  const solid = scrolled || megaOpen || mobileOpen;

  const linkCls = (active) =>
    `relative px-1 py-2 text-[14px] transition-colors after:absolute after:inset-x-1 after:-bottom-0.5 after:h-px after:origin-left after:bg-primary after:transition-transform after:duration-300 ${
      active ? "text-white after:scale-x-100" : "text-slate-300 hover:text-white after:scale-x-0 hover:after:scale-x-100"
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background,border-color,backdrop-filter] duration-300 ${
        solid ? "border-b border-line bg-ink/90 backdrop-blur-xl" : "border-b border-transparent bg-transparent"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded focus:bg-primary focus:px-3 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <nav className="wrap flex h-[76px] items-center justify-between gap-6" aria-label="Main">
        <Logo />

        <ul className="hidden items-center gap-6 xl:flex">
          {navMain.map((item) =>
            item.mega ? (
              <li key={item.name} ref={megaRef} className="relative" onMouseEnter={openMega} onMouseLeave={scheduleClose}>
                <div className="flex items-center">
                  <NavLink to={item.to} end className={() => linkCls(servicesActive)}>
                    {item.name}
                  </NavLink>
                  <button
                    type="button"
                    aria-expanded={megaOpen}
                    aria-controls="mega-services"
                    aria-label="Show services menu"
                    onClick={() => setMegaOpen((o) => !o)}
                    className="ml-0.5 rounded p-1 text-slate-400 hover:text-white"
                  >
                    <Icon name="down" className={`transition-transform duration-300 ${megaOpen ? "rotate-180" : ""}`} />
                  </button>
                </div>

                <div
                  id="mega-services"
                  className={`fixed left-1/2 top-[76px] w-[min(1080px,calc(100vw-48px))] -translate-x-1/2 pt-3 transition-all duration-300 ${
                    megaOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
                  }`}
                >
                  <div className="grid grid-cols-[1fr_1fr_260px] gap-8 rounded-lg border border-line bg-navy p-7 shadow-lift">
                    <MegaColumn division={divisions.legacy} items={legacy} onNavigate={() => setMegaOpen(false)} tone="text-phosphor" />
                    <MegaColumn division={divisions.modern} items={modern} onNavigate={() => setMegaOpen(false)} tone="text-primary" />
                    <div className="flex flex-col justify-between rounded-md border border-line bg-ink/60 p-5">
                      <div>
                        <p className="eyebrow eyebrow--plain">Not sure where to start?</p>
                        <p className="mt-3 text-[14px] leading-relaxed text-slate-300">
                          Tell us the problem. We will suggest the right approach — the first consultation is free.
                        </p>
                      </div>
                      <div className="mt-6 grid gap-2">
                        <Link to="/get-a-quote" onClick={() => setMegaOpen(false)} className="btn-primary !py-2.5 !text-[13px]">
                          Get a Free Consultation
                        </Link>
                        <Link to="/services" onClick={() => setMegaOpen(false)} className="link-arrow justify-center py-1">
                          All services <Icon name="arrow" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ) : (
              <li key={item.name}>
                <NavLink to={item.to} end={item.to === "/"} className={({ isActive }) => linkCls(isActive)}>
                  {item.name}
                </NavLink>
              </li>
            )
          )}
        </ul>

        <div className="flex items-center gap-3">
          <Link to="/get-a-quote" className="btn-primary hidden !px-4 !py-2.5 !text-[13px] sm:inline-flex">
            Get a Free Quote
          </Link>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-md border border-line text-white xl:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((o) => !o)}
          >
            <Icon name={mobileOpen ? "close" : "menu"} className="h-5 w-5" />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={`fixed inset-x-0 bottom-0 top-[76px] overflow-y-auto bg-ink transition-[opacity,transform] duration-300 xl:hidden ${
          mobileOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-3 opacity-0"
        }`}
      >
        <div className="wrap flex min-h-full flex-col py-6">
          <ul className="divide-y divide-line border-y border-line">
            {navMain.map((item) =>
              item.mega ? (
                <li key={item.name}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between py-4 text-left font-display text-xl text-white"
                    aria-expanded={mobileServices}
                    onClick={() => setMobileServices((o) => !o)}
                  >
                    Services
                    <Icon name="down" className={`transition-transform ${mobileServices ? "rotate-180" : ""}`} />
                  </button>
                  <div className={`grid transition-all duration-300 ${mobileServices ? "grid-rows-[1fr] pb-4" : "grid-rows-[0fr]"}`}>
                    <div className="overflow-hidden">
                      {[
                        [divisions.legacy, legacy, "text-phosphor"],
                        [divisions.modern, modern, "text-primary"],
                      ].map(([d, items, tone]) => (
                        <div key={d.key} className="mb-4">
                          <Link to={`/services/${d.slug}`} className={`mb-1 block font-mono text-[11px] uppercase tracking-[0.2em] ${tone}`}>
                            {d.name} →
                          </Link>
                          <ul>
                            {items.map((s) => (
                              <li key={s.slug}>
                                <NavLink
                                  to={`/services/${s.slug}`}
                                  className={({ isActive }) => `block py-2 text-[15px] ${isActive ? "text-primary" : "text-slate-300"}`}
                                >
                                  {s.title}
                                </NavLink>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                      <Link to="/services" className="link-arrow">
                        View all services <Icon name="arrow" />
                      </Link>
                    </div>
                  </div>
                </li>
              ) : (
                <li key={item.name}>
                  <NavLink
                    to={item.to}
                    end={item.to === "/"}
                    className={({ isActive }) =>
                      `flex items-center justify-between py-4 font-display text-xl ${isActive ? "text-primary" : "text-white"}`
                    }
                  >
                    {item.name}
                    <Icon name="arrow" className="text-slate-600" />
                  </NavLink>
                </li>
              )
            )}
          </ul>
          <div className="mt-auto grid gap-3 pt-8">
            <Link to="/get-a-quote" className="btn-primary">
              Get a Free Quote
            </Link>
            <p className="text-center text-xs text-slate-500">Initial consultation is free of cost.</p>
          </div>
        </div>
      </div>
    </header>
  );
}
