import { projects, type Project } from "@/lib/data";

const categoryStyles: Record<Project["category"], string> = {
  Work: "border-blue-400/30 bg-blue-400/10 text-blue-300",
  Personal: "border-accent/30 bg-accent/10 text-accent",
  Academic: "border-amber-400/30 bg-amber-400/10 text-amber-300",
  Mobile: "border-purple-400/30 bg-purple-400/10 text-purple-300",
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-fade mx-auto max-w-5xl px-6 py-16 sm:py-20"
    >
      <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">
        Projects
      </h2>
      <p className="mt-4 max-w-2xl text-lg text-muted">
        A mix of work, personal, and academic projects — from full platforms
        to focused mobile companions.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.name}
            className="flex flex-col gap-4 rounded-xl border border-border bg-surface p-6 transition-colors hover:bg-surface-hover"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-lg font-semibold">{project.name}</h3>
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
          </article>
        ))}
      </div>
    </section>
  );
}
