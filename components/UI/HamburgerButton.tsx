"use client";

import { motion, MotionProvider } from "../utils/MotionProvider";

type buttonProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="6"
    stroke="black"
    strokeLinecap="round"
    {...props}
  />
);

const HamburgerButton = ({ isOpen, setIsOpen }: buttonProps) => {
  return (
    <button
      className="lg:hidden cursor-pointer z-40"
      onClick={() => setIsOpen(!isOpen)}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
      aria-controls="mobile-menu"
    >
      <MotionProvider>
        <motion.svg
          width={24}
          height={24}
          viewBox="0 0 100 100"
          initial={false}
          animate={isOpen ? "open" : "closed"}
          aria-hidden="true"
        >
          <Path
            variants={{
              closed: {
                d: "M 80 25 H 35",
                opacity: 1,
                transition: { delay: 0.5 },
              },
              open: { d: "M 80 25 H 80", opacity: 0 },
            }}
            transition={{ duration: 0.2 }}
          />

          <Path
            variants={{
              closed: {
                d: "M 80 50 H 20",
                opacity: 1,
                transition: { delay: 0.5 },
              },
              open: { d: "M 80 50 H80", opacity: 0 },
            }}
            transition={{ duration: 0.3 }}
          />

          <Path
            variants={{
              closed: {
                d: "M 80 75 H 50",
                opacity: 1,
                transition: { delay: 0.5 },
              },
              open: { d: "M 80 75 H 80", opacity: 0 },
            }}
            transition={{ duration: 0.1 }}
          />

          {/* paths forming X */}
          <Path
            variants={{
              closed: { d: "M 80 50 H 20", opacity: 0, x: 0 },
              open: { rotate: 45, opacity: 1 },
            }}
            transition={{ delay: 0.2, duration: 0.2 }}
          />
          <Path
            variants={{
              closed: { d: "M 80 50 H 20", opacity: 0, x: 0 },
              open: { rotate: -45, opacity: 1 },
            }}
            transition={{ delay: 0.2, duration: 0.2 }}
          />
        </motion.svg>
      </MotionProvider>
    </button>
  );
};

export default HamburgerButton;
