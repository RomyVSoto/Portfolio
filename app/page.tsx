import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowDown, ArrowUpRight, Code } from "lucide-react";
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

export default function Home() {
  return (
    <div className="flex flex-col gap-40 py-20">
      {/* Hero */}
      <section id="hero" className="flex flex-col gap-5 px-10">
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
      </section>

      {/* Projects */}
      <section id="projects" className="flex flex-col gap-10 px-10">
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
      </section>

      {/* Experience */}
      <section id="experience" className="flex flex-col gap-10 px-10 bg-[#F6F3F2]">
        <div className="flex flex-col">
          <span className="font-sans font-light text-xs text-[#B91C1C] tracking-widest">
            PROFESSIONAL GROWTH
          </span>
          <span className="font-heading font-bold text-3xl tracking-tight">
            Career Timeline
          </span>
        </div>
      </section>

      {/* About */}
      <section className="flex flex-col gap-10 px-10">
        
      </section>
    </div>
  );
}
