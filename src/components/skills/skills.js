import { SkillsData } from "../data/skills";
import React from "react";
import SkillCard from "./SkillCard";
import "./skills.css";
import Separator from "../separator/Separator";

function Skills() {
  const data = SkillsData;
  return (
    <div className="skills container py-16 md:py-20" id="skills">
      <Separator />
      <h2
        data-aos="fade-down"
        data-aos-duration="1000"
        className="font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl"
      >
        Skills
      </h2>
      <div className="skills-container">
        {data.map((item) => {
          return (
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              className="skills-section"
              key={item.type}
            >
              <label className="skills-section-title">{item.type}</label>
              <div className="skills-list">
                {item.list.map((skill) => {
                  return <SkillCard skill={skill} key={skill.name} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
