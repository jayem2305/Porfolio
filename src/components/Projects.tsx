"use client";

import { useMemo, useState } from "react";
import { Briefcase, Clock } from "lucide-react";
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

const categoryBorder: Record<Project["category"], string> = {
  Work: "border-blue-500",
  Personal: "border-accent",
  Academic: "border-amber-500",
  Mobile: "border-pink-500",
};

const categoryBadge: Record<Project["category"], string> = {
  Work: "bg-blue-500",
  Personal: "bg-accent",
  Academic: "bg-amber-500",
  Mobile: "bg-pink-500",
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
      className="mx-auto max-w-5xl border-t-4 border-dashed border-border px-6 py-16 sm:py-20"
    >
      <Reveal>
        <h2 className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-accent">
          <span className="font-mono text-xs text-muted">02</span>
          Projects
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          A mix of work, personal, and academic projects — from full
          platforms to focused mobile companions.
        </p>

        <div className="mt-6 flex flex-wrap gap-2.5">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              className={`cartoon-pop-sm rounded-full border-2 border-foreground px-4 py-1.5 text-sm font-bold transition-colors ${
                active === category
                  ? "bg-accent text-white"
                  : "bg-surface text-foreground hover:bg-surface-hover"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="mt-10 grid gap-7 sm:grid-cols-2">
        {filtered.map((project, index) => {
          const Icon = categoryIcons[project.category];
          return (
            <Reveal key={project.name} delay={index * 80}>
              <div
                style={{ transform: `rotate(${index % 2 === 0 ? "-0.6deg" : "0.6deg"})` }}
              >
                <SpotlightCard
                  className={`cartoon-pop flex h-full flex-col gap-4 rounded-3xl border-[3px] bg-surface p-6 ${categoryBorder[project.category]}`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <span
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border-2 border-foreground text-white ${categoryBadge[project.category]}`}
                      >
                        <Icon className="h-5 w-5" />
                      </span>
                      <h3 className="pt-1.5 text-lg font-bold">
                        {project.name}
                      </h3>
                    </div>
                    <span
                      className={`shrink-0 rounded-full border-2 border-foreground px-2.5 py-0.5 text-xs font-bold text-white ${categoryBadge[project.category]}`}
                    >
                      {project.category}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1 text-xs font-bold text-muted">
                    <span className="flex items-center gap-1.5">
                      <Briefcase className="h-3.5 w-3.5 shrink-0" />
                      {project.role}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 shrink-0" />
                      {project.timeline}
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
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
