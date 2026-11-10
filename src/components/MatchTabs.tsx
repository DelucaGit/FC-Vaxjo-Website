"use client";

import { useRef, useState } from "react";
import { MatchList } from "@/components/MatchList";
import type { ClubMatch } from "@/data/matches";

type TabKey = "upcoming" | "completed";

const MATCHES_PER_PAGE = 8;

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
  const [page, setPage] = useState(1);
  const rootRef = useRef<HTMLDivElement>(null);

  const activeMatches = activeTab === "upcoming" ? upcoming : completed;
  const totalPages = Math.max(1, Math.ceil(activeMatches.length / MATCHES_PER_PAGE));
  const currentPage = Math.min(page, totalPages);
  const pageMatches = activeMatches.slice(
    (currentPage - 1) * MATCHES_PER_PAGE,
    currentPage * MATCHES_PER_PAGE
  );

  function selectTab(tab: TabKey) {
    setActiveTab(tab);
    setPage(1);
  }

  function goToPage(nextPage: number) {
    setPage(nextPage);
    rootRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div ref={rootRef} className="scroll-mt-24">
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
          onClick={() => selectTab("upcoming")}
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
          onClick={() => selectTab("completed")}
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

      <div
        id={`panel-${activeTab}`}
        role="tabpanel"
        aria-labelledby={`tab-${activeTab}`}
        className="mt-6"
      >
        <MatchList
          matches={pageMatches}
          emptyMessage={
            activeTab === "upcoming"
              ? "Inga kommande matcher är inlagda just nu."
              : "Inga färdigspelade matcher är registrerade ännu. Resultaten visas här så fort matcherna är färdigspelade."
          }
        />

        {totalPages > 1 ? (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={goToPage}
          />
        ) : null}
      </div>
    </div>
  );
}

function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) {
  const buttonClass =
    "inline-flex items-center gap-1.5 rounded-md border border-stone-300 bg-white px-3 py-2.5 text-xs font-semibold uppercase tracking-wider text-stone-700 transition-colors sm:px-4 sm:text-sm hover:border-crimson hover:text-crimson disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-stone-300 disabled:hover:text-stone-700";

  return (
    <nav
      aria-label="Bläddra bland matcher"
      className="mt-6 flex items-center justify-between gap-3"
    >
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage <= 1}
        className={buttonClass}
      >
        <span aria-hidden="true">←</span>
        <span>Föregående</span>
      </button>

      <p className="text-center text-xs font-semibold uppercase tracking-wider text-stone-600 sm:text-sm" aria-live="polite">
        Sida {currentPage} av {totalPages}
      </p>

      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
        className={buttonClass}
      >
        <span>Nästa</span>
        <span aria-hidden="true">→</span>
      </button>
    </nav>
  );
}
