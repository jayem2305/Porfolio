"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { profile } from "@/lib/data";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#coursework", label: "Coursework" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-[3px] border-foreground bg-background/90 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="#top"
          onClick={() => setOpen(false)}
          className="font-heading text-lg font-extrabold tracking-tight"
        >
          {profile.name.split(" ")[0]}{" "}
          <span className="text-muted">
            {profile.name.split(" ").slice(1).join(" ")}
          </span>
        </Link>

        <div className="hidden items-center gap-6 sm:flex">
          <ul className="flex items-center gap-6 text-sm font-bold text-muted">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-3 sm:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="cartoon-pop-sm flex h-9 w-9 items-center justify-center rounded-xl border-2 border-foreground bg-surface"
          >
            {open ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t-[3px] border-foreground bg-background sm:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4 text-sm font-bold text-muted">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-2 py-2 transition-colors hover:bg-surface hover:text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
