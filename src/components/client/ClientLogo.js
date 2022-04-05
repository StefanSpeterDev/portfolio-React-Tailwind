import React from "react";

function ClientLogo({ item }) {
  return (
    <span className="m-8 block" data-aos="fade-up" data-aos-duration="1000">
      <img
        src={item.img}
        alt={item.alt}
        className="mx-auto block h-14 w-auto"
      />
    </span>
  );
}

export default ClientLogo;
