"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";
import Reveal from "@/components/Reveal";

export default function Reservations() {
  const { reservations, contact } = siteConfig;
  const [sent, setSent] = useState(false);

  const usesBackend = reservations.action && reservations.action !== "#";

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    if (!usesBackend) {
      e.preventDefault();
      setSent(true);
    }
  }

  // Today in yyyy-mm-dd
  const today = new Date().toISOString().split("T")[0];

  return (
    <section id="reserve" className="py-24 sm:py-36 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* Table Reservation Module */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Context & Guidelines (5 cols) */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="h-[1px] w-6 bg-ember-500" />
                <span className="text-xs font-bold uppercase tracking-[0.24em] text-ember-600 dark:text-ember-400">
                  Reservations
                </span>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h2 className="mt-5 font-display text-4xl sm:text-5xl font-bold tracking-tight text-char-900 dark:text-ember-50 leading-[1.08]">
                {reservations.heading}
              </h2>
            </Reveal>

            <Reveal delay={140}>
              <p className="mt-6 text-base sm:text-lg leading-relaxed opacity-75 font-normal">
                {reservations.body}
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-8 rounded-3xl border border-current/12 bg-white/60 p-7 backdrop-blur-sm dark:bg-char-900/60 shadow-sm">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-ember-600 dark:text-ember-400">
                  Large Gatherings
                </span>
                <p className="mt-2 text-sm font-semibold opacity-90">
                  {reservations.largePartyNote}
                </p>
                <a
                  href={`tel:${contact.phoneHref}`}
                  className="mt-3 inline-block font-display text-2xl font-bold text-ember-500 hover:text-ember-600 hover:underline"
                >
                  {contact.phone}
                </a>
                <p className="mt-2 text-xs opacity-60">
                  Daily 10:00 AM – 11:00 PM · Ambawadi, Ahmedabad
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Form / Confirmation (7 cols) */}
          <div className="lg:col-span-7">
            <Reveal delay={120}>
              {sent ? (
                <div className="rounded-3xl border border-emerald-500/30 bg-emerald-50/80 p-10 text-center dark:bg-emerald-950/20 shadow-md">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-sm">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="m5 13 4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-bold">
                    Table Request Received
                  </h3>
                  <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed opacity-80">
                    Thank you for requesting a table at The Project Cafe. Our team will verify availability
                    and confirm your booking shortly.
                  </p>
                  <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                      href={`tel:${contact.phoneHref}`}
                      className="rounded-full bg-ember-500 px-7 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-white shadow transition-all hover:bg-ember-600"
                    >
                      Call {contact.phone}
                    </a>
                    <button
                      type="button"
                      onClick={() => setSent(false)}
                      className="text-xs font-semibold uppercase tracking-[0.16em] text-ember-600 dark:text-ember-400 hover:underline"
                    >
                      Modify Request
                    </button>
                  </div>
                </div>
              ) : (
                <form
                  action={usesBackend ? reservations.action : undefined}
                  method={usesBackend ? "POST" : undefined}
                  onSubmit={handleSubmit}
                  className="rounded-3xl border border-current/12 bg-white/70 p-8 sm:p-10 backdrop-blur-sm dark:bg-char-900/70 shadow-sm"
                >
                  <div className="grid gap-6 sm:grid-cols-2">
                    <Field label="Full Name" htmlFor="name">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your name"
                        autoComplete="name"
                        className="input"
                      />
                    </Field>
                    <Field label="Phone Number" htmlFor="phone">
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="+91..."
                        autoComplete="tel"
                        className="input"
                      />
                    </Field>
                    <Field label="Date" htmlFor="date">
                      <input
                        id="date"
                        name="date"
                        type="date"
                        required
                        min={today}
                        className="input"
                      />
                    </Field>
                    <Field label="Preferred Time" htmlFor="time">
                      <input
                        id="time"
                        name="time"
                        type="time"
                        required
                        className="input"
                      />
                    </Field>
                  </div>

                  <fieldset className="mt-6">
                    <legend className="mb-2.5 block text-xs font-semibold uppercase tracking-[0.16em] opacity-80">
                      Party Size
                    </legend>
                    <div className="flex flex-wrap gap-2.5">
                      {reservations.partySizes.map((size, i) => (
                        <label
                          key={size}
                          className="cursor-pointer rounded-full border border-current/15 px-4.5 py-2 text-xs font-semibold transition-all duration-200 has-[:checked]:border-ember-500 has-[:checked]:bg-ember-500 has-[:checked]:text-white hover:border-current/30"
                        >
                          <input
                            type="radio"
                            name="party"
                            value={size}
                            defaultChecked={i === 1}
                            className="sr-only"
                          />
                          {size} Guests
                        </label>
                      ))}
                    </div>
                  </fieldset>

                  <div className="mt-6">
                    <Field label="Special Requests or Dietary Notes" htmlFor="notes" optional>
                      <textarea
                        id="notes"
                        name="notes"
                        rows={3}
                        placeholder="Courtyard vs. indoor gallery seating, anniversary celebrations, dietary notes…"
                        className="input resize-none"
                      />
                    </Field>
                  </div>

                  <button
                    type="submit"
                    className="mt-8 w-full rounded-full bg-ember-500 px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white shadow-md transition-all duration-200 hover:bg-ember-600 hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                  >
                    Request a Table
                  </button>
                  <p className="mt-3.5 text-center text-xs opacity-55">
                    We will confirm table availability via phone or message shortly after receiving your request.
                  </p>
                </form>
              )}
            </Reveal>
          </div>
        </div>

        {/* ── Section 16: Strong Final CTA Moment ──────────────────────────────── */}
        <div className="mt-28 sm:mt-36 pt-20 border-t border-current/10">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-char-950 text-white p-10 sm:p-16 lg:p-20 shadow-2xl border border-white/10">
              {/* Subtle background image texture */}
              <div
                className="absolute inset-0 z-0 opacity-20 pointer-events-none"
                aria-hidden="true"
              >
                <img
                  src="/images/tpc-exterior.jpg"
                  alt=""
                  className="h-full w-full object-cover filter brightness-[0.7] contrast-[1.2]"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-char-950 via-char-950/90 to-char-950/70" />

              <div className="relative z-10 max-w-3xl">
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.26em] text-ember-400">
                  Ahmedabad · Gujarat
                </span>

                <h3 className="mt-4 font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.02]">
                  Come experience
                  <span className="block text-ember-200 italic font-normal">
                    The Project Cafe.
                  </span>
                </h3>

                <p className="mt-6 text-base sm:text-lg text-ember-100/80 max-w-xl font-normal leading-relaxed">
                  Join us under the trees of Ambawadi for artisanal food, inspiring design,
                  curated art, and warm hospitality. Open every day from 10:00 AM to 11:00 PM.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <a
                    href="#menu"
                    className="inline-flex items-center justify-center rounded-full bg-ember-500 px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white shadow-lg transition-all hover:bg-ember-600 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Explore Menu
                  </a>
                  <a
                    href={contact.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-white/10 px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white ring-1 ring-white/25 backdrop-blur-sm transition-all hover:bg-white/20 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Get Directions ↗
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  optional,
  children,
}: {
  label: string;
  htmlFor: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] opacity-80">
        {label}
        {optional && <span className="ml-1 opacity-50 lowercase tracking-normal">(optional)</span>}
      </label>
      {children}
    </div>
  );
}
