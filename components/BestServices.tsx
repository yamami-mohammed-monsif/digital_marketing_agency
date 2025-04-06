"use client";

import React from "react";
import Section from "./UI/Section";
import Button from "./UI/Button";
import Reveal from "./UI/Reveal";
import { Services } from "@/constants";

const BestServices: React.FC = () => {
  return (
    <Section id="service">
      <div className="md:grid md:grid-cols-2 mb-6 md:mb-[30px] lg:mb-10 ">
        <Reveal>
          <h2>Best Services!</h2>
        </Reveal>
        <Reveal>
          <p>
            Our marketing agency offers a full range of services to help
            businesses create, execute, and maintain a successful online
            presence. Services include website design, search engine
            optimization, content creation, social media marketing.
          </p>
        </Reveal>
      </div>
      <Button
        variant="secondary"
        paddingX="px-8"
        paddingY="py-4"
        aria-label="Learn more about our services"
      >
        Learn More!
      </Button>

      <ul
        className="grid gap-6 md:gap-9 md:grid-cols-2 lg:grid-cols-4 items-end mt-10 md:mt-11 lg:mt-[55px]"
        aria-label="Our services list"
      >
        {Services.map((item) => {
          return (
            <Reveal key={item.id}>
              <li className="text-[40px] font-medium">
                {item.text}
                <span
                  className="block mt-6 w-full h-[1px] bg-main"
                  aria-hidden="true"
                ></span>
              </li>
            </Reveal>
          );
        })}
      </ul>
    </Section>
  );
};

export default BestServices;
