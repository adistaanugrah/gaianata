"use client"; // Komponen ini menggunakan hook/state motion, jadi perlu client component

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, ReactNode } from "react";

interface Props {
  children: ReactNode;
  delay?: number;      // Delay sebelum animasi dimulai (detik)
  duration?: number;   // Durasi animasi (detik)
  yOffset?: number;    // Jarak slide vertikal (pixel)
  xOffset?: number;    // Jarak slide horizontal (pixel)
  threshold?: number;  // Seberapa banyak elemen harus terlihat sebelum animasi (0-1)
  className?: string;  // Kelas CSS tambahan jika perlu
}

const FadeInWhenVisible = ({
  children,
  delay = 0,
  duration = 0.5,
  yOffset = 20, // Default slide up sedikit
  xOffset = 0,
  threshold = 0.2, // Animate saat 20% terlihat
  className = "",
}: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: threshold, once: true }); // Trigger hanya sekali
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