"use client";

import { motion, MotionProvider } from "../utils/MotionProvider";

interface buttonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  paddingX?: string;
  paddingY?: string;
  fontSize?: string;
  className?: string;
  "aria-label"?: string;
}

const Button: React.FC<buttonProps> = ({
  children,
  variant,
  paddingX = "px-8",
  paddingY = "py-4",
  fontSize = "text-base",
  className,
  "aria-label": ariaLabel,
}) => {
  return (
    <MotionProvider>
      <motion.button
        whileHover={{
          scale: 1.05,
          y: -5,
          boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.3)",
          backgroundColor: "#ffff",
          color: "hsla(0, 0%, 11%, 1)",
        }}
        whileTap={{
          scale: 0.9,
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className={`rounded-full cursor-pointer font-main ${
          variant === "primary"
            ? "bg-primary-800 text-white"
            : "bg-white text-primary-800 border"
        } ${paddingX} ${paddingY} ${fontSize} ${className}`}
        aria-label={ariaLabel}
      >
        {children}
      </motion.button>
    </MotionProvider>
  );
};

export default Button;
