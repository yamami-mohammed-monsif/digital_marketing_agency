"use client";

import React from "react";
import Section from "./UI/Section";
import Reveal from "./UI/Reveal";
import Button from "./UI/Button";
import { motion, useInView } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

const RecentWork: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <Section>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-9 md:mb-11 lg:mb-[58px] ">
        <Reveal>
          <h2>Recent Work!</h2>
        </Reveal>
        <Button
          className="self-start"
          variant="secondary"
          paddingX="px-8"
          paddingY="py-4"
        >
          See More!
        </Button>
      </div>
      <div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-6 md:gap-9 lg:gap-[50px]"
      >
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
              alt="project1"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, (max-width: 1024px) 400px, 595px"
              className="object-cover hover:scale-110 transition-transform duration-700"
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
              alt="project2"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, (max-width: 1024px) 400px, 595px"
              className="object-cover hover:scale-110 transition-transform duration-700"
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
              alt="project3"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, (max-width: 1024px) 400px, 595px"
              className="object-cover hover:scale-110 transition-transform duration-700"
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
              alt="project4"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, (max-width: 1024px) 400px, 595px"
              className="object-cover hover:scale-110 transition-transform duration-700"
            />
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default RecentWork;
