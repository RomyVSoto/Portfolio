import { Diamond } from "lucide-react"

const Technologies = {
  frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "React Query"],
  backend: [
    "Node.js",
    "Express",
    "Python",
    "C#",
    "PostgreSQL",
    "SQL Server",
    "Supabase",
    "JWT",
  ],
  tools: ["Git", "Docker", "VS Code", "Postman"],
};

export default function About() {
  return (
    <section
            id="about"
            className="flex items-center justify-between gap-14 py-10 px-5"
          >
            <div className="w-full flex flex-col gap-6">
              <div className="flex items-center gap-3 font-sans font-normal text-xs text-text-muted tracking-widest">
                <span className="w-8 h-px bg-accent"></span>
                <span className="font-sans font-bold">ABOUT ME</span>
              </div>
              <span className="font-sans font-bold text-5xl text-white">
                Passionate about <span className="text-accent">clean code</span> and
                great UX.
              </span>
              <span className="font-sans font-normal text-lg text-text-secondary max-w-xl ">
                I&apos;m a full-stack developer based in Santo Domingo. My focus is
                building fast, accessible, well-architected web applications —
                pairing strong technical foundations with thoughtful interface
                design.
                <br />
                <br />I work primarily in the React and Next.js ecosystem, lean on
                TypeScript for safety, and care a lot about details: motion that
                feels right, type that reads well, and APIs that don&apos;t surprise
                the people consuming them.
              </span>
              <span></span>
            </div>
            <div className="w-5/6 flex flex-col gap-10">
              <div className="space-y-4">
                <span className="flex items-center gap-3 font-heading font-medium text-sm text-accent tracking-widest">
                  <Diamond className="w-3 h-3" /> FRONTEND
                </span>
                <span className="flex flex-wrap gap-2 font-sans font-normal text-xs text-text-muted">
                  {Technologies.frontend.map((tech) => (
                    <p
                      key={tech}
                      className="font-heading font-normal text-text-primary p-2 px-3 border border-border tracking-wider"
                    >
                      {tech}
                    </p>
                  ))}
                </span>
              </div>
              <div className="space-y-4">
                <span className="flex items-center gap-3 font-heading font-medium text-sm text-accent tracking-widest">
                  <Diamond className="w-3 h-3" /> BACKEND
                </span>
                <span className="flex flex-wrap gap-2 font-sans font-normal text-xs text-text-muted">
                  {Technologies.backend.map((tech) => (
                    <p
                      key={tech}
                      className="font-heading font-normal text-text-primary p-2 px-3 border border-border tracking-wider"
                    >
                      {tech}
                    </p>
                  ))}
                </span>
              </div>
              <div className="space-y-4">
                <span className="flex items-center gap-3 font-heading font-medium text-sm text-accent tracking-widest">
                  <Diamond className="w-3 h-3" /> TOOLS
                </span>
                <span className="flex flex-wrap gap-2 font-sans font-normal text-xs text-text-muted">
                  {Technologies.tools.map((tech) => (
                    <p
                      key={tech}
                      className="font-heading font-normal text-text-primary p-2 px-3 border border-border tracking-wider"
                    >
                      {tech}
                    </p>
                  ))}
                </span>
              </div>
            </div>
          </section>
  )
}
