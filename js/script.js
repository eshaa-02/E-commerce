/* ============================================================
   NOVA MART — Shared UI Logic
   Icon library, navigation, search, toasts, and reusable
   product/category card renderers used across every page.
   ============================================================ */

/* ---------- Icon library (feather-style line icons) ---------- */
const ICONS = {
  search: '<circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
  heart: '<path d="M12 21s-6.7-4.35-9.3-8.2C1 10.5 1.5 7 4.5 5.5c2.2-1.1 4.6-.3 5.9 1.5.4.5.7 1 .7 1s.3-.5.7-1c1.3-1.8 3.7-2.6 5.9-1.5 3 1.5 3.5 5 1.8 7.3C18.7 16.65 12 21 12 21Z"/>',
  bag: '<path d="M6 8h12l-1 13H7L6 8Z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/>',
  x: '<line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/>',
  trash: '<path d="M4 7h16"/><path d="M6 7V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2"/><path d="M6 7l1 13a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-13"/>',
  truck: '<rect x="1" y="6" width="14" height="11"/><path d="M15 9h4l3 4v4h-7z"/><circle cx="6" cy="19" r="1.6"/><circle cx="17" cy="19" r="1.6"/>',
  shield: '<path d="M12 2 4 5v6c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V5z"/><path d="M9 12l2 2 4-4"/>',
  refresh: '<path d="M21 12a9 9 0 1 1-3-6.7"/><polyline points="21 3 21 8 16 8"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
  phone: '<path d="M6 2h4l1 5-2.5 2a12 12 0 0 0 6 6l2-2.5 5 1v4a2 2 0 0 1-2 2C10 20 4 14 4 4a2 2 0 0 1 2-2Z"/>',
  pin: '<path d="M12 22s7-6.5 7-12A7 7 0 0 0 5 10c0 5.5 7 12 7 12Z"/><circle cx="12" cy="10" r="2.5"/>',
  send: '<path d="M22 2 11 13"/><path d="M22 2 15 22l-4-9-9-4Z"/>',
  plus: '<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>',
  minus: '<line x1="5" y1="12" x2="19" y2="12"/>',
  chevronUp: '<polyline points="18 15 12 9 6 15"/>',
  chevronRight: '<polyline points="9 6 15 12 9 18"/>',
  arrowRight: '<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>',
  star: '<path d="M12 2l2.9 6.3 6.9.7-5.2 4.7 1.5 6.8L12 17l-6.1 3.5 1.5-6.8L2.2 9l6.9-.7Z"/>',
  check: '<circle cx="12" cy="12" r="10"/><polyline points="8 12 11 15 16 9"/>',
  moon: '<path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z"/>',
  at: '<circle cx="12" cy="12" r="4"/><path d="M16 12v1.5a2.5 2.5 0 0 0 5 0V12a9 9 0 1 0-3.5 7.1"/>',
  camera: '<path d="M4 8h3l2-3h6l2 3h3v11H4Z"/><circle cx="12" cy="13.5" r="3.5"/>',
  linkedin: '<rect x="3" y="3" width="18" height="18" rx="3"/><line x1="7.5" y1="10" x2="7.5" y2="17"/><circle cx="7.5" cy="7" r="1.2"/><path d="M11 17v-4.5a2 2 0 0 1 4 0V17M11 17v-7"/>',
  box: '<path d="M21 8 12 3 3 8l9 5 9-5Z"/><path d="M3 8v9l9 5 9-5V8"/><line x1="12" y1="13" x2="12" y2="22"/>',
  emptyBag: '<path d="M6 8h12l-1 13H7L6 8Z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/><line x1="9" y1="12" x2="15" y2="16"/><line x1="15" y1="12" x2="9" y2="16"/>',

  /* categories */
  electronics: '<rect x="7" y="7" width="10" height="10" rx="1.5"/><line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/>',
  fashion: '<path d="M12 3a2 2 0 1 1 2 2c-.6.5-1.5.9-1.5 1.8v.4"/><path d="M12 7 3 13a2 2 0 0 0 1 3.7h16A2 2 0 0 0 21 13Z"/>',
  shoes: '<path d="M3 17c0-2 2-2.5 4-3.5 2-1 3-3 5-3 1.5 0 2 1 3.5 1.5 2 .7 5.5 1 5.5 4v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Z"/>',
  accessories: '<circle cx="12" cy="12" r="5.5"/><line x1="12" y1="9.5" x2="12" y2="12"/><line x1="12" y1="12" x2="13.8" y2="13.2"/><rect x="9.5" y="2" width="5" height="3" rx="1"/><rect x="9.5" y="19" width="5" height="3" rx="1"/>',
  home: '<path d="M4 11 12 4l8 7"/><path d="M6 10v9a1 1 0 0 0 1 1h4v-5h2v5h4a1 1 0 0 0 1-1v-9"/>',
  beauty: '<path d="M12 2s6 7 6 11a6 6 0 0 1-12 0c0-4 6-11 6-11Z"/>',

  /* products */
  headphones: '<path d="M4 14a8 8 0 0 1 16 0"/><rect x="2" y="14" width="4" height="6" rx="2"/><rect x="18" y="14" width="4" height="6" rx="2"/>',
  "watch-tech": '<rect x="7" y="7" width="10" height="12" rx="3"/><line x1="10" y1="3" x2="14" y2="3"/><line x1="10" y1="21" x2="14" y2="21"/>',
  speaker: '<rect x="6" y="2" width="12" height="20" rx="2"/><circle cx="12" cy="8" r="2"/><circle cx="12" cy="15" r="4"/>',
  charger: '<rect x="8" y="2" width="8" height="14" rx="2"/><polyline points="11 9 13 9 11 13 13 13"/><line x1="12" y1="16" x2="12" y2="20"/>',
  keyboard: '<rect x="2" y="6" width="20" height="12" rx="2"/><line x1="6" y1="10" x2="6.01" y2="10"/><line x1="10" y1="10" x2="10.01" y2="10"/><line x1="14" y1="10" x2="14.01" y2="10"/><line x1="18" y1="10" x2="18.01" y2="10"/><line x1="7" y1="14" x2="17" y2="14"/>',
  mouse: '<rect x="8" y="2" width="8" height="20" rx="4"/><line x1="12" y1="2" x2="12" y2="9"/>',
  shirt: '<path d="M8 4 4 7l2 3 2-1v11h8V9l2 1 2-3-4-3-2 2h-4Z"/>',
  sweater: '<path d="M4 8 8 4h8l4 4-3 3-1-1v10H8V11l-1 1Z"/>',
  trousers: '<path d="M6 3h12l1 18h-4l-1-9-1 9H8Z"/>',
  jacket: '<path d="M9 3H7L3 6l2 3 2-1v13h10V8l2 1 2-3-4-3h-2l-3 3Z"/>',
  dress: '<path d="M9 3h6l1 4-2 1 3 12H7l3-12-2-1Z"/>',
  tshirt: '<path d="M7 4 3 7l2 3 2-1v11h10V9l2 1 2-3-4-3-2 2h-4Z"/>',
  sneaker: '<path d="M2 17c0-2 2-2 4-3.5 2-1.2 3-3.2 5-3.2 1.3 0 1.8 1 3 1.5 1.8.7 8-.3 8 3v1.2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1Z"/>',
  boot: '<path d="M8 2v9l-5 4v3a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-2c0-1.5-1.5-2-3-2.5-2-.7-3-1.5-3-3.5V2Z"/>',
  loafer: '<path d="M2 16c1-3 4-4 7-5 2-.7 3-2 5-2 1.5 0 2 1.2 3.5 1.8 2 .8 6.5.2 6.5 3.2v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1Z"/>',
  sandal: '<path d="M3 15h18v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/><path d="M6 15V9a2 2 0 0 1 2-2h1M12 15V7a2 2 0 0 1 2-2h1"/>',
  wallet: '<rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 10h18"/><circle cx="16" cy="14" r="1.5"/>',
  watch: '<circle cx="12" cy="12" r="6"/><line x1="12" y1="12" x2="12" y2="9"/><line x1="12" y1="12" x2="14.5" y2="13"/><rect x="9" y="1" width="6" height="4" rx="1"/><rect x="9" y="19" width="6" height="4" rx="1"/>',
  sunglasses: '<circle cx="7" cy="13" r="3.5"/><circle cx="17" cy="13" r="3.5"/><line x1="10.5" y1="12" x2="13.5" y2="12"/><line x1="3" y1="11" x2="3.5" y2="9"/><line x1="21" y1="11" x2="20.5" y2="9"/>',
  vase: '<path d="M9 2h6l-1 5 3 4v7a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-7l3-4Z"/>',
  lamp: '<path d="M6 4h12l-3 7H9Z"/><line x1="12" y1="11" x2="12" y2="19"/><line x1="8" y1="21" x2="16" y2="21"/>',
  blanket: '<path d="M3 5h18v14H3Z"/><path d="M3 9c2-1 4 1 6 0s4-1 6 0 4 1 6 0"/><path d="M3 13c2-1 4 1 6 0s4-1 6 0 4 1 6 0"/>',
  candle: '<rect x="9" y="8" width="6" height="13" rx="1"/><path d="M12 8c-1-1-1-3 0-4 1 1 1 3 0 4Z"/>',
  serum: '<rect x="9" y="9" width="6" height="12" rx="2"/><path d="M11 9V4h2v5"/><circle cx="12" cy="3" r="1"/>',
  soap: '<rect x="4" y="9" width="16" height="10" rx="4"/><path d="M8 9V7a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',
  lipstick: '<path d="M9 22h6l1-9H8Z"/><path d="M8 13l1-6a3 3 0 0 1 6 0l1 6Z"/>',
  cream: '<rect x="6" y="9" width="12" height="11" rx="2"/><rect x="7" y="5" width="10" height="4" rx="1"/>'
};

function icon(name, cls) {
  const inner = ICONS[name] || "";
  return `<svg class="${cls || ""}" viewBox="0 0 24 24">${inner}</svg>`;
}

/* ---------- Formatting helpers ---------- */
function formatPrice(n) {
  return "$" + Number(n).toFixed(2).replace(/\.00$/, "");
}

function starRow(rating, size) {
  const cls = size || "";
  let html = `<span class="${cls}" style="display:inline-flex;gap:2px;">`;
  for (let i = 1; i <= 5; i++) {
    const filled = i <= Math.round(rating);
    html += `<svg viewBox="0 0 24 24" style="width:${cls === "pd" ? 16 : 13}px;height:${cls === "pd" ? 16 : 13}px;fill:${filled ? "var(--accent-primary)" : "var(--border)"};stroke:none;">${ICONS.star}</svg>`;
  }
  html += "</span>";
  return html;
}

function debounce(fn, delay) {
  let t;
  return function (...args) {
    clearTimeout(t);
    t = setTimeout(() => fn.apply(this, args), delay || 250);
  };
}

/* ---------- Toasts ---------- */
function showToast(message, type) {
  let wrap = document.querySelector(".toast-wrap");
  if (!wrap) {
    wrap = document.createElement("div");
    wrap.className = "toast-wrap";
    document.body.appendChild(wrap);
  }
  const toast = document.createElement("div");
  toast.className = "toast" + (type === "error" ? " toast-error" : "");
  toast.innerHTML = `${icon(type === "error" ? "x" : "check")}<span>${message}</span>`;
  wrap.appendChild(toast);
  setTimeout(() => {
    toast.classList.add("hide");
    setTimeout(() => toast.remove(), 300);
  }, 2800);
}

/* ---------- Product card renderer ---------- */
function productMediaSvg(p) {
  return `<div class="product-media">${icon(p.icon)}${p.stock <= 0 ? '<div class="skeleton" style="position:absolute;inset:0;opacity:.35;"></div>' : ""}</div>`;
}

function renderBadges(p) {
  if (!p.badge) return "";
  const map = { New: "badge-new", Sale: "badge-sale", Popular: "badge-popular" };
  return `<div class="product-badges"><span class="badge ${map[p.badge] || "badge-new"}">${p.badge}</span></div>`;
}

function productCardHTML(p) {
  const wished = typeof Wishlist !== "undefined" && Wishlist.has(p.id);
  return `
  <article class="product-card" data-id="${p.id}">
    <a href="product.html?id=${p.id}" class="product-media-link" aria-label="View ${p.name}">
      <div class="product-media">
        ${icon(p.icon)}
      </div>
    </a>
    ${renderBadges(p)}
    <button class="wish-btn ${wished ? "active" : ""}" data-wish="${p.id}" aria-label="Toggle wishlist">
      ${icon("heart")}
    </button>
    <div class="product-info">
      <a href="product.html?id=${p.id}">
        <span class="product-cat">${p.category}</span>
        <h3 class="product-title">${p.name}</h3>
      </a>
      <div class="product-rating">${starRow(p.rating)} <span>(${p.reviews})</span></div>
      <div class="product-price-row">
        <span class="price-now">${formatPrice(p.price)}</span>
        ${p.originalPrice ? `<span class="price-old">${formatPrice(p.originalPrice)}</span>` : ""}
      </div>
      ${p.stock <= 0 ? '<span class="stock-out">Out of stock</span>' : ""}
    </div>
    <div class="quick-add">
      <button data-add="${p.id}" ${p.stock <= 0 ? "disabled" : ""}>${icon("bag")} ${p.stock <= 0 ? "Sold out" : "Add to cart"}</button>
    </div>
  </article>`;
}

function renderProductGrid(container, products) {
  if (!container) return;
  if (!products.length) {
    container.innerHTML = `
      <div class="empty-state">
        ${icon("search")}
        <h3>No products found</h3>
        <p>Try adjusting your search or filters to find what you're looking for.</p>
      </div>`;
    return;
  }
  container.innerHTML = products.map(productCardHTML).join("");
  wireProductCardEvents(container);
}

function wireProductCardEvents(scope) {
  (scope || document).querySelectorAll("[data-add]").forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault();
      const id = btn.getAttribute("data-add");
      const ok = Cart.add(id, 1);
      showToast(ok ? "Added to cart" : "Item out of stock", ok ? "success" : "error");
    });
  });
  (scope || document).querySelectorAll("[data-wish]").forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault();
      const id = btn.getAttribute("data-wish");
      const nowActive = Wishlist.toggle(id);
      btn.classList.toggle("active", nowActive);
      showToast(nowActive ? "Added to wishlist" : "Removed from wishlist");
    });
  });
}

/* ---------- Category grid ---------- */
const CATEGORY_META = [
  { name: "Electronics", icon: "electronics" },
  { name: "Fashion", icon: "fashion" },
  { name: "Shoes", icon: "shoes" },
  { name: "Accessories", icon: "accessories" },
  { name: "Home & Living", icon: "home" },
  { name: "Beauty", icon: "beauty" }
];

function renderCategoryGrid(container) {
  if (!container) return;
  container.innerHTML = CATEGORY_META.map(
    c => `
    <a class="cat-card" href="shop.html?category=${encodeURIComponent(c.name)}">
      <div class="cat-icon">${icon(c.icon)}</div>
      <span>${c.name}</span>
    </a>`
  ).join("");
}

/* ---------- Global nav / search / mobile menu ---------- */
function updateBadgeCounts() {
  const cartCount = typeof Cart !== "undefined" ? Cart.getCount() : 0;
  const wishCount = typeof Wishlist !== "undefined" ? Wishlist.getCount() : 0;
  document.querySelectorAll("[data-cart-count]").forEach(el => {
    el.textContent = cartCount;
    el.style.display = cartCount > 0 ? "flex" : "none";
  });
  document.querySelectorAll("[data-wish-count]").forEach(el => {
    el.textContent = wishCount;
    el.style.display = wishCount > 0 ? "flex" : "none";
  });
}

function initSearchOverlay() {
  const overlay = document.querySelector(".search-overlay");
  if (!overlay) return;
  const input = overlay.querySelector("input");
  const resultsEl = overlay.querySelector(".search-results");
  const hintEl = overlay.querySelector(".search-hint");

  function open() {
    overlay.classList.add("open");
    setTimeout(() => input && input.focus(), 200);
    document.body.style.overflow = "hidden";
  }
  function close() {
    overlay.classList.remove("open");
    document.body.style.overflow = "";
  }
  document.querySelectorAll("[data-search-open]").forEach(b => b.addEventListener("click", open));
  overlay.querySelectorAll("[data-search-close]").forEach(b => b.addEventListener("click", close));
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") close();
  });

  function runSearch(term) {
    const q = term.trim().toLowerCase();
    if (!q) {
      resultsEl.innerHTML = "";
      hintEl.style.display = "block";
      return;
    }
    hintEl.style.display = "none";
    const matches = PRODUCTS.filter(p => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)).slice(0, 8);
    if (!matches.length) {
      resultsEl.innerHTML = `<p class="search-hint" style="display:block;">No products found for "${term}".</p>`;
      return;
    }
    resultsEl.innerHTML = matches
      .map(
        p => `
      <a class="search-result-item" href="product.html?id=${p.id}">
        <div class="search-result-thumb product-media" style="width:52px;height:52px;">${icon(p.icon)}</div>
        <div>
          <div style="font-weight:700;font-size:.92rem;">${p.name}</div>
          <div style="font-size:.8rem;color:var(--text-secondary);">${p.category} · ${formatPrice(p.price)}</div>
        </div>
      </a>`
      )
      .join("");
  }

  if (input) {
    input.addEventListener("input", debounce(e => runSearch(e.target.value), 200));
    input.addEventListener("keydown", e => {
      if (e.key === "Enter" && input.value.trim()) {
        window.location.href = "shop.html?search=" + encodeURIComponent(input.value.trim());
      }
    });
  }
}

function initMobileMenu() {
  const btn = document.querySelector(".hamburger");
  const panel = document.querySelector(".mobile-panel");
  const overlay = document.querySelector(".overlay");
  if (!btn || !panel) return;
  function toggle() {
    const open = panel.classList.toggle("open");
    btn.classList.toggle("active", open);
    overlay.classList.toggle("show", open);
    document.body.style.overflow = open ? "hidden" : "";
  }
  function close() {
    panel.classList.remove("open");
    btn.classList.remove("active");
    overlay.classList.remove("show");
    document.body.style.overflow = "";
  }
  btn.addEventListener("click", toggle);
  overlay.addEventListener("click", close);
  panel.querySelectorAll("a").forEach(a => a.addEventListener("click", close));
}

function initNavScrollShadow() {
  const nav = document.querySelector(".navbar");
  if (!nav) return;
  function onScroll() {
    nav.classList.toggle("scrolled", window.scrollY > 8);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

function initBackToTop() {
  const btn = document.querySelector(".back-to-top");
  if (!btn) return;
  window.addEventListener(
    "scroll",
    () => {
      btn.classList.toggle("show", window.scrollY > 500);
    },
    { passive: true }
  );
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

function setActiveNavLink() {
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(a => {
    const href = a.getAttribute("href");
    if (href === path) a.classList.add("active");
  });
}

document.addEventListener("DOMContentLoaded", function () {
  updateBadgeCounts();
  initSearchOverlay();
  initMobileMenu();
  initNavScrollShadow();
  initBackToTop();
  setActiveNavLink();

  const catGrid = document.querySelector("[data-category-grid]");
  if (catGrid) renderCategoryGrid(catGrid);

  document.addEventListener("cart:updated", updateBadgeCounts);
  document.addEventListener("wishlist:updated", updateBadgeCounts);

  const newsletterForm = document.querySelector("[data-newsletter]");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", e => {
      e.preventDefault();
      const input = newsletterForm.querySelector("input");
      if (input && input.value.trim()) {
        showToast("Subscribed! Welcome to Nova Mart.");
        newsletterForm.reset();
      }
    });
  }
});
