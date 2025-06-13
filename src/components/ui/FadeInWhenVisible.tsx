"use client"; // Komponen ini menggunakan hook/state motion, jadi perlu client component

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, ReactNode } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  xOffset?: number;
  threshold?: number;
  className?: string;
}

const FadeInWhenVisible = ({
  children,
  delay = 0,
  duration = 0.5,
  yOffset = 20,
  xOffset = 0,
  threshold = 0.2,
  className = "",
}: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: threshold, once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: yOffset, x: xOffset },
        visible: { opacity: 1, y: 0, x: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: duration, delay: delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeInWhenVisible;