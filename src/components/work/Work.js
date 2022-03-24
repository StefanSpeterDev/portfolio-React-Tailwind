import React from "react";
import { WorkData } from "../data/work";
import WorkCard from "./WorkCard";

function Work() {
    const workData = WorkData;
  return (
    <div className="container py-16 md:py-20" id="work">
      <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
        My work experience
      </h2>
      <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
        Here's what I did before freelancing
      </h3>

      <div className="relative mx-auto mt-12 flex w-full flex-col lg:w-2/3">
        <span className="left-2/5 absolute inset-y-0 ml-10 hidden w-0.5 bg-grey-40 md:block"></span>
        
        {workData.map((item) => {
            return <WorkCard item={item} key={item.id} />
        })}
      </div>
    </div>
  );
}

export default Work;
