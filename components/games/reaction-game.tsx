"use client";

import { useState, useEffect, useRef, useCallback } from "react";

type Phase = "idle" | "waiting" | "ready" | "result";

export function ReactionGame() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [reactionTime, setReactionTime] = useState<number | null>(null);
  const [best, setBest] = useState<number | null>(null);
  const [tooEarly, setTooEarly] = useState(false);
  const startRef = useRef<number>(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimer = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  const start = useCallback(() => {
    setTooEarly(false);
    setReactionTime(null);
    setPhase("waiting");
    const delay = 1500 + Math.random() * 3000;
    timerRef.current = setTimeout(() => {
      setPhase("ready");
      startRef.current = performance.now();
    }, delay);
  }, []);

  const handleClick = useCallback(() => {
    if (phase === "idle" || phase === "result") {
      start();
      return;
    }
    if (phase === "waiting") {
      clearTimer();
      setTooEarly(true);
      setPhase("result");
      return;
    }
    if (phase === "ready") {
      const elapsed = Math.round(performance.now() - startRef.current);
      setReactionTime(elapsed);
      setBest((prev) => (prev === null || elapsed < prev ? elapsed : prev));
      setPhase("result");
    }
  }, [phase, start]);

  useEffect(() => () => clearTimer(), []);

  const rating = (ms: number) => {
    if (ms < 150) return { label: "Superhuman", color: "text-primary" };
    if (ms < 200) return { label: "Excellent", color: "text-primary" };
    if (ms < 250) return { label: "Great", color: "text-green-400" };
    if (ms < 300) return { label: "Good", color: "text-yellow-400" };
    if (ms < 400) return { label: "Average", color: "text-orange-400" };
    return { label: "Slow", color: "text-red-400" };
  };

  const bgColor =
    phase === "ready"
      ? "bg-primary"
      : phase === "waiting"
      ? "bg-card"
      : "bg-background";

  return (
    <div className="w-full rounded-xl overflow-hidden border border-border select-none">
      {/* Terminal bar */}
      <div className="px-4 py-2 border-b border-border bg-card flex items-center gap-2">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-500/60" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
          <span className="w-3 h-3 rounded-full bg-primary/60" />
        </div>
        <span className="text-xs font-mono text-muted-foreground ml-2">reaction_test.exe</span>
        {best !== null && (
          <span className="ml-auto text-xs font-mono text-primary">best: {best}ms</span>
        )}
      </div>

      {/* Game area */}
      <button
        onClick={handleClick}
        className={`w-full flex flex-col items-center justify-center gap-4 transition-colors duration-150 cursor-pointer ${bgColor}`}
        style={{ height: 280 }}
        aria-label="Reaction game"
      >
        {phase === "idle" && (
          <>
            <span className="text-4xl">⚡</span>
            <p className="text-foreground font-bold text-xl font-mono">Reaction Test</p>
            <p className="text-muted-foreground text-sm font-mono">click to start</p>
          </>
        )}

        {phase === "waiting" && (
          <>
            <div className="w-4 h-4 rounded-full bg-primary animate-pulse" />
            <p className="text-muted-foreground text-base font-mono">wait for green...</p>
          </>
        )}

        {phase === "ready" && (
          <>
            <p className="text-background font-bold text-3xl font-mono animate-bounce">CLICK!</p>
          </>
        )}

        {phase === "result" && (
          <>
            {tooEarly ? (
              <>
                <span className="text-4xl">⛔</span>
                <p className="text-red-400 font-bold text-xl font-mono">Too Early!</p>
                <p className="text-muted-foreground text-sm font-mono">click to try again</p>
              </>
            ) : reactionTime !== null ? (
              <>
                <p className="text-foreground font-bold text-5xl font-mono">{reactionTime}<span className="text-2xl text-muted-foreground">ms</span></p>
                <p className={`font-bold text-lg font-mono ${rating(reactionTime).color}`}>
                  {rating(reactionTime).label}
                </p>
                <p className="text-muted-foreground text-sm font-mono">click to play again</p>
              </>
            ) : null}
          </>
        )}
      </button>

      <p className="text-xs font-mono text-muted-foreground text-center py-2 border-t border-border">
        click when the screen turns green — how fast are you?
      </p>
    </div>
  );
}
