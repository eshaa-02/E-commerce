/* ============================================================
   NOVA MART — Product Catalog
   Each product is rendered with a category icon (no external
   image files needed) so the project runs fully offline.
   ============================================================ */

const PRODUCTS = [
  // ---------------- Electronics ----------------
  {
    id: 1, name: "Aria Wireless Headphones", category: "Electronics", icon: "headphones",
    price: 189, originalPrice: 249, rating: 4.7, reviews: 312, stock: 24, badge: "Sale",
    shortDesc: "Over-ear headphones with adaptive noise cancellation.",
    fullDesc: "The Aria Wireless Headphones pair a warm, balanced sound signature with adaptive noise cancellation that adjusts to your surroundings automatically. A 40-hour battery, memory-foam ear cushions, and a foldable frame make them equally suited to daily commutes and long flights."
  },
  {
    id: 2, name: "Solace Smartwatch", category: "Electronics", icon: "watch-tech",
    price: 259, rating: 4.5, reviews: 198, stock: 15, badge: "New",
    shortDesc: "Health tracking smartwatch with a week-long battery.",
    fullDesc: "Solace tracks heart rate, sleep quality, and workouts with clinical-grade accuracy, all wrapped in a sandblasted aluminium case. The always-on display stays legible in direct sunlight, and a single charge lasts up to seven days of everyday use."
  },
  {
    id: 3, name: "Pulse Bluetooth Speaker", category: "Electronics", icon: "speaker",
    price: 79, originalPrice: 99, rating: 4.3, reviews: 145, stock: 40, badge: "Sale",
    shortDesc: "Compact speaker with room-filling 360° sound.",
    fullDesc: "Pulse delivers deep, room-filling audio from a body small enough to fit in one hand. An IP67 rating means it shrugs off rain and dust, and the 18-hour battery keeps the music going from morning coffee to evening cookouts."
  },
  {
    id: 4, name: "Nimbus 65W Fast Charger", category: "Electronics", icon: "charger",
    price: 34, rating: 4.6, reviews: 87, stock: 60,
    shortDesc: "Compact GaN charger for laptops and phones.",
    fullDesc: "Built on gallium-nitride technology, the Nimbus charger packs 65 watts of fast-charging power into a housing smaller than a matchbox. Dual USB-C ports mean you can charge a laptop and a phone at the same time, safely and efficiently."
  },
  {
    id: 5, name: "Frame Mechanical Keyboard", category: "Electronics", icon: "keyboard",
    price: 149, rating: 4.8, reviews: 231, stock: 18, badge: "Popular",
    shortDesc: "Low-profile mechanical keyboard with warm backlight.",
    fullDesc: "Frame combines the satisfying feedback of mechanical switches with a slim aluminium chassis that looks at home on any desk. Hot-swappable switches, a warm amber backlight, and a braided cable round out a keyboard built to last."
  },
  {
    id: 6, name: "Orbit Wireless Mouse", category: "Electronics", icon: "mouse",
    price: 0, originalPrice: 0, rating: 4.4, reviews: 102, stock: 0,
    shortDesc: "Ergonomic mouse with silent-click switches.",
    fullDesc: "Orbit's sculpted shape supports your hand through long work sessions, while silent-click switches keep shared spaces quiet. A precision sensor and 70-day battery life make it a dependable daily companion.",
    priceOverride: 59
  },

  // ---------------- Fashion ----------------
  {
    id: 7, name: "Linen Relaxed Shirt", category: "Fashion", icon: "shirt",
    price: 68, rating: 4.5, reviews: 164, stock: 32, badge: "New",
    shortDesc: "Breathable linen shirt with a relaxed drape.",
    fullDesc: "Cut from washed European linen, this shirt drapes softly and breathes easily through warm days. A relaxed silhouette, mother-of-pearl buttons, and a slightly rounded hem give it an effortless, elevated feel."
  },
  {
    id: 8, name: "Merino Wool Sweater", category: "Fashion", icon: "sweater",
    price: 118, originalPrice: 145, rating: 4.7, reviews: 209, stock: 21, badge: "Sale",
    shortDesc: "Fine-gauge merino sweater for everyday layering.",
    fullDesc: "Knit from 100% extra-fine merino wool, this sweater is light enough to layer yet warm enough to wear alone on cool evenings. Ribbed cuffs and hem keep the silhouette clean wash after wash."
  },
  {
    id: 9, name: "Tailored Wide-Leg Trousers", category: "Fashion", icon: "trousers",
    price: 92, rating: 4.4, reviews: 96, stock: 27,
    shortDesc: "High-rise trousers with a fluid wide-leg cut.",
    fullDesc: "A high-rise waistband and fluid wide-leg cut give these trousers a fluid, elongating silhouette. A soft twill blend resists wrinkles, making them as suited to travel days as they are to the office."
  },
  {
    id: 10, name: "Quilted Field Jacket", category: "Fashion", icon: "jacket",
    price: 165, rating: 4.8, reviews: 278, stock: 12, badge: "Popular",
    shortDesc: "Lightweight quilted jacket for transitional weather.",
    fullDesc: "This quilted field jacket layers easily over knitwear without adding bulk. A water-resistant shell, corozo buttons, and generous interior pockets make it a reliable companion through unpredictable weather."
  },
  {
    id: 11, name: "Silk Slip Dress", category: "Fashion", icon: "dress",
    price: 138, originalPrice: 175, rating: 4.6, reviews: 133, stock: 19, badge: "Sale",
    shortDesc: "Bias-cut silk dress with a fluid, minimal drape.",
    fullDesc: "Cut on the bias from mulberry silk, this slip dress skims the body with a fluid, understated drape. Adjustable straps and a midi length make it easy to dress up or down."
  },
  {
    id: 12, name: "Organic Cotton Tee", category: "Fashion", icon: "tshirt",
    price: 32, rating: 4.3, reviews: 421, stock: 85,
    shortDesc: "Heavyweight cotton tee with a boxy fit.",
    fullDesc: "Woven from heavyweight organic cotton, this tee holds its shape wash after wash. A boxy fit and dropped shoulder give it a considered, modern silhouette that layers well under jackets."
  },

  // ---------------- Shoes ----------------
  {
    id: 13, name: "Cloudstep Running Shoes", category: "Shoes", icon: "sneaker",
    price: 129, rating: 4.7, reviews: 356, stock: 44, badge: "Popular",
    shortDesc: "Lightweight running shoes with responsive foam.",
    fullDesc: "Cloudstep pairs a breathable knit upper with a dual-density foam midsole tuned for a responsive, cushioned ride. Reflective detailing keeps early-morning and late-evening runs visible and safe."
  },
  {
    id: 14, name: "Terra Leather Boots", category: "Shoes", icon: "boot",
    price: 210, originalPrice: 260, rating: 4.8, reviews: 187, stock: 14, badge: "Sale",
    shortDesc: "Full-grain leather boots built to be resoled.",
    fullDesc: "Handcrafted from full-grain leather over a Goodyear-welted sole, Terra boots are built to be resoled for decades of wear. A cushioned footbed keeps them comfortable from the first day."
  },
  {
    id: 15, name: "Sable Suede Loafers", category: "Shoes", icon: "loafer",
    price: 145, rating: 4.5, reviews: 92, stock: 22,
    shortDesc: "Penny loafers in soft Italian suede.",
    fullDesc: "Crafted in soft Italian suede over a flexible leather sole, these penny loafers move easily from desk to dinner. A cushioned insole adds comfort without sacrificing their clean, low-profile silhouette."
  },
  {
    id: 16, name: "Coastal Slide Sandals", category: "Shoes", icon: "sandal",
    price: 45, rating: 4.2, reviews: 156, stock: 50, badge: "New",
    shortDesc: "Contoured slide sandals for warm weather.",
    fullDesc: "A contoured, quick-drying footbed and adjustable strap make these slides comfortable straight out of the box. Lightweight and water-friendly, they're built for pool days and beach walks alike."
  },

  // ---------------- Accessories ----------------
  {
    id: 17, name: "Ridge Leather Wallet", category: "Accessories", icon: "wallet",
    price: 58, rating: 4.6, reviews: 267, stock: 66,
    shortDesc: "Slim bifold wallet in vegetable-tanned leather.",
    fullDesc: "Cut from vegetable-tanned leather that develops a rich patina over time, this slim bifold holds up to eight cards and folded bills without adding bulk to your pocket."
  },
  {
    id: 18, name: "Heritage Analog Watch", category: "Accessories", icon: "watch",
    price: 225, originalPrice: 280, rating: 4.9, reviews: 314, stock: 9, badge: "Sale",
    shortDesc: "Automatic watch with a sapphire crystal face.",
    fullDesc: "Powered by a Japanese automatic movement and protected by a scratch-resistant sapphire crystal, this watch pairs a minimal dial with a genuine leather strap for an understated everyday statement."
  },
  {
    id: 19, name: "Canvas Tote Bag", category: "Accessories", icon: "bag",
    price: 48, rating: 4.4, reviews: 178, stock: 38,
    shortDesc: "Heavy canvas tote with leather trim.",
    fullDesc: "Sewn from 16oz waxed canvas with full-grain leather trim, this tote is roomy enough for a laptop and groceries alike, and rugged enough to only look better with age."
  },
  {
    id: 20, name: "Horizon Sunglasses", category: "Accessories", icon: "sunglasses",
    price: 89, rating: 4.5, reviews: 143, stock: 29, badge: "New",
    shortDesc: "Polarized sunglasses with acetate frames.",
    fullDesc: "Hand-polished acetate frames hold polarized lenses that cut glare without distorting color. A lightweight build keeps them comfortable for all-day wear, from morning runs to evening patios."
  },

  // ---------------- Home & Living ----------------
  {
    id: 21, name: "Ember Ceramic Vase", category: "Home & Living", icon: "vase",
    price: 54, rating: 4.6, reviews: 88, stock: 33,
    shortDesc: "Hand-thrown stoneware vase in a warm glaze.",
    fullDesc: "Each Ember vase is hand-thrown from stoneware and finished with a reactive glaze, so no two pieces are exactly alike. Its wide mouth and weighted base suit everything from dried grasses to fresh-cut blooms."
  },
  {
    id: 22, name: "Haven Table Lamp", category: "Home & Living", icon: "lamp",
    price: 96, originalPrice: 120, rating: 4.7, reviews: 121, stock: 17, badge: "Sale",
    shortDesc: "Warm-glow lamp with a linen shade.",
    fullDesc: "A turned oak base and hand-sewn linen shade give the Haven lamp a soft, warm glow that suits reading nooks and bedside tables alike. A dimmable socket lets you tune the mood."
  },
  {
    id: 23, name: "Wool Throw Blanket", category: "Home & Living", icon: "blanket",
    price: 78, rating: 4.8, reviews: 205, stock: 41, badge: "Popular",
    shortDesc: "Heavyweight woven wool throw.",
    fullDesc: "Woven from a lambswool blend on traditional looms, this throw adds texture and warmth to any sofa or bed. A fringed edge and tightly woven weave keep it looking new for years."
  },
  {
    id: 24, name: "Bloom Scented Candle", category: "Home & Living", icon: "candle",
    price: 36, rating: 4.5, reviews: 312, stock: 70,
    shortDesc: "Soy candle with a warm sandalwood scent.",
    fullDesc: "Hand-poured from soy wax in small batches, Bloom fills a room with a warm blend of sandalwood, amber, and fig over a 45-hour burn time, housed in a reusable ceramic vessel."
  },

  // ---------------- Beauty ----------------
  {
    id: 25, name: "Dew Vitamin C Serum", category: "Beauty", icon: "serum",
    price: 42, rating: 4.6, reviews: 289, stock: 55, badge: "Popular",
    shortDesc: "Brightening serum with stabilized vitamin C.",
    fullDesc: "Formulated with stabilized 15% vitamin C and ferulic acid, Dew brightens tone and softens the look of fine lines over consistent use, without the sting of harsher formulas."
  },
  {
    id: 26, name: "Clay Cleansing Bar", category: "Beauty", icon: "soap",
    price: 18, rating: 4.3, reviews: 176, stock: 90,
    shortDesc: "Gentle clay bar for daily cleansing.",
    fullDesc: "Kaolin clay and oat milk combine in this cold-processed bar to lift away impurities without stripping the skin's natural moisture barrier. Suitable for daily use on face and body."
  },
  {
    id: 27, name: "Velvet Matte Lipstick", category: "Beauty", icon: "lipstick",
    price: 26, originalPrice: 32, rating: 4.4, reviews: 198, stock: 64, badge: "Sale",
    shortDesc: "Long-wear matte lipstick in warm terracotta.",
    fullDesc: "A creamy, buildable formula glides on and sets to a soft matte finish that lasts through meals and meetings alike, without drying out lips over the course of the day."
  },
  {
    id: 28, name: "Restore Night Cream", category: "Beauty", icon: "cream",
    price: 58, rating: 4.7, reviews: 154, stock: 26, badge: "New",
    shortDesc: "Rich overnight cream with peptides and squalane.",
    fullDesc: "A rich blend of peptides, squalane, and shea butter works through the night to replenish moisture and support the skin's natural repair process, leaving skin visibly plumper by morning."
  }
];

// Normalize price overrides used for the out-of-stock example above.
PRODUCTS.forEach(p => { if (p.priceOverride) { p.price = p.priceOverride; delete p.priceOverride; } });
