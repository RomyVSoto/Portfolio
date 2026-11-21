"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { MOTION_OK, revealHeading } from "@/lib/motion";
import { Separator } from "@base-ui/react";

const Experience = [
  {
    title: "Grupo Humano",
    position: "Programmer Analyst II",
    period: "2026 - Present",
    description: "",
  },
  {
    title: "Claro Dominicana",
    position: "Network Operations Center",
    period: "2025 - 2026",
    description:
      "Real-time monitoring of the telecommunications network and initial fault diagnosis. Reception, classification, and recording of network alarms and incidents.",
  },
  {
    title: "Technology Int.",
    position: "Full-Stack Developer",
    period: "2024",
    description:
      "Development of frontend and backend functionalities for enterprise web applications. Collaboration with multidisciplinary teams to improve usability and performance.",
  },
  {
    title: "Technology Int.",
    position: "Intern",
    period: "2021-2022",
    description:
      "Web and desktop application development using .NET and SQL Server. Support in the design and maintenance of relational databases.",
  },
];

const Education = [
  {
    institution: "Technological Institute of the Americas",
    degree: "Technical Degree in Software Development",
    period: "2023 - 2025",
    description:
      "Coursework spans data structures, modern web architectures, database design, and software engineering practices.",
  },
  {
    institution: "Instituto Técnico Salesiano",
    degree: "Technical High School Diploma in Programming",
    period: "2019 - 2022",
    description:
      "Foundational training in object-oriented programming, algorithms, networking, and applied software development.",
  },
];

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        revealHeading(sectionRef.current?.querySelector("h2") ?? null);

        // Each timeline draws its red line as you scroll through it, and every
        // entry's dot lights up once the line reaches it.
        gsap.utils.toArray<HTMLElement>(".timeline").forEach((timeline) => {
          gsap.fromTo(
            timeline.querySelector(".timeline-progress"),
            { scaleY: 0 },
            {
              scaleY: 1,
              ease: "none",
              scrollTrigger: { trigger: timeline, start: "top 70%", end: "bottom 70%", scrub: 0.5 },
            },
          );

          timeline.querySelectorAll<HTMLElement>(".timeline-entry").forEach((entry) => {
            ScrollTrigger.create({ trigger: entry, start: "top 70%", toggleClass: "is-lit" });
            gsap.from(entry, {
              autoAlpha: 0,
              y: 24,
              duration: 0.9,
              ease: "expo.out",
              scrollTrigger: { trigger: entry, start: "top 88%", once: true },
            });
          });
        });
      });
      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} id="experience" className="flex flex-col gap-10 lg:gap-14 py-10 lg:py-20 px-6 md:px-10 lg:px-16">
      <div className="w-full flex flex-col gap-6">
        <div className="flex items-center gap-3 font-sans text-xs text-text-muted tracking-widest">
          <span aria-hidden className="w-8 h-px bg-accent"></span>
          <span className="font-bold">EXPERIENCE</span>
        </div>
        <h2 className="font-sans font-bold text-4xl md:text-5xl lg:text-7xl text-text-primary">
          Where I&apos;ve <span className="text-accent">worked.</span>
        </h2>
      </div>

      <div className="timeline relative flex flex-col">
        <div aria-hidden className="absolute left-0 top-0 bottom-0 w-px bg-border" />
        <div aria-hidden className="timeline-progress absolute left-0 top-0 bottom-0 w-px bg-accent origin-top scale-y-0" />

        {Experience.map((exp) => (
          <div key={`${exp.title}-${exp.position}`} className="timeline-entry">
            <div className="group flex gap-4 md:gap-10 py-8 lg:py-10 hover:bg-surface transition-all duration-300">
              <div className="relative flex gap-2 md:gap-4 items-start -translate-x-1.5 shrink-0">
                <div className="flex justify-center z-10 pt-1">
                  <span aria-hidden className="w-4 h-4 rounded-full bg-border in-[.is-lit]:bg-accent group-hover:bg-accent transition-colors duration-500" />
                </div>
                <span className="font-mono text-xs text-text-muted in-[.is-lit]:text-text-primary group-hover:text-text-primary group-hover:translate-x-2 transition-all duration-300 whitespace-nowrap">
                  {exp.period}
                </span>
              </div>
              <div className="group-hover:translate-x-2 flex flex-col gap-2 transition-all duration-300 min-w-0">
                <span className="text-accent-text text-xs uppercase tracking-widest">
                  {exp.title}
                </span>
                <h3 className="font-heading font-bold text-xl lg:text-2xl text-text-primary">
                  {exp.position}
                </h3>
                {exp.description && (
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {exp.description}
                  </p>
                )}
              </div>
            </div>
            <Separator className="bg-border h-px mx-4 lg:mx-8" />
          </div>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <h3 className="text-accent-text text-xs uppercase tracking-widest">
          Education
        </h3>
        <span aria-hidden className="flex-1 h-px bg-border mx-4 lg:mx-8"></span>
      </div>

      <div className="timeline relative flex flex-col">
        <div aria-hidden className="absolute right-0 top-0 bottom-0 w-px bg-border" />
        <div aria-hidden className="timeline-progress absolute right-0 top-0 bottom-0 w-px bg-accent origin-top scale-y-0" />

        {Education.map((edu) => (
          <div key={edu.degree} className="timeline-entry">
            <div className="group flex gap-4 md:gap-10 py-8 lg:py-10 hover:bg-surface transition-all duration-300">
              <div className="flex-1 flex flex-col gap-2 items-end text-right group-hover:-translate-x-2 transition-all duration-300 min-w-0">
                {edu.institution && (
                  <span className="text-accent-text text-xs uppercase tracking-widest">
                    {edu.institution}
                  </span>
                )}
                <h4 className="font-heading font-bold text-xl lg:text-2xl text-text-primary">
                  {edu.degree}
                </h4>
                <p className="text-text-secondary text-sm leading-relaxed max-w-2xl">
                  {edu.description}
                </p>
              </div>
              <div className="relative flex gap-2 md:gap-4 items-start translate-x-1.5 shrink-0">
                <span className="font-mono text-xs text-text-muted in-[.is-lit]:text-text-primary group-hover:text-text-primary group-hover:-translate-x-2 transition-all duration-300 whitespace-nowrap">
                  {edu.period}
                </span>
                <div className="flex justify-center z-10 pt-1">
                  <span aria-hidden className="w-4 h-4 rounded-full bg-border in-[.is-lit]:bg-accent group-hover:bg-accent transition-colors duration-500" />
                </div>
              </div>
            </div>
            <Separator className="bg-border h-px mx-4 lg:mx-8" />
          </div>
        ))}
      </div>
    </section>
  )
}
