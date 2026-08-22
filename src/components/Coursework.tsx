import { Briefcase, Clock } from "lucide-react";
import { coursework } from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function Coursework() {
  return (
    <section
      id="coursework"
      className="mx-auto max-w-5xl border-t-4 border-dashed border-border px-6 py-16 sm:py-20"
    >
      <Reveal>
        <h2 className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-accent">
          <span className="font-mono text-xs text-muted">03</span>
          Coursework &amp; Algorithms
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          Academic simulations and research exploring core computer science
          concepts.
        </p>
      </Reveal>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {coursework.map((item, index) => (
          <Reveal key={item.name} delay={index * 80}>
            <div className="cartoon-pop-sm flex h-full flex-col gap-2 rounded-2xl border-2 border-foreground bg-surface p-5">
              <span className="w-fit rounded-full border-2 border-foreground bg-accent-secondary px-2.5 py-0.5 text-xs font-bold text-white">
                {item.topic}
              </span>
              <h3 className="text-base font-bold">{item.name}</h3>
              <div className="flex flex-col gap-1 text-xs font-bold text-muted">
                <span className="flex items-center gap-1.5">
                  <Briefcase className="h-3.5 w-3.5 shrink-0" />
                  {item.role}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 shrink-0" />
                  {item.timeline}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-muted">
                {item.description}
              </p>
              {item.highlights && (
                <ul className="mt-auto space-y-1.5 pt-1 text-sm text-muted">
                  {item.highlights.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="text-accent">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
