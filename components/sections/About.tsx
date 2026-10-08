import { siteConfig } from "@/config/site";
import Reveal from "@/components/Reveal";

export default function About() {
  const { about } = siteConfig;

  return (
    <section id="about" className="relative py-24 sm:py-36 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* Top Editorial Split Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Dominant Statement */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="h-[1px] w-6 bg-ember-500" />
                <span className="text-xs font-bold uppercase tracking-[0.24em] text-ember-600 dark:text-ember-400">
                  {about.eyebrow}
                </span>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <h2 className="mt-6 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.12] text-char-900 dark:text-ember-50">
                An experience-led lifestyle destination where food, art, design and hospitality come together.
              </h2>
            </Reveal>

            <Reveal delay={180}>
              <div className="mt-8 flex flex-wrap gap-4 text-xs font-semibold uppercase tracking-[0.18em] text-char-800/70 dark:text-ember-200/70">
                <span className="rounded-full border border-current/15 px-3.5 py-1.5">
                  Ambawadi, Ahmedabad
                </span>
                <span className="rounded-full border border-current/15 px-3.5 py-1.5">
                  The Iconic Yellow House
                </span>
                <span className="rounded-full border border-current/15 px-3.5 py-1.5">
                  Multi-Disciplinary Concept
                </span>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Supporting Narrative & Details */}
          <div className="lg:col-span-5 lg:pt-4">
            <Reveal delay={140}>
              <div className="space-y-5 text-base sm:text-lg leading-relaxed opacity-80 font-normal">
                {about.body.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={220}>
              <div className="mt-9 pt-8 border-t border-current/10 flex items-center justify-between">
                <div>
                  <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] opacity-60">
                    Cuisine &amp; Craft
                  </span>
                  <span className="mt-1 block font-display text-sm font-semibold">
                    Global / Italian / Artisan Cafe
                  </span>
                </div>
                <div>
                  <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] opacity-60">
                    Atmosphere
                  </span>
                  <span className="mt-1 block font-display text-sm font-semibold">
                    Gallery Verandah &amp; Garden
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Asymmetrical Staggered Image Composition with Visual Rhythm */}
        <div className="mt-18 sm:mt-24 grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Dominant Image (Left - spans 7 columns) */}
          <div className="md:col-span-7">
            <Reveal delay={100}>
              <div className="group relative overflow-hidden rounded-2xl bg-char-900/5 dark:bg-white/5 ring-1 ring-black/5 dark:ring-white/10">
                <div className="aspect-[4/3] sm:aspect-[16/11] overflow-hidden">
                  <img
                    src="/images/tpc-interior.jpg"
                    alt="Art gallery, design retail and cafe seating at The Project Cafe"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-char-950/70 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-5 left-6 right-6 flex items-end justify-between text-white">
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-ember-300">
                      01 / Sanctuary
                    </span>
                    <h3 className="font-display text-lg font-bold sm:text-xl">
                      Art Gallery &amp; Design Interiors
                    </h3>
                  </div>
                  <span className="hidden sm:inline-block text-xs uppercase tracking-wider opacity-75">
                    Ambawadi
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Staggered Secondary & Overlapping Accent Images (Right - spans 5 columns) */}
          <div className="md:col-span-5 flex flex-col gap-6 sm:gap-8 md:pt-10">
            {/* Secondary Image */}
            <Reveal delay={200}>
              <div className="group relative overflow-hidden rounded-2xl bg-char-900/5 dark:bg-white/5 ring-1 ring-black/5 dark:ring-white/10">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src="/images/tpc-food.jpg"
                    alt="Artisanal wood-fired pizza and freshly prepared pasta"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-char-950/70 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-ember-300">
                    02 / Culinary
                  </span>
                  <h3 className="font-display text-base font-bold sm:text-lg">
                    Wood-Fired Hearth &amp; Handcrafted Pasta
                  </h3>
                </div>
              </div>
            </Reveal>

            {/* Overlapping Accent Image */}
            <Reveal delay={280}>
              <div className="group relative overflow-hidden rounded-2xl bg-char-900/5 dark:bg-white/5 ring-1 ring-black/5 dark:ring-white/10 md:-ml-8 md:w-[110%] shadow-xl">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src="/images/tpc-coffee.jpg"
                    alt="Specialty iced coffee and refreshing handcrafted coolers"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-char-950/70 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-5 right-5 text-white flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-ember-300">
                      03 / Slow Brews
                    </span>
                    <h3 className="font-display text-base font-bold">
                      Specialty Coffee &amp; Coolers
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-ember-200 opacity-80">
                    10:00 — 23:00
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
