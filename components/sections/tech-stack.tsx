"use client";

import { FadeIn } from "@/components/effects/motion";

const techGroups = [
  {
    category: "Languages",
    items: [
      { name: "Dart", icon: "devicon-dart-plain" },
      { name: "JavaScript", icon: "devicon-javascript-plain" },
      { name: "TypeScript", icon: "devicon-typescript-plain" },
      { name: "Python", icon: "devicon-python-plain" },
      { name: "Java", icon: "devicon-java-plain" },
      { name: "PHP", icon: "devicon-php-plain" },
    ],
  },
  {
    category: "Frameworks",
    items: [
      { name: "Flutter", icon: "devicon-flutter-plain" },
      { name: "React", icon: "devicon-react-original" },
      { name: "Next.js", icon: "devicon-nextjs-plain" },
      { name: "Node.js", icon: "devicon-nodejs-plain" },
      { name: "Express", icon: "devicon-express-original" },
      { name: "FastAPI", icon: "devicon-fastapi-plain" },
      { name: "Tailwind", icon: "devicon-tailwindcss-original" },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
      { name: "MongoDB", icon: "devicon-mongodb-plain" },
      { name: "Redis", icon: "devicon-redis-plain" },
      { name: "MySQL", icon: "devicon-mysql-plain" },
    ],
  },
  {
    category: "Infrastructure",
    items: [
      { name: "AWS", icon: "devicon-amazonwebservices-plain-wordmark" },
      { name: "GCP", icon: "devicon-googlecloud-plain" },
      { name: "Docker", icon: "devicon-docker-plain" },
      { name: "NGINX", icon: "devicon-nginx-original" },
      { name: "Linux", icon: "devicon-linux-plain" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Firebase", icon: "devicon-firebase-plain" },
      { name: "Git", icon: "devicon-git-plain" },
      { name: "GitHub", icon: "devicon-github-original" },
      { name: "Kafka", icon: "devicon-apachekafka-original" },
    ],
  },
];

function TechGroup({ category, items }: { category: string; items: { name: string; icon: string }[] }) {
  return (
    <div className="tech-group">
      <div className="tech-category-label">{category}</div>
      <div className="tech-logos-row">
        {items.map((tech) => (
          <div key={tech.name} className="tech-logo-item" title={tech.name}>
            <i className={tech.icon} />
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function TechStack() {
  return (
    <section className="tech-stack-section py-16 md:py-24 bg-background overflow-hidden">
      <div className="container">
        <FadeIn className="text-center mb-16">
          <span className="inline-block text-sm font-mono text-primary mb-3 uppercase tracking-wider">
            {"// Technologies"}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Our Tech <span className="text-primary">Stack</span>
          </h2>
        </FadeIn>
      </div>

      {/* Scrolling container */}
      <div className="tech-scroll-wrapper">
        <div className="tech-scroll-track animate-scroll hover:[animation-play-state:paused]">
          {/* First set */}
          {techGroups.map((group) => (
            <TechGroup key={group.category} category={group.category} items={group.items} />
          ))}
          {/* Duplicate for seamless loop */}
          {techGroups.map((group) => (
            <TechGroup key={`${group.category}-dup`} category={group.category} items={group.items} />
          ))}
        </div>
      </div>

      {/* Devicon stylesheet */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
      />

      {/* Styles matching original CSS */}
      <style jsx global>{`
        .tech-scroll-wrapper {
          width: 100%;
          overflow-x: auto;
          overflow-y: hidden;
          padding: 20px 0;
          mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .tech-scroll-wrapper::-webkit-scrollbar {
          display: none;
        }
        .tech-scroll-track {
          display: flex;
          align-items: stretch;
          gap: 48px;
          width: max-content;
        }
        .tech-group {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          position: relative;
          padding-left: 60px;
        }
        /* Vertical timeline line */
        .tech-group::before {
          content: '';
          position: absolute;
          left: 20px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(180deg, hsl(var(--primary)) 0%, rgba(255,255,255,0.15) 30%, rgba(255,255,255,0.15) 100%);
        }
        .tech-category-label {
          font-family: 'Space Mono', monospace;
          font-size: 0.9rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: hsl(var(--primary));
          padding: 12px 20px;
          background: linear-gradient(135deg, hsl(var(--primary) / 0.15) 0%, hsl(var(--primary) / 0.05) 100%);
          border: 1px solid hsl(var(--primary) / 0.4);
          border-radius: 12px;
          white-space: nowrap;
          position: relative;
          margin-bottom: 16px;
        }
        /* Horizontal connector from timeline to label */
        .tech-category-label::before {
          content: '';
          position: absolute;
          left: -40px;
          top: 50%;
          transform: translateY(-50%);
          width: 40px;
          height: 2px;
          background: hsl(var(--primary));
        }
        /* Timeline dot for label */
        .tech-category-label::after {
          content: '';
          position: absolute;
          left: -46px;
          top: 50%;
          transform: translateY(-50%);
          width: 14px;
          height: 14px;
          background: hsl(var(--primary));
          border: 3px solid hsl(var(--background));
          border-radius: 50%;
          box-shadow: 0 0 12px hsl(var(--primary));
        }
        .tech-logos-row {
          display: flex;
          gap: 16px;
          position: relative;
          padding-top: 24px;
        }
        /* Horizontal line above logos */
        .tech-logos-row::before {
          content: '';
          position: absolute;
          left: -40px;
          top: 0;
          right: 0;
          height: 2px;
          background: rgba(255,255,255,0.15);
        }
        /* Connector from vertical timeline to horizontal logos line */
        .tech-logos-row::after {
          content: '';
          position: absolute;
          left: -40px;
          top: 0;
          width: 2px;
          height: 24px;
          background: rgba(255,255,255,0.15);
        }
        .tech-logo-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 16px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px;
          transition: all 0.3s ease;
          cursor: default;
          min-width: 75px;
          height: 85px;
          flex-shrink: 0;
          position: relative;
        }
        /* Vertical connector from logo to horizontal line */
        .tech-logo-item::before {
          content: '';
          position: absolute;
          top: -24px;
          left: 50%;
          transform: translateX(-50%);
          width: 2px;
          height: 24px;
          background: rgba(255,255,255,0.15);
          transition: all 0.3s ease;
        }
        /* Node dot on horizontal line */
        .tech-logo-item::after {
          content: '';
          position: absolute;
          top: -28px;
          left: 50%;
          transform: translateX(-50%);
          width: 8px;
          height: 8px;
          background: hsl(var(--background));
          border: 2px solid rgba(255,255,255,0.15);
          border-radius: 50%;
          transition: all 0.3s ease;
        }
        .tech-logo-item:hover {
          transform: translateY(2px);
          border-color: hsl(var(--primary));
          background: hsl(var(--primary) / 0.08);
          box-shadow: 0 6px 20px hsl(var(--primary) / 0.2);
        }
        .tech-logo-item:hover::before {
          background: hsl(var(--primary));
        }
        .tech-logo-item:hover::after {
          background: hsl(var(--primary));
          border-color: hsl(var(--primary));
          box-shadow: 0 0 8px hsl(var(--primary));
        }
        .tech-logo-item i {
          font-size: 2rem;
          color: rgba(255,255,255,0.65);
          transition: all 0.3s ease;
        }
        .tech-logo-item:hover i {
          color: hsl(var(--foreground));
          transform: scale(1.1);
        }
        .tech-logo-item span {
          font-size: 0.65rem;
          color: rgba(255,255,255,0.65);
          text-align: center;
          font-weight: 500;
          white-space: nowrap;
        }
        .tech-logo-item:hover span {
          color: hsl(var(--primary));
        }
        @media (min-width: 768px) {
          .tech-logo-item {
            min-width: 85px;
            height: 90px;
          }
          .tech-logo-item i {
            font-size: 2.25rem;
          }
          .tech-logo-item span {
            font-size: 0.7rem;
          }
          .tech-category-label {
            font-size: 1rem;
            padding: 14px 24px;
          }
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 60s linear infinite;
        }
      `}</style>
    </section>
  );
}
