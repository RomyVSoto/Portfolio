"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import gsap from "gsap";

const INTERACTIVE = "a, button, [data-cursor]";
const FINE_POINTER = "(pointer: fine)";

function subscribe(onChange: () => void) {
  const query = window.matchMedia(FINE_POINTER);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  // Only for a real mouse: on touch screens the cursor would sit in a corner.
  const enabled = useSyncExternalStore(
    subscribe,
    () => window.matchMedia(FINE_POINTER).matches,
    () => false,
  );

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!enabled || !cursor || !dot) return;

    // quickTo reuses one tween per axis instead of creating two per mousemove.
    const cursorX = gsap.quickTo(cursor, "x", { duration: 0.15, ease: "power2.out" });
    const cursorY = gsap.quickTo(cursor, "y", { duration: 0.15, ease: "power2.out" });
    const dotX = gsap.quickTo(dot, "x", { duration: 0.05 });
    const dotY = gsap.quickTo(dot, "y", { duration: 0.05 });

    let visible = false;
    const onMouseMove = (e: MouseEvent) => {
      if (!visible) {
        // First move: jump into place, then show, so it never flashes at 0,0.
        gsap.set([cursor, dot], { x: e.clientX, y: e.clientY, autoAlpha: 1 });
        document.documentElement.classList.add("custom-cursor");
        visible = true;
      }
      cursorX(e.clientX);
      cursorY(e.clientY);
      dotX(e.clientX);
      dotY(e.clientY);
    };

    // Event delegation also covers links rendered after mount.
    const onMouseOver = (e: MouseEvent) => {
      const target = (e.target as Element).closest?.(INTERACTIVE);
      const from = (e.relatedTarget as Element | null)?.closest?.(INTERACTIVE);
      if (target && target !== from) {
        gsap.to(cursor, { scale: 2.5, opacity: 0.5, duration: 0.3, ease: "power2.out" });
      }
    };
    const onMouseOut = (e: MouseEvent) => {
      const target = (e.target as Element).closest?.(INTERACTIVE);
      const to = (e.relatedTarget as Element | null)?.closest?.(INTERACTIVE);
      if (target && target !== to) {
        gsap.to(cursor, { scale: 1, opacity: 1, duration: 0.3, ease: "power2.out" });
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseout", onMouseOut);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
      document.documentElement.classList.remove("custom-cursor");
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={cursorRef}
        aria-hidden
        className="invisible fixed top-0 left-0 w-8 h-8 rounded-full border border-accent pointer-events-none z-9999 -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
      />
      <div
        ref={dotRef}
        aria-hidden
        className="invisible fixed top-0 left-0 w-2 h-2 rounded-full bg-accent pointer-events-none z-9999 -translate-x-1/2 -translate-y-1/2"
      />
    </>
  );
}
