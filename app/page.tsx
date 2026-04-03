import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col gap-5">
      {/* Hero */}
      <section className="flex flex-col gap-5">
        <span className="font-sans font-light text-xs text-[#B91C1C] tracking-widest">
          AVAILABLE FOR OPORTUNITIES
        </span>
        <div className="flex flex-col gap-1">
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
          <Button className="bg-[#B91C1C] text-white px-6 py-5 rounded-md">
            View Projects
          </Button>
          <Button className="bg-[#E4E2E2] text-black px-6 py-5 rounded-md">
            Contact Me
          </Button>
        </span>
      </section>

      {/* Projects */}
      <section></section>

      {/* Experience */}
      <section></section>

      {/* About */}
      <section></section>
    </div>
  );
}
