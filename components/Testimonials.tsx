import React from "react";
import Section from "./UI/Section";
import Reveal from "./UI/Reveal";

const Testimonials: React.FC = () => {
  return (
    <Section>
      <Reveal>
        <h2 className="md:mb-9 lg:mb-12 xl:mb-[60px]">Testimoni!</h2>
      </Reveal>

      <div className="flex flex-col md:flex-row gap-6 md:gap-[101px] lg:gap-[153px] xl:gap-[235px]">
        <div>
          <Reveal>
            <p className="md:text-[36px] leading-[180%]">
              Working together with EMOON, we are very thankful for our loyal
              clients. our business is one of close relationship and we are very
              fortunate to be able to share.
            </p>
          </Reveal>
        </div>
        <div className="md:self-end">
          <Reveal>
            <span className="block text-[40px] md:text-[64px] font-bold mb-1 ">
              Momon
            </span>
          </Reveal>
          <Reveal>
            <span className="block text-secondary">CEO of Gaiken</span>
          </Reveal>
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;
