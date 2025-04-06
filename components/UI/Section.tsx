import React from "react";

type sectionProps = {
  children: React.ReactNode;
};

const Section: React.FC<sectionProps> = ({ children }) => {
  return (
    <section className="w-full relative px-5 sm:px-10 md:px-13 lg:px-17 xl:px-22 2xl:px-25 mb-13 sm:mb-18 md:mb-22 lg:mb-28 xl:mb-34 2xl:mb-[150px]">
      {children}
    </section>
  );
};

export default Section;
