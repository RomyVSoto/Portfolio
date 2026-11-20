# Romy Valdez — Portfolio

Personal portfolio showcasing my work as a Full-Stack Developer. Built with a focus on performance, clean code, and premium user experience.

## Live

[portfolio-beige-zeta-74.vercel.app](https://portfolio-beige-zeta-74.vercel.app/)

## Features

- Horizontal scroll carousel for projects with GSAP ScrollTrigger
- Custom animated cursor with magnetic hover effect
- Hero text reveal animation on load
- Scroll-triggered animations on every section
- Header backdrop blur on scroll
- Breathing red sphere with CSS keyframes
- Respects `prefers-reduced-motion`: entrance animations and the pinned scroll turn off
- Responsive design — mobile, tablet, desktop

## Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript
- **Styling:** TailwindCSS v4
- **Animations:** GSAP + ScrollTrigger
- **Icons:** Lucide React + React Icons
- **Fonts:** Inter, Space Grotesk, JetBrains Mono (`next/font`)
- **Deployment:** Vercel

## Sections

- **Hero** — introduction, stack, and CTA buttons
- **Projects** — 5 selected works: pinned horizontal scroll on desktop, swipe carousel on mobile
- **About** — background and technical skills
- **Experience** — work history and education timeline
- **Contact** — email, LinkedIn, and GitHub

## Projects Featured

1. **TaskFlow** — Kanban board · Next.js · Prisma · tRPC · NextAuth · dnd-kit
2. **BookIt** — Appointment booking · Next.js · Supabase · React Query
3. **SplitSync** — Expense tracker · Next.js · Supabase Realtime · Recharts
4. **WeatherApp** — Weather dashboard · Next.js · React Query · WeatherAPI
5. **GlobalCLink** — Corporate website · Next.js · Node.js · Nodemailer

## Getting Started

1. Clone the repository
```bash
   git clone https://github.com/RomyVSoto/portfolio.git
   cd portfolio
```

2. Install dependencies (the project uses [pnpm](https://pnpm.io))
```bash
   pnpm install
```

3. Run the development server
```bash
   pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000)