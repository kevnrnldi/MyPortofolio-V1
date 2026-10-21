"use client";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { cn } from "@/lib/utils";
import { FaLocationArrow } from "react-icons/fa6";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import dynamic from "next/dynamic";

const EncryptedText = dynamic(
  () => import("@/components/ui/Encrypted").then((m) => m.EncryptedText),
  { ssr: false },
);
const Hero = () => {
  return (
    <div className="pb-20 pt-36 ">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen "
          fill="white"
        />
        <Spotlight
          className="top-20 left-full h-[50vh] w-[60vw] "
          fill="grey"
        />
        <Spotlight
          className="top-60 left-full h-screen w-[20vw] "
          fill="white"
        />
        <Spotlight className="top-28 left-80 h-[90vh] w-[50vw] " fill="grey" />
      </div>

      <div className="absolute left-0 top-0 flex h-screen w-full items-center justify-center bg-black-100">
        <div className="absolute pointer-events-none  dark:bg-black-100 inset-0 bg-size-[230px_320px] bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_5px,transparent_5px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_5px,transparent_5px)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_closest-side_at_center,transparent_40%,#050505_100%)]" />
      </div>

      <div className="flex justify-center relative -mt-36 h-screen  z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase lg:text-[20px] tracking-widest  text-center text-white-100 max-w-1000">
            <EncryptedText
              text="Hi, my name is Muhammad Kevin Rinaldi"
              encryptedClassName="text-neutral-500"
              revealedClassName="text-white"
              revealDelayMs={80}
            />
          </h2>

          <TextGenerateEffect
            className="text-center text-[40px]  md:text-5xl lg:text-6xl"
            words="Building Scalable and Secure Systems"
          />
          <p className="text-center  md:tracking-wider text-white-300  text-xl md:text-[18px] lg:px-6 lg:mx-6 lg:text-[20px]">
            Backend developer who enjoys building reliable, scalable, and secure
            systems. I’m also exploring DevOps, mobile development, and AI, and
            I’m always open to new opportunities.
          </p>
          <a href="#projects" className="mt-8 md:mt-0">
            <MagicButton
              otherClasses="transition-colors duration-200 ease-in-out hover:bg-slate-900 "
              title="Show my Work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
