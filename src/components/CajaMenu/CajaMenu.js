import React from "react";
import Cajita from "../cajita/Cajita";

const CajaMenu = ({ producto }) => {
  return (
    <div
      key={producto.id}
      className="flex flex-col items-center justify-center cursor-pointer  "
    >
      <div className="relative group">
        <Cajita producto={producto} />
        <img src={producto.imagen} className="sm:w-96" alt="producto" />
      </div>

      <h3 className="text-3xl text-center cursor-pointer hover:text-rojoanaranjado">
        {producto.title}
      </h3>
      <h3 className="text-center mb-10 text-3xl">${producto.precio}</h3>
    </div>
  );
};

export default CajaMenu;
