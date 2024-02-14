import React from "react";
import { BsBag } from "react-icons/bs";
import { BsList } from "react-icons/bs";
import headerImage from "../assests/fondos/paraheader.png";
import { useCartStore } from "../store/Store.ts";

// import { useNavigation } from "react-router-dom";

const menuClick = (target) => {
  const listaUl = document.getElementsByClassName("menu-header");
  for (let i = 0; i < listaUl.length; i++) {
    for (let j = 0; j < listaUl[i].children.length; j++) {
      let element = listaUl[i].children[j];
      if (
        element.querySelector("a").innerText ==
        target.querySelector("a").innerText
      ) {
        element.classList.add("menu-activate");
      } else {
        element.classList.remove("menu-activate");
      }
    }
  }
};

const openMenu = () => {
  const listaUl = document.getElementById("menu-header2");
  if (listaUl.classList.contains("hidden")) {
    listaUl.classList.replace("hidden", "block");
  } else {
    listaUl.classList.replace("block", "hidden");
  }
};

const ElHeader = () => {
  // const navigate = useNavigation();

  // const irAMenu = () => {
  //   navigate("/menu");
  // };
  // const irACarrito = () => {
  //   navigate("/carrito");
  // };
  // const irAinicio = () => {
  //   navigate("/");
  // };

  const ItemsEnCarrito = useCartStore((state) =>
    state.cantidadItemsEnCarrito()
  );
  console.log({ ItemsEnCarrito });

  // const verCarrito = useCartStore((state) => state.verCarrito);
  // console.log("EL CARRITO", verCarrito);

  return (
    <>
      <div
        className="navbar text-white"
        style={{ backgroundImage: `url(${headerImage})` }}
      >
        <div className="navbar-center lg:flex">
          <a className="btn btn-ghost text-4xl">
            <div>Urban</div>
            <div style={{ transform: "translateY(10px)" }}>Food</div>
          </a>
          <ul
            className="menu menu-horizontal px-1 py-5 pl-32 lg:flex hidden menu-header"
            id="menu-header"
          >
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
                <span>Menu</span>
              </a>
            </li>
            <li onClick={(e) => menuClick(e.currentTarget)}>
              <a>
                <span>Carrito</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="flex navbar-end pr-5 flex-end w-full">
          <div className="relative">
            <BsBag size={40} />
            <div className="absolute top-5 left-6 px-2 bg-red-500 text-white rounded-full ">
              {ItemsEnCarrito}
            </div>
          </div>
          <div className="relative ml-5 lg:hidden flex">
            <BsList size={40} onClick={openMenu} />
          </div>
        </div>
      </div>
      <div
        className="lg:hidden hidden bg-black sticky top-0 mr-[-10px] h-[100vh]"
        id="menu-header2"
      >
        <ul className="menu menu-vertical px-1 py-5 pl-10 pr-32 w-full menu-header">
          <li
            onClick={(e) => menuClick(e.currentTarget)}
            className="menu-activate w-fit"
          >
            <a>
              <span>Inicio</span>
            </a>
          </li>
          <li onClick={(e) => menuClick(e.currentTarget)} className="w-fit">
            <a>
              <span>Nosotros</span>
            </a>
          </li>
          <li onClick={(e) => menuClick(e.currentTarget)} className="w-fit">
            <a>
              <span>Menu</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ElHeader;
