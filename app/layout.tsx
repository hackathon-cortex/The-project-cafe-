import type { Metadata } from "next";
import { siteConfig, restaurantSchema } from "@/config/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "The Project Cafe",
    "The Project Cafe Ahmedabad",
    "Ahmedabad cafe",
    "Ambawadi restaurant",
    "Yellow House Ahmedabad",
    "art cafe Ahmedabad",
    "wood fired pizza Ahmedabad",
    "lifestyle hospitality",
  ],
  authors: [{ name: "Cortex", url: "https://cortex.design" }],
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/tpc-exterior.jpg",
        width: 1200,
        height: 900,
        alt: "The Project Cafe Ahmedabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/images/tpc-exterior.jpg"],
  },
};

/**
 * Runs before paint to apply the saved (or OS-preferred) theme,
 * preventing a flash of the wrong color scheme.
 */
const themeInitScript = `
try {
  var t = localStorage.getItem("theme");
  if (t === "dark" || (!t && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    document.documentElement.classList.add("dark");
  }
} catch (e) {}
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        {/* Restaurant + Menu structured data — drives rich results. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(restaurantSchema()),
          }}
        />
      </head>
      <body className="bg-white font-sans text-char-900 antialiased dark:bg-char-950 dark:text-ember-50">
        {children}
      </body>
    </html>
  );
}
