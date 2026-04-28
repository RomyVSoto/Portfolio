import ProjectsSection from "@/components/Projects";
import HeroSection from "@/components/Hero";
import AboutSection from "@/components/About";
import ExperienceSection from "@/components/Experience";
import ContactSection from "@/components/Contact";

export default function Home() {
  

  return (
    <div className="flex flex-col gap-20 py-10">
      {/* Hero */}
      <HeroSection />

      {/* Projects */}
      <ProjectsSection />

      {/* About */}
      <AboutSection />

      {/* Experience & Education */}
      <ExperienceSection />

      {/* Contact */}
      <ContactSection />
    </div>
  );
}
