"use client";

import { motion } from "framer-motion";

export default function MotionWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative min-h-screen w-full flex flex-col justify-center items-center bg-[#050319] overflow-hidden"
    >
      {children}
    </motion.div>
  );
}
