import React from "react";
import { LuShoppingCart } from "react-icons/lu";
import { FaArrowRightLong } from "react-icons/fa6";

import { AiOutlineTwitter } from "react-icons/ai";
export const laVisible = () => {
  const caja = document.querySelector("#laCajetaHover");

  if (caja) {
    caja.classList.contains("hidden")
      ? caja.classList.replace("hidden", "flex")
      : caja.classList.replace("flex", "hidden");
  }
};

const Cajita = (laID) => {
  return (
    <>
      {/* <div
        // id="laCajetaHover"
        // onClick={laVisible}
        className="flex opacity-0 group-hover:opacity-100  absolute items-center justify-center w-full h-full gap-5"
      >
        <div className=" w-[50px] h-[50px] bg-white"></div>
        <div className=" w-[50px] h-[50px] bg-white"></div>
      </div> */}

      <div className="absolute inset-0 gap-3 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
        {/* <a href="#" className="mx-2">
          <AiOutlineTwitter className="text-3xl text-gray-100 hover:text-blue-500 transition-colors duration-300 ease-in-out" />
        </a>
        <a href="#" className="mx-2">
          <AiOutlineTwitter className="text-3xl text-gray-100 hover:text-pink-500 transition-colors duration-300 ease-in-out" />
        </a>
        <a href="#" className="mx-2">
          <AiOutlineTwitter className="text-3xl text-gray-100 hover:text-blue-400 transition-colors duration-300 ease-in-out" />
        </a> */}

        <div className="flex cursor-pointer  w-[50px] h-[50px] bg-white justify-center items-center hover:-translate-y-3 hover:ease-out hover:duration-700 hover:text-rojoanaranjado">
          <LuShoppingCart />
        </div>
        <div className=" flex cursor-pointer  w-[50px] h-[50px] bg-white justify-center items-center hover:-translate-y-3 hover:ease-out hover:duration-700 hover:text-rojoanaranjado">
          <FaArrowRightLong />
        </div>
      </div>
    </>
  );
};

export default Cajita;
