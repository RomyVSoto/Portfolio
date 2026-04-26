import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Code,
  Dot,
  Download,
  MoveRight,
} from "lucide-react";
import Link from "next/link";
import { Separator } from "@base-ui/react";

const Projects = [
  {
    name: "BookIt",
    description:
      "Full-stack appointment booking system with authentication, Google OAuth, and role-based access control. Clients book and manage appointments while admins control services, schedules, and availability. Built with Next.js, Supabase, and React Query.",
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
    name: "Global Communications Link",
    description:
      "Corporate website for Global Communications Link, a fiber optic and network infrastructure company based in the US. Features service showcase, certifications, codes & standards, and a contact/quote request form. Built with Next.js and Node.js/Express.",
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
    name: "Weather App",
    description:
      "Weather dashboard showing real-time conditions and 5-day forecast for any city. Features city search with debounced autocomplete, UV index, visibility, and sunrise/sunset data. Built with Next.js, React Query, and WeatherAPI.",
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
    name: "Split Sync",
    description:
      "Real-time group expense tracker. Create a group, share the invite code, and watch expenses update instantly as members add them. Built with Next.js, Supabase Realtime, React Query, and Recharts.",
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
    name: "TaskFlow",
    description:
      "Full-stack Kanban board with drag and drop. Create boards, manage tasks across columns, and track priorities in real time. Built with the T3 Stack — Next.js, Prisma, tRPC, and NextAuth.",
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
    <div className="flex flex-col gap-20 sm:gap-28 md:gap-40 pt-20 px-16">
      {/* Hero */}
      <section
        id="hero"
        className="flex items-center justify-between min-h-screen gap-16 py-20"
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
      <section id="projects" className="flex items-center py-10">
        <div className="flex flex-col gap-8 sm:gap-10 px-6 sm:px-10 w-full">
          <div className="flex flex-col gap-2">
            <span className="font-sans font-light text-xs text-[#B91C1C] tracking-widest">
              Projects
            </span>
            <span className="font-heading font-bold text-3xl tracking-tight">
              Recent Projects
            </span>
          </div>
          <div className="px-10 sm:px-12 md:px-16">
            <Carousel>
              <CarouselContent>
                {Projects.map((project) => (
                  <CarouselItem
                    key={project.name}
                    className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10"
                  >
                    <div className="w-full md:w-auto shrink-0">
                      <Image
                        src={project.image}
                        alt={project.name}
                        width={700}
                        height={500}
                        className="rounded-lg w-full md:w-125 lg:w-175 h-auto max-h-52 sm:max-h-64 md:max-h-none object-cover md:object-fill"
                      />
                    </div>
                    <div className="flex flex-col gap-4 md:gap-6">
                      <span className="font-heading font-bold text-xl sm:text-2xl">
                        {project.name}
                      </span>
                      <p className="font-sans font-light text-sm sm:text-md text-[#5F5F5F]">
                        {project.description}
                      </p>
                      <span className="font-sans font-thin flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <p
                            key={tech}
                            className="text-[#525252] text-xs px-2 py-1 bg-[#E4E2E1] rounded-full"
                          >
                            {tech}
                          </p>
                        ))}
                      </span>
                      <div className="flex gap-3">
                        <Link href={project.liveView} target="_blank">
                          <Button className="p-1 bg-transparent font-sans font-extrabold tracking-tighter text-[#B91C1C] text-sm cursor-pointer hover:bg-[#5F5F5F] hover:text-white hover:scale-105 transition-all">
                            Live View <ArrowUpRight className="w-5 h-5" />
                          </Button>
                        </Link>
                        <Link href={project.github} target="_blank">
                          <Button className="p-1 bg-transparent font-sans font-semibold tracking-tighter text-[#5F5F5F] text-sm cursor-pointer hover:bg-[#B91C1C] hover:text-white hover:scale-105 transition-all">
                            GitHub <Code className="w-5 h-5" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="w-10 h-10" />
              <CarouselNext className="w-10 h-10" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section
        id="experience"
        className="flex flex-col md:flex-row gap-8 md:gap-14 p-6 md:p-10 py-12 md:py-20 bg-[#F6F3F2]"
      >
        <div className="flex flex-col gap-2 md:min-w-65">
          <span className="font-sans font-light text-xs text-[#B91C1C] tracking-widest">
            PROFESSIONAL GROWTH
          </span>
          <span className="font-heading font-bold text-3xl tracking-tight">
            Career Timeline
          </span>
          <p className="font-sans font-light text-md text-[#5F5F5F] max-w-md">
            A trajectory focused on technical precision and network
            architecture, now converging into full- stack development.
          </p>
        </div>
        <div className="flex flex-col gap-10">
          {Experience.map((experience) => (
            <div key={experience.title} className="flex gap-4">
              <span className="flex flex-col items-center">
                <Dot
                  className={`scale-300 z-10 ${experience.active ? "text-[#B91C1C]" : "text-[#B3B2B1]"}`}
                />
                <p className="h-full w-0 border-[0.5px] border-[#D4D2D0]"></p>
              </span>
              <span className="flex flex-col gap-1">
                <p className="font-sans font-semibold text-xs text-[#B91C1C]">
                  {experience.period}
                </p>
                <h1 className="font-heading font-bold text-xl">
                  {experience.title}
                </h1>
                <h3 className="font-heading font-base text-md text-[#5F5F5F] tracking-tighter">
                  {experience.position}
                </h3>
                <p className="font-sans font-light text-sm text-[#5F5F5F] max-w-md">
                  {experience.description}
                </p>
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="flex flex-col lg:flex-row items-center gap-8 lg:gap-14 p-6 lg:p-10 py-12 lg:py-20"
      >
        <div className="flex flex-col gap-2 bg-white p-8 sm:p-12 lg:p-20 rounded-lg w-full lg:w-auto">
          <span className="font-sans font-light text-xs text-[#B91C1C] tracking-widest">
            THE DEVELOPER
          </span>
          <span className="font-heading font-bold text-2xl sm:text-3xl tracking-tight">
            Bridging Networking & Software Engineering
          </span>
          <span className="font-sans font-light text-md text-[#5F5F5F] max-w-lg">
            I am a Junior Full-Stack Developer with a background in network
            operations at Claro Dominicana, one of the largest telecom companies
            in the Dominican Republic.
          </span>
        </div>
        <div className="flex flex-col gap-4 w-full lg:w-auto lg:p-10">
          <div className="flex flex-col gap-2 bg-[#F0EDED] px-4 py-6 rounded-lg">
            <span className="font-heading font-bold text-sm text-[#323232] tracking-wider">
              FRONTEND
            </span>
            <span className="flex flex-wrap gap-2">
              {Technologies.frontend.map((tech) => (
                <span
                  key={tech}
                  className="font-sans font-light text-xs text-[#5F5F5F] px-2 py-1 bg-white rounded-md"
                >
                  {tech}
                </span>
              ))}
            </span>
          </div>
          <div className="flex flex-col gap-2 bg-[#FFE0E0] px-4 py-6 rounded-lg">
            <span className="font-heading font-bold text-sm text-[#991B1B] tracking-wider">
              BACKEND & DATABASES
            </span>
            <span className="flex flex-wrap gap-2">
              {Technologies.backend.map((tech) => (
                <span
                  key={tech}
                  className="font-sans font-light text-xs text-[#5F5F5F] px-2 py-1 bg-white rounded-md"
                >
                  {tech}
                </span>
              ))}
            </span>
          </div>
          <div className="flex flex-col gap-2 bg-[#F0EDED] px-4 py-6 rounded-lg">
            <span className="font-heading font-bold text-sm text-[#991B1B] tracking-wider">
              TOOLS
            </span>
            <span className="flex flex-wrap gap-2">
              {Technologies.tools.map((tech) => (
                <span
                  key={tech}
                  className="font-sans font-light text-xs text-[#5F5F5F] px-2 py-1 bg-white rounded-md"
                >
                  {tech}
                </span>
              ))}
            </span>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 py-16 md:py-24 px-8 sm:px-16 md:px-24 lg:px-40 bg-[#0E0E0E]">
        <div className="flex flex-col gap-4">
          <span className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-[#F9F6FF] tracking-tight">
            Let&apos;s build something enduring.
          </span>
          <span className="font-sans font-light text-base sm:text-lg text-[#9E9C9C] max-w-xl">
            Open to collaborative projects, technical discussions, or
            professional opportunities in full-stack development.
          </span>
        </div>
        <div className="shrink-0">
          <Link href="mailto:romyavaldez@gmail.com">
            <Button className="font-heading font-bold text-base sm:text-lg px-10 py-6 sm:px-16 sm:py-7 md:px-20 md:py-8 cursor-pointer hover:scale-105 transition-all">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
