// Initial script placeholder
console.log("Debugging Clinic Loaded");


// ============================================================
// ===== BROKEN NAV DEMO (intentional incorrect behaviour) =====
// ============================================================

const brokenMenu = document.querySelector(".nav-menu-broken");

// Wrong on purpose: listener attached to menu instead of button
if (brokenMenu) {
  brokenMenu.addEventListener("click", () => {
    brokenMenu.classList.toggle("hidden-menu");
  });
}



// ============================================================
// ===== FIXED NAV DEMO (correct behaviour) ====================
// ============================================================

const fixedMenu = document.querySelector(".nav-menu-fixed");
const fixedButton = document.querySelector(".nav-button-fixed");

// Ensure menu starts hidden
if (fixedMenu && !fixedMenu.classList.contains("hidden-menu")) {
  fixedMenu.classList.add("hidden-menu");
}

// Toggle proper visibility on button click
if (fixedButton && fixedMenu) {
  fixedButton.addEventListener("click", () => {
    fixedMenu.classList.toggle("hidden-menu");
  });
}

// Prevent fixed menu links from jumping to the top
if (fixedMenu) {
  fixedMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
    });
  });
}



// ============================================================
// ===== TOGGLE BETWEEN BROKEN & FIXED DEMOS ==================
// ============================================================

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
// ===== BROKEN FORM VALIDATION LOGIC (intentional bug) =======
// ============================================================

const brokenForm = document.querySelector(".form-broken");
const brokenInput = document.querySelector(".name-input-broken");
const brokenMsg = document.querySelector(".broken-message");

if (brokenForm && brokenInput && brokenMsg) {
  brokenForm.addEventListener("submit", (e) => {

    // Intentional bug: assignment instead of comparison
    if (brokenInput.value = "") {
      brokenMsg.textContent = "Form submitted (but name was empty!)";
    } else {
      brokenMsg.textContent = "Form submitted.";
    }

    // Intentional bug: missing preventDefault()
  });
}



// ============================================================
// ===== FIXED FORM VALIDATION LOGIC ===========================
// ============================================================

const fixedForm = document.querySelector(".form-fixed");
const fixedInput = document.querySelector(".name-input-fixed");
const fixedMsg = document.querySelector(".fixed-message");

if (fixedForm && fixedInput && fixedMsg) {
  fixedForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent reload

    if (fixedInput.value.trim() === "") {
      fixedMsg.textContent = "Please enter your name.";
      fixedMsg.style.color = "red";
    } else {
      fixedMsg.textContent = "Form submitted successfully!";
      fixedMsg.style.color = "green";
    }
  });
}
