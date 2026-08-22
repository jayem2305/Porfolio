import { skills } from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-5xl border-t border-border/60 px-6 py-16 sm:py-20"
    >
      <Reveal>
        <h2 className="flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-accent">
          <span className="font-mono text-xs text-muted">01</span>
          About
        </h2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted">
          I work across the stack, from designing databases and APIs to
          shipping the interfaces people actually use. My background spans
          corporate systems, government/community platforms, e-commerce, and
          mobile apps — I like taking a messy real-world process and turning
          it into something simple to use.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        <Reveal delay={100}>
          <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Main stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {skills.main.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-sm text-accent-strong transition-colors hover:bg-accent/20 dark:text-accent"
              >
                {skill}
              </span>
            ))}
          </div>
        </Reveal>
        <Reveal delay={200}>
          <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-muted" />
            Also familiar with
          </h3>
          <div className="flex flex-wrap gap-2">
            {skills.familiar.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-border bg-surface px-3 py-1 text-sm text-muted transition-colors hover:bg-surface-hover"
              >
                {skill}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
