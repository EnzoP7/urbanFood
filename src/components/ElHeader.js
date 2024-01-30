import React from "react";
import { BsBag } from "react-icons/bs";

const menuClick = (self) => {
  console.log(self);
};

const ElHeader = () => {
  return (
    <>
      <div className="navbar bg-black text-white">
        <div className="navbar-center hidden lg:flex">
          <a className="btn btn-ghost text-xl">Urban Food</a>
          <ul className="menu menu-horizontal px-1 pl-32" id="menu-header">
            <li onClick={menuClick}>
              <a>Inicio</a>
            </li>
            <li onClick={menuClick}>
              <a>Nosotros</a>
            </li>
            <li onClick={menuClick}>
              <a>Menu</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="relative">
            <BsBag size={40} />
            <div className="absolute top-5 left-6 px-2 bg-red-500 text-white rounded-full ">
              3
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ElHeader;
