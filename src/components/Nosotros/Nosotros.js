import React from "react";
import lokito from "../../assests/imagenes/img-5-copyright.jpg";
import comidita from "../../assests/imagenes/img-4-copyright.jpg";

const Nosotros = () => {
  return (
    <div className="flex  flex-col p-5 sm:p-0 sm:flex-row items-center justify-center mt-24  sm:gap-10">
      <div className="sm:ml-10 sm:pl-10">
        <img src={lokito} alt="ElChef" width={500} height={500} />
      </div>

      <div className="sm:text-center">
        <h2 className="text-xl sm:pb-0 pb-2">GOURMET BURGERS</h2>
        <h2 className="text-2xl sm:text-8xl sm:pb-0 pb-2">
          DELICIOUS BURGERS MADE FROM THE FRESHEST INGREDIENTS
        </h2>
        <p className="sm:hidden font-sans sm:pb-0 pb-2">
          Nibh venenatis cras sed felis eget velit aliquet sagittis. Faucibus
          purus in massa tempor nec feugiat nisl pretium fusce.
        </p>
        <div className="flex justify-center items-center">
          <img src={comidita} alt="ElChef" width={500} />
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
