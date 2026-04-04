import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex justify-between items-center bg-white px-10 py-10">
      <div className="flex flex-col">
        <span className="font-heading font-bold text-lg tracking-tighter">
          Romy Valdez
        </span>
        <span className="font-sans font-light text-sm text-[#71717A]">
          &copy; 2026 -{" "}
          <Link
            href="mailto:romyavaldez@gmail.com"
            className="underline cursor-pointer hover:decoration-red-500 transition-all"
          >
            romyavaldez@gmail.com
          </Link>
        </span>
      </div>
      <div className="flex gap-10">
        <span className="font-sans font-thin text-sm text-[#71717A] underline underline-offset-6 decoration-transparent hover:underline-offset-1 hover:decoration-red-500 transition-all cursor-pointer"><Link href="https://www.linkedin.com/in/romyvaldez/">LINKEDIN</Link></span>
        <span className="font-sans font-thin text-sm text-[#71717A] underline underline-offset-6 decoration-transparent hover:underline-offset-1 hover:decoration-red-500 transition-all cursor-pointer"><Link href="https://github.com/RomyVSoto">GITHUB</Link></span>
        <span className="font-sans font-thin text-sm text-[#71717A] underline underline-offset-6 decoration-transparent hover:underline-offset-1 hover:decoration-red-500 transition-all cursor-pointer"><Link href="https://path.cv/romyavaldez">READ.CV</Link></span>
      </div>
    </footer>
  );
}
