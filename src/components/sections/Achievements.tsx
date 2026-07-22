"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const achievements = [
  {
    category: "Coding",
    items: ["90+ DSA problems solved on LeetCode", "8.37 CGPA in B.Tech Electronics and Computer Engineering"],
  },
  {
    category: "Certifications",
    items: ["AI Research and Innovation Skills Enhancement Camp"],
  },
  {
    category: "Community Impact",
    items: ["Delivered an inclusion & empathy session to 35 students (SSR Initiative)", "Coordinated a student team for a college-wide outreach programme"],
  },
  {
    category: "Focus Areas",
    items: ["Full-Stack Development", "Database Management Systems", "Data Structures & Algorithms"],
  },
];

export default function Achievements() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="w-full px-6 md:px-12 py-24 bg-pureblack text-offwhite border-t border-offwhite/10">
      <div className="max-w-7xl mx-auto w-full">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="font-serif text-6xl md:text-9xl mb-16 md:mb-24 uppercase"
        >
          Accolades
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {achievements.map((acc, index) => (
            <motion.div
              key={acc.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group cursor-default py-8 border-b border-offwhite/20"
            >
              <h3 className="text-2xl md:text-4xl font-serif mb-6 group-hover:text-accent transition-colors duration-300">
                {acc.category}
              </h3>
              
              <div className="overflow-hidden">
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="space-y-4 pt-4"
                    >
                      {acc.items.map((item, i) => (
                        <li key={i} className="text-sm md:text-base opacity-70 flex items-start">
                          <span className="text-accent mr-3 mt-1 text-xs">◆</span>
                          {item}
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}