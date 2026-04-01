"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only on desktop
    if (typeof window === "undefined" || window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-50"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="absolute h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/60"
        animate={{
          x: position.x,
          y: position.y,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 400,
          mass: 0.2,
        }}
      />
      <motion.div
        className="absolute h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.04] blur-2xl"
        animate={{
          x: position.x,
          y: position.y,
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 150,
          mass: 0.5,
        }}
      />
    </motion.div>
  );
}
