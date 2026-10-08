import Reveal from "@/components/Reveal";

interface GalleryMoment {
  id: string;
  title: string;
  tag: string;
  image: string;
  span: string;
  aspect: string;
  caption: string;
}

const MOMENTS: GalleryMoment[] = [
  {
    id: "01",
    title: "Open-Air Courtyard Verandah",
    tag: "ARCHITECTURE",
    image: "/images/tpc-courtyard.jpg",
    span: "lg:col-span-8",
    aspect: "aspect-[16/10] sm:aspect-[16/9]",
    caption: "Shaded tables nestled amidst lush heritage canopies and outdoor breeze.",
  },
  {
    id: "02",
    title: "Curated Art & Objects",
    tag: "ART & DESIGN",
    image: "/images/tpc-details.jpg",
    span: "lg:col-span-4",
    aspect: "aspect-[4/3] lg:aspect-[4/5]",
    caption: "Ceramics, rotating artist showcases, and bespoke collectible wares.",
  },
  {
    id: "03",
    title: "The Iconic Yellow House",
    tag: "HERITAGE",
    image: "/images/tpc-exterior.jpg",
    span: "lg:col-span-5",
    aspect: "aspect-[4/3] lg:aspect-[1/1]",
    caption: "Dr Vikram Sarabhai Marg landmark—an architectural cultural landmark.",
  },
  {
    id: "04",
    title: "Gallery Dining & Living Spaces",
    tag: "INTERIORS",
    image: "/images/tpc-interior.jpg",
    span: "lg:col-span-7",
    aspect: "aspect-[16/10] sm:aspect-[16/11]",
    caption: "Intimate seating vignettes surrounded by original contemporary canvases.",
  },
  {
    id: "05",
    title: "Wood-Fired Hearth & Kitchen",
    tag: "CULINARY",
    image: "/images/tpc-food.jpg",
    span: "lg:col-span-6",
    aspect: "aspect-[16/10]",
    caption: "Artisan dough baked daily in our custom stone wood-fired oven.",
  },
  {
    id: "06",
    title: "Craft Brews & Botanicals",
    tag: "HOSPITALITY",
    image: "/images/tpc-coffee.jpg",
    span: "lg:col-span-6",
    aspect: "aspect-[16/10]",
    caption: "Slow-drip specialty cold brews, handcrafted coolers, and seasonal drinks.",
  },
];

export default function SpaceGallery() {
  return (
    <section id="space" className="py-24 sm:py-36 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-current/10">
          <div>
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="h-[1px] w-6 bg-ember-500" />
                <span className="text-xs font-bold uppercase tracking-[0.24em] text-ember-600 dark:text-ember-400">
                  The Space &amp; Atmosphere
                </span>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold tracking-tight text-char-900 dark:text-ember-50">
                An Immersive Sanctuary in Ambawadi
              </h2>
            </Reveal>
          </div>

          <Reveal delay={140}>
            <p className="max-w-md text-sm sm:text-base opacity-75 leading-relaxed font-normal">
              Where heritage architecture, tranquil courtyards, and contemporary creative installations
              form an ever-evolving setting for memorable encounters.
            </p>
          </Reveal>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          {MOMENTS.map((item, idx) => (
            <div key={item.id} className={`${item.span}`}>
              <Reveal delay={idx * 60}>
                <div className="group relative overflow-hidden rounded-3xl bg-char-900/5 dark:bg-white/5 ring-1 ring-black/5 dark:ring-white/10 shadow-sm transition-all duration-300 hover:shadow-xl">
                  {/* Image container with scale on hover */}
                  <div className={`${item.aspect} overflow-hidden relative`}>
                    <img
                      src={item.image}
                      alt={`${item.title} at The Project Cafe`}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-char-950/80 via-char-950/20 to-transparent opacity-75 group-hover:opacity-85 transition-opacity duration-300" />
                    
                    {/* Top Tag */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center rounded-full bg-char-950/70 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-ember-300 backdrop-blur-md">
                        {item.id} · {item.tag}
                      </span>
                    </div>

                    {/* Bottom Editorial Caption */}
                    <div className="absolute bottom-5 left-5 right-5 text-white">
                      <h3 className="font-display text-lg sm:text-xl font-bold tracking-tight leading-snug">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-xs text-ember-100/80 font-normal line-clamp-2">
                        {item.caption}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
