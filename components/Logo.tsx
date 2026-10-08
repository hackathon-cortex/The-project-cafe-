import { siteConfig } from "@/config/site";

/**
 * Wordmark + mark for The Project Cafe.
 */
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ember-500 text-white font-display text-xs font-bold tracking-wider">
        TPC
      </span>
      <span className="leading-tight">
        <span className="block font-display text-lg font-bold tracking-tight">
          {siteConfig.name}
        </span>
        <span className="block text-[11px] uppercase tracking-[0.16em] opacity-60">
          {siteConfig.tagline}
        </span>
      </span>
    </span>
  );
}
