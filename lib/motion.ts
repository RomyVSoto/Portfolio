"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

/** Every scroll and entrance animation runs only under this query. */
export const MOTION_OK = "(prefers-reduced-motion: no-preference)";

/**
 * Section headings: each line rises out of a mask when the heading scrolls in.
 * A quieter echo of the hero title. Call inside a gsap.matchMedia(MOTION_OK) block
 * so it is reverted with it.
 */
export function revealHeading(heading: Element | null) {
  if (!heading) return;
  SplitText.create(heading, {
    type: "lines",
    mask: "lines",
    linesClass: "split-line",
    autoSplit: true,
    onSplit: (self) =>
      gsap.from(self.lines, {
        yPercent: 110,
        duration: 1,
        ease: "expo.out",
        stagger: 0.08,
        scrollTrigger: { trigger: heading, start: "top 85%", once: true },
      }),
  });
}

/** Pulls an element a little toward the pointer while it hovers (mouse only). */
export function useMagnetic<T extends HTMLElement>(strength = 0.25) {
  const ref = useRef<T>(null);

  useGSAP(() => {
    const el = ref.current;
    if (!el) return;
    const mm = gsap.matchMedia();
    mm.add(`${MOTION_OK} and (pointer: fine)`, () => {
      const x = gsap.quickTo(el, "x", { duration: 0.5, ease: "power3.out" });
      const y = gsap.quickTo(el, "y", { duration: 0.5, ease: "power3.out" });
      const onMove = (e: PointerEvent) => {
        const r = el.getBoundingClientRect();
        x((e.clientX - (r.left + r.width / 2)) * strength);
        y((e.clientY - (r.top + r.height / 2)) * strength);
      };
      const onLeave = () => {
        x(0);
        y(0);
      };
      el.addEventListener("pointermove", onMove);
      el.addEventListener("pointerleave", onLeave);
      return () => {
        el.removeEventListener("pointermove", onMove);
        el.removeEventListener("pointerleave", onLeave);
      };
    });
    return () => mm.revert();
  });

  return ref;
}
