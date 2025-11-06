
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
    desc: "Smooth, creamy texture infused with the aroma of fresh raw garlic — perfect for sandwiches, wraps, or dipping.",
    price: "৳250",
    weight: "500g ±",
    img: "/garlic-mayo.png",
  },
  {
    id: 2,
    name: "Classic Mayonnaise Spread",
    desc: "Rich, velvety classic mayo that adds a premium creamy layer to any meal — timeless and versatile.",
    price: "৳230",
    weight: "500g ±",
    img: "/classic-mayo.png",
  },
  {
    id: 3,
    name: "Tartar Sauce",
    desc: "A tangy, herby blend with hints of pickle and lemon — made to complement seafood and fried bites.",
    price: "৳260",
    weight: "500g ±",
    img: "/tartar-sauce.png",
  },
  {
    id: 4,
    name: "Honey Mustard",
    desc: "Sweet meets savory in this golden blend of pure honey and bold mustard — perfect for salads or grilled chicken.",
    price: "৳270",
    weight: "500g ±",
    img: "/honey-mustard.png",
  },
  {
    id: 5,
    name: "Chilli Oil",
    desc: "Fiery and aromatic — our chili oil blends crushed red peppers with deep, flavorful spice for an extra kick.",
    price: "৳290",
    weight: "500g ±",
    img: "/chilli-oil.png",
  },
  {
    id: 6,
    name: "Premium Roasted Garlic Mayonnaise",
    desc: "Roasted garlic richness with a smoky aroma — luxuriously smooth and bold in flavor.",
    price: "৳280",
    weight: "500g ±",
    img: "/roasted-garlic-mayo.png",
  },
  {
    id: 7,
    name: "Japanese/Korean Soya Dip",
    desc: "Umami-packed dip crafted with authentic soya base — pairs beautifully with sushi, dumplings, or grilled meat.",
    price: "৳300",
    weight: "500g ±",
    img: "/soya-dip.png",
  },
  {
    id: 8,
    name: "Burger Sauce",
    desc: "Signature light-red burger sauce that blends creamy mayo with tangy, smoky notes — the ultimate burger companion.",
    price: "৳260",
    weight: "500g ±",
    img: "/burger-sauce.png",
  },
];

export default function ExplorePage() {
  const [index, setIndex] = useState(0);

  // autoplay carousel
  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % items.length),
      4000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <MotionWrapper>
        <AnimatedBackground />

        {/* Header */}
        <div className="pt-8 text-center z-10 relative">
          <h5 className="text-xl font-bold">
            Spread so good, that they{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-yellow-400">
              Gaslight {" "}
            </span>
            your {" "}
            <span className="text-transparent text-3xl bg-clip-text bg-gradient-to-r from-pink-400 to-blue-400">
               taste buds
            </span>
          </h5>
        </div>

        {/* Carousel container */}
<div className="relative mt-10 flex justify-center items-center overflow-hidden">
<motion.div
  key={index}
  initial={{ x: 300, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  exit={{ x: -300, opacity: 0 }}
  transition={{ type: "spring", stiffness: 60, damping: 15 }}
  className="relative w-[85%] max-w-sm h-[60vh] rounded-3xl bg-white/10 backdrop-blur-md border border-white/15 overflow-hidden flex flex-col"
>

    {/* --- 60% IMAGE --- */}
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

        {/* Navbar */}
        <div className="mt-10">
          <Navbar />
        </div>
      </MotionWrapper>
    </main>
  );
}
