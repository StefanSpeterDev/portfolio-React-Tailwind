import React from "react";
import { WorkData } from "../data/work";
import WorkCard from "./WorkCard";

function Work() {
  const workData = WorkData;
  return (
    <div className="bg-grey-50" id="work">
      <div className="bg-grey-50 container py-16 md:py-20">
        <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
          My work experience
        </h2>
        <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
          Here's where I worked during school
        </h3>

        <div className="relative mx-auto mt-12 flex w-full flex-col lg:w-2/3">
          {workData.map((item) => {
            return <WorkCard item={item} key={item.id} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Work;
