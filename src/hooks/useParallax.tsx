import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";


export const useParallaxCard = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax movement
  const imageY = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const cardY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return {
    ref,
    imageY,
    cardY,
    textY,
    opacity,
    scrollYProgress,
  };
};

