"use client";

import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export default function PageHero({ title, subtitle }) {
  return (
    <section className="relative bg-page-hero bg-cover bg-center bg-fixed min-h-[300px] md:min-h-[350px] flex items-center justify-center text-center text-white">
      <div className="absolute inset-0 bg-black/60" />
      <motion.div
        className="relative z-10 p-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="font-headline text-4xl md:text-6xl font-bold tracking-tight"
          variants={itemVariants}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            className="mt-4 max-w-2xl mx-auto text-base md:text-xl text-white/90"
            variants={itemVariants}
          >
            {subtitle}
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}
