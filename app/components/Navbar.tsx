"use client";

import { Home, Sparkles, User, Menu } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
      className="absolute bottom-5 left-0 right-0 flex justify-center"
    >
      <div className="flex items-center justify-between w-[90%] rounded-full bg-white/5 border border-white/15 px-6 py-3 backdrop-blur-md">
        <Link href="/explore" className="flex flex-col items-center gap-0.5 text-[0.65rem] text-white">
          <Home className="h-4 w-4" />
          Home
        </Link>
        <Link href="/menu" className="flex flex-col items-center gap-0.5 text-[0.65rem] text-white/70">
          <Menu className="h-4 w-4" />
          Menu
        </Link>
        <Link href="../" className="flex flex-col items-center gap-0.5 text-[0.65rem] text-white/70">
          <User className="h-4 w-4" />
          Profile
        </Link>
      </div>
    </motion.nav>
  );
}
