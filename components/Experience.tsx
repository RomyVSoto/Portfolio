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

export default function ExperienceSection() {
  return (
   <section id="experience" className="flex flex-col gap-14 py-20 px-5">
        <div className="w-full flex flex-col gap-6">
          <div className="flex items-center gap-3 font-sans font-normal text-xs text-text-muted tracking-widest">
            <span className="w-8 h-px bg-accent"></span>
            <span className="font-sans font-bold">EXPERIENCE</span>
          </div>
          <span className="font-sans font-bold text-7xl text-white">
            Where i&apos;ve <span className="text-accent">worked </span>
          </span>
        </div>
        {/* Línea vertical del timeline */}
        <div className="relative flex flex-col">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />

          {/* Entry */}
          {Experience.map((exp) => (
            <div key={exp.title}>
              <div className="group flex gap-10 py-10 hover:bg-surface transition-all duration-300">
                {/* Lado izquierdo — fecha y dot */}
                <div className="relative flex gap-4 justify-center -translate-x-1.5">
                  <div className="flex justify-center z-10">
                    <span className="w-4 h-4 left-0 rounded-full bg-border group-hover:bg-accent shrink transition-all duration-300" />
                  </div>
                  <span className="font-mono text-xs text-text-muted group-hover:text-text-primary group-hover:translate-x-2 transition-all duration-300">
                    Sept 2025 — Present
                  </span>
                </div>
                {/* Lado derecho — contenido */}
                <div className="group-hover:translate-x-2 flex flex-col gap-2 transition-all duration-300">
                  <span className="text-accent text-xs uppercase tracking-widest">
                    {exp.title}
                  </span>
                  <h3 className="font-heading font-bold text-2xl text-text-primary">
                    {exp.position}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed max-w-2xl">
                    {exp.description}
                  </p>
                </div>
              </div>
              <Separator className="bg-border h-px mx-8" />
            </div>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <span className="text-accent text-xs uppercase tracking-widest">
            EDUCATION
          </span>
          <span className="w-full h-px bg-border mx-8"></span>
        </div>
        <div className="relative flex flex-col">
          <div className="absolute right-0 top-0 bottom-0 w-px bg-border" />

          {Education.map((edu) => (
            <div key={edu.degree}>
              <div className="group flex gap-10 py-10 hover:bg-surface transition-all duration-300">
                {/* Lado izquierdo — contenido */}
                <div className="flex-1 items-end text-right group-hover:-translate-x-2 flex flex-col gap-2 transition-all duration-300">
                  <span className="text-accent text-xs uppercase tracking-widest">
                    {edu.institution}
                  </span>
                  <h3 className="font-heading font-bold text-2xl text-text-primary">
                    {edu.degree}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed max-w-2xl">
                    {edu.description}
                  </p>
                </div>
                {/* Lado derecho — fecha y dot */}
                <div className="relative flex gap-4 justify-center translate-x-1.5 shrink-0">
                  <span className="font-mono text-xs text-text-muted group-hover:text-text-primary group-hover:-translate-x-2 transition-all duration-300">
                    {edu.period}
                  </span>
                  <div className="flex justify-center z-10">
                    <span className="w-4 h-4 rounded-full bg-border group-hover:bg-accent shrink transition-all duration-300" />
                  </div>
                </div>
              </div>
              <Separator className="bg-border h-px mx-8" />
            </div>
          ))}
        </div>
      </section>
  )
}
