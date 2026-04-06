"use client";

import { useEffect, useRef } from "react";

const BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

const TECH = [
  { name: "JavaScript",  src: `${BASE}/javascript/javascript-plain.svg` },
  { name: "TypeScript",  src: `${BASE}/typescript/typescript-plain.svg` },
  { name: "Python",      src: `${BASE}/python/python-plain.svg` },
  { name: "Flutter",     src: `${BASE}/flutter/flutter-plain.svg` },
  { name: "React",       src: `${BASE}/react/react-original.svg` },
  { name: "Next.js",     src: `${BASE}/nextjs/nextjs-plain.svg` },
  { name: "Node.js",     src: `${BASE}/nodejs/nodejs-plain.svg` },
  { name: "Tailwind",    src: `${BASE}/tailwindcss/tailwindcss-original.svg` },
  { name: "FastAPI",     src: `${BASE}/fastapi/fastapi-plain.svg` },
  { name: "PostgreSQL",  src: `${BASE}/postgresql/postgresql-plain.svg` },
  { name: "MongoDB",     src: `${BASE}/mongodb/mongodb-plain.svg` },
  { name: "Redis",       src: `${BASE}/redis/redis-plain.svg` },
  { name: "MySQL",       src: `${BASE}/mysql/mysql-plain.svg` },
  { name: "AWS",         src: `${BASE}/amazonwebservices/amazonwebservices-plain-wordmark.svg` },
  { name: "GCP",         src: `${BASE}/googlecloud/googlecloud-plain.svg` },
  { name: "Docker",      src: `${BASE}/docker/docker-plain.svg` },
  { name: "Linux",       src: `${BASE}/linux/linux-plain.svg` },
  { name: "Firebase",    src: `${BASE}/firebase/firebase-plain.svg` },
  { name: "Git",         src: `${BASE}/git/git-plain.svg` },
  { name: "GitHub",      src: `${BASE}/github/github-original.svg` },
  { name: "Kafka",       src: `${BASE}/apachekafka/apachekafka-original.svg` },
  { name: "Dart",        src: `${BASE}/dart/dart-plain.svg` },
  { name: "PHP",         src: `${BASE}/php/php-plain.svg` },
  { name: "Java",        src: `${BASE}/java/java-plain.svg` },
  { name: "NGINX",       src: `${BASE}/nginx/nginx-original.svg` },
  { name: "Express",     src: `${BASE}/express/express-original.svg` },
];

const RADIUS = 38;
const GRAVITY = 0.28;
const FRICTION = 0.988;
const BOUNCE = 0.62;

// Convert any colored SVG to white monochrome — same effect as CSS `color: white` on icon fonts
function toMonochrome(img: HTMLImageElement, alpha = 0.65): HTMLCanvasElement {
  const size = 128;
  const off = document.createElement("canvas");
  off.width = size;
  off.height = size;
  const ctx = off.getContext("2d")!;
  ctx.drawImage(img, 0, 0, size, size);
  const data = ctx.getImageData(0, 0, size, size);
  const px = data.data;
  for (let i = 0; i < px.length; i += 4) {
    if (px[i + 3] > 10) {
      px[i]     = 255;
      px[i + 1] = 255;
      px[i + 2] = 255;
      px[i + 3] = Math.round(px[i + 3] * alpha);
    }
  }
  ctx.putImageData(data, 0, 0);
  return off;
}

// Green tinted version for dragged ball
function toGreen(img: HTMLImageElement): HTMLCanvasElement {
  const size = 128;
  const off = document.createElement("canvas");
  off.width = size;
  off.height = size;
  const ctx = off.getContext("2d")!;
  ctx.drawImage(img, 0, 0, size, size);
  const data = ctx.getImageData(0, 0, size, size);
  const px = data.data;
  for (let i = 0; i < px.length; i += 4) {
    if (px[i + 3] > 10) {
      px[i]     = 11;
      px[i + 1] = 148;
      px[i + 2] = 68;
      px[i + 3] = px[i + 3];
    }
  }
  ctx.putImageData(data, 0, 0);
  return off;
}

interface Ball {
  x: number; y: number;
  vx: number; vy: number;
  name: string;
  img: HTMLImageElement;
  mono: HTMLCanvasElement | null;
  green: HTMLCanvasElement | null;
  loaded: boolean;
}

export function PhysicsPlayground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    const H = 480;
    let W = wrap.clientWidth || 700;
    canvas.width = W;
    canvas.height = H;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const cols = Math.ceil(Math.sqrt(TECH.length));

    const balls: Ball[] = TECH.map((t, i) => {
      const img = new Image();
      img.crossOrigin = "anonymous";

      const colW = (W - RADIUS * 2) / Math.max(cols - 1, 1);
      const ball: Ball = {
        x: RADIUS + (i % cols) * colW + (Math.random() - 0.5) * 16,
        y: RADIUS + Math.floor(i / cols) * 96 + (Math.random() - 0.5) * 10,
        vx: (Math.random() - 0.5) * 3,
        vy: (Math.random() - 0.5) * 2,
        name: t.name,
        img,
        mono: null,
        green: null,
        loaded: false,
      };

      img.onload = () => {
        ball.mono = toMonochrome(img, 0.65);
        ball.green = toGreen(img);
        ball.loaded = true;
      };
      img.src = t.src;
      return ball;
    });

    // Drag
    let dragging: Ball | null = null;
    let prevMX = 0, prevMY = 0, curMX = 0, curMY = 0;

    const toCanvas = (cx: number, cy: number) => {
      const rect = canvas.getBoundingClientRect();
      return { x: (cx - rect.left) * (W / rect.width), y: (cy - rect.top) * (H / rect.height) };
    };

    const onDown = (e: MouseEvent | TouchEvent) => {
      const raw = "touches" in e ? e.touches[0] : e;
      const { x, y } = toCanvas(raw.clientX, raw.clientY);
      prevMX = curMX = x; prevMY = curMY = y;
      for (let i = balls.length - 1; i >= 0; i--) {
        if (Math.hypot(x - balls[i].x, y - balls[i].y) < RADIUS) {
          dragging = balls[i];
          dragging.vx = dragging.vy = 0;
          break;
        }
      }
    };
    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!dragging) return;
      e.preventDefault();
      const raw = "touches" in e ? e.touches[0] : e;
      const { x, y } = toCanvas(raw.clientX, raw.clientY);
      prevMX = curMX; prevMY = curMY; curMX = x; curMY = y;
      dragging.x = x; dragging.y = y;
    };
    const onUp = () => {
      if (dragging) {
        dragging.vx = (curMX - prevMX) * 0.75;
        dragging.vy = (curMY - prevMY) * 0.75;
        dragging = null;
      }
    };

    canvas.addEventListener("mousedown", onDown);
    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseup", onUp);
    canvas.addEventListener("touchstart", onDown, { passive: false });
    canvas.addEventListener("touchmove", onMove, { passive: false });
    canvas.addEventListener("touchend", onUp);
    window.addEventListener("resize", () => { W = wrap.clientWidth || 700; canvas.width = W; canvas.height = H; });

    let raf: number;

    const tick = () => {
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = "#0a0a0a";
      ctx.fillRect(0, 0, W, H);

      // Grid dots
      ctx.fillStyle = "#161616";
      for (let gx = 28; gx < W; gx += 36)
        for (let gy = 28; gy < H; gy += 36) {
          ctx.beginPath(); ctx.arc(gx, gy, 1.2, 0, Math.PI * 2); ctx.fill();
        }

      // Physics
      for (const b of balls) {
        if (b === dragging) continue;
        b.vy += GRAVITY; b.vx *= FRICTION; b.vy *= FRICTION;
        b.x += b.vx; b.y += b.vy;
        if (b.x - RADIUS < 0)  { b.x = RADIUS;     b.vx =  Math.abs(b.vx) * BOUNCE; }
        if (b.x + RADIUS > W)  { b.x = W - RADIUS; b.vx = -Math.abs(b.vx) * BOUNCE; }
        if (b.y - RADIUS < 0)  { b.y = RADIUS;     b.vy =  Math.abs(b.vy) * BOUNCE; }
        if (b.y + RADIUS > H)  { b.y = H - RADIUS; b.vy = -Math.abs(b.vy) * BOUNCE; }
      }

      // Collisions
      for (let i = 0; i < balls.length; i++) {
        for (let j = i + 1; j < balls.length; j++) {
          const a = balls[i], b = balls[j];
          const dx = b.x - a.x, dy = b.y - a.y, d = Math.hypot(dx, dy), min = RADIUS * 2;
          if (d < min && d > 0) {
            const nx = dx / d, ny = dy / d, ov = (min - d) / 2;
            if (a !== dragging) { a.x -= nx * ov; a.y -= ny * ov; }
            if (b !== dragging) { b.x += nx * ov; b.y += ny * ov; }
            const dv = (b.vx - a.vx) * nx + (b.vy - a.vy) * ny;
            if (dv < 0) {
              const imp = dv * 0.65;
              if (a !== dragging) { a.vx += imp * nx; a.vy += imp * ny; }
              if (b !== dragging) { b.vx -= imp * nx; b.vy -= imp * ny; }
            }
          }
        }
      }

      // Draw balls
      for (const b of balls) {
        const isDragging = b === dragging;

        if (isDragging) { ctx.shadowColor = "#0B9444"; ctx.shadowBlur = 22; }

        // Circle
        ctx.beginPath();
        ctx.arc(b.x, b.y, RADIUS, 0, Math.PI * 2);
        ctx.fillStyle = isDragging ? "#0d1a10" : "#111";
        ctx.fill();
        ctx.strokeStyle = isDragging ? "#0B9444" : "rgba(11,148,68,0.25)";
        ctx.lineWidth = isDragging ? 2 : 1.5;
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Icon
        const iconSize = RADIUS * 1.15;
        const icon = isDragging ? b.green : b.mono;
        if (b.loaded && icon) {
          ctx.save();
          ctx.beginPath();
          ctx.arc(b.x, b.y, RADIUS - 6, 0, Math.PI * 2);
          ctx.clip();
          ctx.drawImage(icon, b.x - iconSize / 2, b.y - iconSize / 2, iconSize, iconSize);
          ctx.restore();
        }
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf); };
  }, []);

  return (
    <div className="w-full rounded-xl overflow-hidden border border-border">
      <div className="px-4 py-2 border-b border-border bg-card flex items-center gap-2">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-500/60" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
          <span className="w-3 h-3 rounded-full bg-primary/60" />
        </div>
        <span className="text-xs font-mono text-muted-foreground ml-2">tech_stack.exe</span>
        <span className="ml-auto text-xs font-mono text-muted-foreground">drag &amp; toss</span>
      </div>
      <div ref={wrapRef} className="w-full">
        <canvas ref={canvasRef} className="w-full block" style={{ height: 480 }} />
      </div>
    </div>
  );
}
