/* ============================================================
   NOVA MART — Cart Management
   Cart is stored in LocalStorage as an array of
   { id, qty } and persists across sessions/pages.
   ============================================================ */

const Cart = (function () {
  const STORAGE_KEY = "novamart_cart";

  function getAll() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }

  function save(items) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    document.dispatchEvent(new CustomEvent("cart:updated", { detail: getCount() }));
  }

  function findProduct(id) {
    return PRODUCTS.find(p => p.id === Number(id));
  }

  function add(id, qty = 1) {
    const product = findProduct(id);
    if (!product || product.stock <= 0) return false;
    const items = getAll();
    const existing = items.find(i => i.id === Number(id));
    const currentQty = existing ? existing.qty : 0;
    const newQty = Math.min(currentQty + qty, product.stock);
    if (existing) {
      existing.qty = newQty;
    } else {
      items.push({ id: Number(id), qty: newQty });
    }
    save(items);
    return true;
  }

  function setQty(id, qty) {
    const product = findProduct(id);
    let items = getAll();
    const existing = items.find(i => i.id === Number(id));
    if (!existing) return;
    const clamped = Math.max(1, Math.min(qty, product ? product.stock : qty));
    existing.qty = clamped;
    save(items);
  }

  function remove(id) {
    const items = getAll().filter(i => i.id !== Number(id));
    save(items);
  }

  function clear() {
    save([]);
  }

  function getCount() {
    return getAll().reduce((sum, i) => sum + i.qty, 0);
  }

  function getDetailedItems() {
    return getAll()
      .map(i => {
        const product = findProduct(i.id);
        if (!product) return null;
        return { ...product, qty: i.qty, lineTotal: product.price * i.qty };
      })
      .filter(Boolean);
  }

  function getSubtotal() {
    return getDetailedItems().reduce((sum, i) => sum + i.lineTotal, 0);
  }

  return { getAll, add, setQty, remove, clear, getCount, getDetailedItems, getSubtotal };
})();
