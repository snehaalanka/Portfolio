"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    id: "devrelay",
    number: "01",
    title: "DevRelay",
    description:
      "A terminal-first remote collaboration platform enabling developers to securely register devices, authenticate, and remotely execute development tasks across trusted machines.",
    tech: [
      "Node.js",
      "Express.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Socket.io",
      "JWT",
    ],
    github: "https://github.com/snehaalanka/DevRelay",
    live: "https://github.com/snehaalanka/DevRelay",
  },
  {
    id: "offertrail",
    number: "02",
    title: "OfferTrail",
    description:
      "A Notion-inspired placement management platform to organize job applications, company workspaces, interview preparation, tailored resumes, and application progress with AI-powered resume analysis and skill-gap detection.",
    tech: [
      "React",
      "Node.js",
      "MongoDB",
      "FastAPI",
      "Gemini API",
      "JWT",
    ],
    github: "https://github.com/snehaalanka/OfferTrail",
    live: "https://offer-trail-three.vercel.app/",
  },
  {
    id: "spendsense",
    number: "03",
    title: "SpendSense",
    description:
      "An AI-powered expense tracker with voice and natural-language logging, financial health scoring, and personalized saving insights through a Python microservice.",
    tech: [
      "React",
      "Node.js",
      "MongoDB",
      "Flask",
      "Groq API",
      "JWT",
    ],
    github: "https://github.com/snehaalanka/SpendSense",
    live: "https://spend-sense-sigma-five.vercel.app/",
  },
  {
    id: "lexiaid",
    number: "04",
    title: "LexiAid",
    description:
      "An accessibility-first platform that converts text, PDFs, and images into natural speech for users with dyslexia. I developed the backend, building scalable APIs that seamlessly connect the frontend with the underlying AI models.",
    tech: [
      "Node.js",
      "Express.js",
      "OCR",
      "REST APIs",
    ],
    github: "https://github.com/snehaalanka/Lexiaid",
    live: "https://github.com/snehaalanka/Lexiaid",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full bg-pureblack text-offwhite px-6 md:px-12 py-24"
    >
      <div className="max-w-3xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-serif text-6xl md:text-7xl mb-16"
        >
          Selected Works
        </motion.h2>

        <div className="space-y-28">

          {projects.map((project) => (

            <motion.div
  key={project.id}
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: .7 }}
>

<div className="cursor-pointer">

  <p className="uppercase tracking-[0.3em] text-xs opacity-50 mb-3">
    {project.number}
  </p>

  <h3 className="text-lg md:text-xl font-medium uppercase tracking-[0.18em] mb-5">
    {project.title.toUpperCase()}
  </h3>

  <p className="text-lg leading-relaxed opacity-75 max-w-3xl">
    {project.description}
  </p>

  <div className="mt-8 flex flex-wrap gap-3">
    {project.tech.map((tech) => (
      <span
        key={tech}
        className="border border-offwhite/15 rounded-full px-4 py-2 text-xs uppercase tracking-[0.15em] opacity-70"
      >
        {tech}
      </span>
    ))}
  </div>

  <div className="flex gap-8 mt-10 text-sm uppercase tracking-[0.2em] opacity-70">

    <a
      href={project.live}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:translate-x-1 transition"
    >
      Live →
    </a>

    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:translate-x-1 transition"
    >
      GitHub →
    </a>

  </div>

</div>

<div className="h-px bg-offwhite/10 mt-16"></div>

</motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}