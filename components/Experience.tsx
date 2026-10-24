import React from "react";
import { Timeline } from "./ui/Timeline";

const Card = ({
  role,
  org,
  points,
}: {
  role: string;
  org: string;
  points: string[];
}) => (
  <div className="rounded-2xl border border-zinc-500/30 bg-[#111113] p-5 md:p-6">
    <h4 className="text-lg font-bold text-white md:text-xl">{role}</h4>
    <p className="mt-1 text-sm text-zinc-400">{org}</p>
    <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-300 md:text-base">
      {points.map((p) => (
        <li key={p}>{p}</li>
      ))}
    </ul>
  </div>
);

const data = [
  {
    title: "2025",
    content: (
      <Card
        role="Teaching Assistant, Web Programming"
        org="Informatics Engineering, University of Bengkulu"
        points={[
          "Guided students in building dynamic web applications by integrating HTML and CSS frontends with JavaScript backend logic.",
          "Facilitated practical sessions on client-server architecture, focusing on CRUD operations and MySQL connections.",
        ]}
      />
    ),
  },
];

const Experience = () => {
  return (
    <section className="py-20 mt-20" id="experience">
      <h1 className="heading text-[4rem]">
        My <span className="text-[#A9A9A9]">Work Experience</span>
      </h1>
      <div className="mt-10">
        <Timeline data={data} />
      </div>
    </section>
  );
};

export default Experience;
