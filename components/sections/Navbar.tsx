"use client";

import { useEffect, useState } from "react";
import Logo from "@/components/Logo";
import ThemeToggle from "@/components/ThemeToggle";
import { siteConfig } from "@/config/site";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#story", label: "Canvas" },
  { href: "#menu", label: "Menu" },
  { href: "#space", label: "The Space" },
  { href: "#visit", label: "Visit" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      // Reveal navbar only once the user scrolls into the second section (About)
      const aboutEl = document.getElementById("about");
      if (aboutEl) {
        const rect = aboutEl.getBoundingClientRect();
        // Show when about section is within 120px of top of viewport or scrolled into it
        setShowNavbar(rect.top <= 120);
      } else {
        setShowNavbar(window.scrollY > window.innerHeight * 0.75);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section for editorial nav indicator
  useEffect(() => {
    const sectionIds = ["about", "experience", "story", "menu", "space", "visit", "reserve"];
    const handleScrollSpy = () => {
      const scrollPos = window.scrollY + 200;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScrollSpy, { passive: true });
    handleScrollSpy();
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  // Lock body scroll while mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out border-b border-black/5 bg-white/95 backdrop-blur-md py-3.5 dark:border-white/10 dark:bg-char-950/95 shadow-[0_4px_24px_rgba(0,0,0,0.04)] ${
        showNavbar
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-8">
        <a
          href="#top"
          aria-label={`${siteConfig.name} — Ahmedabad`}
          className="group transition-opacity hover:opacity-90"
        >
          <Logo />
        </a>

        {/* Desktop Editorial Navigation Links */}
        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => {
            const isActive = activeSection === l.href.replace("#", "");
            return (
              <a
                key={l.href}
                href={l.href}
                className={`relative text-xs font-semibold uppercase tracking-[0.16em] transition-colors ${
                  isActive
                    ? "text-ember-600 dark:text-ember-400 font-bold"
                    : "opacity-75 hover:opacity-100 hover:text-ember-600 dark:hover:text-ember-300"
                }`}
              >
                {l.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 h-[1.5px] w-full bg-ember-500 rounded-full" />
                )}
              </a>
            );
          })}
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          <a
            href={`tel:${siteConfig.contact.phoneHref}`}
            className="hidden text-xs font-semibold tracking-wider opacity-80 hover:opacity-100 lg:inline-block"
          >
            {siteConfig.contact.phone}
          </a>

          <ThemeToggle />

          <a
            href="#reserve"
            className="hidden rounded-full bg-ember-500 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-white shadow-sm transition-all hover:bg-ember-600 hover:shadow sm:inline-block"
          >
            Book Table
          </a>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open navigation menu"}
            aria-expanded={open}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 transition-colors md:hidden hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/10"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {open ? (
                <path d="M18 6 6 18M6 6l12 12" />
              ) : (
                <path d="M3 7h18M3 12h18M3 17h18" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {open && (
        <div className="border-t border-black/5 bg-white/98 px-6 pb-8 pt-4 md:hidden dark:border-white/10 dark:bg-char-950/98 shadow-xl">
          <div className="flex flex-col space-y-1">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block border-b border-black/5 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] opacity-85 transition-colors hover:text-ember-600 last:border-0 dark:border-white/10"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-3">
            <a
              href="#reserve"
              onClick={() => setOpen(false)}
              className="rounded-full bg-ember-500 px-5 py-3.5 text-center text-xs font-semibold uppercase tracking-[0.14em] text-white"
            >
              Book a Table
            </a>
            <a
              href={`tel:${siteConfig.contact.phoneHref}`}
              className="rounded-full border border-black/10 px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.14em] dark:border-white/15"
            >
              Call {siteConfig.contact.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
