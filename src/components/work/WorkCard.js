import React from "react";

function WorkCard({ item }) {
  return (
    <div className="mt-8 flex flex-col items-center text-center md:flex-row md:text-left">
      <div className="md:w-2/5">
        <div className="flex justify-center">
          <span className="shrink-0">
            <img
              src={item.companyLogo}
              className="h-auto w-auto max-w-15"
              alt={item.company}
            />
          </span>
        </div>
      </div>
      <div className="md:w-3/5">
        <span className="left-2/5 absolute inset-y-0 ml-10 hidden w-0.5 bg-grey-40 md:block"></span>

        <div className="relative flex md:pl-18 ml-8">
          <div className="mt-1 flex flex-col">
            <div className="md:-mt-1 md:pl-8">
              <div className="flex items-center">
                <i className="bx bxs-right-arrow hidden mr-2 text-primary md:flex"></i>
                <span className="block font-body font-bold text-white">
                  {item.dateJoining} - {item.dateEnd}
                </span>
              </div>

              <div>
                <span className="block pt-2 font-header text-xl font-bold uppercase text-primary">
                  {item.designation}
                </span>
                <div className="pt-2 flex">
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
    </div>
  );
}

export default WorkCard;
