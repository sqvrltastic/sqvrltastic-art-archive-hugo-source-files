const desktopToggle = document.getElementById("theme-toggle");
const desktopIcon = document.getElementById("theme-icon");

const mobileToggle = document.getElementById("mobile-theme-toggle");
const mobileIcon = document.getElementById("mobile-theme-icon");

const html = document.documentElement;

const sunIcon = "/assets/images/icons/sun.png";
const moonIcon = "/assets/images/icons/moon.png";

function updateIcons(theme) {
  if (desktopIcon) {
    desktopIcon.src = theme === "dark" ? moonIcon : sunIcon;
    desktopIcon.alt =
      theme === "dark" ? "dark theme is ON" : "light theme is ON";
  }

  if (mobileIcon) {
    mobileIcon.src = theme === "dark" ? moonIcon : sunIcon;
    mobileIcon.alt =
      theme === "dark" ? "dark theme is ON" : "light theme is ON";
  }
}

function toggleTheme() {
  const currentTheme = html.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  html.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);

  updateIcons(newTheme);
}

if (desktopToggle) {
  desktopToggle.addEventListener("click", toggleTheme);
}

if (mobileToggle) {
  mobileToggle.addEventListener("click", toggleTheme);
}

// On page load — sync icons:
const initialTheme = html.getAttribute("data-theme");
updateIcons(initialTheme);
