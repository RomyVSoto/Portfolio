"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { Separator } from "@base-ui/react";
import { ExternalLink, Mail, Copy } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-label", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-label",
          start: "top 85%",
          once: true,
        },
      });

      gsap.fromTo(
        ".contact-heading",
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".contact-heading",
            start: "top 100%",
            once: true,
          },
        },
      );

      gsap.from(".contact-subtitle", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-subtitle",
          start: "top 85%",
          once: true,
        },
      });

      gsap.fromTo(
        ".contact-card",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.2,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".contact-card",
            start: "top 100%",
            once: true,
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative overflow-hidden flex flex-col gap-12 lg:gap-16 items-center py-16 lg:py-20 px-6 md:px-10"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 60%, #C1121F33 0%, transparent 70%)",
        }}
      />
      <div className="flex flex-col items-center gap-6 lg:gap-8">
        <div className="contact-label flex items-center gap-3 font-sans font-normal text-xs text-text-muted tracking-widest">
          <span className="w-8 h-px bg-accent"></span>
          <span className="font-sans font-semibold tracking-widest">
            GET IN TOUCH
          </span>
          <span className="w-8 h-px bg-accent"></span>
        </div>
        <span className="contact-heading font-sans font-bold text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-[#F9F6FF] text-center tracking-tight leading-tight">
          Let&apos;s build something
          <br />
          <span className="text-accent italic">great together.</span>
        </span>
        <span className="contact-subtitle font-heading font-normal text-base lg:text-lg text-text-secondary text-center">
          Open to full-time roles, freelance projects, and collaborations.
          <br />
          Replies within 24 hours.
        </span>
      </div>

      <div className="w-full md:w-4/5 lg:w-2/3 flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8 justify-between">
        <div className="contact-card w-full flex flex-col gap-5 border border-border hover:border-accent hover:-translate-y-1 hover:shadow-xl shadow-accent px-6 md:px-8 lg:px-12 py-6 transition-all duration-300">
          <span className="w-full flex justify-between items-center font-normal text-xs text-text-muted tracking-widest">
            <Mail className="text-accent" size={20} />
            <p>EMAIL</p>
          </span>
          <span className="font-mono font-normal text-sm text-text-primary">
            romyvaldez@gmail.com
          </span>
          <Separator className="border border-muted" />
          <a
            href="mailto:romyvaldez@gmail.com"
            className="flex justify-between font-sans font-normal text-xs text-text-secondary tracking-widest cursor-pointer hover:text-accent transition-all duration-300"
          >
            <p>CONTACT</p>
            <Copy size={16} />
          </a>
        </div>
        <div className="contact-card w-full flex flex-col gap-5 border border-border hover:border-accent hover:-translate-y-1 hover:shadow-xl shadow-accent px-6 md:px-8 lg:px-12 py-6 transition-all duration-300">
          <span className="w-full flex justify-between items-center font-normal text-xs text-text-muted tracking-widest">
            <FaLinkedin className="text-accent" size={20} />
            <p>LINKEDIN</p>
          </span>
          <span className="font-mono font-normal text-sm text-text-primary">
            linkedin.com/in/romyvaldez
          </span>
          <Separator className="border border-muted" />
          <a
            href="https://www.linkedin.com/in/romyvaldez/"
            target="_blank"
            className="flex justify-between font-sans font-normal text-xs text-text-secondary tracking-widest cursor-pointer hover:text-accent transition-all duration-300"
          >
            <p>VISIT</p>
            <ExternalLink size={16} />
          </a>
        </div>
        <div className="contact-card w-full flex flex-col gap-5 border border-border hover:border-accent hover:-translate-y-1 hover:shadow-lg shadow-accent px-6 md:px-8 lg:px-12 py-6 transition-all duration-300">
          <span className="w-full flex justify-between items-center font-normal text-xs text-text-muted tracking-widest">
            <FaGithub className="text-accent" size={20} />
            <p>GITHUB</p>
          </span>
          <span className="font-mono font-normal text-sm text-text-primary">
            github.com/RomyVSoto
          </span>
          <Separator className="border border-muted" />
          <a
            href="https://github.com/RomyVSoto"
            target="_blank"
            className="flex justify-between font-sans font-normal text-xs text-text-secondary tracking-widest cursor-pointer hover:text-accent transition-all duration-300"
          >
            <p>VISIT</p>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
