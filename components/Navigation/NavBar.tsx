"use client";

import Logo from "../UI/Logo";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import HamburgerButton from "../UI/HamburgerButton";
import { useState } from "react";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="flex items-center justify-between py-7 md:py-[34px] xl:py-[38px] 2xl:py-10 px-5 sm:px-10 md:px-13 lg:px-17 xl:px-22 2xl:px-25 ">
      <Logo
        fill="hsla(0, 0%, 11%, 1)"
        className="aspect-square w-6 sm:w-9 md:w-10 lg:w-13 xl:w-[62px]"
      />
      <HamburgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
      <MobileNav isOpen={isOpen} />
      {isOpen && (
        <div
          className="fixed inset-0 bg-primary-800/30 z-20"
          onClick={() => setIsOpen(false)}
        />
      )}
      <DesktopNav />
    </nav>
  );
};

export default NavBar;
