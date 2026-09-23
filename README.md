<div align="center">

# VR-FIT

**Every exercise. Every machine. One reference — in VR.**

A spatial exercise reference built with Next.js, React Three Fiber, and WebXR. Pick a category, inspect a 3D model of the movement, read muscle targets and form cues, and build a daily plan. Opens straight into VR on a headset browser.

[![Next.js](https://img.shields.io/badge/Next.js-14.2-000000?style=flat-square&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.3-149ECA?style=flat-square&logo=react&logoColor=white)](https://react.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-0.164-000000?style=flat-square&logo=three.js&logoColor=white)](https://threejs.org/)
[![WebXR](https://img.shields.io/badge/WebXR-enabled-4FE0C2?style=flat-square)](https://immersiveweb.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/license-MIT-4FE0C2?style=flat-square)](#license)

</div>

---

## Overview

VR-FIT is a browser-based exercise reference you can walk around in. Every movement in the catalog gets its own 3D viewer, a muscle-target breakdown, step-by-step form cues, and a list of common mistakes — all navigable from a single-page, three-panel layout that doubles as a flat VR scene via WebXR.

```
┌──────────────┬─────────────────────────┬──────────────────┐
│  Categories   │                         │  Muscles targeted│
│  & exercise   │      3D model viewer     │  Proper form     │
│  list         │      (WebXR / OrbitCtrl) │  Common mistakes │
│               │                         │  Daily plan       │
└──────────────┴─────────────────────────┴──────────────────┘
```

## Features

| Feature | Status |
|---|---|
| Category & exercise navigation | ✅ Done |
| Muscle-target & form-cue data | ✅ Done |
| Common-mistakes reference | ✅ Done |
| Daily plan builder | ✅ Done |
| WebXR entry (Meta Quest Browser, etc.) | ✅ Done |
| Responsive 3D scene (React Three Fiber) | ✅ Done |
| Rigged human models | 🚧 Placeholder — capsule/box primitives |
| Live camera-based posture comparison | 📋 Planned |

## Tech stack

| Layer | Tech |
|---|---|
| Framework | Next.js 14 (App Router) |
| 3D / VR | React Three Fiber, drei, `@react-three/xr`, Three.js |
| Styling | Tailwind CSS, custom dark theme |
| Language | TypeScript |

## Run locally

```bash
npm install
npm run dev
```

Open **http://localhost:3000**.

## Deploy

**Push to GitHub**

```bash
git init
git add .
git commit -m "Initial VR-FIT scaffold"
gh repo create vr-fit --public --source=. --push
```

**Deploy to Vercel**

1. [vercel.com](https://vercel.com) → New Project → import the repo.
2. Framework preset: Next.js (auto-detected). No env vars needed.
3. Deploy, then open the live `https://` URL directly in your headset's browser (e.g. Meta Quest Browser) to enter VR.

## Adding a new exercise

The entire catalog lives in `data/exercises.ts`. Add one object to the array and it automatically appears in its category, gets its own 3D viewer, and becomes selectable for the daily plan — no other file needs to change.

```ts
{
  id: "barbell-squat",
  name: "Barbell Back Squat",
  category: "Legs",
  equipment: "Barbell + squat rack",
  muscles: ["Quadriceps", "Glutes", "Hamstrings", "Core"],
  steps: [ "..." ],
  commonMistakes: [ "..." ],
  modelShape: "capsule",   // swap for a .glb once real models exist
  accentHex: "#4FE0C2",
}
```

## Project structure

```
vr-fit/
├── app/
│   ├── layout.tsx
│   ├── page.tsx           # three-panel layout, state, plan builder
│   └── globals.css
├── components/
│   └── ExerciseViewer.tsx # R3F canvas, WebXR button, placeholder geometry
├── data/
│   └── exercises.ts       # entire exercise catalog — single source of truth
└── tailwind.config.ts     # void / signal / ink color tokens
```

## What's real vs. placeholder

- **Real** — category/exercise navigation, muscle-target and form-cue data, daily plan builder, WebXR entry button, responsive 3D scene.
- **Placeholder** — each exercise currently renders a capsule/box/sphere primitive instead of a rigged human model. Swap `PlaceholderModel` in `components/ExerciseViewer.tsx` for a loaded `.glb` (e.g. from Mixamo) once real assets exist — no other file needs to change.
- **Not built yet** — live camera-based posture comparison against the ideal form (MediaPipe pose tracking), planned as a future version.

## Roadmap

- [ ] Swap placeholder primitives for rigged `.glb` models
- [ ] MediaPipe-based live pose tracking and form scoring
- [ ] Per-joint deviation overlay (ideal vs. live skeleton)
- [ ] Session history / progress dashboard

## License

MIT

---

<div align="center">

Built by **Team Silent Syndicate**

</div>