"use client";

import { useState } from "react";
import { MatchList } from "@/components/MatchList";
import type { ClubMatch } from "@/data/matches";

type TabKey = "upcoming" | "completed";

export function MatchTabs({
  upcoming,
  completed,
}: {
  upcoming: ClubMatch[];
  completed: ClubMatch[];
}) {
  const [activeTab, setActiveTab] = useState<TabKey>(
    upcoming.length === 0 && completed.length > 0 ? "completed" : "upcoming"
  );

  return (
    <div>
      <div
        role="tablist"
        aria-label="Välj matchvy"
        className="flex flex-wrap gap-3 border-b border-stone-200 pb-4"
      >
        <button
          type="button"
          role="tab"
          id="tab-upcoming"
          aria-selected={activeTab === "upcoming"}
          aria-controls="panel-upcoming"
          onClick={() => setActiveTab("upcoming")}
          className={`inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-semibold uppercase tracking-wider transition-colors ${
            activeTab === "upcoming"
              ? "bg-crimson text-white"
              : "border border-stone-300 bg-white text-stone-700 hover:border-crimson hover:text-crimson"
          }`}
        >
          <span>Kommande matcher</span>
          <span
            className={`rounded-full px-2 py-0.5 text-xs ${
              activeTab === "upcoming"
                ? "bg-white/20 text-white"
                : "bg-stone-100 text-stone-700"
            }`}
          >
            {upcoming.length}
          </span>
        </button>

        <button
          type="button"
          role="tab"
          id="tab-completed"
          aria-selected={activeTab === "completed"}
          aria-controls="panel-completed"
          onClick={() => setActiveTab("completed")}
          className={`inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-semibold uppercase tracking-wider transition-colors ${
            activeTab === "completed"
              ? "bg-crimson text-white"
              : "border border-stone-300 bg-white text-stone-700 hover:border-crimson hover:text-crimson"
          }`}
        >
          <span>Spelade matcher & resultat</span>
          <span
            className={`rounded-full px-2 py-0.5 text-xs ${
              activeTab === "completed"
                ? "bg-white/20 text-white"
                : "bg-stone-100 text-stone-700"
            }`}
          >
            {completed.length}
          </span>
        </button>
      </div>

      {activeTab === "upcoming" ? (
        <div
          id="panel-upcoming"
          role="tabpanel"
          aria-labelledby="tab-upcoming"
          className="mt-6"
        >
          <MatchList
            matches={upcoming}
            emptyMessage="Inga kommande matcher är inlagda just nu."
          />
        </div>
      ) : (
        <div
          id="panel-completed"
          role="tabpanel"
          aria-labelledby="tab-completed"
          className="mt-6"
        >
          <MatchList
            matches={completed}
            emptyMessage="Inga färdigspelade matcher är registrerade ännu. Resultaten visas här så fort matcherna är färdigspelade."
          />
        </div>
      )}
    </div>
  );
}
