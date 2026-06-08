# Tiny Counter App ⚡

A minimal counter app built to practice **Zustand state management** 
outside of React components using `getState()` and `subscribe()`.

## Live Demo
🔗 https://tiny-counter-app.vercel.app/

## Tech Stack
- React 19 + TypeScript
- Zustand (global state)
- Vite
- CSS (custom styles, no UI library)

## What I practiced
- **use Context API and Provider to consume client main state (main state) and persist it inside localstorage (browser memory) cross all mutli layers of components** (theme perferences, counter, limit of counter, max counter)
- **use Zustand to manage internal client state (secondary state) only to link between main state (Context API) and animations between all components as modal can open and close smoothly with animation to avoid use (useCallback, React.memo) in many components**
- **use Zod library for validate all main client state and localstorage values across multi tabs with one schema for (counter, max counter, theme, limit)**
- **use custom hooks to handle all react components like (useLocalStorage, useInput) and use resuable components across all app**
- **use local google font inter which safe and best practice to avoid lag time when use font npm package take almost 230ms that can notice with human eye and harms for ui/ux experience**
- **all app write in typescript with pure css**
- **this app simulate another web app https://simplecounter.app/**

## Run locally
npm install && npm run dev
