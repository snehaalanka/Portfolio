"use client";

import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Languages",
    items: ["Python", "JavaScript", "C++", "SQL"],
  },
  {
    category: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "Flask",
      "REST APIs",
      "JWT",
      "bcrypt",
    ],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MongoDB", "MySQL"],
  },
  {
    category: "AI Engineering",
    items: [
      "Google Gemini",
      "Llama 3",
      "Groq API",
      "Prompt Engineering",
      "OCR",
      "Speech-to-Text",
      "AI Integration",
    ],
  },
  {
    category: "Developer Tools",
    items: [
      "Git",
      "GitHub",
      "Postman",
      "VS Code",
      "Vercel",
      "Render",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="w-full px-6 md:px-12 py-24 border-t border-pureblack/10">
<div className="max-w-3xl mx-auto">

  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="font-serif text-6xl md:text-7xl mb-16"
  >
    What I Work With
  </motion.h2>

  <div className="space-y-12">
    {skillsData.map((section, index) => (
      <motion.div
        key={section.category}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.08 }}
      >
        <h3 className="uppercase tracking-[0.25em] text-xs opacity-70 mb-5">
          {section.category}
        </h3>

        <div className="flex flex-wrap gap-3">
          {section.items.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-pureblack/15 px-5 py-2 text-sm opacity-75 hover:opacity-100 transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    ))}
  </div>

</div>
    </section>
  );
}