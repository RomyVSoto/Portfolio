import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowDown, ArrowUpRight, Code, Dot } from "lucide-react";
import Link from "next/link";

const Projects = [
  {
    name: "BookIt",
    description:
      "A high-performance booking engine designed for scalability. Featuring real-time availability updates, automated scheduling workflows, and a streamlined administrative interface.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "React Query",
      "Supabase",
    ],
    image: "/BookIt.png",
    liveView: "https://book-it-drab.vercel.app/",
    github: "https://github.com/RomyVSoto/BookIt",
  },
  {
    name: "Global Communications Link",
    description:
      "A comprehensive communication platform connecting businesses with global clients. Features include real-time messaging, file sharing, and multi-language support.",
    technologies: [
      "Next.js",
      "JavaScript",
      "TawilindCSS",
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
      "A weather application that displays current weather conditions and forecasts for any location worldwide.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React Query"],
    image: "/WeatherApp.png",
    liveView: "https://weather-app-phi-seven-33.vercel.app/",
    github: "https://github.com/RomyVSoto/Weather-App",
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
    <div className="flex flex-col gap-20 sm:gap-28 md:gap-40 pt-20">
      {/* Hero */}
      <section
        id="hero"
        className="flex items-center px-6 sm:px-10 py-12 sm:py-20"
      >
        <div className="flex flex-col gap-5">
          <div className="flex flex-col">
            <span className="font-sans font-light text-xs text-[#B91C1C] tracking-widest">
              AVAILABLE FOR OPORTUNITIES
            </span>
            <span className="font-heading font-bold text-4xl sm:text-5xl tracking-tight">
              Romy Valdez
            </span>
            <span className="font-heading font-semibold text-xl sm:text-2xl text-[#7B7A7A] tracking-widest">
              Jr. Full Stack Developer
            </span>
            <p className="font-sans font-light text-sm text-[#7B7A7A] max-w-md sm:max-w-150">
              Building modern web applications with clean code and real-world
              solutions. Architecting digital experiences that balance technical
              maturity with refined simplicity.
            </p>
          </div>
          <span className="flex gap-2">
            <Link href="#projects">
              <Button className="bg-[#B91C1C] text-white px-6 py-5 rounded-md flex items-center">
                View Projects <ArrowDown className="w-5 h-5" />
              </Button>
            </Link>
            <Button className="bg-[#E4E2E2] text-black px-6 py-5 rounded-md">
              Contact Me
            </Button>
          </span>
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
