import React from "react";

function ClientLogo({item}) {
  return (
    <span className="m-8 block">
      <img
        src={item.img}
        alt={item.alt}
        className="mx-auto block h-16 w-auto"
      />
    </span>
  );
}

export default ClientLogo;
