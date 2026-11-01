import React from "react";
import { techStack } from "@/data";
import { techStack2 } from "@/data";
import { companies } from "@/data";
import { InfiniteMovingCards } from "@/components/ui/InfiniteMoving";

const Clients = () => {
  return (
    <div className=" py-30" id="techStack">
      <h1 className="heading lg:text-[4rem]">
        What I <span className="text-[#A9A9A9]">Build with</span>
      </h1>
      <div className="flex  flex-col items-center mt-10">
        <div className="flex flex-wrap items-center  justify-center md:gap-16 mt-5">
          <h2 className="flex items-center tracking-[6px] font-bold ">
            <span className="w-2 h-2 mr-3  justify-center inline-block bg-[#22c55e] rounded-3xl "></span>
            DATA, DECISIONS &amp; AUTOMATION
          </h2>
          <InfiniteMovingCards items={techStack} speed="normal" />
        </div>

        <div className="flex  flex-wrap items-center  justify-center md:gap-16  mt-8">
          <h2 className="flex items-center tracking-[6px] font-bold ">
            <span className="w-2 h-2 mr-3  justify-center inline-block bg-[#22c55e] rounded-3xl "></span>
            AI, APPS &amp; INFRASTRUCTURE
          </h2>
          <InfiniteMovingCards
            items={techStack2}
            speed="normal"
            direction="right"
          />
        </div>
      </div>
    </div>
  );
};

export default Clients;
