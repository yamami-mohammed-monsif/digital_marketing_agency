"use client";

import { NavLinks } from "@/constants";
import Link from "next/link";
import Button from "../UI/Button";
import NavLink from "../UI/NavLink";
import { motion } from "motion/react";
import { useEffect } from "react";

type navProps = {
  isOpen: boolean;
};

const MobileNav: React.FC<navProps> = ({ isOpen }) => {
  // Prevent scrolling when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <motion.ul
      initial={false}
      animate={isOpen ? "open" : "closed"}
      variants={{
        open: { x: 0 },
        closed: { x: "100vw" },
      }}
      transition={{ type: "tween", duration: 0.6, staggerChildren: 0.1 }}
      className="flex flex-col items-center justify-center gap-14 fixed inset-y-0 right-0 left-[30%] z-30 bg-white"
    >
      {NavLinks.map((item) => {
        return <NavLink key={item.id} href={item.href} label={item.label} />;
      })}
      <li>
        <Button variant="primary" paddingY="py-4" paddingX="px-8">
          Get in touch
        </Button>
      </li>
    </motion.ul>
  );
};

export default MobileNav;
