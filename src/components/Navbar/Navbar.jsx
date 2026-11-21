import { useCallback, useEffect, useRef, useState } from "react";
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
        className="h-10 w-10 rounded-full transition-transform duration-500 group-hover:rotate-[-12deg]"
      />
      <span className="leading-none">
        <span className="block font-display text-[18px] font-semibold tracking-tight text-white">
          NexaPro
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
        className="group mb-2.5 flex items-center justify-between border-b border-line pb-2.5"
      >
        <span>
          <span className={`block font-mono text-[10.5px] uppercase tracking-[0.2em] ${tone}`}>{division.years}</span>
          <span className="mt-1 block font-display text-[14px] text-white">{division.name}</span>
        </span>
        <Icon name="arrowUp" className="text-slate-500 transition group-hover:text-primary" />
      </Link>
      <ul className="grid">
        {items.map((s) => (
          <li key={s.slug}>
            <NavLink
              to={`/services/${s.slug}`}
              onClick={onNavigate}
              className={({ isActive }) =>
                `group flex items-center gap-2 rounded-md px-2 py-1.5 transition-colors hover:bg-white/[0.04] ${
                  isActive ? "bg-white/[0.05]" : ""
                }`
              }
            >
              <Icon name={s.icon} className="shrink-0 text-primary/80" />
              <span className="block text-[13px] leading-snug text-white">{s.title}</span>
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
  const mobilePanelRef = useRef(null);
  const mobileToggleRef = useRef(null);
  const previouslyFocusedRef = useRef(null);

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
    setMobileServices(false);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMegaOpen(false);
    closeMobile();
  }, [pathname, closeMobile]);

  useEffect(() => {
    if (!mobileOpen) return undefined;
    const { body, documentElement } = document;
    const previousBodyOverflow = body.style.overflow;
    const previousBodyPaddingRight = body.style.paddingRight;
    const previousHtmlOverflow = documentElement.style.overflow;
    const scrollbarWidth = window.innerWidth - documentElement.clientWidth;

    body.style.overflow = "hidden";
    documentElement.style.overflow = "hidden";
    if (scrollbarWidth > 0) body.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      body.style.overflow = previousBodyOverflow;
      body.style.paddingRight = previousBodyPaddingRight;
      documentElement.style.overflow = previousHtmlOverflow;
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return undefined;
    previouslyFocusedRef.current = document.activeElement;
    const frame = requestAnimationFrame(() => mobilePanelRef.current?.focus());
    return () => cancelAnimationFrame(frame);
  }, [mobileOpen]);

  useEffect(() => {
    if (mobileOpen) return;
    if (previouslyFocusedRef.current) mobileToggleRef.current?.focus();
  }, [mobileOpen]);

  useEffect(() => {
    const desktopBreakpoint = window.matchMedia("(min-width: 1280px)");
    const closeOnDesktop = () => {
      if (desktopBreakpoint.matches) closeMobile();
    };
    desktopBreakpoint.addEventListener("change", closeOnDesktop);
    return () => desktopBreakpoint.removeEventListener("change", closeOnDesktop);
  }, [closeMobile]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setMegaOpen(false);
        closeMobile();
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
  }, [closeMobile]);

  const openMega = () => {
    clearTimeout(closeTimer.current);
    setMegaOpen(true);
  };
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setMegaOpen(false), 160);
  };

  const servicesActive = pathname.startsWith("/services");
  const solid = scrolled || megaOpen || mobileOpen;
  const headerUsesBackdrop = (scrolled || mobileOpen) && !megaOpen;

  const linkCls = (active) =>
    `relative px-1 py-2 text-[13.5px] transition-colors after:absolute after:inset-x-1 after:-bottom-0.5 after:h-px after:origin-left after:bg-primary after:transition-transform after:duration-300 ${
      active ? "text-white after:scale-x-100" : "text-slate-300 hover:text-white after:scale-x-0 hover:after:scale-x-100"
    }`;

  const toggleMobile = () => {
    if (mobileOpen) closeMobile();
    else setMobileOpen(true);
  };

  const trapMobileFocus = (e) => {
    if (e.key !== "Tab" || !mobilePanelRef.current) return;
    const focusable = [...mobilePanelRef.current.querySelectorAll('a[href], button:not([disabled])')].filter(
      (element) => !element.hasAttribute("aria-hidden")
    );
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background,border-color,backdrop-filter] duration-300 ${
        solid ? `border-b border-line bg-ink/90 ${headerUsesBackdrop ? "backdrop-blur-xl" : ""}` : "border-b border-transparent bg-transparent"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded focus:bg-primary focus:px-3 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <nav className="wrap flex h-[72px] items-center justify-between gap-5" aria-label="Main">
        <Logo />

        <ul className="hidden items-center gap-5 xl:flex">
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
                  className={`fixed left-1/2 top-[72px] w-[min(900px,calc(100vw-48px))] -translate-x-1/2 pt-3 transition-all duration-300 ${
                    megaOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
                  }`}
                >
                  <div className="grid grid-cols-[1fr_1fr_210px] gap-5 rounded-lg border border-line bg-navy p-5 shadow-lift">
                    <MegaColumn division={divisions.legacy} items={legacy} onNavigate={() => setMegaOpen(false)} tone="text-phosphor" />
                    <MegaColumn division={divisions.modern} items={modern} onNavigate={() => setMegaOpen(false)} tone="text-primary" />
                    <div className="flex flex-col justify-between rounded-md border border-line bg-ink/60 p-4">
                      <div>
                        <p className="eyebrow eyebrow--plain">Not sure where to start?</p>
                        <p className="mt-2 text-[13px] leading-relaxed text-slate-300">
                          Tell us the problem. We will suggest the right approach — the first consultation is free.
                        </p>
                      </div>
                      <div className="mt-4 grid gap-2">
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
            ref={mobileToggleRef}
            className="grid h-11 w-11 place-items-center rounded-md border border-line text-white xl:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={toggleMobile}
          >
            <Icon name={mobileOpen ? "close" : "menu"} className="h-5 w-5" />
          </button>
        </div>
      </nav>
      </header>

      {/* Mobile navigation is deliberately outside the blurred header. A backdrop filter on the
          header otherwise turns it into the containing block for fixed children on mobile. */}
      <div
        id="mobile-menu"
        className={`fixed inset-x-0 bottom-0 top-[72px] z-40 transition-[visibility,opacity] duration-300 xl:hidden ${
          mobileOpen ? "visible opacity-100" : "invisible pointer-events-none opacity-0"
        }`}
        aria-hidden={!mobileOpen}
      >
        <button type="button" aria-label="Close navigation menu" className="absolute inset-0 cursor-default bg-ink/70 backdrop-blur-[2px]" onClick={closeMobile} tabIndex={-1} />
        <aside
          ref={mobilePanelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          tabIndex={-1}
          onKeyDown={trapMobileFocus}
          className={`absolute inset-y-0 right-0 flex w-[min(88vw,31rem)] flex-col overflow-y-auto overscroll-contain border-l border-line bg-navy shadow-[-24px_0_60px_-32px_rgba(0,0,0,.8)] transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-line px-5 py-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary-soft">Navigate</span>
            <button type="button" onClick={closeMobile} className="grid h-10 w-10 place-items-center rounded-md border border-line text-white hover:border-primary hover:text-primary" aria-label="Close menu">
              <Icon name="close" className="h-5 w-5" />
            </button>
          </div>
          <div className="wrap flex min-h-full flex-col py-4">
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
                          <Link to={`/services/${d.slug}`} onClick={closeMobile} className={`mb-1 block font-mono text-[11px] uppercase tracking-[0.2em] ${tone}`}>
                            {d.name} →
                          </Link>
                          <ul>
                            {items.map((s) => (
                              <li key={s.slug}>
                                <NavLink
                                  to={`/services/${s.slug}`}
                                  onClick={closeMobile}
                                  className={({ isActive }) => `block py-2 text-[15px] ${isActive ? "text-primary" : "text-slate-300"}`}
                                >
                                  {s.title}
                                </NavLink>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                      <Link to="/services" onClick={closeMobile} className="link-arrow">
                        View all services <Icon name="arrow" />
                      </Link>
                    </div>
                  </div>
                </li>
              ) : (
                <li key={item.name}>
                  <NavLink
                    to={item.to}
                    onClick={closeMobile}
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
            <Link to="/get-a-quote" onClick={closeMobile} className="btn-primary">
              Get a Free Quote
            </Link>
            <p className="text-center text-xs text-slate-500">Initial consultation is free of cost.</p>
          </div>
          </div>
        </aside>
      </div>
    </>
  );
}
