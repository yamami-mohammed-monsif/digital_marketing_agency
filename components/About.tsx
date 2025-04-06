import React from "react";
import Section from "./UI/Section";
import Reveal from "./UI/Reveal";

const About: React.FC = () => {
  return (
    <Section className="md:grid grid-cols-2" id="about">
      <Reveal>
        <h2>About Us!</h2>
      </Reveal>
      <div>
        <Reveal>
          <p className="mb-10 md:mb-6">
            Our services help you create digital products and solve your
            problems objectively, strategy, technology and analysis. Our service
            also has a high appeal because it has a beautiful color combination
            and a minimalist concept.
          </p>
        </Reveal>

        <div
          className="md:hidden flex flex-col items-center gap-6 mb-6"
          aria-label="Company statistics"
        >
          <Reveal>
            <div>
              <span
                className="block font-bold text-[64px] leading-[100%] mb-4"
                aria-label="Project count"
              >
                300+
              </span>
              <span className="text-[16px] font-medium">Project Completed</span>
            </div>
          </Reveal>
          <Reveal>
            <div>
              <span
                className="block font-bold text-[64px] leading-[100%] mb-4"
                aria-label="Team size"
              >
                25+
              </span>
              <span className="text-[16px] font-medium">
                Professional Teams
              </span>
            </div>
          </Reveal>
          <Reveal>
            <div>
              <span
                className="block font-bold text-[64px] leading-[100%] mb-4"
                aria-label="Happy clients"
              >
                200+
              </span>
              <span className="text-[16px] font-medium">Satisfied Clients</span>
            </div>
          </Reveal>
          <Reveal>
            <div>
              <span
                className="block font-bold text-[64px] leading-[100%] mb-4"
                aria-label="Years of experience"
              >
                10+
              </span>
              <span className="text-[16px] font-medium">
                Years of Experience
              </span>
            </div>
          </Reveal>
        </div>
        <div>
          <Reveal>
            <h3>What We do?</h3>
          </Reveal>
          <Reveal>
            <p>
              We provide comprehensive marketing solutions that help our clients
              reach their maximum potential. Our team of experienced
              professionals understands the ever-changing landscape of marketing
              and is able to create custom strategies for each client. From
              digital marketing to traditional media and everything in between,
              we have the expertise to put together an effective, successful
              marketing campaign. We also offer solutions in the areas of public
              relations, branding, search engine optimization, and more. We
              strive to deliver measurable, tangible results that help our
              clients reach their goals.
            </p>
          </Reveal>
        </div>
      </div>
    </Section>
  );
};

export default About;
