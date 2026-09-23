"use client";

import { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { exercises, categories, type Exercise } from "@/data/exercises";

// The 3D canvas touches window/WebGL, so it can't render on the server.
const ExerciseViewer = dynamic(() => import("@/components/ExerciseViewer"), {
  ssr: false,
});

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]);
  const [selectedId, setSelectedId] = useState<string>(exercises[0].id);
  const [plan, setPlan] = useState<string[]>([]);

  const filtered = useMemo(
    () => exercises.filter((e) => e.category === activeCategory),
    [activeCategory]
  );

  const selected = exercises.find((e) => e.id === selectedId) as Exercise;
  const inPlan = plan.includes(selected.id);

  function togglePlan(id: string) {
    setPlan((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));
  }

  return (
    <main className="grid h-screen grid-cols-[280px_1fr_320px] bg-void text-ink">
      {/* Left: category + exercise list */}
      <aside className="flex flex-col border-r border-line">
        <div className="border-b border-line px-5 py-5">
          <h1 className="font-display text-lg font-600 text-signal">VR-FIT</h1>
          <p className="mt-1 text-xs text-inkDim">
            Every exercise. Every machine. One reference.
          </p>
        </div>

        <nav className="flex gap-2 overflow-x-auto px-5 py-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                const first = exercises.find((e) => e.category === cat);
                if (first) setSelectedId(first.id);
              }}
              className={`whitespace-nowrap rounded-full border px-3 py-1 text-sm transition-colors ${
                activeCategory === cat
                  ? "border-signal text-signal"
                  : "border-line text-inkDim hover:text-ink"
              }`}
            >
              {cat}
            </button>
          ))}
        </nav>

        <ul className="flex-1 overflow-y-auto px-3 py-2">
          {filtered.map((ex) => (
            <li key={ex.id}>
              <button
                onClick={() => setSelectedId(ex.id)}
                className={`mb-1 w-full rounded-lg px-3 py-3 text-left transition-colors ${
                  selectedId === ex.id
                    ? "bg-panel text-ink"
                    : "text-inkDim hover:bg-panel/60"
                }`}
              >
                <div className="text-sm font-500">{ex.name}</div>
                <div className="text-xs text-inkDim">{ex.equipment}</div>
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Center: 3D viewer */}
      <section className="relative border-r border-line">
        <div className="absolute left-6 top-6 z-10">
          <h2 className="font-display text-2xl font-600">{selected.name}</h2>
          <p className="text-sm text-inkDim">{selected.equipment}</p>
        </div>
        <ExerciseViewer exercise={selected} />
      </section>

      {/* Right: muscle targets, form, plan */}
      <aside className="flex flex-col overflow-y-auto">
        <div className="border-b border-line px-5 py-5">
          <h3 className="text-sm text-inkDim">Muscles targeted</h3>
          <div className="mt-2 flex flex-wrap gap-2">
            {selected.muscles.map((m) => (
              <span
                key={m}
                className="rounded-full border border-signalDim px-3 py-1 text-xs text-signal"
              >
                {m}
              </span>
            ))}
          </div>
        </div>

        <div className="border-b border-line px-5 py-5">
          <h3 className="text-sm text-inkDim">Proper form</h3>
          <ol className="mt-2 space-y-2 text-sm">
            {selected.steps.map((step, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-signal">{i + 1}.</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="border-b border-line px-5 py-5">
          <h3 className="text-sm text-inkDim">Common mistakes</h3>
          <ul className="mt-2 space-y-2 text-sm text-warn">
            {selected.commonMistakes.map((m, i) => (
              <li key={i}>{m}</li>
            ))}
          </ul>
        </div>

        <div className="px-5 py-5">
          <button
            onClick={() => togglePlan(selected.id)}
            className={`w-full rounded-lg border px-4 py-2 text-sm transition-colors ${
              inPlan
                ? "border-signal bg-signal/10 text-signal"
                : "border-line text-ink hover:border-signal hover:text-signal"
            }`}
          >
            {inPlan ? "Remove from today's plan" : "Add to today's plan"}
          </button>

          {plan.length > 0 && (
            <div className="mt-5">
              <h3 className="text-sm text-inkDim">Today&apos;s plan</h3>
              <ul className="mt-2 space-y-1 text-sm">
                {plan.map((id) => {
                  const ex = exercises.find((e) => e.id === id);
                  return ex ? <li key={id}>{ex.name}</li> : null;
                })}
              </ul>
            </div>
          )}
        </div>
      </aside>
    </main>
  );
}
