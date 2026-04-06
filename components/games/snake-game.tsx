"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const CELL = 20;
const COLS = 20;
const ROWS = 16;
const W = COLS * CELL;
const H = ROWS * CELL;

type Dir = "UP" | "DOWN" | "LEFT" | "RIGHT";
type Point = { x: number; y: number };

function rand() {
  return { x: Math.floor(Math.random() * COLS), y: Math.floor(Math.random() * ROWS) };
}

export function SnakeGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef({
    snake: [{ x: 10, y: 8 }, { x: 9, y: 8 }, { x: 8, y: 8 }] as Point[],
    dir: "RIGHT" as Dir,
    nextDir: "RIGHT" as Dir,
    food: { x: 15, y: 8 } as Point,
    score: 0,
    running: false,
    dead: false,
  });
  const loopRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [score, setScore] = useState(0);
  const [started, setStarted] = useState(false);
  const [dead, setDead] = useState(false);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const s = stateRef.current;

    // Background
    ctx.fillStyle = "#0a0a0a";
    ctx.fillRect(0, 0, W, H);

    // Grid dots
    ctx.fillStyle = "#1a1a1a";
    for (let x = 0; x < COLS; x++) {
      for (let y = 0; y < ROWS; y++) {
        ctx.fillRect(x * CELL + CELL / 2 - 1, y * CELL + CELL / 2 - 1, 2, 2);
      }
    }

    // Food
    ctx.fillStyle = "#0B9444";
    ctx.shadowColor = "#0B9444";
    ctx.shadowBlur = 8;
    ctx.beginPath();
    ctx.arc(s.food.x * CELL + CELL / 2, s.food.y * CELL + CELL / 2, CELL / 2 - 3, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;

    // Snake
    s.snake.forEach((seg, i) => {
      const alpha = i === 0 ? 1 : 0.5 + 0.5 * ((s.snake.length - i) / s.snake.length);
      ctx.fillStyle = i === 0 ? "#0B9444" : `rgba(11,148,68,${alpha})`;
      ctx.fillRect(seg.x * CELL + 1, seg.y * CELL + 1, CELL - 2, CELL - 2);
      if (i === 0) {
        // Eyes
        ctx.fillStyle = "#000";
        const ex = s.dir === "LEFT" ? -3 : s.dir === "RIGHT" ? 3 : 0;
        const ey = s.dir === "UP" ? -3 : s.dir === "DOWN" ? 3 : 0;
        ctx.beginPath();
        ctx.arc(seg.x * CELL + CELL / 2 + ex + (s.dir === "UP" || s.dir === "DOWN" ? 3 : 0), seg.y * CELL + CELL / 2 + ey + (s.dir === "LEFT" || s.dir === "RIGHT" ? 3 : 0), 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(seg.x * CELL + CELL / 2 + ex - (s.dir === "UP" || s.dir === "DOWN" ? 3 : 0), seg.y * CELL + CELL / 2 + ey - (s.dir === "LEFT" || s.dir === "RIGHT" ? 3 : 0), 2, 0, Math.PI * 2);
        ctx.fill();
      }
    });
  }, []);

  const step = useCallback(() => {
    const s = stateRef.current;
    if (!s.running) return;

    s.dir = s.nextDir;
    const head = { ...s.snake[0] };

    if (s.dir === "UP") head.y--;
    if (s.dir === "DOWN") head.y++;
    if (s.dir === "LEFT") head.x--;
    if (s.dir === "RIGHT") head.x++;

    // Wall collision
    if (head.x < 0 || head.x >= COLS || head.y < 0 || head.y >= ROWS) {
      s.running = false;
      s.dead = true;
      setDead(true);
      draw();
      return;
    }

    // Self collision
    if (s.snake.some((seg) => seg.x === head.x && seg.y === head.y)) {
      s.running = false;
      s.dead = true;
      setDead(true);
      draw();
      return;
    }

    s.snake.unshift(head);

    // Eat food
    if (head.x === s.food.x && head.y === s.food.y) {
      s.score++;
      setScore(s.score);
      let newFood: Point;
      do { newFood = rand(); } while (s.snake.some((seg) => seg.x === newFood.x && seg.y === newFood.y));
      s.food = newFood;
    } else {
      s.snake.pop();
    }

    draw();
  }, [draw]);

  const startGame = useCallback(() => {
    stateRef.current = {
      snake: [{ x: 10, y: 8 }, { x: 9, y: 8 }, { x: 8, y: 8 }],
      dir: "RIGHT",
      nextDir: "RIGHT",
      food: rand(),
      score: 0,
      running: true,
      dead: false,
    };
    setScore(0);
    setStarted(true);
    setDead(false);
    if (loopRef.current) clearInterval(loopRef.current);
    loopRef.current = setInterval(step, 130);
    draw();
  }, [step, draw]);

  // Keyboard controls
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const s = stateRef.current;
      if (!s.running) return;
      const map: Record<string, Dir> = {
        ArrowUp: "UP", w: "UP", W: "UP",
        ArrowDown: "DOWN", s: "DOWN", S: "DOWN",
        ArrowLeft: "LEFT", a: "LEFT", A: "LEFT",
        ArrowRight: "RIGHT", d: "RIGHT", D: "RIGHT",
      };
      const dir = map[e.key];
      if (!dir) return;
      const opposites: Record<Dir, Dir> = { UP: "DOWN", DOWN: "UP", LEFT: "RIGHT", RIGHT: "LEFT" };
      if (dir !== opposites[s.dir]) {
        s.nextDir = dir;
        e.preventDefault();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Mobile swipe
  const touchRef = useRef<{ x: number; y: number } | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0];
    touchRef.current = { x: t.clientX, y: t.clientY };
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchRef.current) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - touchRef.current.x;
    const dy = t.clientY - touchRef.current.y;
    const s = stateRef.current;
    if (!s.running) return;
    const opposites: Record<Dir, Dir> = { UP: "DOWN", DOWN: "UP", LEFT: "RIGHT", RIGHT: "LEFT" };
    let dir: Dir | null = null;
    if (Math.abs(dx) > Math.abs(dy)) {
      dir = dx > 0 ? "RIGHT" : "LEFT";
    } else {
      dir = dy > 0 ? "DOWN" : "UP";
    }
    if (dir && dir !== opposites[s.dir]) s.nextDir = dir;
    touchRef.current = null;
  };

  useEffect(() => {
    draw();
    return () => { if (loopRef.current) clearInterval(loopRef.current); };
  }, [draw]);

  return (
    <div className="w-full rounded-xl overflow-hidden border border-border">
      {/* Terminal bar */}
      <div className="px-4 py-2 border-b border-border bg-card flex items-center gap-2">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-500/60" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
          <span className="w-3 h-3 rounded-full bg-primary/60" />
        </div>
        <span className="text-xs font-mono text-muted-foreground ml-2">snake.exe</span>
        <span className="ml-auto text-xs font-mono text-primary">score: {score}</span>
      </div>

      {/* Canvas */}
      <div
        className="relative bg-[#0a0a0a] flex items-center justify-center"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <canvas ref={canvasRef} width={W} height={H} className="block max-w-full" />

        {/* Overlay */}
        {!started && !dead && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 gap-4">
            <p className="text-foreground font-bold text-2xl font-mono">Snake</p>
            <p className="text-muted-foreground text-sm font-mono">arrow keys or WASD to move</p>
            <button
              onClick={startGame}
              className="px-6 py-2 bg-primary text-background font-mono font-bold rounded-lg hover:bg-primary/90 transition-colors"
            >
              Play
            </button>
          </div>
        )}
        {dead && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 gap-4">
            <p className="text-red-400 font-bold text-2xl font-mono">Game Over</p>
            <p className="text-foreground font-mono text-lg">Score: {score}</p>
            <button
              onClick={startGame}
              className="px-6 py-2 bg-primary text-background font-mono font-bold rounded-lg hover:bg-primary/90 transition-colors"
            >
              Restart
            </button>
          </div>
        )}
      </div>

      <p className="text-xs font-mono text-muted-foreground text-center py-2 border-t border-border">
        use arrow keys / WASD or swipe on mobile
      </p>
    </div>
  );
}
