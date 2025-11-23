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


// ===== FIXED DEMO =====

const fixedMenu = document.querySelector(".nav-menu-fixed");
const fixedButton = document.querySelector(".nav-button-fixed");

if (fixedButton && fixedMenu) {
  fixedButton.addEventListener("click", () => {
    fixedMenu.classList.toggle("hidden-menu");
  });
}


// ===== TOGGLE BETWEEN BROKEN & FIXED =====

const toggleButtons = document.querySelectorAll(".toggle-btn");

toggleButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".bug-card");
    if (!card) return;

    const brokenDemo = card.querySelector(".broken-demo");
    const fixedDemo = card.querySelector(".fixed-demo");
    if (!brokenDemo || !fixedDemo) return;

    const showingFixed = !fixedDemo.classList.contains("hidden");

    if (showingFixed) {
      // Switch to BROKEN view
      fixedDemo.classList.add("hidden");
      brokenDemo.classList.remove("hidden");
      btn.textContent = "Show Fixed Version";
    } else {
      // Switch to FIXED view
      brokenDemo.classList.add("hidden");
      fixedDemo.classList.remove("hidden");
      btn.textContent = "Show Broken Version";
    }
  });
});


// ===== BROKEN FORM VALIDATION LOGIC =====

// This broken code allows the form to submit even when empty.
// Bugs:
// 1) Uses = instead of ===
// 2) Missing preventDefault()
// 3) Message never updates reliably

const brokenForm = document.querySelector(".form-broken");
const brokenInput = document.querySelector(".name-input-broken");
const brokenMsg = document.querySelector(".broken-message");

if (brokenForm && brokenInput && brokenMsg) {
  brokenForm.addEventListener("submit", (e) => {

    // BUG 1: Wrong operator (= assignment)
    if (brokenInput.value = "") {
      brokenMsg.textContent = "Form submitted (but name was empty!)";
    } else {
      brokenMsg.textContent = "Form submitted.";
    }

    // BUG 2: No preventDefault()
    // The form will reload the page.
  });
}


