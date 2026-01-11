const el = document.getElementById("scroll-to-top");

// initial state
el.setAttribute("aria-hidden", "true");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    // show after 100px
    el.classList.add("show");
    el.setAttribute("aria-hidden", "false");
  } else {
    el.classList.remove("show");
    el.setAttribute("aria-hidden", "true");
  }
});
