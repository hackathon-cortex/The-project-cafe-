/**
 * ─────────────────────────────────────────────────────────────────────────────
 * THE PROJECT CAFE — AHMEDABAD
 * Single Source of Truth
 * ─────────────────────────────────────────────────────────────────────────────
 * Self-initiated website redesign concept by Cortex.
 * Tailored specifically for The Project Cafe Ahmedabad.
 */

export const siteConfig = {
  /** Restaurant name — appears in nav, footer, <title>, and schema. */
  name: "The Project Cafe",
  /** Short descriptor shown under the logo and in schema. */
  tagline: "Art · Food · Retail · Hospitality",
  /** The <title> of the homepage. */
  title: "The Project Cafe Ahmedabad | Art, Food, Design & Hospitality",
  /** Meta description. */
  description:
    "Discover The Project Cafe Ahmedabad — an experience-led lifestyle destination bringing together food, art, design, retail and hospitality.",
  /** Canonical URL — used for metadataBase, Open Graph, and schema. */
  url: "https://www.theprojectcafe.co",
  /** Official Ahmedabad location page */
  locationPageUrl: "https://www.theprojectcafe.co/ahmedabad",

  /** Cuisine type, used in schema.org servesCuisine and in copy. */
  cuisine: "Cafe / Italian / Continental / Multi-cuisine",
  /** Currency symbol */
  currency: "₹",
  /** Price range in schema format */
  priceRange: "₹₹",

  contact: {
    phone: "+91 95121 25965",
    /** Digits only, for tel: links */
    phoneHref: "+919512125965",
    email: "connect@theprojectcafe.co",
    address: {
      street: "Yellow House, 7, Dr Vikram Sarabhai Marg",
      city: "Ambawadi, Ahmedabad",
      region: "Gujarat",
      postalCode: "380009",
      country: "India",
    },
    /** Google Maps directions link */
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=The+Project+Cafe+Yellow+House+Dr+Vikram+Sarabhai+Marg+Ambawadi+Ahmedabad+Gujarat+380009",
  },

  social: {
    instagram: "https://www.instagram.com/theprojectcafe",
    facebook: "https://www.facebook.com/theprojectcafe",
  },

  /**
   * Opening hours: 10:00 AM – 11:00 PM daily.
   */
  hours: [
    { day: "Monday", closed: false, open: "10:00", close: "23:00" },
    { day: "Tuesday", closed: false, open: "10:00", close: "23:00" },
    { day: "Wednesday", closed: false, open: "10:00", close: "23:00" },
    { day: "Thursday", closed: false, open: "10:00", close: "23:00" },
    { day: "Friday", closed: false, open: "10:00", close: "23:00" },
    { day: "Saturday", closed: false, open: "10:00", close: "23:00" },
    { day: "Sunday", closed: false, open: "10:00", close: "23:00" },
  ],

  /** Hero section. */
  hero: {
    eyebrow: "Ambawadi, Ahmedabad",
    headline: "The Project Cafe",
    sub: "An experience-led lifestyle destination where art, food, design and hospitality come together.",
    primaryCta: "Explore The Cafe",
    secondaryCta: "View Menu",
  },

  /** About / Positioning block. */
  about: {
    eyebrow: "About The Project Cafe",
    heading: "An experience-led lifestyle destination in Ahmedabad",
    body: [
      "The Project Cafe is a contemporary experience-led hospitality destination in Ahmedabad, bringing together culinary craft, art, and retail. Set within the iconic Yellow House in Ambawadi, each corner is an evolving canvas shaped by creative collaborations and meaningful community experiences.",
      "From vibrant café dining spanning world cuisines to curated design showcases, our space creates an immersive environment where food, culture, and creative expression seamlessly converge.",
    ],
    experience: [
      {
        category: "ART",
        description:
          "A space that brings art and creative expression into the hospitality experience.",
      },
      {
        category: "FOOD",
        description:
          "A diverse café and restaurant menu spanning multiple cuisines.",
      },
      {
        category: "DESIGN",
        description:
          "An evolving environment shaped by design, objects and creative collaborations.",
      },
      {
        category: "HOSPITALITY",
        description:
          "A destination built around experience, interaction and community.",
      },
    ],
  },

  /**
   * Verified representative menu items from The Project Cafe public menu.
   */
  menu: [
    {
      section: "First Meal Of The Day",
      note: "Breakfast classics and artisan morning plates.",
      items: [
        {
          name: "Pancakes",
          price: "349",
          description: "Fluffy pancakes served warm with maple drizzle & butter.",
          tags: ["v"],
        },
        {
          name: "French Toast",
          price: "365",
          description: "Golden griddled brioche with cinnamon sugar and maple syrup.",
          tags: ["v"],
        },
        {
          name: "Caesar Bowl",
          price: "415",
          description: "Crisp greens tossed in classic Caesar dressing with herb croutons.",
          tags: ["v"],
        },
        {
          name: "Classic Tomato & Mozzarella Sandwich",
          price: "419",
          description: "Fresh tomato, melted mozzarella, basil and herb seasoning.",
          tags: ["v"],
        },
        {
          name: "Breakfast Omelette Sandwich",
          price: "419",
          description: "Fluffy seasoned egg omelette layered in artisan bread.",
        },
        {
          name: "Lebanese Fatoush & Falafel",
          price: "425",
          description: "Crispy pita, mixed greens, sumac dressing and house-made falafel.",
          tags: ["vg"],
        },
        {
          name: "Sundried Tomato Pesto & Mozzarella Sandwich",
          price: "449",
          description: "Sun-dried tomato pesto with melted mozzarella on toasted bread.",
          tags: ["v"],
        },
        {
          name: "Focaccia Sandwich",
          price: "479",
          description: "Herb focaccia bread loaded with marinated grilled vegetables and spread.",
          tags: ["v", "popular"],
        },
      ],
    },
    {
      section: "Soups",
      note: "Comforting, slow-simmered house broths.",
      items: [
        {
          name: "Classic Minestrone",
          price: "335",
          description: "Traditional Italian garden vegetable broth with herbs and pasta.",
          tags: ["v"],
        },
        {
          name: "Creamy Four Mushroom Soup",
          price: "335",
          description: "Velvety blend of four slow-cooked wild mushrooms with herb drizzle.",
          tags: ["v", "popular"],
        },
        {
          name: "Broccoli & Almond",
          price: "335",
          description: "Silky roasted broccoli soup finished with toasted sliced almonds.",
          tags: ["v", "gf"],
        },
        {
          name: "Roasted Pumpkin",
          price: "335",
          description: "Warm roasted pumpkin velouté seasoned with delicate spices.",
          tags: ["v", "gf"],
        },
      ],
    },
    {
      section: "TPC Classics",
      note: "Signature small plates and sharing favorites.",
      items: [
        {
          name: "Crispy Waterchestnuts",
          price: "355",
          description: "Wok-tossed water chestnuts in sweet, tangy and spicy Asian glaze.",
          tags: ["v", "popular"],
        },
        {
          name: "Classic Chilli Cheese Toast",
          price: "375",
          description: "Crisp toasted loaf topped with seasoned spiced cheese and green chillies.",
          tags: ["v"],
        },
        {
          name: "Cheese Cigars",
          price: "435",
          description: "Crispy rolled pastry stuffed with herbs and melted cheese blend.",
          tags: ["v", "popular"],
        },
        {
          name: "Spicy Cheese Spinach Balls",
          price: "435",
          description: "Golden fried spinach and molten cheese fritters with dipping sauce.",
          tags: ["v"],
        },
        {
          name: "Loaded Nachos",
          price: "445",
          description: "Corn tortilla chips layered with salsa, jalapenos, beans and cheese fondue.",
          tags: ["v"],
        },
        {
          name: "Cottage Cheese Pesto",
          price: "475",
          description: "Pan-seared cottage cheese cubes tossed in aromatic basil pesto.",
          tags: ["v"],
        },
        {
          name: "Dragon Paneer",
          price: "490",
          description: "Spicy wok-tossed paneer cubes in fiery red Indo-Chinese sauce.",
          tags: ["v", "popular"],
        },
      ],
    },
    {
      section: "Eggs As You Like It",
      note: "Cooked to order and served with artisan toast.",
      items: [
        {
          name: "Double Fried Eggs",
          price: "325",
          description: "Farm-fresh eggs fried sunny side up or over easy, served with toast.",
        },
        {
          name: "Scrambled Eggs",
          price: "335",
          description: "Slow-cooked creamy scrambled eggs served with buttered artisan toast.",
        },
        {
          name: "Parsi Akuri",
          price: "355",
          description: "Traditional spicy Parsi scrambled eggs with onions, tomatoes and coriander.",
          tags: ["popular"],
        },
        {
          name: "Two Egg Omelette",
          price: "360",
          description: "Fluffy two-egg omelette tailored with your choice of herbs and spices.",
        },
        {
          name: "Shakshuka Desi Style",
          price: "395",
          description: "Poached eggs in rich, spiced tomato, bell pepper and cumin sauce.",
        },
        {
          name: "Spanish Souffle Omelette",
          price: "395",
          description: "Light, airy whipped soufflé omelette with potatoes and cheese.",
          tags: ["popular"],
        },
      ],
    },
    {
      section: "Wood Fire Pizzas",
      note: "Hand-stretched artisan dough baked in our wood-fired oven.",
      items: [
        {
          name: "Classic Margherita Pizza",
          price: "479",
          description: "San Marzano sauce, fresh mozzarella, basil and virgin olive oil.",
          tags: ["v", "popular"],
        },
        {
          name: "Farm Fresh Pizza",
          price: "579",
          description: "Bell peppers, onions, mushrooms, olives and fresh mozzarella.",
          tags: ["v"],
        },
        {
          name: "Siciliano Pizza",
          price: "619",
          description: "Sundried tomatoes, jalapenos, capers, mozzarella and chilli flakes.",
          tags: ["v"],
        },
        {
          name: "Valentino Pizza",
          price: "619",
          description: "Artisan wood-fired crust with signature gourmet cheese and chef seasoning.",
          tags: ["v", "popular"],
        },
        {
          name: "Americano Pizza",
          price: "695",
          description: "Loaded wood-fired pizza with rich gourmet toppings and double mozzarella.",
        },
      ],
    },
    {
      section: "Large Plates",
      note: "Handmade pastas, slow-simmered risottos, and world curries.",
      items: [
        {
          name: "Aglio E Olio Pasta",
          price: "489",
          description: "Spaghetti tossed with extra virgin olive oil, garlic, chilli and parsley.",
          tags: ["v"],
        },
        {
          name: "Alfredo Pasta",
          price: "489",
          description: "Penne in rich, creamy parmesan and garlic white sauce.",
          tags: ["v"],
        },
        {
          name: "Pink Sauce Pasta",
          price: "489",
          description: "Penne coated in the perfect harmony of tomato pomodoro and cream.",
          tags: ["v", "popular"],
        },
        {
          name: "Pesto Pasta",
          price: "489",
          description: "Pasta tossed in vibrant house-made Genovese basil and pine nut pesto.",
          tags: ["v"],
        },
        {
          name: "Classic Mac & Cheese",
          price: "469",
          description: "Baked elbow macaroni in a velvety triple-cheese sauce with golden crust.",
          tags: ["v"],
        },
        {
          name: "Four Cheese Risotto",
          price: "535",
          description: "Slow-simmered arborio rice enriched with parmesan, gorgonzola and fontina.",
          tags: ["v"],
        },
        {
          name: "Mexican Enchiladas",
          price: "535",
          description: "Rolled tortillas filled with spiced beans and cheese, baked in enchilada sauce.",
          tags: ["v"],
        },
        {
          name: "Mexican Burrito Bowl",
          price: "549",
          description: "Zesty cilantro lime rice, beans, fajita veggies, salsa and sour cream.",
          tags: ["v"],
        },
        {
          name: "Lasagna",
          price: "549",
          description: "Layered pasta sheets with rich slow-cooked vegetables, béchamel and cheese.",
          tags: ["v", "popular"],
        },
        {
          name: "Malay Laksa Red Curry",
          price: "550",
          description: "Fragrant coconut red curry broth with noodles, tofu and Asian greens.",
          tags: ["popular"],
        },
        {
          name: "Truffle Oil & Mushroom Risotto",
          price: "580",
          description: "Creamy arborio rice with sautéed wild mushrooms and white truffle oil.",
          tags: ["v"],
        },
        {
          name: "Thai Green Curry",
          price: "595",
          description: "Aromatic lemongrass and galangal green curry with jasmine rice.",
          tags: ["v"],
        },
      ],
    },
    {
      section: "Fries & More",
      note: "Crispy accompaniments and quick bites.",
      items: [
        {
          name: "Potato Wedges",
          price: "265",
          description: "Crispy seasoned hand-cut potato wedges served with dip.",
          tags: ["v"],
        },
        {
          name: "Mashed Potatoes Hummus",
          price: "279",
          description: "Creamy house-made hummus paired with seasoned potato purée.",
          tags: ["v"],
        },
        {
          name: "Classic Garlic Bread",
          price: "309",
          description: "Toasted baguette slices brushed with garlic herb butter.",
          tags: ["v"],
        },
        {
          name: "Cheese Chilli Toast",
          price: "339",
          description: "Toasted bread with melted cheese, green chillies and herbs.",
          tags: ["v"],
        },
        {
          name: "Crispy Veg & Cheddar Burger",
          price: "429",
          description: "Golden spiced vegetable patty with cheddar cheese in a toasted brioche bun.",
          tags: ["v", "popular"],
        },
      ],
    },
    {
      section: "Hot Beverages",
      note: "Specialty espresso coffees, artisan brews and comforting sips.",
      items: [
        {
          name: "Green Tea",
          price: "145",
          description: "Fragrant whole leaf brewed green tea.",
          tags: ["vg"],
        },
        {
          name: "Masala Tea",
          price: "165",
          description: "Traditional Indian spiced kadak chai brewed with aromatic herbs.",
        },
        {
          name: "Hot Americano",
          price: "225",
          description: "Double shot of rich espresso with hot water.",
        },
        {
          name: "Cappuccino",
          price: "245",
          description: "Espresso with equal parts steamed milk and dense silky milk foam.",
          tags: ["popular"],
        },
        {
          name: "Cortado",
          price: "245",
          description: "Equal parts espresso and warm textured steamed milk.",
        },
        {
          name: "Mocha",
          price: "245",
          description: "Espresso combined with bittersweet chocolate and steamed milk.",
        },
        {
          name: "Flat White",
          price: "275",
          description: "Double shot espresso folded into silky textured microfoam.",
        },
        {
          name: "Hot Chocolate",
          price: "285",
          description: "Rich, decadent melted cocoa with velvety steamed milk.",
          tags: ["popular"],
        },
      ],
    },
    {
      section: "Cold Beverages",
      note: "Chilled brews, handcrafted coolers and refreshing specialty drinks.",
      items: [
        {
          name: "Americano",
          price: "195",
          description: "Chilled espresso poured over ice and cold water.",
        },
        {
          name: "Mojito",
          price: "209",
          description: "Refreshing crushed mint, fresh lime, cane sugar and sparkling soda.",
          tags: ["vg"],
        },
        {
          name: "Homemade Lemonade",
          price: "235",
          description: "Freshly squeezed lemon juice, mint, and chilled sparkling or still water.",
          tags: ["vg"],
        },
        {
          name: "Latte",
          price: "249",
          description: "Chilled espresso shaken with cold milk over ice.",
        },
        {
          name: "Mocha",
          price: "249",
          description: "Iced espresso blended with dark cocoa and cold milk.",
        },
        {
          name: "Cappuccino",
          price: "255",
          description: "Chilled espresso and milk topped with cold foam.",
        },
        {
          name: "Classic Iced Tea",
          price: "255",
          description: "Slow-brewed black tea infused with lemon and mint over ice.",
          tags: ["vg"],
        },
        {
          name: "Caramel Macchiato",
          price: "259",
          description: "Vanilla syrup, chilled milk, espresso float and rich caramel drizzle.",
        },
        {
          name: "Minty Melon",
          price: "295",
          description: "Cool blend of fresh watermelon juice and crushed garden mint.",
          tags: ["vg"],
        },
        {
          name: "Jamun Kala Khatta Cooler",
          price: "320",
          description: "Tangy jamun pulp with black salt and crushed ice cooler.",
          tags: ["popular"],
        },
        {
          name: "TPC Cold Coffee",
          price: "325",
          description: "Signature creamy house cold brew blended with vanilla bean ice cream.",
          tags: ["popular"],
        },
        {
          name: "Mango Passion Sunrise",
          price: "325",
          description: "Vibrant tropical blend of sweet mango and tangy passion fruit.",
          tags: ["popular"],
        },
        {
          name: "Wild Berry Rush",
          price: "345",
          description: "Muddled forest berries with sparkling fizz and crushed ice.",
          tags: ["popular"],
        },
      ],
    },
    {
      section: "Desserts",
      note: "Sweet plates and griddled comfort treats.",
      items: [
        {
          name: "Pancakes",
          price: "349",
          description: "Stack of fluffy warm pancakes with maple syrup and whipped butter.",
          tags: ["v"],
        },
        {
          name: "French Toast",
          price: "365",
          description: "Caramelized brioche French toast dusted with cinnamon sugar.",
          tags: ["v"],
        },
      ],
    },
  ],

  /** Legend for dietary tags. */
  dietaryLegend: [
    { tag: "v", label: "Vegetarian" },
    { tag: "vg", label: "Vegan" },
    { tag: "gf", label: "Gluten-free" },
    { tag: "popular", label: "TPC Favorite" },
  ],

  /** Reservations block. */
  reservations: {
    heading: "Book a table",
    body: "Experience our art-filled environment, curated dining, and lifestyle ambiance. For special reservations, private gatherings, or parties of six or more, please connect with our team directly.",
    action: "#",
    partySizes: ["1", "2", "3", "4", "5", "6+"],
    largePartyNote: "Parties of 6 or more — please call directly.",
  },

  /** Online ordering configuration. */
  takeout: {
    enabled: true,
    label: "Order Online",
    href: "https://www.zomato.com/ahmedabad/the-project-cafe-ambavadi",
    note: "Enjoy your favorite dishes from The Project Cafe delivered right to your doorstep via Zomato or Swiggy.",
  },

  /** Footer credit & notes. */
  footerNote: "Self-initiated website concept · Not an official website of The Project Cafe · Designed & Developed by",
  footerCredit: {
    label: "Cortex",
    href: "https://cortex.design",
  },
} as const;

export type SiteConfig = typeof siteConfig;

/* ── Derived helpers ──────────────────────────────────────────────────────── */

/** "10:00am" from "10:00" */
export function formatTime(t: string): string {
  if (!t) return "";
  const [hStr, m] = t.split(":");
  const h = Number(hStr);
  const suffix = h >= 12 ? "pm" : "am";
  const hour12 = h % 12 === 0 ? 12 : h % 12;
  return m === "00" ? `${hour12}${suffix}` : `${hour12}:${m}${suffix}`;
}

/** "10am – 11pm" or "Closed" */
export function formatHours(entry: {
  closed: boolean;
  open: string;
  close: string;
}): string {
  return entry.closed
    ? "Closed"
    : `${formatTime(entry.open)} – ${formatTime(entry.close)}`;
}

const DAY_SCHEMA: Record<string, string> = {
  Monday: "Monday",
  Tuesday: "Tuesday",
  Wednesday: "Wednesday",
  Thursday: "Thursday",
  Friday: "Friday",
  Saturday: "Saturday",
  Sunday: "Sunday",
};

/**
 * schema.org Restaurant + Menu JSON-LD.
 */
export function restaurantSchema() {
  const a = siteConfig.contact.address;
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.contact.phone,
    servesCuisine: ["Cafe", "Italian", "Continental", "Multi-cuisine"],
    priceRange: siteConfig.priceRange,
    image: `${siteConfig.url}/images/tpc-exterior.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: a.street,
      addressLocality: a.city,
      addressRegion: a.region,
      postalCode: a.postalCode,
      addressCountry: "IN",
    },
    openingHoursSpecification: siteConfig.hours
      .filter((h) => !h.closed)
      .map((h) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: `https://schema.org/${DAY_SCHEMA[h.day]}`,
        opens: h.open,
        closes: h.close,
      })),
    hasMenu: {
      "@type": "Menu",
      name: `${siteConfig.name} Menu`,
      hasMenuSection: siteConfig.menu.map((s) => ({
        "@type": "MenuSection",
        name: s.section,
        hasMenuItem: s.items.map((i) => ({
          "@type": "MenuItem",
          name: i.name,
          description: i.description,
          offers: {
            "@type": "Offer",
            price: i.price,
            priceCurrency: "INR",
          },
        })),
      })),
    },
  };
}
