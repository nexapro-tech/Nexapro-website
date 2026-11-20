import { useEffect, useState } from "react";
import { companyInfo } from "../../data/content";

const KEY = "nx-intro-seen";
const DURATION = 2000;

/**
 * Branded intro shown once per browser session. The decision is made in
 * index.html before first paint (html.nx-intro-pending), so the app renders —
 * and preloads — underneath while the intro plays. The page content stays in
 * the DOM for crawlers and assistive tech; the overlay is aria-hidden.
 */
export default function Intro() {
  const [show] = useState(() => document.documentElement.classList.contains("nx-intro-pending"));
  const [leaving, setLeaving] = useState(false);
  const [gone, setGone] = useState(!show);

  useEffect(() => {
    if (!show) return undefined;
    try {
      sessionStorage.setItem(KEY, "1");
    } catch (e) {
      /* storage blocked — intro simply shows again next load */
    }
    const finish = () => {
      setLeaving(true);
      document.documentElement.classList.remove("nx-intro-pending");
    };
    const t1 = setTimeout(finish, DURATION);
    const t2 = setTimeout(() => setGone(true), DURATION + 750);
    const skip = (e) => {
      if (e.key === "Escape" || e.key === "Enter" || e.key === " ") finish();
    };
    window.addEventListener("keydown", skip);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener("keydown", skip);
    };
  }, [show]);

  if (gone) return null;

  const words = companyInfo.tagline.split(" ");

  return (
    <div
      className={`nx-intro ${leaving ? "is-leaving" : ""}`}
      aria-hidden="true"
      onClick={() => {
        setLeaving(true);
        document.documentElement.classList.remove("nx-intro-pending");
      }}
    >
      <div className="nx-intro__grid" />
      <div className="nx-intro__sweep" />
      <div className="relative flex flex-col items-center px-6 text-center">
        <div className="nx-intro__logo">
          <span className="nx-intro__arc" />
          <img src="/logo-circle.png" alt="" className="h-full w-full rounded-full" />
        </div>
        <p
          className="mt-7 font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl"
          style={{ animation: "pop-in .8s .25s cubic-bezier(.22,1,.36,1) both" }}
        >
          Nexa<span className="text-primary">Pro</span>
          <span className="ml-2 font-mono text-[11px] font-normal uppercase tracking-[0.32em] text-primary-soft align-middle">
            Technologies
          </span>
        </p>
        <div className="nx-intro__line mt-6 w-56 sm:w-72" />
        <p className="mt-5 flex flex-wrap justify-center gap-x-1.5 text-sm text-slate-300 sm:text-base">
          {words.map((w, i) => (
            <span key={i} className="nx-intro__word">
              <span style={{ animationDelay: `${600 + i * 70}ms` }}>{w}</span>
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}
