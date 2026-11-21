# Romy Valdez — Portfolio

Personal portfolio showcasing my work as a Full-Stack Developer. Built with a focus on performance, clean code, and premium user experience.

## Live

[portfolio-beige-zeta-74.vercel.app](https://portfolio-beige-zeta-74.vercel.app/)

## Features

- Hero title letters rise out of a line mask on load (GSAP SplitText, screen-reader safe)
- Pinned horizontal scroll for projects, with a 01 / 05 counter, progress bar and screenshots that wipe in
- Experience timeline that draws itself as you scroll, lighting each entry's dot
- Section headings revealed line by line; magnetic "View My Work" and "Hire Me" buttons
- Custom animated cursor that grows over links and buttons (mouse only)
- Header backdrop blur on scroll
- Breathing red sphere with CSS keyframes
- Respects `prefers-reduced-motion`: entrance animations and the pinned scroll turn off
- Responsive design — mobile, tablet, desktop

## Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript
- **Styling:** TailwindCSS v4
- **Animations:** GSAP (ScrollTrigger, SplitText) with `@gsap/react`
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