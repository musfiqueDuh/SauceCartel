
"use client";

import AnimatedBackground from "../components/AnimatedBackground";
import MotionWrapper from "../components/MotionWrapper";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const items = [
  {
    id: 1,
    name: "Garlic Mayonnaise",
    desc: "Eita holo creamy love story — raw garlic-er heavy aroma diye banano. Sandwich, wrap, ba fries-er jonno pura bhai-level combo!",
    price: "৳650",
    weight: "500g ±",
    img: "/garlic-mayo.png",
  },
  {
    id: 2,
    name: "Classic Mayonnaise Spread",
    desc: "The OG mayo — soft, smooth, aar ekdom premium vibe. Kon dish-e dei na bhai? Timeless like your ex’s playlist.",
    price: "৳600",
    weight: "500g ±",
    img: "/classic-mayo.png",
  },
  {
    id: 3,
    name: "Tartar Sauce",
    desc: "Tangy, herby, pickle-er chhoto punch — fried fish-er bestie. Taste-e ekta ajaira class ache.",
    price: "৳675",
    weight: "500g ±",
    img: "/tartar-sauce.png",
  },
  {
    id: 4,
    name: "Honey Mustard",
    desc: "Sweet ar spicy dujon-e ekshathe chill kortese — grilled chicken ba salad-e mood set hoye jabe.",
    price: "৳700",
    weight: "500g ±",
    img: "/honey-mustard.png",
  },
  {
    id: 5,
    name: "Chilli Oil",
    desc: "Warning: hot af 🔥 — ei chili oil mane spice-e emotion. Noodles, dim, ba bhat — ekdom vibe-e fire.",
    price: "৳755",
    weight: "500g ±",
    img: "/chilli-oil.png",
  },
  {
    id: 6,
    name: "[HOT] Roasted Garlic Mayonnaise",
    desc: "Smoky aroma, roasted garlic vibe — creamy-er majhe ekta asol drama ache. Ekbar khaili, repeat hobe.",
    price: "৳730",
    weight: "500g ±",
    img: "/roasted-garlic-mayo.png",
  },
  {
    id: 7,
    name: "Japanese/Korean Soya Dip",
    desc: "Umami-er overdose 😩 authentic soya base-e banano. Dumpling, sushi, ba grilled meat — sab kichur with VIP treatment.",
    price: "৳780",
    weight: "500g ±",
    img: "/soya-dip.png",
  },
  {
    id: 8,
    name: "Burger Sauce",
    desc: "Light-red creamy burger sauce — smoky, tangy, ar onek addictive. Burger e dao, life sorted bro 🍔.",
    price: "৳675",
    weight: "500g ±",
    img: "/burger-sauce.png",
  },
];

export default function ExplorePage() {
  const [index, setIndex] = useState(0);

  // Autoplay carousel
  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % items.length),
      4000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    // 1. Navbar Fix: main should not have overflow-hidden
    <main className="min-h-screen bg-black text-white relative">
      <MotionWrapper>
        <AnimatedBackground />

        {/* This wrapper holds all scrollable content and adds padding for the fixed navbar */}
        <div className="pb-48 pt-4 relative z-10"> 

          {/* Header */}
          {/* 2. Indentation Fix: text-left and px-6. 3. Spacing Fix: pt-8 -> pt-4 */}
          <div className="pt-4 text-left px-6">
            <h5 className="text-xl font-bold leading-snug">
              Spread so good, that they{" "}
              <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-yellow-400">
                Gaslight {" "}
              </span>
              your
              <br/>
              <span className="text-transparent text-3xl bg-clip-text bg-gradient-to-r from-pink-400 to-blue-400">
                tasteBuds
              </span>
            </h5>
          </div>

          {/* Carousel container */}
          {/* 3. Spacing Fix: mt-10 -> mt-8 */}
          <div className="relative mt-8 flex justify-center items-center overflow-hidden">
            <motion.div
              key={index}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ type: "spring", stiffness: 60, damping: 15 }}
              className="relative w-[85%] max-w-sm h-[60vh] rounded-3xl bg-white/10 backdrop-blur-md border border-white/15 overflow-hidden flex flex-col"
            >

              {/* --- 60% IMAGE --- */}
              {/* Note: I'm leaving the original image div as-is */}
              <div className="relative w-full h-[60%] overflow-hidden">
                <Image
                  src={items[index].img}
                  alt={items[index].name}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover rounded-t-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />
              </div>

              {/* --- 25% TEXT --- */}
              <div className="flex flex-col justify-center h-[25%] px-5">
                <h3 className="text-xl font-semibold">{items[index].name}</h3>
                <p className="text-sm text-white/70 mt-1">{items[index].desc}</p>
              </div>

              {/* --- 15% PRICE / BUTTON --- */}
              <div className="h-[15%] px-5 pb-4 flex items-end justify-between">
                <p className="text-lg font-bold">{items[index].price}</p>
                <button className="rounded-full bg-yellow-400 text-black px-4 py-2 text-xs font-semibold active:scale-95 transition">
                  Order
                </button>
              </div>
            </motion.div>
          </div>

        </div>
        {/* End of scrollable content wrapper */}

        {/* Navbar */}
        {/* 1. Navbar Fix: Fixed positioning at the bottom of the screen */}
        <div className="fixed bottom-0 left-0 right-0 z-50">
          <Navbar />
        </div>

      </MotionWrapper>
    </main>
  );
}