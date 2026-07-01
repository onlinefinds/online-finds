// ---------------------------------------------------------
// PRODUKTE: Hier trägst du deine eigenen Funde ein.
// affiliateUrl: dein Affiliate-Link (z.B. Amazon-Partnerlink)
// image: Bild-URL (Produktbild, z.B. von Amazon oder eigenes Hosting)
// featured: true = zeigt den "Fund des Tages"-Stempel
// oldPrice: optional, wird durchgestrichen angezeigt
// ---------------------------------------------------------

const PRODUCTS = [
  {
    id: 1,
    title: "Kabellose Over-Ear Kopfhörer mit ANC",
    category: "tech",
    image: "https://placehold.co/600x600/F1EBDF/2A2A28?text=Kopfh%C3%B6rer",
    price: 79.90,
    oldPrice: 119.90,
    rating: 4.5,
    reviews: 2341,
    featured: true,
    affiliateUrl: "https://www.amazon.de/dp/BEISPIEL1?tag=DEIN-AFFILIATE-TAG"
  },
  {
    id: 2,
    title: "Gusseiserne Pfanne 28cm, vorgewürzt",
    category: "kueche",
    image: "https://placehold.co/600x600/F1EBDF/2A2A28?text=Pfanne",
    price: 34.50,
    oldPrice: null,
    rating: 4.8,
    reviews: 987,
    featured: false,
    affiliateUrl: "https://www.amazon.de/dp/BEISPIEL2?tag=DEIN-AFFILIATE-TAG"
  },
  {
    id: 3,
    title: "Faltbarer Wanderrucksack 30L, wasserdicht",
    category: "outdoor",
    image: "https://placehold.co/600x600/F1EBDF/2A2A28?text=Rucksack",
    price: 42.00,
    oldPrice: 58.00,
    rating: 4.3,
    reviews: 512,
    featured: false,
    affiliateUrl: "https://www.amazon.de/dp/BEISPIEL3?tag=DEIN-AFFILIATE-TAG"
  },
  {
    id: 4,
    title: "Robuster Standmixer 1200W",
    category: "kueche",
    image: "https://placehold.co/600x600/F1EBDF/2A2A28?text=Mixer",
    price: 89.99,
    oldPrice: 129.99,
    rating: 4.6,
    reviews: 1654,
    featured: false,
    affiliateUrl: "https://www.amazon.de/dp/BEISPIEL4?tag=DEIN-AFFILIATE-TAG"
  },
  {
    id: 5,
    title: "Mechanische Tastatur, hot-swappable",
    category: "tech",
    image: "https://placehold.co/600x600/F1EBDF/2A2A28?text=Tastatur",
    price: 64.00,
    oldPrice: null,
    rating: 4.7,
    reviews: 803,
    featured: true,
    affiliateUrl: "https://www.amazon.de/dp/BEISPIEL5?tag=DEIN-AFFILIATE-TAG"
  },
  {
    id: 6,
    title: "Gesichtspflege-Set mit Vitamin C Serum",
    category: "beauty",
    image: "https://placehold.co/600x600/F1EBDF/2A2A28?text=Beauty+Set",
    price: 28.90,
    oldPrice: 39.90,
    rating: 4.4,
    reviews: 1102,
    featured: false,
    affiliateUrl: "https://www.amazon.de/dp/BEISPIEL6?tag=DEIN-AFFILIATE-TAG"
  },
  {
    id: 7,
    title: "Robotersauger mit Wischfunktion",
    category: "haushalt",
    image: "https://placehold.co/600x600/F1EBDF/2A2A28?text=Saugroboter",
    price: 189.00,
    oldPrice: 249.00,
    rating: 4.2,
    reviews: 674,
    featured: false,
    affiliateUrl: "https://www.amazon.de/dp/BEISPIEL7?tag=DEIN-AFFILIATE-TAG"
  },
  {
    id: 8,
    title: "Isolierflasche 1L, hält 24h kalt",
    category: "outdoor",
    image: "https://placehold.co/600x600/F1EBDF/2A2A28?text=Flasche",
    price: 19.90,
    oldPrice: null,
    rating: 4.9,
    reviews: 3210,
    featured: false,
    affiliateUrl: "https://www.amazon.de/dp/BEISPIEL8?tag=DEIN-AFFILIATE-TAG"
  }
];
