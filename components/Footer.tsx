"use client";

import React from "react";
import Reveal from "./UI/Reveal";
import Logo from "./UI/Logo";
import Section from "./UI/Section";
import { NavLinks, socials } from "@/constants";

const Footer = () => {
  return (
    <footer className="bg-primary-800 text-white border-t-2">
      <Section noMargin>
        <div className="flex flex-col gap-6 md:gap-[114px] lg:gap-[173px] xl:gap-[377px] md:flex-row md:items-center py-[50px] md:pt-[55px] lg:pt-[60px] md:pb-[65px] lg:mb-[80px]">
          <div className="flex flex-col gap-4 md:gap-5 md:flex-1">
            <Logo
              fill="white"
              className="aspect-square w-6 sm:w-9 md:w-10 lg:w-13 xl:w-[62px]"
            />
            <Reveal color="white">
              <p>
                We are a designer engaged in design that provides design and
                renovation services for your home or office.
              </p>
            </Reveal>
            <Reveal color="white">
              <p>Hello.Varc@gmail.com</p>
            </Reveal>
            <Reveal color="white">
              <p>(406) 777-9280</p>
            </Reveal>
          </div>
          <div className="grid grid-cols-2 gap-y-6 md:grid-cols-3 md:flex-1">
            <ul className="grid gap-4 w-max h-max">
              {NavLinks.map((item) => {
                return (
                  <li key={item.id}>
                    <a
                      className="transition duration-200 hover:scale-110 hover:[text-shadow:0px_0px_8px_rgba(255,255,255,0.8)]"
                      href={item.href}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
            <ul className="grid gap-4 w-max h-max">
              {socials.map((item) => {
                return (
                  <li key={item.id}>
                    <a
                      className="transition duration-200 hover:scale-110 hover:[text-shadow:0px_0px_8px_rgba(255,255,255,0.8)]"
                      href={item.url}
                      target="_blank"
                      aria-label={`Visit our ${item.text} page`}
                    >
                      {item.text}
                    </a>
                  </li>
                );
              })}
            </ul>
            <ul className="col-span-2 grid gap-4 md:col-span-1 w-max h-max">
              {["Privacy", "Terms and Conditions", "FAQ's"].map(
                (text, index) => (
                  <li key={index}>
                    <a
                      className="transition duration-200 hover:scale-110 hover:[text-shadow:0px_0px_8px_rgba(255,255,255,0.8)]"
                      href="#"
                      aria-label={text}
                    >
                      {text}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </Section>
    </footer>
  );
};

export default Footer;
