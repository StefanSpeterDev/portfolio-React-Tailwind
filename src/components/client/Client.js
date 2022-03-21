import React from "react";

function Client() {
  return (
    <div>
      <div className="container py-16 md:py-20" id="portfolio">
        <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
          Check out my Portfolio
        </h2>
        <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
          Here's what I have done with the past
        </h3>

        <div className="mx-auto grid w-full grid-cols-1 gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2">
          {/* <a
            href="/"
            className="mx-auto transform transition-all hover:scale-105 md:mx-0"
          ></a>
          <a
            href="/"
            className="mx-auto transform transition-all hover:scale-105 md:mx-0"
          ></a>
          <a
            href="/"
            className="mx-auto transform transition-all hover:scale-105 md:mx-0"
          ></a>
          <a
            href="/"
            className="mx-auto transform transition-all hover:scale-105 md:mx-0"
          ></a> */}
        </div>
      </div>

      <div className="bg-grey-50" id="clients">
        <div className="container py-16 md:py-20">
          <div className="mx-auto w-full sm:w-3/4 lg:w-full">
            <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
              My latest clients
            </h2>
            <div className="flex flex-wrap items-center justify-center pt-4 sm:pt-4">
              <span className="m-8 block">
                <img
                  src="/assets/img/logo-coca-cola.svg"
                  alt="client logo"
                  className="mx-auto block h-12 w-auto"
                />
              </span>
              <span className="m-8 block">
                <img
                  src="/assets/img/logo-apple.svg"
                  alt="client logo"
                  className="mx-auto block h-12 w-auto"
                />
              </span>

              <span className="m-8 block">
                <img
                  src="/assets/img/logo-netflix.svg"
                  alt="client logo"
                  className="mx-auto block h-12 w-auto"
                />
              </span>

              <span className="m-8 block">
                <img
                  src="/assets/img/logo-amazon.svg"
                  alt="client logo"
                  className="mx-auto block h-12 w-auto"
                />
              </span>

              <span className="m-8 block">
                <img
                  src="/assets/img/logo-stripe.svg"
                  alt="client logo"
                  className="mx-auto block h-12 w-auto"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Client;
