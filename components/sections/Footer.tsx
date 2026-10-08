import Logo from "@/components/Logo";
import { siteConfig } from "@/config/site";

export default function Footer() {
  const { contact } = siteConfig;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-char-950 px-6 py-16 sm:py-20 text-ember-50 border-t border-white/10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-12 pb-16 border-b border-white/10">
          {/* Brand Column (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <Logo />
            <p className="max-w-sm text-xs sm:text-sm leading-relaxed text-ember-100/70 font-normal">
              An experience-led lifestyle destination bringing together food, art, design,
              retail and hospitality at the iconic Yellow House in Ambawadi, Ahmedabad.
            </p>
            <div className="pt-2 flex flex-wrap gap-5 text-xs uppercase tracking-[0.16em] text-ember-300">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Instagram ↗
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Facebook ↗
              </a>
              <a
                href={siteConfig.locationPageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                TPC Portal ↗
              </a>
            </div>
          </div>

          {/* Location & Navigation (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.24em] text-ember-400">
              The Project Cafe · Ahmedabad
            </h4>
            <address className="text-xs sm:text-sm not-italic leading-relaxed text-ember-100/80 font-normal">
              {contact.address.street}
              <br />
              {contact.address.city}, {contact.address.region} {contact.address.postalCode}
              <br />
              {contact.address.country}
            </address>
            <p className="text-xs text-ember-200/60 font-mono pt-1">
              Open Daily: 10:00 AM – 11:00 PM
            </p>
          </div>

          {/* Contact Inquiries (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.24em] text-ember-400">
              Connect &amp; Reservations
            </h4>
            <div className="space-y-1.5 text-xs sm:text-sm">
              <a
                href={`tel:${contact.phoneHref}`}
                className="block font-semibold text-white hover:text-ember-300 transition-colors"
              >
                {contact.phone}
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="block text-ember-100/70 hover:text-white transition-colors font-mono text-xs"
              >
                {contact.email}
              </a>
            </div>
            <div className="pt-2">
              <a
                href="#reserve"
                className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-ember-200 hover:bg-white/20 transition-colors"
              >
                Request Table
              </a>
            </div>
          </div>
        </div>

        {/* Minimal Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ember-100/50">
          <span>
            © {year} {siteConfig.name}. All rights reserved.
          </span>
          <span className="text-center sm:text-right">
            Website concept designed &amp; developed by{" "}
            <a
              href={siteConfig.footerCredit.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ember-300 font-semibold hover:underline"
            >
              {siteConfig.footerCredit.label}
            </a>
            .
          </span>
        </div>
      </div>
    </footer>
  );
}
