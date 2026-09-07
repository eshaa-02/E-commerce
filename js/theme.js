/* ============================================================
   NOVA MART — Theme Management
   ============================================================ */

(function () {
  const STORAGE_KEY = "novamart_theme";

  function getPreferredTheme() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
  }

  // Apply immediately (before paint) to avoid a flash of the wrong theme.
  applyTheme(getPreferredTheme());

  function toggleTheme() {
    const current = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
    const next = current === "dark" ? "light" : "dark";
    applyTheme(next);
    localStorage.setItem(STORAGE_KEY, next);
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("[data-theme-toggle]").forEach(btn => {
      btn.addEventListener("click", toggleTheme);
    });
  });

  window.NovaTheme = { toggleTheme, applyTheme, getPreferredTheme };
})();
