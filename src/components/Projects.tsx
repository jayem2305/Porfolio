"use client";

import { useMemo, useState } from "react";
import { projects, type Project } from "@/lib/data";
import { categoryIcons } from "@/lib/icons";
import Reveal from "@/components/Reveal";
import SpotlightCard from "@/components/SpotlightCard";

const categories: Array<Project["category"] | "All"> = [
  "All",
  "Work",
  "Personal",
  "Academic",
  "Mobile",
];

const categoryStyles: Record<Project["category"], string> = {
  Work: "border-blue-500/30 bg-blue-500/10 text-blue-700 dark:border-blue-400/30 dark:bg-blue-400/10 dark:text-blue-300",
  Personal: "border-accent/30 bg-accent/10 text-accent-strong dark:text-accent",
  Academic:
    "border-amber-500/30 bg-amber-500/10 text-amber-700 dark:border-amber-400/30 dark:bg-amber-400/10 dark:text-amber-300",
  Mobile:
    "border-purple-500/30 bg-purple-500/10 text-purple-700 dark:border-purple-400/30 dark:bg-purple-400/10 dark:text-purple-300",
};

const categoryTile: Record<Project["category"], string> = {
  Work: "bg-blue-500/15 text-blue-600 dark:text-blue-300",
  Personal: "bg-accent/15 text-accent-strong dark:text-accent",
  Academic: "bg-amber-500/15 text-amber-600 dark:text-amber-300",
  Mobile: "bg-purple-500/15 text-purple-600 dark:text-purple-300",
};

const categoryBar: Record<Project["category"], string> = {
  Work: "from-blue-500 to-blue-400",
  Personal: "from-accent to-accent-strong",
  Academic: "from-amber-500 to-amber-400",
  Mobile: "from-purple-500 to-purple-400",
};

export default function Projects() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");

  const filtered = useMemo(
    () =>
      active === "All"
        ? projects
        : projects.filter((project) => project.category === active),
    [active],
  );

  return (
    <section
      id="projects"
      className="mx-auto max-w-5xl border-t border-border/60 px-6 py-16 sm:py-20"
    >
      <Reveal>
        <h2 className="flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-accent">
          <span className="font-mono text-xs text-muted">02</span>
          Projects
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          A mix of work, personal, and academic projects — from full
          platforms to focused mobile companions.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                active === category
                  ? "border-accent bg-accent text-background"
                  : "border-border bg-surface text-muted hover:bg-surface-hover hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {filtered.map((project, index) => {
          const Icon = categoryIcons[project.category];
          return (
            <Reveal key={project.name} delay={index * 80}>
              <SpotlightCard className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-black/5">
                <span
                  className={`absolute inset-x-0 top-0 h-1 bg-linear-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${categoryBar[project.category]}`}
                  aria-hidden
                />
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${categoryTile[project.category]}`}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="pt-1.5 text-lg font-semibold">
                      {project.name}
                    </h3>
                  </div>
                  <span
                    className={`shrink-0 rounded-full border px-2.5 py-0.5 text-xs font-medium ${categoryStyles[project.category]}`}
                  >
                    {project.category}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
                <ul className="mt-auto space-y-1.5 text-sm text-muted">
                  {project.highlights.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="text-accent">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
