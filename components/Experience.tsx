'use client'

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Separator } from "@base-ui/react"

const Experience = [
  {
    title: "Claro Dominicana",
    position: "Network Operations Center",
    period: "2025 - Present",
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
    institution: "Technical High School Diploma in Programming",
    degree: "Technical High School Diploma in Programming",
    period: "2019 - 2022",
    description:
      "Foundational training in object-oriented programming, algorithms, networking, and applied software development.",
  },
];

gsap.registerPlugin(ScrollTrigger);

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".experience-header", {
        opacity: 0,
        y: 40,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".experience-header",
          start: "top 85%",
          once: true,
        }
      })

      document.querySelectorAll(".experience-entry").forEach((entry) => {
        gsap.from(entry, {
          opacity: 0,
          x: -40,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: entry,
            start: "top 85%",
            once: true,
          }
        })
      })

      gsap.from(".education-label", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".education-label",
          start: "top 85%",
          once: true,
        }
      })

      document.querySelectorAll(".education-entry").forEach((entry) => {
        gsap.from(entry, {
          opacity: 0,
          x: 40,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: entry,
            start: "top 85%",
            once: true,
          }
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="experience" className="flex flex-col gap-10 lg:gap-14 py-10 lg:py-20 px-6 md:px-10 lg:px-16">
      <div className="experience-header w-full flex flex-col gap-6">
        <div className="flex items-center gap-3 font-sans font-normal text-xs text-text-muted tracking-widest">
          <span className="w-8 h-px bg-accent"></span>
          <span className="font-sans font-bold">EXPERIENCE</span>
        </div>
        <span className="font-sans font-bold text-4xl md:text-5xl lg:text-7xl text-white">
          Where i&apos;ve <span className="text-accent">worked </span>
        </span>
      </div>

      <div className="relative flex flex-col">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />

        {Experience.map((exp) => (
          <div key={exp.position} className="experience-entry">
            <div className="group flex gap-4 md:gap-10 py-8 lg:py-10 hover:bg-surface transition-all duration-300">
              <div className="relative flex gap-2 md:gap-4 items-start -translate-x-1.5 shrink-0">
                <div className="flex justify-center z-10 pt-1">
                  <span className="w-4 h-4 rounded-full bg-border group-hover:bg-accent transition-all duration-300" />
                </div>
                <span className="font-mono text-xs text-text-muted group-hover:text-text-primary group-hover:translate-x-2 transition-all duration-300 whitespace-nowrap">
                  {exp.period}
                </span>
              </div>
              <div className="group-hover:translate-x-2 flex flex-col gap-2 transition-all duration-300 min-w-0">
                <span className="text-accent text-xs uppercase tracking-widest">
                  {exp.title}
                </span>
                <h3 className="font-heading font-bold text-xl lg:text-2xl text-text-primary">
                  {exp.position}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
            <Separator className="bg-border h-px mx-4 lg:mx-8" />
          </div>
        ))}
      </div>

      <div className="education-label flex items-center gap-4">
        <span className="text-accent text-xs uppercase tracking-widest">
          EDUCATION
        </span>
        <span className="w-full h-px bg-border mx-4 lg:mx-8"></span>
      </div>

      <div className="relative flex flex-col">
        <div className="absolute right-0 top-0 bottom-0 w-px bg-border" />

        {Education.map((edu) => (
          <div key={edu.degree} className="education-entry">
            <div className="group flex gap-4 md:gap-10 py-8 lg:py-10 hover:bg-surface transition-all duration-300">
              <div className="flex-1 flex flex-col gap-2 items-end text-right group-hover:-translate-x-2 transition-all duration-300 min-w-0">
                <span className="text-accent text-xs uppercase tracking-widest">
                  {edu.institution}
                </span>
                <h3 className="font-heading font-bold text-xl lg:text-2xl text-text-primary">
                  {edu.degree}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed max-w-2xl">
                  {edu.description}
                </p>
              </div>
              <div className="relative flex gap-2 md:gap-4 items-start translate-x-1.5 shrink-0">
                <span className="font-mono text-xs text-text-muted group-hover:text-text-primary group-hover:-translate-x-2 transition-all duration-300 whitespace-nowrap">
                  {edu.period}
                </span>
                <div className="flex justify-center z-10 pt-1">
                  <span className="w-4 h-4 rounded-full bg-border group-hover:bg-accent transition-all duration-300" />
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
