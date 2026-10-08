"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";
import OpenStatus, { TodayHours } from "@/components/OpenStatus";
import ThemeToggle from "@/components/ThemeToggle";

export default function Hero() {
  const { contact } = siteConfig;
  const [scrollY, setScrollY] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(motionQuery.matches);

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Compute smooth scroll-linked parallax factors (capped)
  const scrollRatio = Math.min(1, scrollY / 700);
  const bgScale = prefersReducedMotion ? 1 : 1 + scrollRatio * 0.08;
  const bgTranslate = prefersReducedMotion ? 0 : scrollY * 0.28;
  const contentOpacity = prefersReducedMotion ? 1 : Math.max(0, 1 - scrollRatio * 1.25);
  const contentTranslate = prefersReducedMotion ? 0 : scrollY * 0.18;

  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-char-950 text-white"
    >
      {/* Background cinematic photograph with parallax and subtle scale */}
      <div
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none will-change-transform"
        aria-hidden="true"
      >
        <div
          className="relative w-full h-[115%] -top-[7.5%] animate-hero-bg transition-transform duration-75 ease-out"
          style={{
            transform: `scale(${bgScale}) translateY(${bgTranslate}px)`,
          }}
        >
          <img
            src="/images/tpc-exterior.jpg"
            alt="The Project Cafe Yellow House exterior in Ambawadi Ahmedabad"
            className="h-full w-full object-cover object-center filter brightness-[0.82] contrast-[1.05]"
          />
        </div>

        {/* Film grain vignette & warm tone overlays to anchor typography legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-char-950 via-char-950/45 to-char-950/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-char-950/80 via-transparent to-char-950/60" />
      </div>

      {/* Classic Top Masthead (Clean, unobtrusive, editorial) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-7 sm:px-8 sm:pt-9">
        <div className="flex items-center justify-between pb-6 border-b border-white/12">
          {/* Brand Mark */}
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ember-500 text-white font-display text-xs font-bold tracking-wider shadow-sm">
              TPC
            </span>
            <div>
              <span className="block font-display text-sm sm:text-base font-bold tracking-tight text-white uppercase">
                The Project Cafe
              </span>
              <span className="block text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-ember-200/75">
                The Yellow House · Ambawadi
              </span>
            </div>
          </div>

          {/* Right Status & Controls */}
          <div className="flex items-center gap-3">
            <OpenStatus />
            <ThemeToggle className="text-white border-white/20 hover:bg-white/10" />
          </div>
        </div>
      </div>

      {/* Hero Central Content Container */}
      <div
        className="relative z-10 mx-auto w-full max-w-7xl px-6 py-12 sm:px-8 sm:py-16 flex-1 flex flex-col justify-center"
        style={{
          opacity: contentOpacity,
          transform: `translateY(${contentTranslate}px)`,
        }}
      >
        <div className="max-w-4xl">
          {/* Eyebrow & Geographic Indicators */}
          <div className="animate-hero-1 flex flex-wrap items-center gap-2.5 text-xs">
            <span className="inline-flex items-center rounded-full bg-white/10 px-3.5 py-1.5 font-semibold uppercase tracking-[0.22em] text-ember-200 ring-1 ring-white/15 backdrop-blur-sm">
              Ahmedabad · Gujarat
            </span>
            <span className="inline-flex items-center rounded-full bg-white/5 px-3 py-1.5 font-semibold uppercase tracking-[0.16em] text-white/80 ring-1 ring-white/10">
              Est. Food · Art · Design · Hospitality
            </span>
          </div>

          {/* Cinematic Headline with strong hierarchy */}
          <div className="mt-8 sm:mt-10">
            <h1 className="animate-hero-2 font-display text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-white leading-[0.98]">
              <span className="block">The Project</span>
              <span className="block text-ember-200/95 italic font-normal tracking-normal mt-1.5">
                Cafe.
              </span>
            </h1>
          </div>

          {/* Editorial Philosophy Statement */}
          <div className="animate-hero-3 mt-7 sm:mt-9 max-w-2xl">
            <p className="font-display text-lg sm:text-2xl font-normal leading-relaxed text-ember-100/90 italic">
              &ldquo;An experience-led lifestyle destination where food, art, design and hospitality come together.&rdquo;
            </p>
            <p className="mt-3.5 text-xs sm:text-sm uppercase tracking-[0.2em] text-white/60 font-medium">
              Food · Art · Design · Retail · Hospitality
            </p>
          </div>

          {/* Action CTAs */}
          <div className="animate-hero-4 mt-9 sm:mt-12 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-full bg-ember-500 px-8 py-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-lg transition-all duration-200 hover:bg-ember-600 hover:scale-[1.02] active:scale-[0.98]"
            >
              Explore The Space
            </a>
            <a
              href="#menu"
              className="inline-flex items-center justify-center rounded-full bg-white/10 px-8 py-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-white ring-1 ring-white/20 backdrop-blur-md transition-all duration-200 hover:bg-white/20 hover:scale-[1.02] active:scale-[0.98]"
            >
              View The Menu
            </a>
          </div>
        </div>
      </div>

      {/* Hero Bottom Editorial Strip */}
      <div className="relative z-10 border-t border-white/10 bg-char-950/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl flex-col sm:flex-row items-center justify-between gap-4 px-6 py-4.5 sm:px-8 text-xs text-ember-100/70">
          <div className="flex items-center gap-2">
            <span className="font-semibold uppercase tracking-[0.16em] text-ember-300">
              Location:
            </span>
            <span>{contact.address.street}, {contact.address.city}</span>
          </div>

          {/* Subtle animated scroll indicator */}
          <a
            href="#about"
            className="group hidden md:flex items-center gap-2.5 font-semibold uppercase tracking-[0.2em] text-white/80 transition-colors hover:text-ember-300"
            aria-label="Scroll down to exploration"
          >
            <span>Scroll To Discover</span>
            <span className="inline-block animate-scroll-line text-ember-400">
              ↓
            </span>
          </a>

          <div className="flex items-center gap-4">
            <div className="hidden sm:block">
              <span className="font-semibold uppercase tracking-[0.16em] text-ember-300 mr-2">
                Today:
              </span>
              <TodayHours />
            </div>
            <a
              href={`tel:${contact.phoneHref}`}
              className="font-medium hover:text-white underline-offset-4 hover:underline"
            >
              {contact.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
