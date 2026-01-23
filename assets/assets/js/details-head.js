(function () {
  try {
    if (localStorage.getItem("galleryMenuOpen") === "true") {
      document.documentElement.classList.add("restore-menu-open");
    }
  } catch (e) {}
})();
