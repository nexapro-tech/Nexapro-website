import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useSeo } from "../lib/seo";
import Icon from "../components/Icon";

export default function NotFound() {
  useSeo({ title: "Page not found", description: "The page you are looking for does not exist." });
  useEffect(() => {
    let m = document.querySelector('meta[name="robots"]');
    if (!m) {
      m = document.createElement("meta");
      m.name = "robots";
      document.head.appendChild(m);
    }
    m.content = "noindex";
    return () => m.remove();
  }, []);
  return (
    <section className="relative grid min-h-[80vh] place-items-center overflow-hidden pt-[76px]">
      <div className="absolute inset-0 bg-scan opacity-60" aria-hidden="true" />
      <div className="wrap relative max-w-2xl text-center">
        <div className="mx-auto w-full max-w-md rounded-md border border-phosphor/30 bg-[#03110B] p-5 text-left font-mono text-[13px] text-phosphor">
          <p>IEC141I 013-18 OPEN FAILED</p>
          <p className="text-phosphor/70">DSN=YOUR.REQUESTED.PAGE — NOT FOUND</p>
          <p className="mt-2 text-phosphor/50">RC=404 <span className="caret inline-block h-[1em] w-[0.55em] translate-y-[2px] bg-phosphor/80" /></p>
        </div>
        <h1 className="mt-10 text-display-lg">This page didn't make it through the batch run.</h1>
        <p className="mt-4 text-slate-400">The link may be old or mistyped. Let's get you somewhere useful.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link to="/" className="btn-primary">Back to home <Icon name="arrow" className="arrow" /></Link>
          <Link to="/services" className="btn-outline">Browse services</Link>
        </div>
      </div>
    </section>
  );
}
