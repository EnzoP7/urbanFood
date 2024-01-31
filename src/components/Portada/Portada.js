import React from "react";
import fondo from "../../assests/fondos/decoration-bg-1.png";
import { TbGrill } from "react-icons/tb";
import { FaArrowRight } from "react-icons/fa6";
import hamburgesa from "../../assests/parallaxBlanco/parallax-img-5-copyright.png";

const Portada = () => {
  return (
    <div className="bg-amarillo h-screen flex justify-between items-center">
      <div
        className="h-full w-full "
        style={{
          backgroundImage: `url(${fondo})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="sm:pl-16 mt-10">
          <div className="flex justify-start items-start pt-10 mb-5 text-white">
            <div>
              <h5 className="text-2xl sm:text-lg">ABOUT US</h5>
            </div>
          </div>
          <div className="flex justify-start items-start mb-10 text-white">
            <h1 className="text-3xl sm:text-7xl overflow-hidden">
              UNFORGETTABLE BURGERS<br></br> UNFORGETTABLE MEMORIES
            </h1>
          </div>
        </div>

        <div className="flex justify-start items-center px-10 gap-10">
          <div className="flex items-center justify-center flex-col">
            <div>
              <TbGrill size={80} className="text-amarillo" />
            </div>
            <div className="text-white font-sans">
              Lorem ipsum dolor sit amet adipiscing elit
            </div>
          </div>
          <div className="flex items-center justify-center flex-col">
            <div>
              <TbGrill size={80} className="text-amarillo" />
            </div>
            <div className="text-white font-sans">
              Lorem ipsum dolor sit amet adipiscing elit
            </div>
          </div>
          <div className="flex items-center justify-center flex-col">
            <div>
              <TbGrill size={80} className="text-amarillo" />
            </div>
            <div className="text-white font-sans">
              Lorem ipsum dolor sit amet adipiscing elit
            </div>
          </div>
        </div>

        <div className="flex justify-start items-start px-10 mt-10 pb-4">
          <div className="flex flex-row text-white bg-orange-600 px-8 cursor-pointer hover:bg-orange-800">
            <h1 className="font-bold text-2xl pt-4 pb-4">Ver Menu</h1>
            <FaArrowRight size={30} className="mt-4 ml-3" />{" "}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="mr-10">
          <img src={hamburgesa} width={1000} alt="jijija" />
        </div>
      </div>
    </div>
  );
};

export default Portada;
