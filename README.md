<div align="center">

# 🕶️ VR-FIT

[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=22&pause=1000&color=FF8C00&center=true&vCenter=true&width=700&lines=Every+Exercise%2C+Every+Machine+%F0%9F%8F%8B%EF%B8%8F;One+Spatial+Reference+%F0%9F%A7%A0;Built+with+Next.js+%2B+React+Three+Fiber+%E2%9A%9B%EF%B8%8F;WebXR-Ready+%F0%9F%95%B6%EF%B8%8F;Enter+VR+on+Any+Headset+Browser+%F0%9F%9A%80)](https://git.io/typing-svg)

<img src="https://img.shields.io/badge/Next.js-14.2-FF8C00?style=flat-square"/>
<img src="https://img.shields.io/badge/React_Three_Fiber-🧠-FF8C00?style=flat-square"/>
<img src="https://img.shields.io/badge/WebXR-🕶️_Enabled-FF8C00?style=flat-square"/>
<img src="https://img.shields.io/badge/TypeScript-Strict-FF8C00?style=flat-square"/>
<img src="https://img.shields.io/badge/Team-Silent_Syndicate-FF8C00?style=flat-square"/>

</div>

---

<table>
<tr>
<td valign="top" width="55%">

### What is this? 👋

**VR-FIT** is a browser-based exercise reference you can walk around in. Pick a category, inspect a 3D model of the movement, read muscle targets and form cues, and build a daily plan — all from one screen that doubles as a flat VR scene via WebXR.

No headset? It's a normal web app. Headset browser? One tap and you're standing inside the scene.

- 🏋️ **Catalog** — categorized exercises with muscle targets, form steps & common mistakes
- 🧊 **3D Viewer** — React Three Fiber scene per exercise, orbit-controlled
- 🕶️ **WebXR** — one-tap VR entry on Meta Quest Browser & friends
- 📋 **Daily Plan** — build and track today's session from the catalog
- 🎯 **Single source of truth** — add one object to `exercises.ts`, it shows up everywhere
- ⚡ **Fun fact** — every exercise is currently a glowing capsule until real rigs land

</td>
<td valign="center" width="45%">

<img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExam1rMHYxZW40dGlmNTQ3b2xkdjA4djdqZzd1d3liMTYxenhkc3MweiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/jfKiMjWolBzuWkdbw0/giphy.gif" width="100%"/>

</td>
</tr>
</table>

---

## 🚀 Status Board

<table>
<tr>
<td width="33%" valign="top">

### ✅ Real
- Category & exercise navigation
- Muscle-target + form-cue data
- Common-mistakes reference
- Daily plan builder
- WebXR entry button
- Responsive 3D scene

</td>
<td width="33%" valign="top">

### 🚧 Placeholder
- Capsule / box / sphere primitives stand in for rigged human models
- Swap `PlaceholderModel` in `ExerciseViewer.tsx` for a `.glb` — nothing else changes

</td>
<td width="33%" valign="top">

### 📋 Planned
- Live camera-based posture comparison
- MediaPipe pose tracking + form scoring
- Per-joint deviation overlay
- Session history dashboard

</td>
</tr>
</table>

---

## 🧱 Tech Stack

**Framework & Language**

![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-149ECA?style=flat-square&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)

**3D & VR**

![Three.js](https://img.shields.io/badge/Three.js-000000?style=flat-square&logo=three.js&logoColor=white)
![React Three Fiber](https://img.shields.io/badge/React_Three_Fiber-FF8C00?style=flat-square)
![WebXR](https://img.shields.io/badge/WebXR-FF8C00?style=flat-square)

**Styling**

![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)

---

## 🖥️ Run Locally

```bash
npm install
npm run dev
```

Open **http://localhost:3000**

---

## ☁️ Deploy

**Push to GitHub**

```bash
git init
git add .
git commit -m "Initial VR-FIT scaffold"
gh repo create vr-fit --public --source=. --push
```

**Deploy to Vercel**

1. [vercel.com](https://vercel.com) → New Project → import the repo
2. Framework preset: Next.js (auto-detected) — no env vars needed
3. Deploy, then open the live `https://` URL directly in your headset's browser to enter VR

---

## 🧩 Adding a New Exercise

Everything lives in `data/exercises.ts`. Add one object to the array and it automatically appears in its category, gets its own 3D viewer, and becomes selectable for the daily plan.

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

---

## 📁 Project Structure

```
vr-fit/
├── app/
│   ├── layout.tsx
│   ├── page.tsx            # three-panel layout, state, plan builder
│   └── globals.css
├── components/
│   └── ExerciseViewer.tsx  # R3F canvas, WebXR button, placeholder geometry
├── data/
│   └── exercises.ts        # entire exercise catalog — single source of truth
└── tailwind.config.ts      # void / signal / ink color tokens
```

---

## 🗺️ Roadmap

```python
while building_vr_fit:
    swap_placeholders_for_rigged_models()
    add_mediapipe_pose_tracking()
    overlay_ideal_vs_live_skeleton()
    ship_session_history_dashboard()
```

---

## 📜 License

MIT

---

<div align="center">

### 👀 Visitor Count

[![](https://komarev.com/ghpvc/?username=vr-fit&color=FF8C00&style=flat-square&label=Repo+Views)](https://github.com/caffineblud/vr-fit)

Built by **Team Silent Syndicate** 🕶️

*⭐ Star this repo if the idea of a VR gym reference is your kind of chaos.*

</div>