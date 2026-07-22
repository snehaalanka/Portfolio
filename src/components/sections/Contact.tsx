"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full px-6 md:px-12 pt-40 pb-12 bg-pureblack text-offwhite flex flex-col justify-between min-h-[80vh]"
    >
      <div className="max-w-7xl mx-auto w-full flex-grow flex flex-col justify-center mb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center"
        >
          <p className="text-xs uppercase tracking-widest opacity-50 mb-6 mt-8">
            Interested in my work?
          </p>

          <a
            href="https://drive.google.com/drive/folders/1L_hyteq34I1GC_nmNh6cQSdT8sNlD9h0"
            target="_blank"
            className="group relative px-8 py-3 rounded-full border border-offwhite overflow-hidden hover:text-pureblack transition-colors duration-300 mb-24 inline-block"
          >
            <span className="relative z-10 uppercase tracking-widest font-medium text-sm flex items-center space-x-3">
              <span>Download CV</span>
              <span className="group-hover:translate-y-1 transition-transform">
                ↓
              </span>
            </span>

            <div className="absolute inset-0 bg-offwhite w-full h-full scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-[0.25,1,0.5,1] z-0"></div>
          </a>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="font-serif text-[15vw] leading-[0.8] text-center mb-16 uppercase tracking-tighter"
        >
          Let's Talk
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center pt-12 border-t border-offwhite/10"
        >
          <a
            href="mailto:snehasree2105@gmail.com"
            className="hover:text-accent hover:italic transition-all duration-300 uppercase tracking-widest text-xs md:text-sm font-bold"
          >
            Email
          </a>

          <a
            href="https://www.linkedin.com/in/sneha-sree-3252b42a6/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent hover:italic transition-all duration-300 uppercase tracking-widest text-xs md:text-sm font-bold"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/snehaalanka"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent hover:italic transition-all duration-300 uppercase tracking-widest text-xs md:text-sm font-bold"
          >
            GitHub
          </a>

          <a
            href="https://leetcode.com/u/snehasree_07/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent hover:italic transition-all duration-300 uppercase tracking-widest text-xs md:text-sm font-bold"
          >
            LeetCode
          </a>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-center text-xs opacity-40 uppercase tracking-widest mt-auto">
        <span>© {new Date().getFullYear()} Sneha</span>
        <span>Thanks for visiting</span>
        <span>Designed & Developed with Passion</span>
      </div>
    </section>
  );
}