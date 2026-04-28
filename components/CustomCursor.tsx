"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const dot = dotRef.current
    if (!cursor || !dot) return

    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
        ease: "power2.out"
      })
      gsap.to(dot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.05,
      })
    }

    const onMouseEnter = () => {
      gsap.to(cursor, {
        scale: 2.5,
        opacity: 0.5,
        duration: 0.3,
        ease: "power2.out"
      })
    }

    const onMouseLeave = () => {
      gsap.to(cursor, {
        scale: 1,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out"
      })
    }

    window.addEventListener("mousemove", onMouseMove)

    const interactives = document.querySelectorAll("a, button, [data-cursor]")
    interactives.forEach(el => {
      el.addEventListener("mouseenter", onMouseEnter)
      el.addEventListener("mouseleave", onMouseLeave)
    })

    return () => {
      window.removeEventListener("mousemove", onMouseMove)
      interactives.forEach(el => {
        el.removeEventListener("mouseenter", onMouseEnter)
        el.removeEventListener("mouseleave", onMouseLeave)
      })
    }
  }, [])

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-accent pointer-events-none z-9999 -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
      />
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-accent pointer-events-none z-9999 -translate-x-1/2 -translate-y-1/2"
      />
    </>
  )
}