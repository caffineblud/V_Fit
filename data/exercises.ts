export type Exercise = {
  id: string;
  name: string;
  category: "Chest" | "Back" | "Legs" | "Shoulders" | "Arms" | "Core";
  equipment: string;
  muscles: string[];
  steps: string[];
  commonMistakes: string[];
  // Placeholder until real rigged models are added.
  // Swap for a .glb path (e.g. "/models/barbell-squat.glb") once you have one.
  modelShape: "capsule" | "box" | "sphere";
  accentHex: string;
};

// This is the entire "catalog." Add an entry here and it shows up
// everywhere in the app automatically — no other code changes needed.
export const exercises: Exercise[] = [
  {
    id: "barbell-squat",
    name: "Barbell Back Squat",
    category: "Legs",
    equipment: "Barbell + squat rack",
    muscles: ["Quadriceps", "Glutes", "Hamstrings", "Core"],
    steps: [
      "Bar rests on upper traps, feet shoulder-width apart.",
      "Brace core, push hips back, bend knees to descend.",
      "Go until thighs are at least parallel to the floor.",
      "Drive through mid-foot to stand back up.",
    ],
    commonMistakes: [
      "Knees caving inward on the way up",
      "Heels lifting off the floor",
      "Rounding the lower back at the bottom",
    ],
    modelShape: "capsule",
    accentHex: "#4FE0C2",
  },
  {
    id: "bench-press",
    name: "Barbell Bench Press",
    category: "Chest",
    equipment: "Barbell + flat bench",
    muscles: ["Pectorals", "Triceps", "Anterior deltoids"],
    steps: [
      "Lie flat, feet planted, slight arch in the lower back.",
      "Grip bar slightly wider than shoulder-width.",
      "Lower bar to mid-chest with control.",
      "Press up until arms are fully extended.",
    ],
    commonMistakes: [
      "Flaring elbows out to 90°",
      "Bouncing the bar off the chest",
      "Feet drifting or lifting during the press",
    ],
    modelShape: "box",
    accentHex: "#4FE0C2",
  },
  {
    id: "lat-pulldown",
    name: "Lat Pulldown",
    category: "Back",
    equipment: "Cable machine",
    muscles: ["Latissimus dorsi", "Biceps", "Rear deltoids"],
    steps: [
      "Grip bar wider than shoulders, sit with thighs locked under pad.",
      "Pull bar down to upper chest, driving elbows down and back.",
      "Squeeze shoulder blades together at the bottom.",
      "Control the bar back up without letting it yank your arms.",
    ],
    commonMistakes: [
      "Using body momentum to swing the bar down",
      "Pulling behind the neck",
      "Only using arms instead of engaging the back",
    ],
    modelShape: "capsule",
    accentHex: "#4FE0C2",
  },
  {
    id: "overhead-press",
    name: "Overhead Press",
    category: "Shoulders",
    equipment: "Barbell or dumbbells",
    muscles: ["Deltoids", "Triceps", "Upper chest"],
    steps: [
      "Stand with feet hip-width, bar at collarbone height.",
      "Brace core and glutes to avoid leaning back.",
      "Press straight up until arms lock out overhead.",
      "Lower with control back to start.",
    ],
    commonMistakes: [
      "Excessive lower-back arch",
      "Pressing the bar forward instead of straight up",
      "Not fully locking out at the top",
    ],
    modelShape: "capsule",
    accentHex: "#4FE0C2",
  },
  {
    id: "plank",
    name: "Plank",
    category: "Core",
    equipment: "Bodyweight",
    muscles: ["Rectus abdominis", "Obliques", "Lower back"],
    steps: [
      "Forearms on the floor, elbows under shoulders.",
      "Body in a straight line from head to heels.",
      "Brace core, squeeze glutes.",
      "Hold without letting hips sag or pike up.",
    ],
    commonMistakes: [
      "Hips sagging toward the floor",
      "Hips piked too high",
      "Holding breath instead of breathing steadily",
    ],
    modelShape: "box",
    accentHex: "#4FE0C2",
  },
];

export const categories = Array.from(new Set(exercises.map((e) => e.category)));
