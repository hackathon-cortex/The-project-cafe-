"use client";

import { useEffect, useState } from "react";

/**
 * Ultra-refined ~750ms intro veil.
 * Confirms editorial presence before softly dissolving to reveal the cinematic hero.
 * Automatically bypassed if prefers-reduced-motion is active.
 */
export default function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Respect user's motion preferences
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(false);
      return;
    }

    const fadeTimer = window.setTimeout(() => {
      setFading(true);
    }, 650);

    const unmountTimer = window.setTimeout(() => {
      setVisible(false);
    }, 1050);

    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(unmountTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-[100] flex flex-col items-center justify-center bg-char-950 px-6 text-ember-50 transition-opacity duration-500 ease-out ${
        fading ? "opacity-0" : "opacity-100"
      }`}
      aria-hidden="true"
    >
      <div className="flex flex-col items-center text-center">
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-ember-400/80">
          Ahmedabad · Concept by Cortex
        </span>
        <h1 className="mt-3 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
          THE PROJECT CAFE
        </h1>
        <div className="mt-4 h-[1px] w-12 bg-ember-500/60" />
      </div>
    </div>
  );
}
