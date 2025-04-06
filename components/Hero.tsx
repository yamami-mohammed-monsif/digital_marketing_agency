import Section from "./UI/Section";
import Reveal from "./UI/Reveal";
import Image from "next/image";

const Hero: React.FC = () => {
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
      <div className="relative overflow-hidden">
        <div className="relative w-full h-[495px] sm:w-[1055px] sm:h-[495px] lg:w-[1340px] lg:h-[629px] ml-auto">
          <Image
            src="/hero-image.webp"
            alt="hero image"
            fill
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 1055px, 1340px"
            className="object-cover"
            loading="eager"
          />
        </div>
      </div>
    </Section>
  );
};

export default Hero;
