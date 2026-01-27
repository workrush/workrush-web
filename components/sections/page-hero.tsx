"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  description: string;
  badge?: string;
}

export function PageHero({ title, description, badge }: PageHeroProps) {
  return (
    <section className="relative bg-background text-foreground">
      <div className="container">
        <div className="py-20 md:py-28 lg:py-32">
          <div className="max-w-3xl">
            {badge && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-secondary border border-border rounded-full px-4 py-2 mb-6"
              >
                <span className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-sm text-muted-foreground">{badge}</span>
              </motion.div>
            )}

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.1]"
            >
              {title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              {description}
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
