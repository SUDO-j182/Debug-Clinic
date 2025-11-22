// Initial script placeholder
console.log("Debugging Clinic Loaded");

// ===== BROKEN DEMO =====

// This is WRONG on purpose.
// The listener attaches to the nav menu instead of the button.
const brokenMenu = document.querySelector(".nav-menu-broken");
const brokenButton = document.querySelector(".nav-button-broken");

// BUG: wrong target for the event listener
// They attached the handler to the MENU instead of the BUTTON.
brokenMenu.addEventListener("click", () => {
  brokenMenu.classList.toggle("hidden-menu");
});

