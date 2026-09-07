/* ============================================================
   NOVA MART — Wishlist Management
   Wishlist is stored in LocalStorage as an array of product ids.
   ============================================================ */

const Wishlist = (function () {
  const STORAGE_KEY = "novamart_wishlist";

  function getAll() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }

  function save(ids) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
    document.dispatchEvent(new CustomEvent("wishlist:updated", { detail: ids.length }));
  }

  function has(id) {
    return getAll().includes(Number(id));
  }

  function toggle(id) {
    const ids = getAll();
    const idx = ids.indexOf(Number(id));
    if (idx > -1) {
      ids.splice(idx, 1);
      save(ids);
      return false;
    }
    ids.push(Number(id));
    save(ids);
    return true;
  }

  function remove(id) {
    save(getAll().filter(i => i !== Number(id)));
  }

  function getCount() {
    return getAll().length;
  }

  function getProducts() {
    return getAll()
      .map(id => PRODUCTS.find(p => p.id === id))
      .filter(Boolean);
  }

  return { getAll, has, toggle, remove, getCount, getProducts };
})();
