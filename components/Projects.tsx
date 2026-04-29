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

function ProjectCard({ project }: { project: (typeof Projects)[0] }) {
  return (
    <div className="flex flex-col bg-surface border border-border-subtle">
      <span className="relative w-0 h-px bg-accent" />
      <div className="flex flex-col py-8 px-6 gap-6">
        <div className="flex gap-4 items-start">
          <span className="font-mono font-semibold text-4xl text-text-muted tracking-tight">
            {project.number}
          </span>
          <div className="flex mt-6 flex-col gap-1">
            <span className="font-sans text-xs text-text-muted tracking-widest">
              {project.category.toUpperCase()}
            </span>
            <span className="font-sans font-bold text-2xl text-text-primary tracking-tight">
              {project.name}
            </span>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="font-sans font-normal text-xs text-text-secondary border border-border py-1 px-2 tracking-wide"
            >
              {tech}
            </span>
          ))}
        </div>
        <p className="font-sans font-medium text-sm text-text-secondary">
          {project.description}
        </p>
        <div className="flex gap-5">
          <a
            href={project.liveView}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs hover:text-accent flex items-center underline underline-offset-6 decoration-text-muted hover:decoration-accent transition-all duration-75"
          >
            VIEW LIVE <ExternalLink className="w-4 h-4 ml-1" />
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs hover:text-accent flex items-center underline underline-offset-6 decoration-text-muted hover:decoration-accent transition-all duration-75"
          >
            GITHUB <ExternalLink className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
      <div className="px-6 pb-6">
        <div className="bg-surface flex gap-4 border border-border p-2">
          <span className="flex items-center gap-2 text-text-muted">
            <span className="w-2 h-2 bg-text-muted rounded-full" />
            <span className="w-2 h-2 bg-text-muted rounded-full" />
            <span className="w-2 h-2 bg-text-muted rounded-full" />
          </span>
          <span className="font-sans font-normal text-xs text-text-muted">
            {project.name.toLowerCase()}.app
          </span>
        </div>
        <Image
          src={project.image}
          alt={project.name}
          width={1000}
          height={1000}
          className="rounded-b-sm"
        />
      </div>
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
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  return (
    <div className="flex flex-col gap-4">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {Projects.map((project) => (
            <div key={project.name} className="flex-none w-full px-1">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between px-2">
        <div className="flex gap-2">
          {Projects.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                i === selectedIndex ? "bg-accent w-4" : "bg-text-muted"
              }`}
              aria-label={`Go to project ${i + 1}`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            onClick={scrollPrev}
            className="border border-border p-2 hover:border-accent hover:text-accent transition-all duration-300"
            aria-label="Previous project"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={scrollNext}
            className="border border-border p-2 hover:border-accent hover:text-accent transition-all duration-300"
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

    gsap.from(".projects-header", {
      opacity: 0,
      y: 40,
      duration: 0.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".projects-header",
        start: "top 85%",
        once: true,
      },
    });

    mm.add("(min-width: 1024px)", () => {
      const track = document.querySelector(".projects-track") as HTMLElement;
      if (!track) return;

      ScrollTrigger.refresh();

      gsap.to(track, {
        x: () => -(track.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: ".projects-container",
          start: "top top",
          end: () => `+=${track.scrollWidth - window.innerWidth}`,
          scrub: 1,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    });

    return () => {
      mm.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="flex flex-col gap-14">
      <div className="lg:hidden flex flex-col gap-6 px-6 md:px-10 py-10">
        <div className="projects-header flex flex-col gap-4">
          <div className="flex items-center gap-3 font-sans font-normal text-xs text-text-muted tracking-widest">
            <span className="w-8 h-px bg-accent" />
            <span className="font-sans font-bold">SELECTED WORK</span>
          </div>
          <span className="flex flex-wrap gap-2 font-sans font-bold text-4xl md:text-5xl text-white">
            Personal <span className="text-accent">projects.</span>
          </span>
        </div>
        <MobileCarousel />
      </div>

      <div className="hidden lg:block projects-container overflow-hidden z-10 bg-bg py-20">
        <div className="projects-header flex flex-col gap-4 px-16 py-4">
          <div className="flex items-center gap-3 font-sans font-normal text-xs text-text-muted tracking-widest">
            <span className="w-8 h-px bg-accent" />
            <span className="font-sans font-bold">SELECTED WORK</span>
          </div>
          <span className="flex gap-2 font-sans font-bold text-7xl text-white">
            Personal <p className="text-accent">projects.</p>
          </span>
        </div>

        <div className="projects-track flex gap-4">
          {Projects.map((project) => (
            <div
              key={project.name}
              className="project-card shrink-0 h-full w-screen shadow-xl shadow-surface-2 flex flex-col bg-surface hover:[&_.bar]:w-full hover:[&_.num]:text-accent hover:[&_.image]:shadow-xl hover:[&_.tab-name]:text-accent border border-border-subtle hover:border-border transition-all duration-300"
            >
              <span className="bar relative bottom-0 left-0 w-0 h-px bg-accent transition-all duration-300" />
              <div className="card flex items-center justify-between">
                <div className="w-full flex flex-col py-20 px-10 gap-10">
                  <div className="flex gap-4 items-start">
                    <span className="num font-mono font-semibold text-6xl text-text-muted tracking-tight transition-all duration-300">
                      {project.number}
                    </span>
                    <div className="flex mt-10 flex-col gap-2">
                      <span className="font-sans text-xs text-text-muted tracking-widest">
                        {project.category.toUpperCase()}
                      </span>
                      <span className="font-sans font-bold text-4xl text-text-primary tracking-tight">
                        {project.name}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 max-w-3/4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="font-sans font-normal text-xs text-text-secondary text-center border border-border py-1 px-2 tracking-wide"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="font-sans font-medium text-md text-text-secondary max-w-3/4">
                    {project.description}
                  </div>
                  <div className="flex gap-5">
                    <a
                      href={project.liveView}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-transparent hover:bg-transparent text-xs hover:text-accent hover:*:text-accent flex items-center underline underline-offset-6 decoration-text-muted hover:decoration-accent transition-all duration-75 cursor-pointer"
                    >
                      VIEW LIVE <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-transparent hover:bg-transparent text-xs hover:text-accent hover:*:text-accent flex items-center underline underline-offset-6 decoration-text-muted hover:decoration-accent transition-all duration-75 cursor-pointer"
                    >
                      GITHUB <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>

                <div className="w-full flex flex-col py-10 px-10">
                  <div className="bg-surface flex gap-4 border border-border p-2">
                    <span className="flex items-center gap-2 text-text-muted">
                      <span className="w-2 h-2 bg-text-muted rounded-full" />
                      <span className="w-2 h-2 bg-text-muted rounded-full" />
                      <span className="w-2 h-2 bg-text-muted rounded-full" />
                    </span>
                    <span className="tab-name font-sans font-normal text-xs text-text-muted transition-all duration-300">
                      {project.name.toLowerCase()}.app
                    </span>
                  </div>
                  <div className="image shadow-none shadow-accent transition-all duration-300">
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={1000}
                      height={1000}
                      className="rounded-b-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
