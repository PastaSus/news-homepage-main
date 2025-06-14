document.addEventListener("DOMContentLoaded", () => {
  const openMenu = document.querySelector(".header__menu-button--open");
  const closeMenu = document.querySelector(".header__menu-button--close");

  const nav = document.querySelector(".nav");

  const overlay = document.querySelector(".overlay");

  openMenu.addEventListener("click", expandMenu);
  closeMenu.addEventListener("click", hideMenu);

  function expandMenu() {
    if (nav.classList.contains("hidden")) {
      openMenu.setAttribute("aria-expanded", "true");

      nav.classList.remove("hidden");
      nav.classList.add("grid");

      overlay.classList.remove("hidden");

      document.body.classList.add("no-scroll");
    }
  }

  function hideMenu() {
    if (!nav.classList.contains("hidden")) {
      openMenu.setAttribute("aria-expanded", "false");

      nav.classList.add("hidden");
      overlay.classList.add("hidden");

      document.body.classList.remove("no-scroll");
    }
  }
});
