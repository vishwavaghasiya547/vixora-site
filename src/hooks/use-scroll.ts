"use client";

import { useState } from "react";
import { useScroll, useMotionValueEvent, useVelocity } from "framer-motion";
import { SCROLL_THRESHOLD } from "@/config/navigation";

export function useScrollData() {
  const { scrollY, scrollYProgress } = useScroll();
  const scrollVelocity = useVelocity(scrollY);

  const [data, setData] = useState({
    scrollY: 0,
    direction: "up" as "up" | "down",
    isScrolled: false,
    scrollProgress: 0,
    velocity: 0,
  });

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    const velocity = scrollVelocity.get();
    
    setData({
      scrollY: latest,
      direction: latest > previous ? "down" : "up",
      isScrolled: latest > SCROLL_THRESHOLD,
      scrollProgress: scrollYProgress.get(),
      velocity,
    });
  });

  return data;
}
