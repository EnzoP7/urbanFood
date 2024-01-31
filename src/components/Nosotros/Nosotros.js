import React from "react";
import lokito from "../../assests/imagenes/img-5-copyright.jpg";
import comidita from "../../assests/imagenes/img-4-copyright.jpg";

const Nosotros = () => {
  return (
    <div className="flex items-center justify-center mt-24 gap-24">
      <div>
        <img src={lokito} alt="ElChef" width={500} height={500} />
      </div>

      <div className="text-center">
        <h2 className="text-2xl">GOURMET BURGERS</h2>
        <h2 className="text-8xl">
          DELICIOUS BURGERS MADE <br /> FROM THE FRESHEST
          <br /> INGREDIENTS
        </h2>
        <div className="flex justify-center items-center">
          <img src={comidita} alt="ElChef" width={500} />
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
