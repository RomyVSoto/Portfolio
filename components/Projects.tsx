"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useEmblaCarousel from "embla-carousel-react";

gsap.registerPlugin(ScrollTrigger);

const Projects = [
  {
    number: "01",
    category: "Appointment Booking",
    name: "BookIt",
    description:
      "Full-stack appointment booking system with authentication, Google OAuth, and role-based access control. Clients book and manage appointments while admins control services, schedules, and availability.",
    technologies: [
      "Next.js", "TypeScript", "Supabase", "Supabase Auth",
      "Google OAuth", "TailwindCSS", "React Query", "Zod", "React Hook Form",
    ],
    image: "/BookIt.png",
    liveView: "https://book-it-drab.vercel.app/",
    github: "https://github.com/RomyVSoto/BookIt",
  },
  {
    number: "02",
    category: "Corporate Website",
    name: "Global Communications Link",
    description:
      "Corporate website for Global Communications Link, a fiber optic and network infrastructure company based in the US. Features service showcase, certifications, codes & standards, and a contact/quote request form.",
    technologies: ["Next.js", "JavaScript", "TailwindCSS", "Node.js", "Nodemailer"],
    image: "/GCL.png",
    liveView: "https://www.globalclink.com/",
    github: "https://github.com/RomyVSoto/GCL-Webpage",
  },
  {
    number: "03",
    category: "Weather Dashboard",
    name: "WeatherApp",
    description:
      "Weather dashboard showing real-time conditions and 5-day forecast for any city. Features city search with debounced autocomplete, UV index, visibility, and sunrise/sunset data.",
    technologies: [
      "Next.js", "TypeScript", "TailwindCSS", "Shadcn UI",
      "React Query", "WeatherAPI", "use-debounce",
    ],
    image: "/WeatherApp.png",
    liveView: "https://weather-app-phi-seven-33.vercel.app/",
    github: "https://github.com/RomyVSoto/Weather-App",
  },
  {
    number: "04",
    category: "Expense Tracker",
    name: "SplitSync",
    description:
      "Real-time group expense tracker. Create a group, share the invite code, and watch expenses update instantly as members add them.",
    technologies: [
      "Next.js", "TypeScript", "Supabase", "Supabase Realtime",
      "TailwindCSS", "Shadcn UI", "React Query", "Recharts", "Zod",
    ],
    image: "/SplitSync.png",
    liveView: "https://split-sync-mu.vercel.app/",
    github: "https://github.com/RomyVSoto/SplitSync",
  },
  {
    number: "05",
    category: "Kanban Board",
    name: "TaskFlow",
    description:
      "Full-stack Kanban board with drag and drop. Create boards, manage tasks across columns, and track priorities in real time.",
    technologies: [
      "Next.js", "TypeScript", "Prisma", "tRPC", "NextAuth",
      "PostgreSQL", "TailwindCSS", "Shadcn UI", "Zod", "dnd-kit",
    ],
    image: "/TaskFlow.png",
    liveView: "https://task-flow-orcin-seven.vercel.app/",
    github: "https://github.com/RomyVSoto/task-flow",
  },
];

type Project = (typeof Projects)[number];

const linkClass =
  "text-xs hover:text-accent-text flex items-center underline underline-offset-6 decoration-text-faint hover:decoration-accent transition-all duration-75";

// One card for both layouts. The mobile carousel only renders below `lg` and the
// pinned desktop track only renders from `lg` up, so the `lg:` classes switch
// the card between its stacked (mobile) and split (desktop) layouts.
function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group/card h-full flex flex-col bg-surface border border-border-subtle lg:hover:border-border lg:shadow-xl lg:shadow-surface-2 transition-all duration-300">
      <span
        aria-hidden
        className="relative w-0 h-px bg-accent transition-all duration-300 lg:group-hover/card:w-full"
      />
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div className="w-full flex flex-col py-8 px-6 gap-6 lg:py-20 lg:px-10 lg:gap-10">
          <div className="flex gap-4 items-start">
            <span
              aria-hidden
              className="font-mono font-semibold text-4xl lg:text-6xl text-text-muted tracking-tight transition-all duration-300 lg:group-hover/card:text-accent-text"
            >
              {project.number}
            </span>
            <div className="flex mt-6 lg:mt-10 flex-col gap-1 lg:gap-2">
              <span className="font-sans text-xs uppercase text-text-muted tracking-widest">
                {project.category}
              </span>
              <h3 className="font-sans font-bold text-2xl lg:text-4xl text-text-primary tracking-tight">
                {project.name}
              </h3>
            </div>
          </div>
          <ul className="flex flex-wrap items-center gap-2 lg:max-w-3/4">
            {project.technologies.map((tech) => (
              <li
                key={tech}
                className="font-sans font-normal text-xs text-text-secondary border border-border py-1 px-2 tracking-wide"
              >
                {tech}
              </li>
            ))}
          </ul>
          <p className="font-sans font-medium text-sm lg:text-base text-text-secondary lg:max-w-3/4">
            {project.description}
          </p>
          <div className="flex gap-5">
            <a
              href={project.liveView}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              VIEW LIVE <ExternalLink aria-hidden className="w-4 h-4 ml-1" />
              <span className="sr-only">: {project.name} (opens in a new tab)</span>
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              GITHUB <ExternalLink aria-hidden className="w-4 h-4 ml-1" />
              <span className="sr-only">: {project.name} source code (opens in a new tab)</span>
            </a>
          </div>
        </div>

        <div className="w-full flex flex-col px-6 pb-6 lg:py-10 lg:px-10">
          <div aria-hidden className="bg-surface flex gap-4 border border-border p-2">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-text-faint rounded-full" />
              <span className="w-2 h-2 bg-text-faint rounded-full" />
              <span className="w-2 h-2 bg-text-faint rounded-full" />
            </span>
            <span className="font-sans font-normal text-xs text-text-muted transition-all duration-300 lg:group-hover/card:text-accent-text">
              {project.name.toLowerCase()}.app
            </span>
          </div>
          <Image
            src={project.image}
            alt={`Screenshot of ${project.name}`}
            width={1440}
            height={813}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="rounded-b-sm w-full h-auto"
          />
        </div>
      </div>
    </article>
  );
}

function SectionHeading({ className = "" }: { className?: string }) {
  return (
    <div className={`projects-header flex flex-col gap-4 ${className}`}>
      <div className="flex items-center gap-3 font-sans text-xs text-text-muted tracking-widest">
        <span aria-hidden className="w-8 h-px bg-accent" />
        <span className="font-bold">SELECTED WORK</span>
      </div>
      <h2 className="font-sans font-bold text-4xl md:text-5xl lg:text-7xl text-white">
        Personal <span className="text-accent">projects.</span>
      </h2>
    </div>
  );
}

function MobileCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const isFirst = selectedIndex === 0;
  const isLast = selectedIndex === Projects.length - 1;

  return (
    <div className="flex flex-col gap-4" aria-roledescription="carousel" role="region" aria-label="Projects">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {Projects.map((project, i) => (
            <div
              key={project.name}
              className="flex-none w-full px-1"
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${Projects.length}`}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between px-2">
        <div className="flex">
          {Projects.map((project, i) => (
            <button
              key={project.name}
              type="button"
              onClick={() => emblaApi?.scrollTo(i)}
              className="grid place-items-center h-6 min-w-6 px-1"
              aria-label={`Go to project ${i + 1}: ${project.name}`}
              aria-current={i === selectedIndex}
            >
              <span
                aria-hidden
                className={`block h-1.5 rounded-full transition-all duration-300 ${
                  i === selectedIndex ? "bg-accent w-4" : "bg-text-muted w-1.5"
                }`}
              />
            </button>
          ))}
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={scrollPrev}
            disabled={isFirst}
            className="border border-border p-2.5 hover:border-accent hover:text-accent-text transition-all duration-300 disabled:opacity-40 disabled:pointer-events-none"
            aria-label="Previous project"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            disabled={isLast}
            className="border border-border p-2.5 hover:border-accent hover:text-accent-text transition-all duration-300 disabled:opacity-40 disabled:pointer-events-none"
            aria-label="Next project"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: "(min-width: 1024px)",
        motionOk: "(prefers-reduced-motion: no-preference)",
      },
      (context) => {
        const { isDesktop, motionOk } = context.conditions as {
          isDesktop: boolean;
          motionOk: boolean;
        };
        if (!motionOk) return;

        // Animate only the heading that is visible at this breakpoint.
        const header = sectionRef.current?.querySelector(
          isDesktop ? ".projects-desktop .projects-header" : ".projects-mobile .projects-header",
        );
        if (header) {
          gsap.from(header, {
            opacity: 0,
            y: 40,
            duration: 0.5,
            ease: "power3.out",
            scrollTrigger: { trigger: header, start: "top 85%", once: true },
          });
        }

        if (!isDesktop) return;
        const track = sectionRef.current?.querySelector<HTMLElement>(".projects-track");
        const container = sectionRef.current?.querySelector(".projects-desktop");
        if (!track || !container) return;

        gsap.to(track, {
          x: () => -(track.scrollWidth - window.innerWidth),
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: () => `+=${track.scrollWidth - window.innerWidth}`,
            scrub: 1,
            pin: true,
            // Must stay explicit: ScrollTrigger turns spacing off by default when
            // the pinned element's parent is a flex container (this section is).
            pinSpacing: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
      },
      sectionRef,
    );

    // Reverts only what this section created.
    return () => mm.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="flex flex-col gap-14">
      <div className="projects-mobile lg:hidden flex flex-col gap-6 px-6 md:px-10 py-10">
        <SectionHeading />
        <MobileCarousel />
      </div>

      {/* With reduced motion the track is not pinned: it scrolls sideways natively. */}
      <div className="projects-desktop hidden lg:block overflow-hidden z-10 bg-bg py-20">
        <SectionHeading className="px-16 py-4" />
        <ul className="projects-track flex gap-4 motion-reduce:overflow-x-auto motion-reduce:snap-x motion-reduce:snap-mandatory">
          {Projects.map((project) => (
            <li key={project.name} className="shrink-0 w-screen snap-start">
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
