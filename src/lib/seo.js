import { useEffect } from "react";
import { companyInfo } from "../data/content";

const setMeta = (attr, key, value) => {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
};

const setCanonical = (href) => {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
};

/** Per-page title, description, canonical and optional JSON-LD. */
export function useSeo({ title, description, path, jsonLd }) {
  useEffect(() => {
    const full = title ? `${title} | ${companyInfo.name}` : `${companyInfo.name} | Legacy Mainframe & Modern Software Development`;
    document.title = full;
    if (description) {
      setMeta("name", "description", description);
      setMeta("property", "og:description", description);
    }
    setMeta("property", "og:title", full);
    const url = companyInfo.siteUrl + (path ?? window.location.pathname);
    setMeta("property", "og:url", url);
    setCanonical(url);

    let script;
    if (jsonLd) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.dataset.page = "1";
      script.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }
    return () => {
      if (script) script.remove();
    };
  }, [title, description, path, jsonLd]);
}
