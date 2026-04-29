import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex flex-col sm:flex-row items-center justify-between gap-2 bg-surface px-6 md:px-14 py-6 border-t border-border font-heading text-sm text-text-secondary">
      <span>&copy; 2026</span>
      <span>
        Designed & built by <span className="text-accent">Romy Valdez</span>
      </span>
      <span className="flex gap-4">
        <a href="https://www.linkedin.com/in/romyvaldez/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-300">
          <FaLinkedin size={20}/>
        </a>
        <a href="https://github.com/RomyVSoto" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-300">
          <FaGithub size={20}/>
        </a>
      </span>
    </footer>
  );
}
