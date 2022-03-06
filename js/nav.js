function toggleMenu(event) {
  const mobileMenu = document.getElementById("mobile-nav-body");
  const toggleButton = document.getElementById("mobile-menu-toggle-button");
  toggleButton.classList.toggle("close");
  mobileMenu.classList.toggle("hidden");
}
