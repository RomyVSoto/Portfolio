import ProjectsSection from "@/components/Projects";
import HeroSection from "@/components/Hero";
import AboutSection from "@/components/About";
import ExperienceSection from "@/components/Experience";
import ContactSection from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 md:gap-16 lg:gap-20 py-0">
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  );
}
