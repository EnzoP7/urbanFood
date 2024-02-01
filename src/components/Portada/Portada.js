import React from "react";
import fondo from "../../assests/fondos/decoration-bg-1.png";
import fondo2 from "../../assests/fondos/decoration-bg-3.png";
import { TbGrill } from "react-icons/tb";
import { FaArrowRight } from "react-icons/fa6";
import hamburgesa from "../../assests/parallaxBlanco/parallax-img-5-copyright.png";
import { TbToolsKitchen2 } from "react-icons/tb";
import { GiKetchup } from "react-icons/gi";

const Portada = () => {
  return (
    <>
      {/* //! ------------------------------Contenedor de la portada en Mobile */}
      <div className="bg-amarillo h-[50vh] px-5  justify-center items-center flex flex-col sm:hidden">
        <div className="flex items-center justify-center">
          <div className="">
            <img src={hamburgesa} width={1000} alt="jijija" />
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundImage: `url(${fondo2})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="px-5">
          <div className="flex justify-center items-center pt-8 mb-2 text-white">
            <div>
              <h5 className="text-xl sm:text-lg">ABOUT US</h5>
            </div>
          </div>
          <div className="flex justify-center items-center text-center mb-10 text-white">
            <h1 className="text-4xl sm:text-7xl overflow-hidden">
              UNFORGETTABLE BURGERS<br></br> UNFORGETTABLE MEMORIES
            </h1>
          </div>
        </div>
        <div className="flex justify-center items-center pb-3 px-10 gap-16 flex-col">
          <div className="flex items-center justify-center flex-col">
            <div>
              <TbGrill size={80} strokeWidth={1} className="text-amarillo" />
            </div>
            <div className="text-white font-sans">
              Lorem ipsum dolor sit <br /> amet adipiscing elit
            </div>
          </div>
          <div className="flex items-center justify-center flex-col">
            <div>
              <GiKetchup size={80} strokeWidth={1} className="text-amarillo" />
            </div>
            <div className="text-white font-sans">
              Lorem ipsum dolor sit <br /> amet adipiscing elit
            </div>
          </div>
          <div className="flex items-center justify-center flex-col">
            <div>
              <TbToolsKitchen2
                size={80}
                strokeWidth={1}
                className="text-amarillo"
              />
            </div>
            <div className="text-white font-sans">
              Lorem ipsum dolor sit <br /> amet adipiscing elit
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center px-10 py-2">
          <div className="flex flex-row text-white bg-orange-600 px-8 cursor-pointer hover:bg-orange-800">
            <h1 className="font-bold text-2xl py-4">Ver Menu</h1>
            <FaArrowRight size={30} className="mt-4 ml-3" />{" "}
          </div>
        </div>
      </div>

      {/* //! ------------------------------Contenedor de la portada EN PC */}
      <div className="bg-amarillo h-screen  justify-between items-center hidden sm:flex">
        <div
          className="h-full w-full "
          style={{
            backgroundImage: `url(${fondo})`,
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="sm:pl-16 mt-10 pt-14">
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

          <div className="flex justify-start items-center px-10 gap-32">
            <div className="flex items-center justify-center flex-col">
              <div>
                <TbGrill size={80} strokeWidth={1} className="text-amarillo" />
              </div>
              <div className="text-white font-sans">
                Lorem ipsum dolor sit <br /> amet adipiscing elit
              </div>
            </div>
            <div className="flex items-center justify-center flex-col">
              <div>
                <GiKetchup
                  size={80}
                  strokeWidth={1}
                  className="text-amarillo"
                />
              </div>
              <div className="text-white font-sans">
                Lorem ipsum dolor sit <br /> amet adipiscing elit
              </div>
            </div>
            <div className="flex items-center justify-center flex-col">
              <div>
                <TbToolsKitchen2
                  size={80}
                  strokeWidth={1}
                  className="text-amarillo"
                />
              </div>
              <div className="text-white font-sans">
                Lorem ipsum dolor sit <br /> amet adipiscing elit
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
    </>
  );
};

export default Portada;
