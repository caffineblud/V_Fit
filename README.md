# VR-FIT

A spatial exercise reference: pick a category, see a 3D model of the
movement, read muscle targets and form cues, build a daily plan. Enters
VR via WebXR when opened on a headset browser.

## Run locally

```
npm install
npm run dev
```

Open http://localhost:3000

## Push to GitHub

```
git init
git add .
git commit -m "Initial VR-FIT scaffold"
gh repo create vr-fit --public --source=. --push
```

(Or create the repo on github.com first, then `git remote add origin <url>` and `git push -u origin main`.)

## Deploy to Vercel

1. Go to vercel.com → New Project → import the GitHub repo.
2. Framework preset: Next.js (auto-detected). No env vars needed.
3. Deploy. Vercel gives you an `https://` URL — open that URL directly
   in your headset's browser (e.g. Meta Quest Browser) to enter VR.

## What's real vs. placeholder right now

- **Real**: category/exercise navigation, muscle-target and form-cue
  data, daily plan builder, WebXR entry button, responsive 3D scene.
- **Placeholder**: each exercise currently renders a simple capsule/box
  shape instead of a rigged human model — swap `PlaceholderModel` in
  `components/ExerciseViewer.tsx` for a loaded `.glb` (e.g. from Mixamo)
  once you have real assets. No other file needs to change.
- **Not built yet**: live camera-based posture comparison — planned as
  a future version.

## Adding a new exercise

Everything lives in `data/exercises.ts`. Add one object to the array
and it automatically appears in its category, gets its own 3D viewer,
and becomes selectable for the daily plan — no other code changes.
