import Link from "next/link";
import { profile, skills, projects } from "@/lib/data";

const stats = [
  { label: "Projects shipped", value: `${projects.length}+` },
  { label: "Core technologies", value: `${skills.main.length}` },
  {
    label: "Project categories",
    value: `${new Set(projects.map((p) => p.category)).size}`,
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function Hero() {
  return (
    <section
      id="top"
      className="section-fade relative overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid" aria-hidden />
      <div
        className="pointer-events-none absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-accent/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-0 right-1/4 h-72 w-72 rounded-full bg-accent-secondary/20 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-5xl gap-12 px-6 pb-20 pt-16 sm:pt-24 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div className="flex flex-col items-start gap-6">
          <div className="flex items-center gap-4">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-accent to-accent-secondary text-lg font-bold text-white shadow-lg shadow-accent/20">
              {initials(profile.name)}
            </span>
            <p className="flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1 text-sm text-muted">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Available for new opportunities
            </p>
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Hi, I&apos;m <span className="glow-text">{profile.name}</span>
          </h1>
          <h2 className="text-xl font-medium text-muted sm:text-2xl">
            {profile.title}
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {profile.tagline}
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="#projects"
              className="rounded-lg bg-accent px-5 py-2.5 font-medium text-background transition-colors hover:bg-accent-strong"
            >
              View my work
            </Link>
            <Link
              href="#contact"
              className="rounded-lg border border-border px-5 py-2.5 font-medium transition-colors hover:bg-surface"
            >
              Get in touch
            </Link>
          </div>

          <div className="mt-4 flex flex-wrap gap-8 border-t border-border/60 pt-6">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-foreground">
                  {stat.value}
                </p>
                <p className="text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="rounded-xl border border-border bg-surface/80 shadow-2xl shadow-black/10 backdrop-blur">
            <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
              <span className="ml-2 text-xs text-muted">profile.ts</span>
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-sm leading-relaxed">
              <code>
                <span className="text-accent-secondary">const</span>{" "}
                <span className="text-foreground">developer</span> = {"{"}
                {"\n"}
                {"  "}name:{" "}
                <span className="text-accent">
                  &quot;{profile.name}&quot;
                </span>
                ,{"\n"}
                {"  "}role: <span className="text-accent">&quot;{profile.title}&quot;</span>,
                {"\n"}
                {"  "}stack: [
                {"\n"}
                {skills.main.map((skill) => (
                  <span key={skill}>
                    {"    "}
                    <span className="text-accent">&quot;{skill}&quot;</span>,
                    {"\n"}
                  </span>
                ))}
                {"  "}],
                {"\n"}
                {"  "}shipping: <span className="text-accent-secondary">true</span>,
                {"\n"}
                {"}"};
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
