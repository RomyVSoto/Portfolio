"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { MOTION_OK, revealHeading } from "@/lib/motion";

import { ExternalLink, Mail, ArrowUpRight } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const channels = [
  {
    label: "EMAIL",
    value: "romyvaldez@gmail.com",
    href: "mailto:romyvaldez@gmail.com",
    action: "SEND EMAIL",
    Icon: Mail,
    external: false,
  },
  {
    label: "LINKEDIN",
    value: "linkedin.com/in/romyvaldez",
    href: "https://www.linkedin.com/in/romyvaldez/",
    action: "VISIT",
    Icon: FaLinkedin,
    external: true,
  },
  {
    label: "GITHUB",
    value: "github.com/RomyVSoto",
    href: "https://github.com/RomyVSoto",
    action: "VISIT",
    Icon: FaGithub,
    external: true,
  },
];

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        revealHeading(sectionRef.current?.querySelector("h2") ?? null);

        // The red glow swells as the section scrolls in: the page's closing beat.
        gsap.fromTo(
          ".contact-glow",
          { autoAlpha: 0, scale: 0.6 },
          {
            autoAlpha: 1,
            scale: 1,
            ease: "none",
            scrollTrigger: { trigger: sectionRef.current, start: "top bottom", end: "center center", scrub: true },
          },
        );

        gsap.from(".contact-subtitle", {
          autoAlpha: 0,
          y: 16,
          duration: 0.9,
          ease: "expo.out",
          scrollTrigger: { trigger: ".contact-subtitle", start: "top 88%", once: true },
        });

        gsap.from(".contact-card", {
          autoAlpha: 0,
          y: 32,
          duration: 0.9,
          ease: "expo.out",
          stagger: 0.12,
          scrollTrigger: { trigger: ".contact-card", start: "top 92%", once: true },
        });
      });
      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative overflow-hidden flex flex-col gap-12 lg:gap-16 items-center py-16 lg:py-20 px-6 md:px-10"
    >
      <div
        aria-hidden
        className="contact-glow absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 60%, var(--color-accent-glow) 0%, transparent 70%)",
        }}
      />
      <div className="flex flex-col items-center gap-6 lg:gap-8">
        <div className="flex items-center gap-3 font-sans font-normal text-xs text-text-muted tracking-widest">
          <span aria-hidden className="w-8 h-px bg-accent"></span>
          <span className="font-semibold">GET IN TOUCH</span>
          <span aria-hidden className="w-8 h-px bg-accent"></span>
        </div>
        <h2 className="font-sans font-bold text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-text-primary text-center tracking-tight leading-tight">
          Let&apos;s build something{" "}
          <br />
          <span className="text-accent italic">great together.</span>
        </h2>
        <p className="contact-subtitle font-heading font-normal text-base lg:text-lg text-text-secondary text-center">
          Open to full-time roles, freelance projects, and collaborations.
          <br />
          Replies within 24 hours.
        </p>
      </div>

      <ul className="w-full md:w-4/5 lg:w-11/12 xl:w-3/4 flex flex-col lg:flex-row gap-4 md:gap-6 justify-between">
        {channels.map(({ label, value, href, action, Icon, external }) => (
          <li key={label} className="contact-card w-full flex">
            {/* The whole card is the link, so the hover lift matches what is clickable. */}
            <a
              href={href}
              {...(external && { target: "_blank", rel: "noopener noreferrer" })}
              className="group w-full flex flex-col gap-5 border border-border hover:border-accent hover:-translate-y-1 hover:shadow-xl shadow-accent/20 px-6 lg:px-8 py-6 transition-all duration-300"
            >
              <span className="w-full flex justify-between items-center text-xs text-text-muted tracking-widest">
                <Icon aria-hidden className="text-accent-text" size={20} />
                <span>{label}</span>
              </span>
              <span className="font-mono text-sm text-text-primary [overflow-wrap:anywhere]">{value}</span>
              <span aria-hidden className="h-px bg-border" />
              <span className="flex justify-between text-xs text-text-secondary tracking-widest group-hover:text-accent-text transition-colors duration-300">
                <span>{action}</span>
                {external ? (
                  <ExternalLink aria-hidden size={16} />
                ) : (
                  <ArrowUpRight aria-hidden size={16} />
                )}
              </span>
              {external && <span className="sr-only"> (opens in a new tab)</span>}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
