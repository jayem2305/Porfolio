import Link from "next/link";
import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="top"
      className="section-fade mx-auto flex max-w-5xl flex-col items-start gap-6 px-6 pb-20 pt-16 sm:pt-24"
    >
      <p className="rounded-full border border-border bg-surface px-4 py-1 text-sm text-muted">
        Available for new opportunities
      </p>
      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
        Hi, I&apos;m <span className="glow-text">{profile.name}</span>
      </h1>
      <h2 className="text-xl font-medium text-muted sm:text-2xl">
        {profile.title}
      </h2>
      <p className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
        {profile.tagline}
      </p>
      <div className="flex flex-wrap gap-4 pt-2">
        <Link
          href="#projects"
          className="rounded-lg bg-accent px-5 py-2.5 font-medium text-black transition-colors hover:bg-accent-strong"
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
    </section>
  );
}
