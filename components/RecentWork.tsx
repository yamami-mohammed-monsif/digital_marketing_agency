"use client";

import Section from "./UI/Section";
import Reveal from "./UI/Reveal";
import Button from "./UI/Button";
import { motion, MotionProvider } from "./utils/MotionProvider";
import { useInView } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

const RecentWork: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <Section id="office">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-9 md:mb-11 lg:mb-[58px] ">
        <Reveal>
          <h2>Recent Work!</h2>
        </Reveal>
        <Button
          className="self-start"
          variant="secondary"
          paddingX="px-8"
          paddingY="py-4"
          aria-label="See more of our work"
        >
          See More!
        </Button>
      </div>
      <div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-6 md:gap-9 lg:gap-[50px]"
      >
        <MotionProvider>
          <motion.div
            className="overflow-hidden rounded-lg cursor-pointer w-full"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="relative w-full aspect-[335/401] sm:aspect-[400/480] lg:aspect-[595/713]">
              <Image
                src="/project1.webp"
                alt="Digital marketing campaign for an environmental company"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, (max-width: 1024px) 400px, 595px"
                className="object-cover hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          </motion.div>
          <motion.div
            className="overflow-hidden rounded-lg cursor-pointer w-full"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative w-full aspect-[335/401] sm:aspect-[400/480] lg:aspect-[595/713]">
              <Image
                src="/project2.webp"
                alt="Brand redesign for a tech startup"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, (max-width: 1024px) 400px, 595px"
                className="object-cover hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          </motion.div>
          <motion.div
            className="overflow-hidden rounded-lg cursor-pointer w-full"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative w-full aspect-[335/401] sm:aspect-[400/480] lg:aspect-[595/713]">
              <Image
                src="/project3.webp"
                alt="Social media campaign for a fashion brand"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, (max-width: 1024px) 400px, 595px"
                className="object-cover hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          </motion.div>
          <motion.div
            className="overflow-hidden rounded-lg cursor-pointer w-full"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative w-full aspect-[335/401] sm:aspect-[400/480] lg:aspect-[595/713]">
              <Image
                src="/project4.webp"
                alt="Website redesign for a financial services company"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, (max-width: 1024px) 400px, 595px"
                className="object-cover hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          </motion.div>
        </MotionProvider>
      </div>
    </Section>
  );
};

export default RecentWork;
