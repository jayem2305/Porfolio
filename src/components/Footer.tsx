import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t-4 border-dashed border-border px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 text-sm font-semibold text-muted sm:flex-row sm:justify-between">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}.
        </p>
        <div className="flex items-center gap-3">
          <Link
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="cartoon-pop-sm flex h-9 w-9 items-center justify-center rounded-xl border-2 border-foreground bg-surface transition-colors hover:text-accent"
          >
            <FaGithub className="h-4 w-4" />
          </Link>
          <Link
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="cartoon-pop-sm flex h-9 w-9 items-center justify-center rounded-xl border-2 border-foreground bg-surface transition-colors hover:text-accent"
          >
            <FaLinkedin className="h-4 w-4" />
          </Link>
          <Link
            href="#top"
            aria-label="Back to top"
            className="cartoon-pop-sm flex h-9 w-9 items-center justify-center rounded-xl border-2 border-foreground bg-surface transition-colors hover:text-accent"
          >
            <ArrowUp className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
