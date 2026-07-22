"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isProjectHover, setIsProjectHover] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check for links, buttons, or elements with role="button"
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }

      // Special check for project cards
      if (target.closest("[data-cursor='project']")) {
        setIsProjectHover(true);
        setIsHovering(false); // Override standard hover
      } else {
        setIsProjectHover(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
      width: 20,
      height: 20,
      backgroundColor: "transparent",
      border: "1px solid var(--color-pureblack)",
      mixBlendMode: "difference" as const,
    },
    hover: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      width: 40,
      height: 40,
      backgroundColor: "transparent",
      border: "1px solid var(--color-pureblack)",
      mixBlendMode: "difference" as const,
    },
    project: {
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      width: 80,
      height: 80,
      backgroundColor: "var(--color-pureblack)",
      border: "none",
      mixBlendMode: "normal" as const,
    }
  };

  // Hide the default cursor on body via CSS but since we are doing it via component,
  // we add a class to body in useEffect or just let the global CSS handle it if we want.
  // Actually it's better to just add a style to global CSS: `body { cursor: none; }`
  // But to be safe on touch devices, we might only hide it via media query.
  
  useEffect(() => {
    document.body.style.cursor = "none";
    return () => {
      document.body.style.cursor = "auto";
    }
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 z-[10000] rounded-full pointer-events-none flex items-center justify-center text-offwhite text-sm font-medium"
      variants={variants}
      animate={isProjectHover ? "project" : isHovering ? "hover" : "default"}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
        mass: 0.5,
      }}
    >
      {isProjectHover && <span>Open</span>}
    </motion.div>
  );
}
