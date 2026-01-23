(() => {
  const menu = document.getElementById("gallery");
  if (!menu) return;

  const KEY = "galleryMenuOpen";

  // Restore state BEFORE animation
  if (localStorage.getItem(KEY) === "true") {
    menu.setAttribute("open", "");
  }

  // Remove restore lock AFTER first paint
  requestAnimationFrame(() => {
    document.documentElement.classList.remove("restore-menu-open");
  });

  menu.addEventListener("toggle", () => {
    localStorage.setItem(KEY, menu.open);
  });
})();
