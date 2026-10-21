import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "../data/index";
import { NoiseBackground } from "@/components/ui/NoiseBackground";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map(
          ({
            id,
            title,
            img,
            description,
            imgClassName,
            titleClassName,
            className,
            spareImg,
          }) => (
            <BentoGridItem
              id={id}
              key={id}
              title={title}
              description={description}
              className={className}
              titleClassName={titleClassName}
              spareImg={spareImg}
              imgClassName={imgClassName}
              img={img}
            />
          ),
        )}
      </BentoGrid>
    </section>
  );
};

export default Grid;
