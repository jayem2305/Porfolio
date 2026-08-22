"use client";

import { useEffect, useRef } from "react";

const CELL = 28;
const TICK_MS = 220;
const GHOST_COLORS = ["#ff3b3b", "#ffb8ff", "#00e1ff", "#ffb851"];

type Dir = "up" | "down" | "left" | "right" | null;

const DELTAS: Record<Exclude<Dir, null>, [number, number]> = {
  up: [0, -1],
  down: [0, 1],
  left: [-1, 0],
  right: [1, 0],
};

const OPPOSITE: Record<Exclude<Dir, null>, Exclude<Dir, null>> = {
  up: "down",
  down: "up",
  left: "right",
  right: "left",
};

type Entity = {
  col: number;
  row: number;
  fromCol: number;
  fromRow: number;
  dir: Dir;
  tickStart: number;
  color: string;
  chase: boolean;
};

export default function PacmanGameBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvasMaybe = canvasRef.current;
    if (!canvasMaybe) return;
    const ctxMaybe = canvasMaybe.getContext("2d");
    if (!ctxMaybe) return;
    const canvas: HTMLCanvasElement = canvasMaybe;
    const ctx: CanvasRenderingContext2D = ctxMaybe;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let cols = 0;
    let rows = 0;
    let dotsEaten: boolean[][] = [];
    let totalDots = 0;
    let eatenCount = 0;
    let pacman: Entity;
    let ghosts: Entity[] = [];
    let tickTimer: number | undefined;
    let rafId: number;
    let dpr = 1;

    function isWall(col: number, row: number) {
      if (col < 0 || row < 0 || col >= cols || row >= rows) return true;
      return col % 2 === 0 && row % 2 === 0;
    }

    function validDirs(col: number, row: number): Exclude<Dir, null>[] {
      return (Object.keys(DELTAS) as Exclude<Dir, null>[]).filter((dir) => {
        const [dx, dy] = DELTAS[dir];
        return !isWall(col + dx, row + dy);
      });
    }

    function chooseDir(entity: Entity): Exclude<Dir, null> {
      const options = validDirs(entity.col, entity.row);
      const reverse = entity.dir ? OPPOSITE[entity.dir] : null;
      const filtered = options.filter((d) => d !== reverse);
      const pool = filtered.length > 0 ? filtered : options;

      if (entity.chase) {
        const target = pacman;
        if (Math.random() < 0.65) {
          let best = pool[0];
          let bestDist = Infinity;
          for (const dir of pool) {
            const [dx, dy] = DELTAS[dir];
            const dist =
              Math.abs(entity.col + dx - target.col) +
              Math.abs(entity.row + dy - target.row);
            if (dist < bestDist) {
              bestDist = dist;
              best = dir;
            }
          }
          return best;
        }
        return pool[Math.floor(Math.random() * pool.length)];
      }

      if (entity.dir && pool.includes(entity.dir) && Math.random() < 0.6) {
        return entity.dir;
      }
      return pool[Math.floor(Math.random() * pool.length)];
    }

    function stepEntity(entity: Entity, now: number) {
      const dir = chooseDir(entity);
      const [dx, dy] = DELTAS[dir];
      entity.fromCol = entity.col;
      entity.fromRow = entity.row;
      entity.col += dx;
      entity.row += dy;
      entity.dir = dir;
      entity.tickStart = now;

      if (entity === pacman) {
        if (!dotsEaten[entity.row][entity.col]) {
          dotsEaten[entity.row][entity.col] = true;
          eatenCount++;
          if (eatenCount >= totalDots) {
            dotsEaten = dotsEaten.map((row) => row.map(() => false));
            eatenCount = 0;
          }
        }
      }
    }

    function findOpenCell(): [number, number] {
      for (let r = 1; r < rows; r += 1) {
        for (let c = 1; c < cols; c += 1) {
          if (!isWall(c, r)) return [c, r];
        }
      }
      return [1, 1];
    }

    function setup() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      cols = Math.ceil(width / CELL) + 1;
      rows = Math.ceil(height / CELL) + 1;

      dotsEaten = Array.from({ length: rows }, () =>
        Array.from({ length: cols }, () => false),
      );
      totalDots = 0;
      for (let r = 0; r < rows; r += 1) {
        for (let c = 0; c < cols; c += 1) {
          if (!isWall(c, r)) totalDots++;
        }
      }
      eatenCount = 0;

      const [pc, pr] = findOpenCell();
      const now = performance.now();
      pacman = {
        col: pc,
        row: pr,
        fromCol: pc,
        fromRow: pr,
        dir: "right",
        tickStart: now,
        color: "#ffd400",
        chase: false,
      };

      ghosts = GHOST_COLORS.map((color, i) => {
        const gc = Math.min(cols - 2, pc + 3 + i * 2);
        const gr = Math.min(rows - 2, pr + (i % 2 === 0 ? 2 : -2));
        const col = isWall(gc, gr) ? pc : gc;
        const row = isWall(col, gr) ? pr : gr;
        return {
          col,
          row,
          fromCol: col,
          fromRow: row,
          dir: "left" as Dir,
          tickStart: now,
          color,
          chase: i === 0,
        };
      });
    }

    function tick() {
      const now = performance.now();
      stepEntity(pacman, now);
      ghosts.forEach((g) => stepEntity(g, now));
    }

    function lerp(a: number, b: number, t: number) {
      return a + (b - a) * t;
    }

    function drawGhost(entity: Entity, x: number, y: number) {
      const r = CELL * 0.4;
      ctx.fillStyle = entity.color;
      ctx.beginPath();
      ctx.arc(x, y - r * 0.1, r, Math.PI, 0, false);
      ctx.lineTo(x + r, y + r * 0.7);
      const humps = 3;
      for (let i = 0; i < humps; i += 1) {
        const hx = x + r - ((2 * r) / humps) * (i + 0.5);
        const hy = i % 2 === 0 ? y + r * 0.9 : y + r * 0.5;
        ctx.quadraticCurveTo(
          x + r - ((2 * r) / humps) * i,
          y + r * 0.5,
          hx,
          hy,
        );
      }
      ctx.lineTo(x - r, y + r * 0.7);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = "#ffffff";
      ctx.beginPath();
      ctx.arc(x - r * 0.35, y - r * 0.2, r * 0.28, 0, Math.PI * 2);
      ctx.arc(x + r * 0.35, y - r * 0.2, r * 0.28, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#1f2937";
      ctx.beginPath();
      ctx.arc(x - r * 0.28, y - r * 0.2, r * 0.13, 0, Math.PI * 2);
      ctx.arc(x + r * 0.42, y - r * 0.2, r * 0.13, 0, Math.PI * 2);
      ctx.fill();
    }

    function drawPacman(x: number, y: number, now: number) {
      const r = CELL * 0.42;
      const mouth = (Math.sin(now / 130) + 1) * 0.5 * 0.28 + 0.02;
      const angleByDir: Record<Exclude<Dir, null>, number> = {
        right: 0,
        down: Math.PI / 2,
        left: Math.PI,
        up: -Math.PI / 2,
      };
      const base = angleByDir[pacman.dir ?? "right"];
      ctx.fillStyle = "#ffd400";
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.arc(
        x,
        y,
        r,
        base + mouth * Math.PI,
        base - mouth * Math.PI + Math.PI * 2,
      );
      ctx.closePath();
      ctx.fill();
    }

    function render(now: number) {
      const width = canvas.width / dpr;
      const height = canvas.height / dpr;
      ctx.clearRect(0, 0, width, height);

      ctx.fillStyle = "rgba(255, 212, 0, 0.32)";
      for (let r = 0; r < rows; r += 1) {
        for (let c = 0; c < cols; c += 1) {
          if (!isWall(c, r) && !dotsEaten[r][c]) {
            ctx.beginPath();
            ctx.arc(c * CELL + CELL / 2, r * CELL + CELL / 2, 2, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      const allEntities = [...ghosts, pacman];
      for (const entity of allEntities) {
        const progress = reduceMotion
          ? 1
          : Math.min(1, (now - entity.tickStart) / TICK_MS);
        const x =
          lerp(entity.fromCol, entity.col, progress) * CELL + CELL / 2;
        const y =
          lerp(entity.fromRow, entity.row, progress) * CELL + CELL / 2;
        if (entity === pacman) {
          drawPacman(x, y, now);
        } else {
          drawGhost(entity, x, y);
        }
      }
    }

    function loop(now: number) {
      render(now);
      rafId = requestAnimationFrame(loop);
    }

    setup();

    if (!reduceMotion) {
      tick();
      tickTimer = window.setInterval(tick, TICK_MS);
      rafId = requestAnimationFrame(loop);
    } else {
      render(performance.now());
    }

    function handleResize() {
      setup();
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (tickTimer) window.clearInterval(tickTimer);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pacman-layer"
      aria-hidden
    />
  );
}
