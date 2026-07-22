"use client";

import { motion } from "framer-motion";

const sections = [
  {
    title: "Building",
    description:
      "I enjoy building products that balance thoughtful design with solid engineering. Whether it's full-stack applications, backend systems, or AI-powered experiences, I'm always curious about what happens beneath the surface—and how to make it feel effortless for the people using it.",
    tags: [
      "Full-Stack Development",
      "Backend Engineering",
      "AI-powered Products",
      "Database Design",
      "Data Structures & Algorithms",
    ],
  },
  {
    title: "Giving Back",
    description:
      "Technology feels most meaningful when it creates an impact beyond the screen. Through Amrita's Student Social Responsibility initiative, I conducted an interactive session for government school students, encouraging inclusion, empathy, and meaningful communication.",
    tags: [
      "Student Social Responsibility",
      "Community Outreach",
      "Inclusion & Empathy",
      "Public Speaking",
    ],
  },
  {
    title: "Always Improving",
    description:
      "I enjoy learning by building. Exploring unfamiliar technologies, refining my problem-solving approach, and collaborating with others are all part of how I continue to grow as a developer.",
    tags: [
      "Problem Solving",
      "Communication",
      "Team Collaboration",
      "Continuous Learning",
      "Curiosity",
    ],
  },
  {
    title: "Away From The Keyboard",
    description:
      "When I'm not coding, you'll probably find me painting, crafting, taking photos, listening to music, or discovering new cuisines. Creativity outside technology often inspires the way I approach it.",
    tags: [
      "Painting",
      "Crafting",
      "Exploring Different Cuisines",
    ],
  },
];

export default function Me() {
  return (
    <section
      id="me"
      className="w-full bg-background px-6 md:px-12 py-28"
    >
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-serif text-6xl md:text-7xl mb-20"
        >
          Beyond the Code
        </motion.h2>

        <div className="space-y-20">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
            >
              {/* Small Heading */}
              <h3 className="uppercase tracking-[0.35em] text-xs opacity-50 mb-4">
                {section.title}
              </h3>

              {/* Divider */}
              <div className="h-px bg-pureblack/10 mb-6"></div>

              {/* Description */}
              <p className="text-lg leading-relaxed opacity-75 max-w-2xl">
                {section.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 mt-8">
                {section.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-pureblack/10 px-5 py-2 text-sm opacity-70 hover:opacity-100 transition"
                  >
                    {tag}
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