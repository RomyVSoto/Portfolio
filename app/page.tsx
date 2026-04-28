import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Copy,
  Diamond,
  Download,
  ExternalLink,
  Mail,
} from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa"
import { Separator } from "@base-ui/react";

const Projects = [
  {
    number: "01",
    category: "Appointment Booking",
    name: "BookIt",
    description:
      "Full-stack appointment booking system with authentication, Google OAuth, and role-based access control. Clients book and manage appointments while admins control services, schedules, and availability.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Supabase Auth",
      "Google OAuth",
      "TailwindCSS",
      "React Query",
      "Zod",
      "React Hook Form",
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
    technologies: [
      "Next.js",
      "JavaScript",
      "TailwindCSS",
      "Node.js",
      "Nodemailer",
    ],
    image: "/GCL.png",
    liveView: "https://www.globalclink.com/",
    github: "https://github.com/RomyVSoto/GCL-Webpage",
  },
  {
    number: "03",
    category: "Weather Dashboard",
    name: "Weather App",
    description:
      "Weather dashboard showing real-time conditions and 5-day forecast for any city. Features city search with debounced autocomplete, UV index, visibility, and sunrise/sunset data.",
    technologies: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Shadcn UI",
      "React Query",
      "WeatherAPI",
      "use-debounce",
    ],
    image: "/WeatherApp.png",
    liveView: "https://weather-app-phi-seven-33.vercel.app/",
    github: "https://github.com/RomyVSoto/Weather-App",
  },
  {
    number: "04",
    category: "Expense Tracker",
    name: "Split Sync",
    description:
      "Real-time group expense tracker. Create a group, share the invite code, and watch expenses update instantly as members add them.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Supabase Realtime",
      "TailwindCSS",
      "Shadcn UI",
      "React Query",
      "Recharts",
      "Zod",
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
      "Next.js",
      "TypeScript",
      "Prisma",
      "tRPC",
      "NextAuth",
      "PostgreSQL",
      "TailwindCSS",
      "Shadcn UI",
      "Zod",
      "dnd-kit",
    ],
    image: "/TaskFlow.png",
    liveView: "https://task-flow-orcin-seven.vercel.app/",
    github: "https://github.com/RomyVSoto/task-flow",
  },
];

const Experience = [
  {
    active: true,
    title: "Claro Dominicana",
    position: "Network Operations Center",
    period: "2025 - Present",
    description:
      "Real-time monitoring of the telecommunications network and initial fault diagnosis. Reception, classification, and recording of network alarms and incidents.",
  },
  {
    active: false,
    title: "Technology Int.",
    position: "Full-Stack Developer",
    period: "2024",
    description:
      "Development of frontend and backend functionalities for enterprise web applications. Collaboration with multidisciplinary teams to improve usability and performance.",
  },
  {
    active: false,
    title: "Technology Int.",
    position: "Intern",
    period: "2021-2022",
    description:
      "Web and desktop application development using .NET and SQL Server. Support in the design and maintenance of relational databases.",
  },
];

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

export default function Home() {
  return (
    <div className="flex flex-col gap-12 py-20">
      {/* Hero */}
      <section
        id="hero"
        className="flex items-center justify-between min-h-screen gap-16 py-16 px-16"
      >
        {/* Columna izquierda */}
        <div className="w-3/4 flex flex-col gap-8">
          <span className="flex items-center gap-2 font-sans text-xs text-text-secondary tracking-widest">
            <span className="w-2 h-2 rounded-full bg-green pulse-dot" />
            AVAILABLE FOR WORK — REMOTE / DR
          </span>
          <span className="flex flex-col font-sans font-black text-9xl tracking-tight">
            <p>Full-Stack</p>
            <p className="italic text-accent font-extrabold">Developer.</p>
          </span>
          <span className="font-sans font-normal text-lg text-text-secondary w-3/4">
            Building{" "}
            <strong className="text-text-primary">
              scalable web applications
            </strong>{" "}
            with modern technologies. Based in Santo Domingo, DR — shipping
            production interfaces from concept to deploy.
          </span>
          <span className="flex gap-4">
            <Button className="gap-2 bg-accent text-md text-white px-8 py-7 rounded-none hover:bg-accent-hover">
              View My Work <ArrowRight />
            </Button>
            <Button
              variant="outline"
              className="gap-2 px-8 py-7 border-accent text-sm text-accent rounded-none hover:bg-accent hover:text-white transition-all"
            >
              <Download /> Download CV
            </Button>
          </span>
          <span className="flex gap-4 items-center text-text-secondary">
            <p className="text-text-muted text-xs tracking-widest">STACK</p>
            <Separator
              orientation="vertical"
              className="bg-text-primary/10 w-px h-6"
            />
            <span className="flex items-center gap-3 font-sans text-sm">
              <p>Next.js</p>
              <span className="rounded-full w-0.5 h-0.5 bg-text-secondary" />
              <p>TypeScript</p>
              <span className="rounded-full w-0.5 h-0.5 bg-text-secondary" />
              <p>Supabase</p>
              <span className="rounded-full w-0.5 h-0.5 bg-text-secondary" />
              <p>Prisma</p>
              <span className="rounded-full w-0.5 h-0.5 bg-text-secondary" />
              <p>tRPC</p>
            </span>
          </span>
        </div>

        {/* Columna derecha */}
        <div className="w-2/4 h-120 relative border border-border flex flex-col justify-between py-4 px-6">
          {/* Esquinas */}
          <span className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-accent" />
          <span className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-accent" />
          <span className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-accent" />
          <span className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-accent" />

          {/* Header RV/2026 y LIVE */}
          <div className="flex justify-between items-center py-4">
            <span className="font-mono text-xs text-text-muted tracking-widest">
              RV / 2026
            </span>
            <span className="flex items-center gap-1.5 font-mono text-xs text-text-muted">
              <span className="w-1.5 h-1.5 rounded-full bg-accent pulse-dot" />
              LIVE
            </span>
          </div>

          {/* Esfera */}
          <div className="flex items-center justify-center flex-1">
            <div className="absolute w-80 h-80 rounded-full border border-border opacity-50" />
            <div
              className="relative w-64 h-64 rounded-full breathe"
              style={{
                background:
                  "radial-gradient(circle at 35% 35%, #E5192A, #8B0000)",
                boxShadow: "0 0 80px 30px #C1121F44",
              }}
            />
          </div>

          {/* Código snippet */}
          <div className="font-mono text-xs space-y-1 border border-border p-3 z-10 bg-bg">
            <p className="text-text-muted">// portfolio.tsx</p>
            <p>
              <span className="text-accent">const </span>
              <span className="text-text-primary">developer</span>
              <span className="text-text-secondary"> = {"{"}</span>
            </p>
            <p className="pl-4 text-text-secondary">
              name:{" "}
              <span className="text-text-primary">&apos;Romy Valdez&apos;</span>
              ,
            </p>
            <p className="pl-4 text-text-secondary">
              role:{" "}
              <span className="text-text-primary">&apos;Full-Stack&apos;</span>,
            </p>
            <p className="pl-4 text-text-secondary">
              status: <span className="text-accent">&apos;available&apos;</span>
            </p>
            <p className="text-text-secondary">{"}"}</p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="flex flex-col gap-14 py-1 px-5">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3 font-sans font-normal text-xs text-text-muted tracking-widest">
            <span className="w-8 h-px bg-accent"></span>
            <span className="font-sans font-bold">SELECTED WORK</span>
          </div>
          <span className="flex gap-2 font-sans font-bold text-7xl text-white">
            Personal <p className="text-accent">projects.</p>
          </span>
        </div>
        {Projects.map((project) => (
          <div
            key={project.name}
            className="flex flex-col bg-surface hover:[&_.bar]:w-full hover:[&_.num]:text-accent hover:[&_.image]:shadow-xl hover:[&_.tab-name]:text-accent border border-border-subtle hover:border-border hover:scale-[100.2%] transition-all duration-300"
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
                    className="bg-transparent hover:bg-transparent text-xs hover:text-accent hover:*:text-accent flex items-center underline underline-offset-6 decoration-text-muted hover:decoration-accent transition-all duration-75 cursor-pointer"
                  >
                    VIEW LIVE <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                  <a
                    href={project.github}
                    className="bg-transparent hover:bg-transparent text-xs hover:text-accent hover:*:text-accent flex items-center underline underline-offset-6 decoration-text-muted hover:decoration-accent transition-all duration-75 cursor-pointer"
                  >
                    GITHUB <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>

              <div className="w-full flex flex-col py-10 px-10 ">
                <div className="bg-surface flex gap-4 border border-border p-2">
                  <span className="flex items-center gap-2 text-text-muted">
                    <span className="w-2 h-2 bg-text-muted rounded-full"></span>
                    <span className="w-2 h-2 bg-text-muted rounded-full"></span>
                    <span className="w-2 h-2 bg-text-muted rounded-full"></span>
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
      </section>

      {/* About */}
      <section
        id="about"
        className="flex items-center justify-between gap-14 py-1 px-5"
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

      {/* Experience & Education */}
      <section id="experience" className="py-12 lg:py-20">
        <div className="flex items-center gap-3 font-sans font-normal text-xs text-text-muted tracking-widest">
          <span className="w-8 h-px bg-accent"></span>
          <span className="font-sans font-bold">EXPERIENCE</span>
        </div>
      </section>

      {/* Contact */}
      <section className="relative overflow-hidden flex flex-col gap-16 items-center">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 60%, #C1121F33 0%, transparent 70%)",
          }}
        />
        <div className="flex flex-col items-center gap-8">
          <div className="flex items-center gap-3 font-sans font-normal text-xs text-text-muted tracking-widest">
            <span className="w-8 h-px bg-accent"></span>
            <span className="font-sans font-semibold tracking-widest">
              GET IN TOUCH
            </span>
            <span className="w-8 h-px bg-accent"></span>
          </div>
          <span className="font-sans font-bold text-8xl text-[#F9F6FF] text-center tracking-tight">
            Let&apos;s build something
            <br />
            <span className="text-accent italic">great together.</span>
          </span>
          <span className="font-heading font-normal text-lg text-text-secondary text-center">
            Open to full-time roles, freelance projects, and collaborations.
            <br />
            Replies within 24 hours.
          </span>
        </div>
        <div className="w-2/3 flex gap-8 justify-between">
          <div className="w-full flex flex-col gap-5 border border-border hover:border-accent hover:-translate-y-1 hover:shadow-xl shadow-accent px-12 py-6 transition-all duration-300">
            <span className="w-full flex justify-between items-center font-normal text-xs text-text-muted tracking-widest">
              <Mail className="text-accent" size={20}/>
              <p>EMAIL</p>
            </span>
            <span className="font-mono font-normal text-sm text-text-primary">
              romyvaldez@gmail.com
            </span>
            <Separator className="border border-muted" />
            <a
              href="mailto:romyvaldez@gmail.com"
              className="flex justify-between font-sans font-normal text-xs text-text-secondary tracking-widest cursor-pointer hover:text-accent transition-all duration-300"
            >
              <p>CONTACT</p>
              <Copy size={16} />
            </a>
          </div>
          <div className="w-full flex flex-col gap-5 border border-border hover:border-accent hover:-translate-y-1 hover:shadow-xl shadow-accent px-12 py-6 transition-all duration-300">
            <span className="w-full flex justify-between items-center font-normal text-xs text-text-muted tracking-widest">
              <FaLinkedin className="text-accent" size={20} />
              <p>LINKEDIN</p>
            </span>
            <span className="font-mono font-normal text-sm text-text-primary">
              linkedin.com/in/romyvaldez
            </span>
            <Separator className="border border-muted" />
            <a
              href="https://www.linkedin.com/in/romyvaldez/"
              target="_blank"
              className="flex justify-between font-sans font-normal text-xs text-text-secondary tracking-widest cursor-pointer hover:text-accent transition-all duration-300"
            >
              <p>VISIT</p>
              <ExternalLink size={16} />
            </a>
          </div>
          <div className="w-full flex flex-col gap-5 border border-border hover:border-accent hover:-translate-y-1 hover:shadow-lg shadow-accent px-12 py-6 transition-all duration-300">
            <span className="w-full flex justify-between items-center font-normal text-xs text-text-muted tracking-widest">
              <FaGithub className="text-accent" size={20} />
              <p>GITHUB</p>
            </span>
            <span className="font-mono font-normal text-sm text-text-primary">
              github.com/RomyVSoto
            </span>
            <Separator className="border border-muted" />
            <a
              href="https://github.com/RomyVSoto"
              target="_blank"
              className="flex justify-between font-sans font-normal text-xs text-text-secondary tracking-widest cursor-pointer hover:text-accent transition-all duration-300"
            >
              <p>VISIT</p>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
