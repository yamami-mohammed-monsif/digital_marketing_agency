"use client";

import { motion, useAnimation, useInView } from "motion/react";
import { JSX, useRef, useEffect } from "react";

type revealProps = {
  children: JSX.Element;
  color?: string;
  className?: string;
  delay?: number;
};

const Reveal = ({
  children,
  color = "hsla(0, 0%, 11%, 1)",
  className,
  delay = 0.25,
}: revealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView, mainControls, slideControls]);

  return (
    <div
      ref={ref}
      className={`relative w-fit overflow-hidden ${className || ""}`}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration: 0.5,
          delay,
          willChange: "transform, opacity",
          translateY: [75, 0],
          translateZ: 0, // Force hardware acceleration
        }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{
          duration: 0.5,
          ease: "easeIn",
          willChange: "transform",
          translateZ: 0, // Force hardware acceleration
        }}
        className="absolute top-1 bottom-1 left-0 right-0 z-20"
        style={{
          backgroundColor: color,
          willChange: "transform",
          transform: isInView ? "translateX(100%)" : "translateX(0)",
          transition: "transform 0.5s ease-in",
        }}
      />
    </div>
  );
};

export default Reveal;
