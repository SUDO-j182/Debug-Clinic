# 🩺 Debugging Clinic - Frontend Bug Fix Showcase  
**By Drakulic Development**

A live collection of real-world frontend bugs and their solutions.  
Each case includes a broken version, the underlying cause, and a clean, fixed version—showing how I approach debugging and UI/JavaScript problem-solving for clients.

---

## 🌐 Live Demo  
👉 **https://sudo-j182.github.io/Debug-Clinic/**

---

# 🎯 Overview  
This project demonstrates my practical debugging process.  
Every example is based on common issues I fix for clients on Fiverr:

- Unresponsive UI elements  
- JavaScript event bugs  
- Layouts breaking on mobile  
- Form validation errors  
- Incorrect DOM selectors  
- Overflow and sizing problems  
- Logic bugs and silent failures  

The Debugging Clinic shows exactly how I identify a bug, isolate the root cause, and apply a clean fix.

---

# 🐞 Bug Case Studies

## **Bug #1 - Mobile Navigation Not Opening**
**Problem:** Mobile menu button does nothing when tapped.  
**Cause:** Event listener was attached to the menu instead of the button.  
**Fix:** Corrected listener target and toggled visibility cleanly.

---

## **Bug #2 - Form Validation Not Working**
**Problem:** Form allowed submission even when empty.  
**Causes:**
- `=` used instead of `===`  
- Missing `preventDefault()`  
- Message update logic incorrect  
**Fix:** Strict comparison, proper prevention, clean feedback messages.

---

## **Bug #3 - Layout Breaking on Mobile**
**Problem:** Horizontal scrolling required due to fixed widths.  
**Cause:** Hard-coded container width and no wrapping.  
**Fix:** Responsive flexbox layout, wrapping, flexible card sizing.

---

# 🛠 Debugging Workflow  
1. **Reproduce** the issue under real conditions  
2. **Inspect HTML, CSS, JS** behaviour  
3. **Isolate** the smallest root cause  
4. **Apply a targeted fix** (no hacky patches)  
5. **Re-test** across devices/screens  
6. **Explain the solution clearly** to the client  

---

# 🔧 Tech Stack  
- HTML5  
- CSS3 / Responsive Flexbox  
- JavaScript (Vanilla)  
- Git + GitHub Pages  
- DevTools / DOM Debugging  

---

# 📸 Screenshots  
(Replace these image links once you capture your real screenshots)

### **Bug #1 — Nav Before/After**
| Broken | Fixed |
|--------|--------|
| ![Broken Nav](./screenshots/bug1-broken.png) | ![Fixed Nav](./screenshots/bug1-fixed.png) |

### **Bug #2 — Validation Before/After**
| Broken | Fixed |
|--------|--------|
| ![Broken Validation](./screenshots/bug2-broken.png) | ![Fixed Validation](./screenshots/bug2-fixed.png) |

### **Bug #3 — Layout Before/After**
| Broken | Fixed |
|--------|--------|
| ![Broken Layout](./screenshots/bug3-broken.png) | ![Fixed Layout](./screenshots/bug3-fixed.png) |

---

🤝 Work With Me

I fix layout issues, UI bugs, JavaScript errors, broken components, and small tasks quickly and cleanly.

Fiverr: https://www.fiverr.com/drakulik_dev

GitHub: https://github.com/SUDO-j182

---

# 🧩 Local Development  
If you want to run the project locally:

```bash
git clone https://github.com/SUDO-j182/Debug-Clinic.git
cd Debug-Clinic
# Open index.html in a browser or with Live Server
Custom Web Tools  
