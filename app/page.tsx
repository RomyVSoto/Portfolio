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
      "Tawilind CSS",
      "Node.js",
      "Nodemailer",
    ],
    image: "/GCL.png",
    liveView: "https://www.globalclink.com/",
    github: "https://github.com/RomyVSoto/GCL-Webpage",
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

export default function Home() {
  return (
    <div className="flex flex-col gap-40 py-20">
      {/* Hero */}
      <section id="hero" className="flex items-center px-10 py-20">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col">
            <span className="font-sans font-light text-xs text-[#B91C1C] tracking-widest">
              AVAILABLE FOR OPORTUNITIES
            </span>
            <span className="font-heading font-bold text-5xl tracking-tight">
              Romy Valdez
            </span>
            <span className="font-heading font-semibold text-2xl text-[#7B7A7A] tracking-widest">
              Jr. Full Stack Developer
            </span>
            <p className="font-sans font-light text-sm text-[#7B7A7A] max-w-150">
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
        <div className="flex flex-col gap-10 px-10">
          <div className="flex flex-col gap-2">
            <span className="font-sans font-light text-xs text-[#B91C1C] tracking-widest">
              Projects
            </span>
            <span className="font-heading font-bold text-3xl tracking-tight">
              Recent Projects
            </span>
          </div>
          <div className="px-16">
            <Carousel>
              <CarouselContent>
                {Projects.map((project) => (
                  <CarouselItem
                    key={project.name}
                    className="flex items-center gap-10"
                  >
                    <div>
                      <Image
                        src={project.image}
                        alt={project.name}
                        width={700}
                        height={500}
                        className="rounded-lg"
                      />
                    </div>
                    <div className="flex flex-col gap-6">
                      <span className="font-heading font-bold text-2xl">
                        {project.name}
                      </span>
                      <p className="font-sans font-light text-md text-[#5F5F5F] max-w-3xl">
                        {project.description}
                      </p>
                      <span className="font-sans font-thin flex gap-2">
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
      <section id="experience" className="flex gap-14 p-10 py-20 bg-[#F6F3F2]">
        <div className="flex flex-col gap-2">
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
                <Dot className={`scale-300 z-10 ${experience.active ? 'text-[#B91C1C]' : 'text-[#B3B2B1]'}`}/>
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
      <section className="flex flex-col gap-10 px-10"></section>
    </div>
  );
}
