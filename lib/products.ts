export interface Product {
  id: number;
  slug: string;
  name: string;
  price: number;
  comparePrice: number;
  images: string[];
  sizes: string[];
  description: string;
}

export const PRODUCTS: Product[] = [
  { 
    id: 1, 
    slug: "highgrand-item-1",
    name: "ARCHIVAL HOODIE EX-01", 
    price: 3499, 
    comparePrice: 4999, 
    images: ["/products/IMG-20250713-WA0013.jpg", "/products/IMG-20250713-WA0014.jpg"], 
    sizes: ["S", "M", "L", "XL"],
    description: "The definitive Highgrand silhouette. Heavyweight cotton, oversized drape, architectural stitching. A staple for the modern archival collector."
  },
  { 
    id: 2, 
    slug: "highgrand-item-2",
    name: "BOX FIT GRAPHIC TEE", 
    price: 1999, 
    comparePrice: 2999, 
    images: ["/products/box-fit-tee.png", "/products/IMG-20250713-WA0013.jpg"], 
    sizes: ["XS", "S", "M"],
    description: "Premium box-fit tee featuring high-density archival graphics. Engineered for a structural fit that holds its shape."
  },
  { 
    id: 3, 
    slug: "highgrand-item-3",
    name: "WASHED ESSENTIALS HOODIE", 
    price: 4999, 
    comparePrice: 6499, 
    images: ["/products/washed-hoodie.png", "/products/IMG-20250713-WA0014.jpg"], 
    sizes: ["M", "L", "XL"],
    description: "Pigment-dyed and heavy-washed for a vintage editorial feel. Double-layered hood and reinforced ribbing."
  },
  { 
    id: 4, 
    slug: "highgrand-item-4",
    name: "DROP SHOULDER TEE - WHITE", 
    price: 2499, 
    comparePrice: 3499, 
    images: ["/products/drop-shoulder-white.png", "/products/box-fit-tee.png"], 
    sizes: ["S", "M", "L"],
    description: "Clean, minimalist drop-shoulder silhouette in heavy-knit white cotton. The perfect foundation for any archival look."
  },
  { 
    id: 5, 
    slug: "highgrand-item-5",
    name: "EDITORIAL SILHOUETTE HOODIE", 
    price: 3999, 
    comparePrice: 5499, 
    images: ["/main page/hoodie.webp", "/products/washed-hoodie.png"], 
    sizes: ["L", "XL"],
    description: "Deep-black architectural hoodie with extended sleeves and a oversized hood. Designed for high-contrast editorial styling."
  },
  { 
    id: 6, 
    slug: "highgrand-item-6",
    name: "MINIMALIST GRAIL TEE", 
    price: 2199, 
    comparePrice: 2999, 
    images: ["/products/box-fit-tee.png", "/products/drop-shoulder-white.png"], 
    sizes: ["S", "M", "L"],
    description: "A refined take on the classic box tee. Minimal branding, premium hand-feel, maximum presence."
  },
  { 
    id: 7, 
    slug: "highgrand-item-7",
    name: "ARCHIVAL CARGO HOODIE", 
    price: 4499, 
    comparePrice: 5999, 
    images: ["/products/washed-hoodie.png", "/main page/hoodie.webp"], 
    sizes: ["S", "M", "L", "XL"],
    description: "Functional meets editorial. Multi-pocket design integrated into a heavy oversized hoodie silhouette."
  },
  { 
    id: 8, 
    slug: "highgrand-item-8",
    name: "VINTAGE BOX TEE", 
    price: 1899, 
    comparePrice: 2499, 
    images: ["/products/drop-shoulder-white.png", "/products/IMG-20250713-WA0013.jpg"], 
    sizes: ["XS", "S", "M"],
    description: "Lightly distressed edges and a vintage wash make this box-fit tee feel like a found archival piece."
  },
  { 
    id: 9, 
    slug: "highgrand-item-9",
    name: "PREMIUM OVERSIZED HOODIE", 
    price: 5499, 
    comparePrice: 7999, 
    images: ["/main page/hoodie.webp", "/products/IMG-20250713-WA0014.jpg"], 
    sizes: ["M", "L", "XL", "XXL"],
    description: "Our heaviest knit yet. 500GSM cotton fleece with a structured silhouette that stands on its own."
  },
  { 
    id: 10, 
    slug: "highgrand-item-10",
    name: "STREETWEAR BASICS TEE", 
    price: 1699, 
    comparePrice: 1999, 
    images: ["/products/box-fit-tee.png", "/products/drop-shoulder-white.png"], 
    sizes: ["S", "M", "L"],
    description: "Essential drop-shoulder tee for daily wear. Premium build at an accessible entry point to the archive."
  },
  { 
    id: 11, 
    slug: "highgrand-item-11",
    name: "HEAVYWEIGHT BOX HOODIE", 
    price: 3899, 
    comparePrice: 4999, 
    images: ["/products/washed-hoodie.png", "/products/IMG-20250713-WA0013.jpg"], 
    sizes: ["S", "M", "L"],
    description: "Boxy fit, heavy weight. This hoodie defines the new standard of streetwear comfort and style."
  },
  { 
    id: 12, 
    slug: "highgrand-item-12",
    name: "ARCHIVAL SIGNATURE TEE", 
    price: 2299, 
    comparePrice: 3299, 
    images: ["/products/drop-shoulder-white.png", "/products/IMG-20250713-WA0014.jpg"], 
    sizes: ["M", "L", "XL"],
    description: "Signature branding placed subtly on a premium oversized tee. For those who know."
  }
];
