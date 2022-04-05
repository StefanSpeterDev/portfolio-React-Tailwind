import React from "react";
import Socials from "../socials/Socials";

function Header() {
  return (
    <div>
      <div className="relative bg-cover bg-center bg-no-repeat py-8">
        <div className="absolute inset-0 z-20 bg-gradient-to-r from-hero-gradient-from to-hero-gradient-to bg-cover bg-center bg-no-repeat"></div>
        <div className="container relative z-30 pt-20 pb-12 sm:pt-56 sm:pb-48 lg:pt-64 lg:pb-48">
          <div
            className="flex flex-col items-center justify-center lg:flex-row"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="rounded-full border-8 border-primary shadow-xl">
              <img
                src="./images/StefanSpeter.jpg"
                className="h-48 rounded-full sm:h-56"
                alt="Stefan Speter"
              />
            </div>
            <div className="pt-8 sm:pt-10 lg:pl-8 lg:pt-0">
              <h1 className="text-center font-header text-4xl text-white sm:text-left sm:text-5xl md:text-6xl">
                Hey, I'm Stefan Speter!
              </h1>
              <div className="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start">
                <div className="flex items-center justify-center pl-0 sm:justify-start md:pl-1">
                  <p className="font-body text-lg uppercase text-white">
                    Let's connect
                  </p>
                  <div className="hidden sm:block">
                    <i className="bx bx-chevron-right text-3xl text-yellow"></i>
                  </div>
                </div>
                <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
                  <Socials class="text-white" hover="text-yellow" />
                </div>
              </div>
              <div className="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start">
                <div className="flex items-center justify-center pt-5 sm:justify-start sm:pt-0">
                  <a
                    href="#about"
                    className="inline-flex items-center text-lg h-8 px-4 transition-colors duration-200 rounded-lg text-white bg-black hover:text-primary hover:bg-white"
                  >
                    Learn more about me !
                    <div className="hover:text-primary flex justify-center item">
                      <i className="bx bx-chevron-down text-3xl"></i>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Header;
