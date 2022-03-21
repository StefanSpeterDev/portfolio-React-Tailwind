import React from "react";

function WorkCard({ item }) {
  return (
    <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
      <div className="md:w-2/5">
        <div className="flex justify-center md:justify-start">
          <span className="shrink-0">
            <img
              src={item.companyLogo}
              className="h-auto w-32"
              alt={item.company}
            />
          </span>
          <div className="relative ml-3 hidden w-full md:block">
            <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"></span>
          </div>
        </div>
      </div>
      <div className="md:w-3/5">
        <div className="relative flex md:pl-18">
          <span className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"></span>

          <div className="mt-1 flex">
            <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
            <div className="md:-mt-1 md:pl-8">
              <span className="block font-body font-bold text-grey-40">
                {item.dateJoining} - {item.dateEnd}
              </span>
              <span className="block pt-2 font-header text-xl font-bold uppercase text-primary">
                {item.designation}
              </span>
              <div className="pt-2">
                <span
                  className="block font-body text-black"
                  dangerouslySetInnerHTML={{ __html: item.work }}
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkCard;
