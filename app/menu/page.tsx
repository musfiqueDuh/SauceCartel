"use client";

import * as React from "react";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const MenuPage: React.FC = () => {
  const links = ["My Journey", "Menu", "Ordering", "FAQs"];
  
  // Define a distinct, darker background color for the main page
  const bgColor = "#050319";

  return (
    <main className="min-h-screen text-white relative overflow-hidden" style={{ backgroundColor: bgColor }}>
      
      {/* 1. BACKGROUND ELEMENT TO BLUR (e.g., a colored shape) */}
      {/* This element is what the blur effect will work on */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.1, duration: 1, type: "spring", stiffness: 50 }}
        className="absolute w-96 h-96 rounded-full bg-purple-500/50 -top-20 -right-20 filter blur-3xl opacity-50 z-0" 
      />
      
      {/* 2. THE BLURRED OVERLAY LAYER */}
      {/* This div covers the screen and blurs the element underneath (the purple circle) */}
      <div 
        className="absolute inset-0 backdrop-blur-lg bg-black/40 z-10" // Key fix: z-10 for the blur layer
      />

      {/* --- Main Content (Menus) --- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="absolute inset-0 flex flex-col items-center justify-center gap-8 text-center px-6 z-20" // z-20 to ensure content is above the blur layer
      >
        {links.map((link, i) => (
          <motion.p
            key={link}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 * i + 0.2, type: "spring", stiffness: 100 }}
            className="text-2xl font-semibold tracking-wide hover:text-pink-400 cursor-pointer"
          >
            {link}
          </motion.p>
        ))}

        <p className="absolute bottom-10 text-xs text-white/50">
          This project is created by Musfique B. Mahin 
        </p>
      </motion.div>

      {/* --- Back button --- */}
      <Link href="/explore">
        <motion.button
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="absolute top-10 left-6 flex items-center gap-2 text-sm font-semibold text-white/80 z-30" // z-30 for highest layer
        >
          <ArrowLeft className="h-6 w-6" />
          Back
        </motion.button>
      </Link>
    </main>
  );
};

export default MenuPage;