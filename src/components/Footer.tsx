import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border/60 px-6 py-8 text-center text-sm text-muted">
      <p>
        &copy; {new Date().getFullYear()} {profile.name}. Built with Next.js
        and Tailwind CSS.
      </p>
    </footer>
  );
}
