import React from "react";
import fondo from "../../assests/fondos/decoration-bg-2.png";

const ElFooter = () => {
  return (
    <>
      <div
        className="py-16 "
        style={{ backgroundImage: `url(${fondo})`, backgroundSize: "cover" }}
      >
        <div className="flex flex-col sm:flex-row justify-between text-white px-12 sm:px-24 py-0 sm:py-24">
          <div>
            <h1 className=" text-white  pt-5 text-3xl sm:text-6xl">
              WE COOK ONLY THE MOST <br /> DELICIOUS MEALS
            </h1>
          </div>
          <div>
            <h3 className="text-2xl sm:pt-0 pt-10">Dirección</h3>
            <p className="pt-2 text-gray-300">Uruguay</p>
            <p className="pt-2 text-gray-300">Nueva Helevecia</p>
            <p className="pt-2 text-gray-300">8 de Julio 1226</p>
          </div>
          <div>
            <h3 className="text-2xl sm:pt-0 pt-3">Contactanos</h3>
            <p className="pt-2 text-gray-300">Info@gmail.com</p>
            <hr className="text-gray-300 sm:block hidden" />
            <p className="pt-2 text-gray-300">+598 99536182</p>
          </div>
        </div>
        <div className=" px-10 sm:px-24 pt-4 ">
          <hr className="bg-slate-200" />
        </div>
        <div className="flex justify-between items-center sm:items-start sm:flex-row flex-col">
          <div className="text-white">
            <ul className="menu menu-horizontal px-1 py-5 sm:pl-32 text-2xl">
              <li>
                <a>Inicio</a>
              </li>
              <li>
                <a>Nosotros</a>
              </li>
              <li>
                <a>Menu</a>
              </li>
            </ul>
          </div>

          <div className="text-white  px-10 sm:px-24 sm:py-8    sm:text-2xl">
            <p className="sm:text-start text-center sm:hidden ">
              LaChambonetaThemes © 2024.
              <br /> All Rights Reserved.
            </p>
            <p className="sm:text-start sm:block hidden text-center">
              LaChambonetaThemes © 2024. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ElFooter;
