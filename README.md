# Tiny Counter App

A simple counter app built with a focus on **engineering practices, state management, and performance optimization** rather than just functionality.

## 🔗 Live Demo

https://tiny-counter-app.vercel.app/

## 📦 Repository

https://github.com/Mohammed-Soliman144/tiny-counter-app

---

## ✨ Overview

This project may look simple on the surface, but it was designed to explore how small applications can be structured using real-world engineering principles like:

* Clear state separation
* Maintainable architecture
* Performance awareness
* Scalable patterns

---

## 🧠 Key Concepts & Decisions

### 1. State Management

* Used **Zustand** with selectors and controlled updates
* Separated:

  * **Main state** (business logic)
  * **UI/interaction state** (animations, modals)

### 2. Data Persistence & Validation

* Persisted state using **localStorage**
* Ensured data integrity using **Zod schema validation**
* Handled edge cases like invalid or corrupted stored values

### 3. Custom Hooks

* Built reusable hooks such as:

  * `useLocalStorage`
  * `useInput`
* Reduced duplication and improved readability

### 4. Component Design

* Created reusable and isolated components
* Avoided prop drilling through proper state design

---

## ⚡ Performance Optimization

### Font Loading Issue

One practical challenge I faced was font loading performance.

* Initial approach: using a font package → caused ~200ms delay
* Problem: noticeable lag affecting UX
* Solution: switched to **locally optimized Google Font (Inter)**

✅ Result:

* Faster load time
* Better perceived performance
* Smoother user experience

---

## 🏗️ Architecture Mindset

Instead of focusing only on features, I focused on:

* Breaking problems into smaller parts
* Defining clear boundaries between layers
* Choosing the right level of abstraction

This helped keep the codebase:

* Easier to understand
* Easier to extend
* Closer to real-world application structure

---

## 🛠️ Tech Stack

* React
* TypeScript
* Zustand
* Zod
* Pure CSS

---

## 🚧 Future Improvements

* Integrate real APIs (async state handling)
* Add more complex business logic
* Improve accessibility (a11y)
* Add testing (unit + integration)

---

## 🤝 Feedback

I’d really appreciate any feedback, suggestions, or critiques!

---

## 📌 Note

This project is intentionally simple in functionality, but focused on **how** the solution is built rather than **what** it does.
