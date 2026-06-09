# Tiny Counter App

A simple counter app where I focused more on **how the solution is built** than just what it does.

## 🔗 Live Demo

https://tiny-counter-app.vercel.app/

## 📦 Repository

https://github.com/Mohammed-Soliman144/tiny-counter-app

---

## ✨ Overview

This is a small project, but I treated it as a chance to practice thinking like a real engineer.

Instead of just making it work, I focused on:

* Keeping the code clean and structured
* Making decisions that scale
* Paying attention to performance and user experience

---

## 🧠 Key Ideas Behind the Project

### State Management

I used **Zustand** to manage state in a simple and controlled way.

I also separated:

* **Main state** → core logic (counter, limits, etc.)
* **UI state** → things like animations and interactions

This made the app easier to reason about and extend.

---

### Data Persistence & Validation

* Stored data in **localStorage**
* Used **Zod** to validate everything before using it

This helped handle edge cases like invalid or corrupted data, especially across tabs.

---

### Custom Hooks

I created reusable hooks like:

* `useLocalStorage`
* `useInput`

This reduced repetition and made components cleaner.

---

### Component Design

* Built small, reusable components
* Avoided prop drilling by structuring state properly

---

## ⚡ Performance Note

I ran into a small but interesting issue with font loading.

At first, I used a font package, but it introduced ~200ms delay, which was actually noticeable.

So I switched to a **locally optimized Google Font (Inter)**.

That small change improved:

* Load speed
* UI responsiveness
* Overall user experience

---

## 🏗️ How I Approached It

What mattered most to me was:

* Breaking the problem into smaller pieces
* Keeping clear boundaries between parts of the app
* Not overcomplicating things while still keeping it scalable

---

## 🛠️ Tech Stack

* React
* TypeScript
* Zustand
* Zod
* Pure CSS

---

## 🚧 What’s Next

* Work with real APIs (async data)
* Add more realistic business logic
* Improve accessibility
* Add testing

---

## 🤝 Feedback

If you have any feedback or suggestions, I’d really appreciate it!

---

## 📌 Final Note

This project is intentionally simple, but it reflects how I think about structure, trade-offs, and building maintainable front-end applications.
