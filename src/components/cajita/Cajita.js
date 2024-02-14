import React from "react";
import { LuShoppingCart } from "react-icons/lu";
import { FaArrowRightLong } from "react-icons/fa6";

import { AiOutlineTwitter } from "react-icons/ai";
import { useCartStore } from "../../store/Store.ts";
export const laVisible = () => {
  const caja = document.querySelector("#laCajetaHover");

  if (caja) {
    caja.classList.contains("hidden")
      ? caja.classList.replace("hidden", "flex")
      : caja.classList.replace("flex", "hidden");
  }
};

const Cajita = ({ producto }) => {
  const addItemToCart = useCartStore((state) => state.addItemToCart);

  const verCarrito = useCartStore((state) => state.verCarrito);

  const handleAddCart = () => {
    addItemToCart(producto);
    console.log("El carrito Nuevo", verCarrito);
  };

  return (
    <>
      <div className="absolute inset-0 gap-3 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
        <div className="flex cursor-pointer  w-[50px] h-[50px] bg-white justify-center items-center hover:-translate-y-3 hover:ease-out hover:duration-700 hover:text-rojoanaranjado">
          <LuShoppingCart onClick={handleAddCart} />
        </div>
        <div className=" flex cursor-pointer  w-[50px] h-[50px] bg-white justify-center items-center hover:-translate-y-3 hover:ease-out hover:duration-700 hover:text-rojoanaranjado">
          <FaArrowRightLong />
        </div>
      </div>
    </>
  );
};

export default Cajita;
