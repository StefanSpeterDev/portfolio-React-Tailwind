import React from "react";
import { ClientDetailsData } from "../data/clientDetails";
import { ClientLogoData } from "../data/clientLogo";
import ClientLogo from "./ClientLogo";
import ClientPortfolio from "./ClientPortfolio";

function Client() {
  const clientDetails = ClientDetailsData;
  const clientLogo = ClientLogoData;
  return (
    <div>
      <div className="bg-grey-50">
        <div className="container py-16 md:py-20" id="portfolio">
          <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
            Check out my Portfolio
          </h2>
          <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
            Here's what I have done with the past
          </h3>
          <div className="mx-auto grid w-full grid-cols-1 gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2">
            {clientDetails.map((item) => {
              return <ClientPortfolio item={item} key={item.id} />;
            })}
          </div>
        </div>
      </div>

      <div id="clients">
        <div className="container py-16 md:py-20">
          <div className="mx-auto w-full sm:w-3/4 lg:w-full">
            <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
              My latest clients
            </h2>
            <div className="flex flex-wrap items-center justify-center pt-4 sm:pt-4">
              {clientLogo.map((item) => {
                return <ClientLogo item={item} key={item.id} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Client;
