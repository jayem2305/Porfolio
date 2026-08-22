import { skills } from "@/lib/data";
import { skillIcons } from "@/lib/icons";
import Reveal from "@/components/Reveal";

function SkillChip({
  skill,
  variant,
}: {
  skill: string;
  variant: "main" | "familiar";
}) {
  const Icon = skillIcons[skill];
  const isMain = variant === "main";

  return (
    <span
      className={
        isMain
          ? "cartoon-pop-sm flex items-center gap-2 rounded-full border-2 border-foreground bg-accent px-3.5 py-1.5 text-sm font-bold text-white"
          : "cartoon-pop-sm flex items-center gap-2 rounded-full border-2 border-foreground bg-surface px-3.5 py-1.5 text-sm font-bold text-foreground"
      }
    >
      {Icon && <Icon className="h-4 w-4" />}
      {skill}
    </span>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-5xl border-t-4 border-dashed border-border px-6 py-16 sm:py-20"
    >
      <Reveal>
        <h2 className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-accent">
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
          <h3 className="mb-3 flex items-center gap-2 text-sm font-bold text-foreground">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Main stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {skills.main.map((skill) => (
              <SkillChip key={skill} skill={skill} variant="main" />
            ))}
          </div>
        </Reveal>
        <Reveal delay={200}>
          <h3 className="mb-3 flex items-center gap-2 text-sm font-bold text-foreground">
            <span className="h-2 w-2 rounded-full bg-accent-secondary" />
            Also familiar with
          </h3>
          <div className="flex flex-wrap gap-2">
            {skills.familiar.map((skill) => (
              <SkillChip key={skill} skill={skill} variant="familiar" />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
