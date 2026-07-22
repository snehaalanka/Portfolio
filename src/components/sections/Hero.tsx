"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen w-full px-6 md:px-12 flex items-center pt-28 pb-20"
    >
      <div className="w-full max-w-3xl mx-auto">

        {/* Role */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="uppercase tracking-[0.35em] text-[12px] text-pureblack/60 mb-5 lg: px-1"
        >
          Full Stack Engineer
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="font-serif text-[4.5rem] md:text-[5.2rem] leading-none mb-3 text-[#4B1F2A]"
        >
          Sneha Sree
        </motion.h1>

        {/* Statement */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="font-serif italic text-[3rem] md:text-[3.7rem] leading-[1.02] tracking-[-0.03em] text-[#4B1F2A] mb-6"
        >
          Building software
          <br />
          that truly feels effortless.
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="max-w-2xl text-[21px] leading-9 text-pureblack/65 lg: px-1"
        >
          I build thoughtful digital experiences with React, Next.js and
          Node.js, blending AI with scalable backend systems to create products
          that are fast, intuitive, and built to last.
        </motion.p>

        {/* Divider + Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-12"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="origin-left h-px bg-pureblack/10"
          />

          <div className="flex items-center gap-12 mt-7 pl-1">
            <a
              href="#projects"
              className="group uppercase tracking-[0.28em] text-[12px] text-pureblack/75 hover:text-pureblack transition-all duration-300"
            >
              Selected Work
              <span className="ml-1 inline-block transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                ↗
              </span>
            </a>

            <a
              href="#contact"
              className="group uppercase tracking-[0.28em] text-[12px] text-pureblack/75 hover:text-pureblack transition-all duration-300"
            >
              Let's Talk
              <span className="ml-1 inline-block transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                ↗
              </span>
            </a>
          </div>
        </motion.div>

        {/* Scroll */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="uppercase tracking-[0.35em] text-[11px] text-pureblack/40 mt-14 lg : px-1"
        >
          Scroll to Explore
        </motion.p>

      </div>
    </section>
  );
}