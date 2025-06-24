"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useParallaxCard } from "../../hooks/useParallax";
import { useIsLargeScreen } from "@/hooks/useIsLargeScreen";

export default function Section1() {
  const { ref, imageY, cardY, textY, opacity } = useParallaxCard();
  const isLargeScreen = useIsLargeScreen();

  return (
    <div className="min-h-screen bg-white flex items-center justify-center lg:p-8 md:p-6 p-4">
      <div className="max-w-7xl w-full">
        <motion.div 
          ref={ref} 
          className="relative mb-8 lg:pl-36 overflow-hidden rounded-lg md:rounded-none"
          style={{ y: cardY, opacity }}
        >
          <div className="relative w-fit overflow-hidden rounded-lg md:rounded-none" >
            <motion.div
              style={{ y: imageY }}
              className="transform-gpu rounded-lg md:rounded-none overflow-hidden max-w-2xl lg:max-w-none"
            >
              <Image
                src="/assets/images/goodbuy.jpg"
                alt="Goodbye"
                width={900}
                height={1000}
                className="transform-gpu lg:aspect-video aspect-square object-cover lg:object-none"
              />
            </motion.div>
            <div className="absolute flex lg:hidden inset-0 bg-gradient-to-t from-black to-white to-30% mix-blend-multiply" />
          </div>
          
          <motion.div 
            className="absolute xl:left-13 lg:left-13 left-0 lg:bottom-0 bottom-0 flex items-end justify-start"
            style={{ y: isLargeScreen ? textY : 0 }}
          >
            <h1 className="lg:text-9xl md:text-8xl text-6xl font-light text-white tracking-wider transform-gpu">
              <span className="text-white lg:text-black">G</span>
              <span className="text-white">oodbye</span>
            </h1>
          </motion.div>
        </motion.div>

        {/* Content Section */}
        <motion.div 
          className="flex gap-12 w-full text-black"
          style={{ y: cardY }}
        >
          {/* Left Column - Movie Details */}
          <div className="md:w-1/3">
            <div className="mb-4">
              <h2 className="lg:text-lg text-sm font-medium text-gray-800 mb-1">
                Feature Film
              </h2>
              <p className="lg:text-3xl text-sm font-light text-gray-900">2022</p>
            </div>
          </div>

          {/* Right Column - Description */}
          <div className="md:w-2/3">
            <p className="lg:text-lg text-sm text-gray-700 leading-relaxed">
              This poignant film, a tearjerker with a side of laughter,
              beautifully captures the messy magic of family. Amitabh Bachchan
              shines as the patriarch grappling with grief and rediscovering the
              bonds that truly matter. &apos;Goodbye&apos; is a reminder to cherish the
              moments, mend fences, and say &quot;I love you&quot; a little louder.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
