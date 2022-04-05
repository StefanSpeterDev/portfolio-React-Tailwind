import React from "react";

function ClientPortfolio({ item }) {
  return (
    <a
      data-aos={item.aos}
      data-aos-duration="1000"
      href={item.link}
      className="mx-auto transform transition-all hover:scale-105 md:mx-0"
    >
      <img src={item.img} alt="Isagri emploi website" />
    </a>
  );
}

export default ClientPortfolio;
