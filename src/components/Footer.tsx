import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border/60 px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 text-sm text-muted sm:flex-row sm:justify-between">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}.
        </p>
        <div className="flex items-center gap-4">
          <Link
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-8 w-8 items-center justify-center rounded-lg transition-colors hover:bg-surface hover:text-foreground"
          >
            <FaGithub className="h-4 w-4" />
          </Link>
          <Link
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-8 w-8 items-center justify-center rounded-lg transition-colors hover:bg-surface hover:text-foreground"
          >
            <FaLinkedin className="h-4 w-4" />
          </Link>
          <Link
            href="#top"
            aria-label="Back to top"
            className="flex h-8 w-8 items-center justify-center rounded-lg transition-colors hover:bg-surface hover:text-foreground"
          >
            <ArrowUp className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
