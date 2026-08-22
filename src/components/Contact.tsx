import Link from "next/link";
import { Mail, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "@/lib/data";
import Reveal from "@/components/Reveal";
import SpotlightCard from "@/components/SpotlightCard";

const links = [
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    value: profile.email,
    icon: Mail,
  },
  {
    label: "GitHub",
    href: profile.github,
    value: "github.com/jayem2305",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: profile.linkedin,
    value: "linkedin.com/in/jhon-mark-enrique",
    icon: FaLinkedin,
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

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {links.map((link) => (
                <SpotlightCard key={link.label} className="rounded-lg">
                  <Link
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group flex h-full flex-col gap-3 rounded-lg border border-border bg-background px-5 py-4 transition-colors hover:border-accent/40 hover:bg-surface-hover"
                  >
                    <div className="flex items-center justify-between">
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent-strong dark:text-accent">
                        <link.icon className="h-4.5 w-4.5" />
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-muted opacity-0 transition-opacity group-hover:opacity-100" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted">
                        {link.label}
                      </p>
                      <p className="truncate text-sm text-foreground">
                        {link.value}
                      </p>
                    </div>
                  </Link>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
