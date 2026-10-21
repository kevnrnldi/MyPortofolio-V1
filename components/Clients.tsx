import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { testimonials } from "@/data";
import { companies } from "@/data";

const Clients = () => {
  return (
    <div className=" py-20" id="testimonials">
      <h1 className="heading">
        Kind words from
        <span className="text-purple">satisfied clients</span>
      </h1>
      <div className="flex mt-10 flex-col items-center">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />

        <div className="flex gap-4 flex-wrap items-center  justify-center md:gap-16 mt-13">
          {companies.map(({ id, img, name, nameImg }) => (
            <div key={id} className="flex md:max-w-60 max-w-32 gap-2">
              <img src={img} alt={name} className="md:w-10 w-5" />
              <img src={nameImg} alt={name} className="md:w-24 w-20" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
