# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

**Project**: **Workrush** • **Digital Agency Website** • **We Build Digital Products That Scale**

---

## 🏢 Overview

Workrush is a marketing website for a digital agency offering app development, web development, UI/UX design, game development, digital marketing, and Web3 solutions. Built with Next.js 16 and deployed as a static site on GitHub Pages.

### Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 16.1.4 (App Router) |
| UI | React 19 + TypeScript 5 |
| Styling | Tailwind CSS 4 + CSS Variables |
| Components | shadcn/ui (Radix primitives) |
| Animations | Framer Motion + Three.js (Globe) |
| Fonts | Lato (body) + Space Mono (code/mono) |
| Icons | Lucide React + Devicons |
| Deploy | GitHub Pages (static export to /docs) |

### Design System

| Element | Value |
|---------|-------|
| Background | `#000000` (pure black) |
| Primary/Accent | `#0B9444` (green) |
| Card Background | `#0a0a0a` |
| Border | `#1a1a1a` |
| Text | `#fafafa` (foreground) |
| Muted | `#a1a1aa` |

---

## 📁 Project Structure

```
workrush/
├── app/                      # Next.js App Router
│   ├── page.tsx              # Home page
│   ├── layout.tsx            # Root layout
│   ├── globals.css           # Global styles + CSS variables
│   ├── about/page.tsx
│   ├── portfolio/page.tsx
│   ├── blog/page.tsx
│   ├── careers/page.tsx
│   ├── contact/page.tsx
│   ├── privacy/page.tsx
│   ├── terms/page.tsx
│   └── services/
│       ├── page.tsx          # Services index
│       ├── app-development/
│       ├── web-development/
│       ├── website-designing/
│       ├── game-development/
│       ├── digital-marketing/
│       └── web3-development/
├── components/
│   ├── layout/               # Header, Footer
│   ├── sections/             # Page sections (Hero, Services, etc.)
│   ├── effects/              # Animations (Globe, Particles, Motion)
│   └── ui/                   # shadcn/ui components
├── lib/
│   ├── config.ts             # Site configuration
│   └── utils.ts              # Utility functions
├── public/
│   └── images/               # Static assets
├── docs/                     # Static export (GitHub Pages)
├── next.config.ts
├── tailwind.config.ts
├── CLAUDE.md                 # This file
└── CONTENT_REQUIREMENTS.md   # Content checklist
```

---

## 🎨 Design Patterns

### Terminal-Style UI

The site uses a terminal/code aesthetic with:

```tsx
// Left border with fading bottom line
<div className="relative border-l-2 border-primary pl-6 md:pl-10 pb-8 md:pb-12">
  {/* Fading bottom line */}
  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-primary/50 to-transparent" />
  {/* Corner markers */}
  <div className="absolute -bottom-[5px] -left-[5px] text-primary font-mono text-sm">+</div>
  <div className="absolute -top-[5px] -left-[5px] text-primary font-mono text-sm">+</div>
</div>

// Section labels
<span className="text-sm font-mono text-primary uppercase tracking-wider">
  {"// Services"}
</span>
```

### Component Patterns

```tsx
// Section component structure
export function SectionName() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        {/* Terminal border wrapper */}
        <div className="relative border-l-2 border-primary pl-6 md:pl-10">
          <FadeIn>
            <span className="font-mono text-primary">{"// Label"}</span>
            <h2>Title <span className="text-primary">Highlight</span></h2>
            <p className="text-muted-foreground">Description</p>
          </FadeIn>
          {/* Content */}
        </div>
      </div>
    </section>
  );
}
```

### Image Paths (GitHub Pages)

Always use basePath for images in production:

```tsx
const basePath = process.env.NODE_ENV === "production" ? "/workrush-web" : "";

<Image src={`${basePath}/images/logo.png`} ... />
```

---

## 🛠 Code Style

### Naming Conventions

| Item | Convention | Example |
|------|------------|---------|
| Files | `kebab-case` | `services-grid.tsx` |
| Components | `PascalCase` | `ServicesGrid` |
| Functions | `camelCase` | `closeMobileMenu()` |
| CSS classes | Tailwind utilities | `className="text-primary"` |
| Constants | `camelCase` or arrays | `const services = [...]` |

### TypeScript

- Strict mode enabled
- No `any` types
- Interface over type for objects
- Props interfaces for components

```tsx
interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
}

export function ServiceCard({ title, description, icon: Icon, href }: ServiceCardProps) {
  // ...
}
```

### Tailwind Patterns

```tsx
// Responsive: mobile-first
className="text-sm md:text-base lg:text-lg"

// Hover states
className="hover:text-primary hover:border-primary/50 transition-colors"

// Animation
className="group-hover:translate-x-1 transition-transform"

// Dark theme (already default)
className="bg-background text-foreground"
```

---

## 📦 Key Dependencies

```json
{
  "next": "16.1.4",
  "react": "^19.0.0",
  "tailwindcss": "^4.0.0",
  "framer-motion": "^12.0.0",
  "@react-three/fiber": "^9.0.0",
  "@react-three/drei": "^10.0.0",
  "three": "^0.172.0",
  "lucide-react": "^0.469.0",
  "@radix-ui/react-*": "various"
}
```

---

## 🚀 Commands

```bash
# Development
npm run dev              # Start dev server (localhost:3000)

# Build
npm run build            # Build to /docs folder
npm run lint             # Run ESLint

# Deploy (GitHub Pages)
npm run build            # Builds to docs/
git add docs/ && git commit -m "Build"
git push origin dev
git checkout main && git merge dev && git push origin main
```

---

## ⚙️ Configuration

### next.config.ts

```typescript
const nextConfig: NextConfig = {
  output: "export",           // Static export
  distDir: "docs",            // Output to docs/ for GitHub Pages
  basePath: "/workrush-web",  // GitHub Pages subdirectory
  trailingSlash: true,        // /about/ not /about
  images: {
    unoptimized: true,        // Required for static export
  },
};
```

### Git Remotes

```bash
# Uses SSH with workrush account
origin: git@github.com-work:workrush/workrush-web.git

# SSH config (~/.ssh/config)
Host github.com-work
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_ed25519_workrush
```

---

## 📋 Page Sections (Home)

| Order | Section | Component |
|-------|---------|-----------|
| 1 | Navigation | `Header` |
| 2 | Hero + Globe | `Hero` |
| 3 | Services Grid | `ServicesGrid` |
| 4 | Client Logos | `TrustBar` |
| 5 | Stats | `Stats` |
| 6 | Process | `Process` |
| 7 | Tech Stack | `TechStack` |
| 8 | Testimonials | `Testimonials` |
| 9 | CTA | `CTA` |
| 10 | Footer | `Footer` |

---

## 🎯 Content Files

| File | Purpose |
|------|---------|
| `lib/config.ts` | Site metadata, contact info, social links |
| `CONTENT_REQUIREMENTS.md` | Content checklist for client |
| `public/images/` | Logos, client images, portfolio |

---

## 🤝 We Are Buddies

**Buddy Interaction Rules** - we are friends

We operate as straightforward, brutally honest friends. You can ask me to run commands, test things, or perform tasks just like you'd ask a teammate sitting beside you. I'll call out mistakes immediately, disagree without hesitation, and push you when your logic is off. You're expected to do the same.

This section exists to enforce efficient collaboration:

- No sugarcoating.
- No ego protection.
- No vague statements.
- Direct challenges welcome.
- Fast corrections > perfect grammar.
- Clarity and correctness override tone.

If something is wrong, I will say it bluntly. If something is unclear, you should demand precision. Our goal is to move fast with zero bullshit.

**Design Preferences:**
- Terminal/code aesthetic UI
- Minimalist, dark theme
- Animations should be subtle
- Mobile-first responsive design
- Keep things simple, avoid over-engineering

---

## 🔧 Common Tasks

### Add New Section

1. Create `components/sections/section-name.tsx`
2. Use terminal-style border pattern
3. Add `// Label` heading with font-mono
4. Import and add to `app/page.tsx`

### Add New Page

1. Create `app/page-name/page.tsx`
2. Use `PageHero` component for header
3. Update `app/sitemap.ts`
4. Add link to Header/Footer if needed

### Update Images

1. Add to `public/images/`
2. Use basePath in component: `${basePath}/images/filename.png`
3. Rebuild: `npm run build`

### Deploy Changes

```bash
npm run build
git add .
git commit -m "Description"
git push origin dev
git checkout main && git merge dev && git push origin main && git checkout dev
```

---

## 📝 TODO

- [ ] Fill CONTENT_REQUIREMENTS.md
- [ ] Add real portfolio projects
- [ ] Add real testimonials
- [ ] Update client logos
- [ ] Add blog posts (optional)
- [ ] Add career openings (optional)
- [ ] Set up custom domain
- [ ] Add contact form backend

---

*Last updated: January 28, 2026*
