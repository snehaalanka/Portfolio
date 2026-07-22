"use client";

import { motion } from "framer-motion";

const tags = [
  "Andhra Pradesh, India",
  "Electronics & Computer Engineering",
  "CGPA 8.37",
  "Full-Stack Development",
  "Open to internships",
];

export default function About() {
  return (
    <section
  id="about"
  className="w-full bg-background px-6 md:px-12 pt-10 pb-24"
>
      <div className="max-w-3xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-serif text-6xl md:text-7xl mb-16 md:mb-9"
        >
          About Me
        </motion.h2>

        <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.8, delay: 0.1 }}
  className="space-y-7 max-w-3xl text-[18px] leading-9 text-pureblack/70 mb-12"
>
  <p>
    I&apos;m a{" "}
    <span className="font-semibold opacity-100">
      final-year Electronics and Computer Engineering
    </span>{" "}
    student at{" "}
    <span className="font-semibold opacity-100">
      Amrita Vishwa Vidyapeetham, Kerala
    </span>
    , with a passion for building{" "}
    <span className="font-semibold opacity-100">
      full-stack web applications
    </span>
    ,{" "}
    <span className="font-semibold opacity-100">
      scalable backend systems
    </span>
    , and{" "}
    <span className="font-semibold opacity-100">
      AI-powered products
    </span>
    . I've developed several AI-driven web applications and am currently
    working on{" "}
    <span className="font-semibold opacity-100">
      DevRelay
    </span>
    , a backend-focused project centered on scalable APIs, system design,
    and modern development practices.
  </p>

  <p>
    Building software is as much about learning as it is about creating. I
    enjoy shaping products that feel natural to use and remain dependable
    beneath the surface.
  </p>
</motion.div>

  <div className="mt-8 border-t border-pureblack/10 pt-2">
  <p className="text-[13px] uppercase tracking-[0.2em] opacity-55">
    Final Year   •   CGPA 8.37   •   Open to work
  </p>
</div>

      </div>
    </section>
  );
}