"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";
import Reveal from "@/components/Reveal";

const TAG_STYLES: Record<string, string> = {
  v: "bg-emerald-100 text-emerald-800 dark:bg-emerald-500/15 dark:text-emerald-300",
  vg: "bg-lime-100 text-lime-800 dark:bg-lime-500/15 dark:text-lime-300",
  gf: "bg-sky-100 text-sky-800 dark:bg-sky-500/15 dark:text-sky-300",
  popular:
    "bg-ember-100 text-ember-700 dark:bg-ember-500/20 dark:text-ember-200 border border-ember-500/20",
  new: "bg-amber-100 text-amber-800 dark:bg-amber-500/15 dark:text-amber-300",
};

// Map dish types to authentic high-res images
function getImageForSection(sectionName: string): string {
  const s = sectionName.toLowerCase();
  if (s.includes("pizza") || s.includes("plate") || s.includes("soup") || s.includes("classic")) {
    return "/images/tpc-food.jpg";
  }
  if (s.includes("beverage") || s.includes("coffee") || s.includes("tea")) {
    return "/images/tpc-coffee.jpg";
  }
  return "/images/tpc-interior.jpg";
}

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [hoveredItem, setHoveredItem] = useState<{
    name: string;
    section: string;
    price: string;
  } | null>(null);

  const categories = ["All", ...siteConfig.menu.map((m) => m.section)];

  const displayedSections =
    selectedCategory === "All"
      ? siteConfig.menu
      : siteConfig.menu.filter((m) => m.section === selectedCategory);

  return (
    <section id="menu" className="paper py-24 sm:py-36 relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        {/* Section Header */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3">
              <span className="h-[1px] w-6 bg-ember-500" />
              <span className="text-xs font-bold uppercase tracking-[0.24em] text-ember-600 dark:text-ember-400">
                The Menu
              </span>
              <span className="h-[1px] w-6 bg-ember-500" />
            </div>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-char-900 dark:text-ember-50">
              Curated Dining &amp; Brews
            </h2>
            <p className="mt-5 text-base sm:text-lg leading-relaxed opacity-75 max-w-2xl mx-auto font-normal">
              A diverse multi-cuisine repertoire spanning hand-stretched wood-fired pizzas,
              slow-simmered pastas, wholesome morning plates, and artisanal beverages.
            </p>
          </div>
        </Reveal>

        {/* Dietary Legend */}
        <Reveal delay={60}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {siteConfig.dietaryLegend.map((l) => (
              <span
                key={l.tag}
                className="inline-flex items-center gap-1.5 text-xs opacity-75 font-medium"
              >
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${
                    TAG_STYLES[l.tag] ?? ""
                  }`}
                >
                  {l.tag}
                </span>
                {l.label}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Category Filter Tabs */}
        <Reveal delay={100}>
          <div className="mt-12 flex items-center justify-start sm:justify-center overflow-x-auto no-scrollbar gap-2 pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`whitespace-nowrap rounded-full px-4.5 py-2 text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-char-900 text-white dark:bg-ember-500 dark:text-white shadow-sm"
                    : "border border-current/15 opacity-70 hover:opacity-100 hover:border-current/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Editorial Menu Spread */}
        <div className="mt-16 space-y-16">
          {displayedSections.map((section, sIdx) => (
            <Reveal key={section.section} delay={sIdx * 40}>
              <div className="relative">
                {/* Section Title Header */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-current/20 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-ember-600 dark:text-ember-400 font-bold">
                      0{sIdx + 1}
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-char-900 dark:text-ember-50">
                      {section.section}
                    </h3>
                  </div>
                  {"note" in section && section.note ? (
                    <p className="text-xs italic opacity-65 font-serif sm:text-right">
                      {section.note}
                    </p>
                  ) : null}
                </div>

                {/* Items in Editorial Two-Column Rhythm */}
                <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-7">
                  {section.items.map((item) => {
                    const isHovered = hoveredItem?.name === item.name;

                    return (
                      <li
                        key={item.name}
                        onMouseEnter={() =>
                          setHoveredItem({
                            name: item.name,
                            section: section.section,
                            price: item.price,
                          })
                        }
                        onMouseLeave={() => setHoveredItem(null)}
                        className="group relative pb-2 transition-all duration-200"
                      >
                        {/* Title, Leader, and Price */}
                        <div className="flex items-baseline justify-between">
                          <h4
                            className={`font-display text-base sm:text-lg font-bold tracking-tight transition-colors duration-200 ${
                              isHovered
                                ? "text-ember-600 dark:text-ember-400"
                                : "text-char-900 dark:text-ember-50"
                            }`}
                          >
                            {item.name}
                          </h4>
                          <span
                            className={`leader transition-opacity duration-200 ${
                              isHovered ? "opacity-60" : "opacity-25"
                            }`}
                            aria-hidden="true"
                          />
                          <span className="font-display text-base font-bold tabular-nums text-char-900 dark:text-ember-50 shrink-0">
                            {siteConfig.currency}{item.price}
                          </span>
                        </div>

                        {/* Description & Dietary Badges */}
                        <div className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1">
                          <p className="text-xs sm:text-sm leading-relaxed opacity-70 font-normal">
                            {item.description}
                          </p>
                          {"tags" in item && item.tags
                            ? item.tags.map((t) => (
                                <span
                                  key={t}
                                  className={`rounded-full px-2 py-0.2 text-[9px] font-bold uppercase tracking-wider ${
                                    TAG_STYLES[t] ?? "bg-black/5 dark:bg-white/10"
                                  }`}
                                >
                                  {t}
                                </span>
                              ))
                            : null}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Floating Menu Image Preview Indicator (Desktop Only) */}
        {hoveredItem && (
          <div
            className="hidden lg:block fixed bottom-8 right-8 z-40 pointer-events-none transition-all duration-300 ease-out animate-hero-1"
            aria-hidden="true"
          >
            <div className="w-64 overflow-hidden rounded-2xl bg-char-950 p-2 shadow-2xl border border-white/15 backdrop-blur-md">
              <div className="aspect-[16/10] overflow-hidden rounded-xl relative">
                <img
                  src={getImageForSection(hoveredItem.section)}
                  alt={hoveredItem.name}
                  className="h-full w-full object-cover filter brightness-[0.9]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-char-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-2 left-3 right-3 text-white">
                  <span className="text-[10px] font-mono uppercase text-ember-300">
                    {hoveredItem.section}
                  </span>
                  <p className="font-display text-xs font-bold truncate">
                    {hoveredItem.name}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Takeout Delivery Box */}
        {siteConfig.takeout.enabled && (
          <Reveal delay={120}>
            <div className="mt-20 rounded-3xl border border-current/15 bg-white/70 p-8 sm:p-12 text-center backdrop-blur-sm dark:bg-char-900/70 shadow-sm">
              <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-ember-600 dark:text-ember-400">
                Doorstep Delivery
              </span>
              <h3 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight">
                Enjoy The Project Cafe at Home
              </h3>
              <p className="mx-auto mt-3 max-w-lg text-sm sm:text-base opacity-75 font-normal">
                {siteConfig.takeout.note}
              </p>
              <div className="mt-6">
                <a
                  href={siteConfig.takeout.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-ember-500 px-8 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-white shadow-md transition-all hover:bg-ember-600 hover:scale-[1.02] active:scale-[0.98]"
                >
                  {siteConfig.takeout.label} via Zomato
                </a>
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
