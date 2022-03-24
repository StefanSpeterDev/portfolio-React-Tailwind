import React from "react";
import Socials from "../socials/Socials";

function Footer() {
  return (
    <div className="bg-primary">
      <div className="container flex flex-col justify-between py-6 sm:flex-row">
        <p className="text-center font-body text-white md:text-left">
          © Copyright 2022. All right reserved, ATOM.
        </p>
        <div className="flex items-center justify-center pt-5 sm:justify-start sm:pt-0">
          <Socials class="text-white" hover="text-yellow" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
