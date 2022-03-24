import React from "react";
import { SocialsData } from "../data/socials";

function Socials(props) {
  const socialData = SocialsData;
  return (
    <div>
      {socialData.map((item) => {
        return (
          <a href={item.link} alt={item.alt} className="pl-4">
            <i
              className={
                item.icon + " " +
                props.class + " " +
                "hover:" +
                props.hover
              }
            ></i>
          </a>
        );
      })}
    </div>
  );
}

export default Socials;
