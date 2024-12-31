"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { AnimatedBackground } from "./animated_background";
import AnimatedGitHub from "./animated_github";

export default function NewYearCelebration() {
  const currentYear = new Date().getFullYear();
  const [message, setMessage] = useState(`Happy New Year ${currentYear}`);

  useEffect(() => {
    const interval = setInterval(() => {
      const year = new Date().getFullYear();
      if (year === 2025) {
        setMessage("Happy New Year 2025");
        clearInterval(interval);
      }
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden">
      <AnimatedBackground />
      <AnimatedGitHub href="https://github.com/GSingh2432002" />
      <motion.div
        className="max-w-4xl mx-auto px-4 text-center z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 text-gradient tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {message}
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-300 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Celebrate the beginning of a new journey with joy and hope
        </motion.p>
        <motion.div
          className="mt-12 flex justify-center items-center space-x-4 relative z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2 }}
        >
          {[..."🎉🎊🥂"].map((emoji, index) => (
            <motion.span
              key={index}
              className="flex items-center justify-center text-4xl md:text-6xl"
              animate={{
                rotate: [0, 10, -10, 10, 0],
                scale: [1, 1.2, 1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
                delay: index * 0.2,
              }}
            >
              {emoji}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}