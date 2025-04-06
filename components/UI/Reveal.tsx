"use client";

import { motion, useAnimation, useInView } from "motion/react";
import { JSX, useRef, useEffect } from "react";

type revealProps = {
  children: JSX.Element;
  color?: string;
  className?: string;
};

const Reveal = ({
  children,
  color = "hsla(0, 0%, 11%, 1)",
  className,
}: revealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} className={`relative w-fit overflow-hidden ${className}`}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
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
        transition={{ duration: 0.5, ease: "easeIn" }}
        className="absolute top-1 bottom-1 left-0 right-0 z-20"
        style={{ backgroundColor: color }}
      />
    </div>
  );
};

export default Reveal;
