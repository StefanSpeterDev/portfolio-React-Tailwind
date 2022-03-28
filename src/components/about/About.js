import React from "react";
import Socials from "../socials/Socials";

function About() {
  return (
    <div id="about">
      <div className="container flex flex-col items-center py-16 md:py-20 lg:flex-row">
        <div className="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left">
          <h2 className="font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
            Who am I?
          </h2>
          <h4 className="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
            I'm Stefan Speter, a Front-End Developer (on ReactJS, VueJS) & a Back-End Developer (on Drupal)
          </h4>
          <p className="pt-6 font-body leading-relaxed text-grey-20">
            I'm 23 years old and I'm currently studying at <a href="https://www.efficom.fr/">Efficom</a> in Lille (France), it's my last year before getting my Master Degree
            in Digital Project Management with a Major in Web Development. <br/>
            I love to use the Agile Scrum method in my work environment to create a real team effort! <br/>
            On my spare time I like to play chess ♟️, video games 🎮 & to travel all around the world! ✈️ <br/>
          </p>
          <div className="flex flex-col justify-center pt-6 sm:flex-row lg:justify-start">
            <div className="flex items-center justify-center sm:justify-start">
              <p className="font-body text-lg font-semibold uppercase text-grey-20">
                Connect with me
              </p>
              <div className="hidden sm:block">
                <i className="bx bx-chevron-right text-2xl text-primary"></i>
              </div>
            </div>
            <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
              <Socials class="text-primary" hover="text-yellow" />
            </div>
          </div>
        </div>
        <div className="w-full pl-0 pt-10 sm:w-3/4 lg:w-2/5 lg:pl-12 lg:pt-0">
          <div>
            <div className="flex items-end justify-between">
              <h4 className="font-body font-semibold uppercase text-black">
                HTML & CSS
              </h4>
              <h3 className="font-body text-3xl font-bold text-primary">95%</h3>
            </div>
            <div className="mt-2 h-3 w-full rounded-full bg-lila">
              <div className="h-3 rounded-full bg-primary w-95" ></div>
            </div>
          </div>
          <div className="pt-6">
            <div className="flex items-end justify-between">
              <h4 className="font-body font-semibold uppercase text-black">
                ReactJS
              </h4>
              <h3 className="font-body text-3xl font-bold text-primary">70%</h3>
            </div>
            <div className="mt-2 h-3 w-full rounded-full bg-lila">
              <div className="h-3 rounded-full bg-primary w-70"></div>
            </div>
          </div>
          <div className="pt-6">
            <div className="flex items-end justify-between">
              <h4 className="font-body font-semibold uppercase text-black">
                Javascript
              </h4>
              <h3 className="font-body text-3xl font-bold text-primary">74%</h3>
            </div>
            <div className="mt-2 h-3 w-full rounded-full bg-lila">
              <div className="h-3 rounded-full bg-primary w-74"></div>
            </div>
          </div>
          <div className="pt-6">
            <div className="flex items-end justify-between">
              <h4 className="font-body font-semibold uppercase text-black">
                Drupal 8/9
              </h4>
              <h3 className="font-body text-3xl font-bold text-primary">84%</h3>
            </div>
            <div className="mt-2 h-3 w-full rounded-full bg-lila">
              <div className="h-3 rounded-full bg-primary w-84"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
