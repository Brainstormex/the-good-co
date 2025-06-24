"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useParallaxCard } from "@/hooks/useParallax";
import { useIsLargeScreen } from "@/hooks/useIsLargeScreen";

export default function Section3() {
  const { ref, imageY, cardY, textY, opacity } = useParallaxCard();
  const isLargeScreen = useIsLargeScreen();

  return (
    <div className="min-h-screen bg-white flex items-center justify-center lg:p-8 md:p-6 p-4">
      <div className="max-w-7xl w-full">
        <motion.div
          className="relative mb-8 overflow-hidden lg:pr-36 pr-0 rounded-lg md:rounded-none"
          ref={ref}
          style={{ y: cardY, opacity }}
        >
          <div className="relative w-fit">
            <motion.div 
              style={{ y: imageY }} 
              className="relative transform-gpu rounded-lg md:rounded-none overflow-hidden max-w-2xl lg:max-w-none"
            >
              <Image
                src="/assets/images/ganapath.jpg"
                alt="Ganapath"
                width={800}
                height={1000}
                className="transform-gpu lg:aspect-video aspect-square object-cover"
              />
            </motion.div>
            <div className="absolute flex lg:hidden inset-0 bg-gradient-to-t from-black to-white to-30% mix-blend-multiply" />
          </div>
          <motion.div
            style={{ y: isLargeScreen ? textY : 0 }}
            className="absolute xl:left-109 lg:left-92 left-0 lg:top-48 bottom-0 flex items-end justify-start lg:pl-12 pl-0 z-10"
          >
            <div className="text-6xl md:text-8xl lg:text-9xl font-light text-white tracking-wider">
              <h1 className="">
                <span className="text-white">Ganp</span>
                <span className="text-white xl:text-black">a</span>
                <span className="text-white lg:text-black">th</span>
              </h1>
              <div className="mb-4 hidden lg:flex flex-col items-end lg:text-sm tracking-normal text-sm font-light">
                <h2 className=" text-gray-800 mb-1">Feature Film</h2>
                <p className=" text-gray-900">2022</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Content Section */}
        <motion.div 
          className="flex w-full gap-12 text-black"
          style={{ y: cardY }}
        >
          <div className="md:w-1/3">
            <div className="mb-4">
              <h2 className="lg:text-lg text-sm font-medium text-gray-800 mb-1">
                Feature Film
              </h2>
              <p className="lg:text-3xl text-sm font-light text-gray-900">
                2022
              </p>
            </div>
          </div>

          {/* Right Column - Description */}
          <div className="md:w-2/3">
            <p className="text-gray-700 lg:text-lg text-sm leading-relaxed">
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
