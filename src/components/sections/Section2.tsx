"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useParallaxCard } from "@/hooks/useParallax";
import { useIsLargeScreen } from "@/hooks/useIsLargeScreen";

export default function Section2() {
  const { ref, imageY, cardY, textY, opacity } = useParallaxCard();
  const isLargeScreen = useIsLargeScreen();

  return (
    <section className="min-h-screen max-w-6xl mx-auto py-8 md:py-24 px-4 md:px-12 overflow-hidden text-gray-900">
      <motion.div
        className="flex relative justify-center lg:justify-end mx-auto overflow-hidden rounded-lg md:rounded-none"
        ref={ref}
        style={{ y: cardY, opacity }}
      >
        <div className="relative w-fit overflow-hidden rounded-lg md:rounded-none">
          <motion.div
            className="h-full w-fit rounded-lg md:rounded-none overflow-hidden relative"
            style={{ y: imageY }}
          >
            <Image
              src="/assets/images/sunflower.jpg"
              alt="Sunflower poster"
              width={500}
              height={700}
              className="self-end right-0 rounded-lg md:rounded-none overflow-hidden"
            />
          </motion.div>
          <div className="absolute flex lg:hidden inset-0 bg-gradient-to-t from-black to-white to-30% mix-blend-multiply" />
        </div>
        <motion.div
          className="absolute left-1 md:left-auto lg:right-75 right-1/4 lg:bottom-80 bottom-0 tracking-wider"
          style={{ y: isLargeScreen ? textY : 0 }}
        >
          <h2 className="lg:text-9xl md:text-8xl text-6xl font-light">
            <span className="text-white lg:text-black">Sunflo</span>
            <span className="text-white">wer</span>
          </h2>
          <p className="text-xl hidden lg:block">Season 1 & 2</p>
          <div className="text-sm hidden lg:block">
            <p>OTT SERIES</p>
            <p>2021-2023</p>
          </div>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="flex gap-10 mt-5 w-full justify-center text-black"
        style={{ y: cardY }}
      >
        <div className="text-sm block lg:hidden min-w-24">
          <p>Season 1 & 2</p>
          <div className="text-sm">
            <p>OTT SERIES</p>
            <p>2021-2023</p>
          </div>
        </div>
        <p className="text-sm self-end md:text-base  w-full max-w-[500px] ml-auto">
          A chaotic comedy about a housing society gone haywire. Season 1 is
          murder mystery with a side of quirky characters and unexpected twists.
          Season 2 takes the chaos up the absurdity, throwing in a dash of new
          characters, a sprinkle of romance, and a whole lot of Indian madness,
          where the mundane becomes hilariously absurd.
        </p>
      </motion.div>
    </section>
  );
}
