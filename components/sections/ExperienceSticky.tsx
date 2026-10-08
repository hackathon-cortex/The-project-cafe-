"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";

interface Pillar {
  number: string;
  category: string;
  title: string;
  description: string;
  image: string;
  aspect: string;
}

const PILLARS: Pillar[] = [
  {
    number: "01",
    category: "ART",
    title: "Living Gallery & Expression",
    description:
      "A space that brings art and creative expression into the hospitality experience. The verandahs and exhibition corners serve as an evolving canvas featuring original contemporary artwork, sculptures, and rotating cultural curations.",
    image: "/images/tpc-details.jpg",
    aspect: "aspect-[16/10]",
  },
  {
    number: "02",
    category: "FOOD",
    title: "Culinary Craft & Wood-Fired Oven",
    description:
      "A diverse café and restaurant menu spanning world cuisines. From hand-stretched wood-fired pizzas with blistered crusts to slow-simmered risottos, handmade pastas, and comforting morning plates prepared with honest ingredients.",
    image: "/images/tpc-food.jpg",
    aspect: "aspect-[16/10]",
  },
  {
    number: "03",
    category: "DESIGN",
    title: "The Yellow House Architecture",
    description:
      "An evolving environment shaped by design, objects and creative collaborations. Within the historic Yellow House, tactile materials, bespoke furniture, and curated retail objects celebrate timeless design in everyday living.",
    image: "/images/tpc-interior.jpg",
    aspect: "aspect-[16/10]",
  },
  {
    number: "04",
    category: "HOSPITALITY",
    title: "Community, Dialogue & Slow Living",
    description:
      "A destination built around experience, interaction and community. A welcoming neighborhood haven where Ahmedabad gathers for unhurried conversations, quiet reading under the trees, and shared culinary celebrations.",
    image: "/images/tpc-courtyard.jpg",
    aspect: "aspect-[16/10]",
  },
];

export default function ExperienceSticky() {
  const [activePillar, setActivePillar] = useState(0);

  return (
    <section
      id="experience"
      className="border-y border-current/10 bg-ember-50/40 dark:bg-char-900/40 py-24 sm:py-36 relative"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Sticky Anchor Heading (Desktop) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="h-[1px] w-6 bg-ember-500" />
                <span className="text-xs font-bold uppercase tracking-[0.24em] text-ember-600 dark:text-ember-400">
                  The Experience
                </span>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h2 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-char-900 dark:text-ember-50 leading-[1.05]">
                More than a cafe.
              </h2>
            </Reveal>

            <Reveal delay={140}>
              <p className="mt-6 text-base sm:text-lg leading-relaxed opacity-75 font-normal max-w-md">
                The Project Cafe was conceived not simply as a place to dine,
                but as a living cultural ecosystem in Ambawadi where culinary craft,
                contemporary art, thoughtful design, and warm hospitality merge into
                an unhurried, multi-sensory experience.
              </p>
            </Reveal>

            {/* Pillar Navigation Indicators */}
            <Reveal delay={200}>
              <div className="mt-10 hidden lg:flex flex-col space-y-3 border-l border-current/15 pl-5">
                {PILLARS.map((p, idx) => (
                  <div
                    key={p.category}
                    className={`text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-200 ${
                      activePillar === idx
                        ? "text-ember-600 dark:text-ember-400 translate-x-1"
                        : "opacity-45 hover:opacity-75"
                    }`}
                  >
                    <span>{p.number} — </span>
                    <span>{p.category}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={260}>
              <div className="mt-10 pt-8 border-t border-current/10 hidden sm:flex items-center gap-6 text-xs uppercase tracking-[0.16em] opacity-70">
                <div>
                  <span className="font-bold text-char-900 dark:text-ember-100">4 Pillars</span>
                  <span className="block opacity-60">Interconnected</span>
                </div>
                <div className="h-6 w-[1px] bg-current opacity-20" />
                <div>
                  <span className="font-bold text-char-900 dark:text-ember-100">Yellow House</span>
                  <span className="block opacity-60">Historic Setting</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Scrolling Storytelling Items */}
          <div className="lg:col-span-7 flex flex-col space-y-16 sm:space-y-24">
            {PILLARS.map((pillar, idx) => (
              <div
                key={pillar.category}
                onMouseEnter={() => setActivePillar(idx)}
                className="group relative"
              >
                <Reveal delay={idx * 60}>
                  <div className="overflow-hidden rounded-2xl bg-char-900/5 dark:bg-white/5 ring-1 ring-black/5 dark:ring-white/10 shadow-sm transition-all duration-300 group-hover:shadow-md">
                    {/* Pillar Image with subtle scale */}
                    <div className={`${pillar.aspect} overflow-hidden relative`}>
                      <img
                        src={pillar.image}
                        alt={`${pillar.title} at The Project Cafe Ahmedabad`}
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-char-950/70 via-transparent to-transparent opacity-60" />
                      <div className="absolute top-5 left-5">
                        <span className="inline-flex items-center rounded-full bg-char-950/75 backdrop-blur-md px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-ember-200">
                          {pillar.number} · {pillar.category}
                        </span>
                      </div>
                    </div>

                    {/* Content Box */}
                    <div className="p-7 sm:p-9 bg-white dark:bg-char-950">
                      <div className="flex items-baseline justify-between gap-4">
                        <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-char-900 dark:text-ember-50 transition-transform duration-300 group-hover:translate-x-1">
                          {pillar.title}
                        </h3>
                        <span className="text-ember-500 font-display text-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          →
                        </span>
                      </div>
                      <p className="mt-4 text-sm sm:text-base leading-relaxed opacity-75 font-normal">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
