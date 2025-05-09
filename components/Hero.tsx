"use client";

import Section from "./UI/Section";
import Reveal from "./UI/Reveal";
import Image from "next/image";
import { useInView } from "motion/react";
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
        className="relative w-full h-[495px] sm:w-[1055px] sm:h-[495px] lg:w-[1340px] lg:h-[629px] ml-auto"
        aria-hidden="true"
      >
        <Image
          src="/hero-image.webp"
          alt="Marketing professionals collaborating on creative solutions for brands"
          fill
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 1055px, 1340px"
          className="object-cover"
        />
      </div>
    </Section>
  );
};

export default Hero;
