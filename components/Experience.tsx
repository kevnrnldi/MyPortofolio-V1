import React from "react";
import { Button } from "./ui/MovingBorders";
import { workExperience } from "@/data";

const Experience = () => {
  return (
    <div className=" py-20" id="experience">
      <h1 className="heading">
        My <span className="text-purple">Work Experience</span>
      </h1>
      <div className="w-full mt-12 lg:grid-cols-4 grid grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 1500}
            borderRadius="1.75rem"
            borderClassName="border-2 w-32 opacity-100 bg-[radial-gradient(#CBACF9_40%,transparent_70%)]"
            className="flex-1 flex text-white border-neutral-200 dark:border-slate-800"
          >
            <div
              className="flex lg:flex-row lg:items-center p-3 py-6 md:p-5 
                        lg:p-10 flex-col gap-2"
            >
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5 ">
                <h1 className="font-bold text-start text-xl md:text-2xl">
                  {card.title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
