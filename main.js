// Initial script placeholder
console.log("Debugging Clinic Loaded");


// ===== BROKEN NAV DEMO =====

const brokenMenu = document.querySelector(".nav-menu-broken");

// Wrong on purpose: listener on the menu instead of the button
if (brokenMenu) {
  brokenMenu.addEventListener("click", () => {
    brokenMenu.classList.toggle("hidden-menu");
  });
}


// ===== FIXED NAV DEMO =====

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
      fixedDemo.classList.add("hidden");
      brokenDemo.classList.remove("hidden");
      btn.textContent = "Show Fixed Version";
    } else {
      brokenDemo.classList.add("hidden");
      fixedDemo.classList.remove("hidden");
      btn.textContent = "Show Broken Version";
    }
  });
});


// ============================================================
// ===== BROKEN FORM VALIDATION LOGIC (intentional errors) =====
// ============================================================

const brokenForm = document.querySelector(".form-broken");
const brokenInput = document.querySelector(".name-input-broken");
const brokenMsg = document.querySelector(".broken-message");

if (brokenForm && brokenInput && brokenMsg) {
  brokenForm.addEventListener("submit", (e) => {

    // BUG: Using assignment operator instead of comparison
    if (brokenInput.value = "") {
      brokenMsg.textContent = "Form submitted (but name was empty!)";
    } else {
      brokenMsg.textContent = "Form submitted.";
    }

    // BUG: Missing preventDefault() so page reloads
    // (this is intentional for broken demo)
  });
}



// ============================================================
// ===== FIXED FORM VALIDATION LOGIC (correct behaviour) ======
// ============================================================

const fixedForm = document.querySelector(".form-fixed");
const fixedInput = document.querySelector(".name-input-fixed");
const fixedMsg = document.querySelector(".fixed-message");

if (fixedForm && fixedInput && fixedMsg) {
  fixedForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent page reload

    if (fixedInput.value.trim() === "") {
      fixedMsg.textContent = "Please enter your name.";
      fixedMsg.style.color = "red";
    } else {
      fixedMsg.textContent = "Form submitted successfully!";
      fixedMsg.style.color = "green";
    }
  });
}
