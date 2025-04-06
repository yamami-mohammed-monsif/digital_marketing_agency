"use client";

import Section from "./UI/Section";
import Reveal from "./UI/Reveal";
import Image from "next/image";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const Hero: React.FC = () => {
  const imageRef = useRef(null);
  const isInView = useInView(imageRef, { once: true, amount: 0.3 });

  return (
    <Section>
      <h1>
        <Reveal>
          <span>Unlock your brand's potential</span>
        </Reveal>
        <Reveal>
          <span>with our creative solutions.</span>
        </Reveal>
      </h1>
      <div
        className="relative overflow-hidden"
        ref={imageRef}
        aria-label="Hero image section"
      >
        <motion.div
          className="relative w-full h-[495px] sm:w-[1055px] sm:h-[495px] lg:w-[1340px] lg:h-[629px] ml-auto"
          initial={{ opacity: 0, x: 100 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          aria-hidden="true"
        >
          <Image
            src="/hero-image.webp"
            alt="Marketing professionals collaborating on creative solutions for brands"
            fill
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 1055px, 1340px"
            className="object-cover"
            loading="eager"
            fetchPriority="high"
            quality={80}
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNlMGUwZTAiLz48L3N2Zz4="
          />
        </motion.div>
      </div>
    </Section>
  );
};

export default Hero;
