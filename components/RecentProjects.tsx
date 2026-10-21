import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa6";

const RecentProjects = () => {
  return (
    <div className=" py-50 mt-[5rem]" id="projects">
      <h1 className="heading lg:text-[4rem]">
        A small selection of{" "}
        <span className="text-[#A9A9A9]">recent projects</span>
      </h1>
      <div className="flex flex-wrap mt-[-5px] items-center justify-center p-4 gap-y-[-10px] lg:gap-y-0 gap-x-16  ">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="lg:min-h-[38rem] sm:h-[41rem] h-[36rem] flex  items-center justify-center w-[80vw] sm:w-[480px]"
          >
            <PinContainer title={link} href={link}>
              <div className="relative mb-10 flex h-[20vh] w-[80vw] items-center justify-center overflow-hidden sm:h-[30vh] sm:w-[440px]">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#000]">
                  <img src="/bg.png" alt="bg-img" />
                </div>
                <img src={img} alt={title} className="z-10 bottom-0 absolute" />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>

              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 ">
                {des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="border border-white-200 rounded-full lg:w-10 lg:h-10 
                      w-8 h-8 flex justify-center items-center bg-[#000]"
                      style={{ transform: `translateX(-${5 * index * 2}px)` }}
                    >
                      <img src={icon} alt={icon} className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
