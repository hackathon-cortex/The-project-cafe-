"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/Reveal";

interface StoryPanel {
  id: string;
  time: string;
  tag: string;
  title: string;
  description: string;
  image: string;
}

const PANELS: StoryPanel[] = [
  {
    id: "01",
    time: "10:00 AM",
    tag: "MORNING RHYTHMS",
    title: "Sunlit Verandah & Slow Brews",
    description:
      "Soft morning sunlight filtering through the historic trees of Ambawadi. Fresh griddled brioche, warm espresso, and quiet hours for reading before the city stirs.",
    image: "/images/tpc-exterior.jpg",
  },
  {
    id: "02",
    time: "01:30 PM",
    tag: "THE CREATIVE CANVAS",
    title: "Art Gallery & Design Sanctuary",
    description:
      "Walls adorned with contemporary paintings, tactile artisan crafts, and curated lifestyle objects. Every dining corner immerses guests in living creative dialogue.",
    image: "/images/tpc-interior.jpg",
  },
  {
    id: "03",
    time: "05:00 PM",
    tag: "HEARTH & FLAME",
    title: "Artisan Wood-Fired Kitchen",
    description:
      "Hand-stretched dough blistered in our live wood-fired oven. Fresh San Marzano tomatoes, melted mozzarella, and fragrant herbs served fresh to order.",
    image: "/images/tpc-food.jpg",
  },
  {
    id: "04",
    time: "08:30 PM",
    tag: "EVENING ENCOUNTER",
    title: "Courtyard Glow & Shared Stories",
    description:
      "Ambient lanterns illuminate the open-air courtyard. Handcrafted coolers, comforting pastas, and the warm hum of community gatherings under the night sky.",
    image: "/images/tpc-courtyard.jpg",
  },
];

export default function HorizontalStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const [activePanel, setActivePanel] = useState(0);

  useEffect(() => {
    const checkViewport = () => {
      setIsDesktop(window.innerWidth >= 1024 && !window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    };

    checkViewport();
    window.addEventListener("resize", checkViewport);

    let ticking = false;
    const handleScroll = () => {
      if (!isDesktop || !containerRef.current || !trackRef.current) return;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          const container = containerRef.current;
          if (!container) return;

          const rect = container.getBoundingClientRect();
          const totalDistance = container.offsetHeight - window.innerHeight;

          if (totalDistance <= 0) return;

          // Progress from 0 (at top of container) to 1 (at bottom of container)
          const currentOffset = -rect.top;
          const progress = Math.max(0, Math.min(1, currentOffset / totalDistance));
          setScrollProgress(progress);

          // Update active panel indicator
          const panelIndex = Math.min(PANELS.length - 1, Math.floor(progress * PANELS.length));
          setActivePanel(panelIndex);

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("resize", checkViewport);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isDesktop]);

  // On desktop, translate track from 0% to -(100% - 100vw)
  // 4 panels each approx 70vw or 600px
  const maxShiftPercent = (PANELS.length - 1) * 75; // percentage shift
  const translateX = -scrollProgress * maxShiftPercent;

  return (
    <section
      id="story"
      ref={containerRef}
      className={`relative ${
        isDesktop ? "h-[320vh]" : "py-24 sm:py-32"
      } bg-char-950 text-white`}
    >
      {/* Sticky Viewport Container on Desktop */}
      <div
        className={`${
          isDesktop
            ? "sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center"
            : "w-full"
        }`}
      >
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 mb-8 sm:mb-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <Reveal>
                <div className="flex items-center gap-3">
                  <span className="h-[1px] w-6 bg-ember-500" />
                  <span className="text-xs font-bold uppercase tracking-[0.24em] text-ember-400">
                    A Day at The Project Cafe
                  </span>
                </div>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
                  Rhythms of The Yellow House
                </h2>
              </Reveal>
            </div>

            {/* Desktop Progress Counter */}
            {isDesktop ? (
              <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-ember-300">
                <span>0{activePanel + 1}</span>
                <div className="h-[2px] w-20 bg-white/20 overflow-hidden rounded-full">
                  <div
                    className="h-full bg-ember-500 transition-all duration-150"
                    style={{ width: `${(scrollProgress * 100).toFixed(0)}%` }}
                  />
                </div>
                <span className="text-white/40">0{PANELS.length}</span>
              </div>
            ) : null}
          </div>
        </div>

        {/* Desktop Smooth Horizontal Scrolling Track */}
        {isDesktop ? (
          <div className="w-full overflow-hidden px-6 sm:px-8">
            <div
              ref={trackRef}
              className="flex gap-8 will-change-transform transition-transform duration-100 ease-out"
              style={{
                transform: `translateX(${translateX}vw)`,
              }}
            >
              {PANELS.map((panel, idx) => (
                <div
                  key={panel.id}
                  className="w-[72vw] max-w-[850px] shrink-0 overflow-hidden rounded-3xl bg-char-900 border border-white/10 shadow-2xl flex flex-col md:flex-row items-stretch"
                >
                  {/* Panel Image */}
                  <div className="md:w-7/12 aspect-[4/3] md:aspect-auto overflow-hidden relative">
                    <img
                      src={panel.image}
                      alt={panel.title}
                      className="h-full w-full object-cover filter brightness-[0.88] hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="rounded-full bg-char-950/80 px-3 py-1 font-mono text-xs font-bold text-ember-300 backdrop-blur-md">
                        {panel.time}
                      </span>
                    </div>
                  </div>

                  {/* Panel Content */}
                  <div className="md:w-5/12 p-8 sm:p-10 flex flex-col justify-between bg-char-900/90">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-ember-400">
                        {panel.tag}
                      </span>
                      <h3 className="mt-3 font-display text-2xl sm:text-3xl font-bold tracking-tight text-white leading-snug">
                        {panel.title}
                      </h3>
                      <p className="mt-4 text-sm leading-relaxed text-ember-100/75 font-normal">
                        {panel.description}
                      </p>
                    </div>

                    <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs text-white/50">
                      <span>Panel {panel.id} of 0{PANELS.length}</span>
                      <span className="font-mono text-ember-300">Ambawadi</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Mobile / Tablet Horizontal Swipe Carousel */
          <div className="px-6 sm:px-8">
            <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-6">
              {PANELS.map((panel) => (
                <div
                  key={panel.id}
                  className="w-[85vw] max-w-[420px] shrink-0 snap-center overflow-hidden rounded-2xl bg-char-900 border border-white/10"
                >
                  <div className="aspect-[16/11] overflow-hidden relative">
                    <img
                      src={panel.image}
                      alt={panel.title}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="rounded-full bg-char-950/80 px-2.5 py-0.5 font-mono text-[11px] font-bold text-ember-300 backdrop-blur-md">
                        {panel.time}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-ember-400">
                      {panel.tag}
                    </span>
                    <h3 className="mt-2 font-display text-xl font-bold text-white">
                      {panel.title}
                    </h3>
                    <p className="mt-3 text-xs leading-relaxed text-ember-100/75">
                      {panel.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-xs uppercase tracking-widest text-white/40 mt-3">
              ← Swipe to explore the day →
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
