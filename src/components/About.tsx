import { skills } from "@/lib/data";

export default function About() {
  return (
    <section
      id="about"
      className="section-fade mx-auto max-w-5xl px-6 py-16 sm:py-20"
    >
      <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">
        About
      </h2>
      <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted">
        I work across the stack, from designing databases and APIs to
        shipping the interfaces people actually use. My background spans
        corporate systems, government/community platforms, e-commerce, and
        mobile apps — I like taking a messy real-world process and turning it
        into something simple to use.
      </p>

      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        <div>
          <h3 className="mb-3 text-sm font-semibold text-foreground">
            Main stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {skills.main.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-sm text-accent"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-semibold text-foreground">
            Also familiar with
          </h3>
          <div className="flex flex-wrap gap-2">
            {skills.familiar.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-border bg-surface px-3 py-1 text-sm text-muted"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
