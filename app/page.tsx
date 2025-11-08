"use client";

import { motion } from "framer-motion";
import AnimatedBackground from "./components/AnimatedBackground";
import MotionWrapper from "./components/MotionWrapper";
import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white">
      <MotionWrapper>
        <AnimatedBackground />

        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
          {/* Brand pill */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-[11px] uppercase tracking-[0.18em]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-pink-400 to-purple-400" />
            Snack Delulu
            <span className="text-white/40">by MUSHU</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight"
          >
            Stay{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-red-400 to-orange-400">
              Snacking
            </span>{" "}
            Stay{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Delulu
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-4 text-sm sm:text-base text-white/70 max-w-md"
          >
            <strong>Ekhane edi shudhu sauce na, eita ekta lifestyle.</strong><br />
            Homemade sauces, dips, & snacks — <strong>ajaira din-er perfect therapy.</strong><br />
            <strong>Small batch, zero shanti, full flavor.</strong><br />
            🔥 “<strong>Mood off?</strong> Just dip it, <strong>bhai.</strong>”
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="mt-8 flex flex-col sm:flex-row items-center gap-3 sm:gap-4"
          >
            <Link href="/explore">
              <button className="px-6 py-2.5 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 text-sm font-semibold shadow-lg shadow-pink-500/30 hover:scale-105 active:scale-95 transition">
                Explore the Menu
              </button>
            </Link>

            <Link href="https://wa.me/qr/EO74KQJPAMJPC1" target="_blank">
              <button className="px-5 py-2.5 rounded-full border border-white/25 text-xs sm:text-sm font-medium text-white/80 hover:bg-white/10 hover:border-white/40 transition">
                Whatsapp to Order
              </button>
            </Link>
          </motion.div>

          {/* Swipe / scroll cue */}
          <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="mt-14 flex flex-col items-center cursor-pointer"
          onClick={() =>
            document.getElementById("explore")?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <p className="text-[11px] text-white/60 mb-2">
            Scroll down to taste more
          </p>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.4 }}
            className="h-9 w-9 rounded-full bg-white/10 border border-white/30 flex items-center justify-center text-xs"
          >
            ↓
          </motion.div>
        </motion.div>

        </div>
      </MotionWrapper>
    </main>
  );
}
