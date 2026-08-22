"use client";

import { useEffect, useRef, useState } from "react";

type Burst = { id: number; x: number; y: number };

const SPARK_COUNT = 8;
const SPARK_COLORS = ["#8b5cf6", "#fb923c", "#3b82f6", "#ec4899"];

export default function ClickRipple() {
  const [bursts, setBursts] = useState<Burst[]>([]);
  const counter = useRef(0);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const id = counter.current++;
      setBursts((prev) => [...prev, { id, x: e.clientX, y: e.clientY }]);
      window.setTimeout(() => {
        setBursts((prev) => prev.filter((b) => b.id !== id));
      }, 500);
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-100" aria-hidden>
      {bursts.map((burst) =>
        Array.from({ length: SPARK_COUNT }).map((_, i) => {
          const angle = (360 / SPARK_COUNT) * i;
          return (
            <span
              key={`${burst.id}-${i}`}
              className="spark-wrap"
              style={{
                left: burst.x,
                top: burst.y,
                transform: `rotate(${angle}deg)`,
              }}
            >
              <span
                className="spark-line"
                style={{
                  background: SPARK_COLORS[i % SPARK_COLORS.length],
                }}
              />
            </span>
          );
        }),
      )}
    </div>
  );
}
