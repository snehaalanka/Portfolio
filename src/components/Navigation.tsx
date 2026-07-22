"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Lora } from "next/font/google";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Me", href: "#beyond" },
  { name: "Contact", href: "#contact" },
];

const RED_SECTIONS = ["home", "about", "skills"];
const BEIGE_SECTIONS = ["projects", "me", "contact"];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.replace("#", ""));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setIsOpen(false);
  };

  const isRed = RED_SECTIONS.includes(activeSection);
  const isBeige = BEIGE_SECTIONS.includes(activeSection);

  const navColorClass = isRed
    ? "text-[#5C1F1F]"
    : isBeige
    ? "text-[#EFE3D0]"
    : "text-pureblack";

  const navColorClassMuted = isRed
    ? "text-[#5C1F1F]/70 hover:text-[#5C1F1F]"
    : isBeige
    ? "text-[#EFE3D0]/70 hover:text-[#EFE3D0]"
    : "text-pureblack/70 hover:text-pureblack";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[100] transition-colors duration-500 ${navColorClass}`}
      >
        <div className="flex items-center justify-between px-8 py-8 lg:px-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("#home")}
            className={`${lora.className} italic text-[1.1rem]`}
          >
            Sneha
          </button>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <button
                  onClick={() => scrollToSection(link.href)}
                  className={`uppercase text-[11px] tracking-[0.25em] transition-colors duration-500 ${navColorClassMuted}`}
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden uppercase text-xs tracking-[0.3em]"
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: "0%" }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{
              duration: 0.8,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="fixed inset-0 bg-pureblack text-offwhite z-[90] flex flex-col md:flex-row"
          >
            {/* Left Side */}
            <div className="hidden md:flex w-1/2 h-full items-center justify-center">
              <div className="relative w-[300px] h-[400px]">
                {[1, 2, 3].map((_, index) => (
                  <motion.div
                    key={index}
                    className={cn(
                      "absolute inset-0 rounded-lg border border-offwhite/20 bg-offwhite/10"
                    )}
                    style={{
                      transform: hoveredLink
                        ? `rotate(${(index - 1) * 5}deg) scale(1.05)`
                        : `rotate(${(index - 1) * 2}deg)`,
                      zIndex: index,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Right Side */}
            <div className="w-full md:w-1/2 h-full flex flex-col justify-center px-12 md:px-24">
              <ul className="space-y-8">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.name}
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    exit={{ y: "100%" }}
                    transition={{
                      duration: 0.6,
                      delay: i * 0.1,
                      ease: [0.76, 0, 0.24, 1],
                    }}
                  >
                    <button
                      onClick={() => scrollToSection(link.href)}
                      onMouseEnter={() => setHoveredLink(link.name)}
                      onMouseLeave={() => setHoveredLink(null)}
                      className="font-serif text-5xl md:text-8xl hover:text-accent hover:italic transition-all duration-300"
                    >
                      {link.name}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}