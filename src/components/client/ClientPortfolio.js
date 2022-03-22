import React from "react";

function ClientPortfolio({item}) {
  return (
        <a
            href={item.link}
            className="mx-auto transform transition-all hover:scale-105 md:mx-0"
          >
            <img src={item.img} alt="Isagri emploi website" />
          </a>

  );
}

export default ClientPortfolio;
