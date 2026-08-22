import Link from "next/link";
import { profile } from "@/lib/data";
import Reveal from "@/components/Reveal";

const links = [
  { label: "Email", href: `mailto:${profile.email}`, value: profile.email },
  { label: "GitHub", href: profile.github, value: "github.com/jayem2305" },
  {
    label: "LinkedIn",
    href: profile.linkedin,
    value: "linkedin.com/in/jhon-mark-enrique",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-5xl border-t border-border/60 px-6 py-16 sm:py-24"
    >
      <Reveal>
        <div className="relative overflow-hidden rounded-2xl border border-border bg-surface px-6 py-12 sm:px-12">
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent/15 blur-3xl"
            aria-hidden
          />
          <div className="relative">
            <h2 className="flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-accent">
              <span className="font-mono text-xs text-muted">03</span>
              Contact
            </h2>
            <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Let&apos;s build something together.
            </h3>
            <p className="mt-4 max-w-xl text-lg text-muted">
              Have a project in mind or an opportunity to discuss? I&apos;d
              love to hear from you.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="flex items-center gap-2 rounded-lg border border-border bg-background px-5 py-3 transition-colors hover:border-accent/40 hover:bg-surface-hover"
                >
                  <span className="text-sm font-medium text-muted">
                    {link.label}
                  </span>
                  <span className="text-sm text-foreground">
                    {link.value}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
