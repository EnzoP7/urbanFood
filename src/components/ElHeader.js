import React from "react";
import { BsBag } from "react-icons/bs";
import headerImage from "../assests/fondos/paraheader.png";

const menuClick = (target) => {
  const listaUl = document.getElementById("menu-header").children;
  for (let i = 0; i < listaUl.length; i++) {
    let element = listaUl[i];
    if (
      element.querySelector("a").innerText ==
      target.querySelector("a").innerText
    ) {
      element.classList.add("menu-activate");
    } else {
      element.classList.remove("menu-activate");
    }
  }
};

const ElHeader = () => {
  return (
    <>
      <div
        className="navbar text-white"
        style={{ backgroundImage: `url(${headerImage})` }}
      >
        <div className="navbar-center hidden lg:flex">
          <a className="btn btn-ghost text-4xl">
            <div>Urban</div>
            <div style={{ transform: "translateY(10px)" }}>Food</div>
          </a>
          <ul className="menu menu-horizontal px-1 py-5 pl-32" id="menu-header">
            <li
              onClick={(e) => menuClick(e.currentTarget)}
              className="menu-activate"
            >
              <a>
                <span>Inicio</span>
              </a>
            </li>
            <li onClick={(e) => menuClick(e.currentTarget)}>
              <a>
                <span>Nosotros</span>
              </a>
            </li>
            <li onClick={(e) => menuClick(e.currentTarget)}>
              <a>
                <span>Menu</span>
              </a>
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
