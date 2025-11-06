"use client";

import * as React from "react";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const MenuPage: React.FC = () => {
  const links = ["My Journey", "Menu", "Ordering", "FAQs"];

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#050319] text-white relative overflow-hidden">
      {/* Big fullscreen menu items */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 flex flex-col items-center justify-center gap-8 text-center px-6"
      >
        {links.map((link, i) => (
          <motion.p
            key={link}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 * i }}
            className="text-2xl font-semibold tracking-wide hover:text-pink-400 cursor-pointer"
          >
            {link}
          </motion.p>
        ))}

        <p className="absolute bottom-10 text-xs text-white/50">
          This project is created by Musfique B. Mahin 
        </p>
      </motion.div>

      {/* Big back button */}
      <Link href="/explore">
        <motion.button
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="absolute top-10 left-6 flex items-center gap-2 text-sm font-semibold text-white/80"
        >
          <ArrowLeft className="h-6 w-6" />
          Back
        </motion.button>
      </Link>
    </main>
  );
};

export default MenuPage;
