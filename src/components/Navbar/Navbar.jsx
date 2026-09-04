import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { companyInfo, navLinks } from "../../data/content";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState("#home");

  useEffect(() => {
    const ids = navLinks.map((link) => link.href.replace("#", ""));

    const sync = () => {
      setIsScrolled(window.scrollY > 24);
      const offset = window.scrollY + 120;
      let current = "#home";
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= offset) current = `#${id}`;
      });
      setActiveHref(current);
    };

    sync();
    window.addEventListener("scroll", sync, { passive: true });
    return () => window.removeEventListener("scroll", sync);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-ink/85 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
          : "bg-transparent"
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-[88px]">
          <a href="#home" className="flex items-center gap-3 group" onClick={closeMenu}>
            <span className="relative flex h-14 w-14">
              <span className="absolute inset-0 rounded-full bg-primary/30 animate-pulse-ring" />
              <img
                src="/logo-circle.png"
                alt=""
                className="logo-circle relative h-14 w-14 ring-2 ring-primary/40 group-hover:ring-accent transition-all duration-300 group-hover:scale-105"
              />
            </span>
            <span className="leading-tight">
              <span className="block text-white font-semibold tracking-wide text-lg">
                {companyInfo.name.split(" ")[0]}
              </span>
              <span className="block text-primary text-[10px] uppercase tracking-[0.32em]">
                technologies
              </span>
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative text-sm font-medium tracking-wide transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-px after:bg-gradient-to-r after:from-accent after:to-primary-deep after:transition-all after:duration-300 ${
                  activeHref === link.href
                    ? "text-white after:w-full"
                    : "text-slate-300 hover:text-white after:w-0 hover:after:w-full"
                }`}
              >
                {link.name}
              </a>
            ))}
            <a href="#contact" className="btn-primary !px-5 !py-2.5 !text-xs">
              Talk to us
            </a>
          </div>

          <button
            className="lg:hidden text-white"
            onClick={() => setIsOpen((open) => !open)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 bg-navy/95 backdrop-blur-xl border-t border-white/10 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 border-t-0"
        }`}
      >
        <div className="px-6 py-5 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`block py-3 transition-colors duration-300 ${
                activeHref === link.href ? "text-accent" : "text-slate-200 hover:text-accent"
              }`}
              onClick={closeMenu}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
