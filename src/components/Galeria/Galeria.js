import React from "react";
import foto1 from "../../assests/imagenes/img-6-copyright.jpg";
import foto2 from "../../assests/imagenes/img-12-copyright-890x664.jpg";
import foto3 from "../../assests/imagenes/img-13-copyright-890x664.jpg";
import foto4 from "../../assests/imagenes/img-10-copyright-890x664.jpg";
import foto5 from "../../assests/imagenes/img-11-copyright-890x664.jpg";

const Galeria = () => {
  return (
    <div className="flex mt-40 flex-col sm:flex-row">
      {/* Columna 1 - Una foto completa */}
      {/* <div className=" tamaño">
        <img src={foto1} alt="Single Photo" className="w-full  object-cover" />
      </div> */}
      <div className="w-fit">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
          <div className="w-full h-full">
            <img
              src={foto4}
              alt="Photo 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-full">
            <img
              src={foto5}
              alt="Photo 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-full">
            <img
              src={foto2}
              alt="Photo 3"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-full">
            <img
              src={foto3}
              alt="Photo 4"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      {/* Columna 2 - Cuatro fotos */}
      <div className="w-fit">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
          <div className="w-full h-full">
            <img
              src={foto4}
              alt="Photo 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-full">
            <img
              src={foto5}
              alt="Photo 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-full">
            <img
              src={foto2}
              alt="Photo 3"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-full">
            <img
              src={foto3}
              alt="Photo 4"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Galeria;
