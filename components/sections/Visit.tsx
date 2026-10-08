import { siteConfig, formatHours } from "@/config/site";
import Reveal from "@/components/Reveal";

export default function Visit() {
  const { contact, hours } = siteConfig;

  // Identify today's day of week to highlight active row
  const todayName = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(new Date());

  return (
    <section id="visit" className="border-t border-current/10 py-24 sm:py-36 relative overflow-hidden bg-ember-50/30 dark:bg-char-900/30">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-[1px] w-6 bg-ember-500" />
              <span className="text-xs font-bold uppercase tracking-[0.24em] text-ember-600 dark:text-ember-400">
                Location &amp; Hours
              </span>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold tracking-tight text-char-900 dark:text-ember-50">
              Finding Your Way to The Yellow House
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-4 text-base sm:text-lg opacity-75 font-normal leading-relaxed">
              Located on Dr Vikram Sarabhai Marg in Ambawadi, The Project Cafe is an easy
              retreat from the bustling city rhythm, welcoming guests daily from morning until night.
            </p>
          </Reveal>
        </div>

        {/* Editorial Split: Hours & Details on Left, Visual Landmark Card on Right */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left: Hours & Contacts (7 cols) */}
          <div className="lg:col-span-7 space-y-10">
            {/* Opening Hours Schedule */}
            <Reveal delay={80}>
              <div className="rounded-3xl border border-current/12 bg-white/70 p-8 sm:p-10 backdrop-blur-sm dark:bg-char-900/70 shadow-sm">
                <div className="flex items-baseline justify-between border-b border-current/10 pb-4">
                  <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight">
                    Opening Hours
                  </h3>
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-600 dark:text-emerald-400">
                    Open Daily 10 AM — 11 PM
                  </span>
                </div>

                <dl className="mt-6 space-y-3.5">
                  {hours.map((h) => {
                    const isToday = h.day === todayName;
                    return (
                      <div
                        key={h.day}
                        className={`flex items-baseline justify-between gap-4 text-sm ${
                          isToday
                            ? "font-bold text-ember-600 dark:text-ember-400"
                            : "opacity-75"
                        }`}
                      >
                        <dt className="flex items-center gap-2">
                          {isToday && (
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          )}
                          <span>{h.day}</span>
                          {isToday && (
                            <span className="text-[10px] uppercase tracking-wider text-ember-500">
                              (Today)
                            </span>
                          )}
                        </dt>
                        <span className="leader" aria-hidden="true" />
                        <dd className="tabular-nums font-mono text-xs sm:text-sm">
                          {formatHours(h)}
                        </dd>
                      </div>
                    );
                  })}
                </dl>
              </div>
            </Reveal>

            {/* Address & Communication Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Address Box */}
              <Reveal delay={160}>
                <div className="rounded-3xl border border-current/12 bg-white/70 p-7 backdrop-blur-sm dark:bg-char-900/70 h-full flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-ember-600 dark:text-ember-400">
                      Physical Address
                    </span>
                    <address className="mt-3 text-sm not-italic leading-relaxed opacity-80">
                      <strong className="block font-semibold text-char-900 dark:text-ember-50">
                        {contact.address.street}
                      </strong>
                      {contact.address.city}, {contact.address.region} {contact.address.postalCode}
                      <br />
                      {contact.address.country}
                    </address>
                  </div>

                  <div className="mt-6 pt-4 border-t border-current/10">
                    <a
                      href={contact.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-ember-600 hover:text-ember-700 dark:text-ember-400"
                    >
                      <span>Get Directions on Google Maps</span>
                      <span>↗</span>
                    </a>
                  </div>
                </div>
              </Reveal>

              {/* Direct Inquiries */}
              <Reveal delay={220}>
                <div className="rounded-3xl border border-current/12 bg-white/70 p-7 backdrop-blur-sm dark:bg-char-900/70 h-full flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-ember-600 dark:text-ember-400">
                      Direct Inquiries
                    </span>
                    <div className="mt-3 space-y-2 text-sm">
                      <a
                        href={`tel:${contact.phoneHref}`}
                        className="block font-display text-lg font-bold hover:underline"
                      >
                        {contact.phone}
                      </a>
                      <a
                        href={`mailto:${contact.email}`}
                        className="block text-xs sm:text-sm opacity-75 hover:underline font-mono"
                      >
                        {contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-current/10 flex items-center justify-between text-xs opacity-75">
                    <a
                      href={siteConfig.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline font-semibold"
                    >
                      Instagram ↗
                    </a>
                    <a
                      href={siteConfig.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline font-semibold"
                    >
                      Facebook ↗
                    </a>
                    <a
                      href={siteConfig.locationPageUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline font-semibold"
                    >
                      TPC Portal ↗
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Right: Immersive Landmark Card (5 cols) */}
          <div className="lg:col-span-5">
            <Reveal delay={140}>
              <div className="overflow-hidden rounded-3xl bg-char-950 text-white shadow-xl border border-white/10">
                <div className="aspect-[4/3] sm:aspect-[16/11] overflow-hidden relative">
                  <img
                    src="/images/tpc-exterior.jpg"
                    alt="The Project Cafe Yellow House exterior in Ambawadi"
                    className="h-full w-full object-cover filter brightness-[0.88] hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-char-950 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="rounded-full bg-char-950/80 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-ember-300 backdrop-blur-md">
                      Landmark Destination
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-ember-400">
                    Neighborhood
                  </span>
                  <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-white">
                    The Iconic Yellow House
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-ember-100/75 font-normal">
                    Set back from the street within a shaded residential enclave in Ambawadi,
                    the Yellow House offers a serene courtyard escape with ample valet assistance
                    and peaceful verandah seating.
                  </p>

                  <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <span className="block text-[10px] uppercase tracking-wider text-white/50">
                        Coordinates
                      </span>
                      <span className="font-mono text-xs text-ember-300">
                        23.0225° N, 72.5714° E
                      </span>
                    </div>
                    <a
                      href={contact.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full bg-ember-500 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-all hover:bg-ember-600"
                    >
                      Navigate
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
