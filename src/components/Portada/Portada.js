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
          <div className="hidden2-div">
            <img src={hamburgesa} width={1000} alt="jijija" />
          </div>
        </div>
      </div>

      <div
        className="sm:hidden "
        style={{
          backgroundImage: `url(${fondo2})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="hidden-div">
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

          <div className="flex justify-center items-center px-10 py-2">
            <div className="flex flex-row text-white bg-orange-600 px-8 cursor-pointer hover:bg-orange-800">
              <h1 className="font-bold text-2xl py-4">Ver Menu</h1>
              <FaArrowRight size={30} className="mt-4 ml-3" />{" "}
            </div>
          </div>
        </div>
      </div>

      {/* //! ------------------------------Contenedor de la portada EN PC */}
      <div className="bg-amarillo    justify-between items-center hidden sm:flex ">
        <div
          className={`hidden-div h-full w-full bg-cover ${
            window.innerWidth >= 1024 ? "bg-center lg:bg-right" : ""
          }`}
          style={{
            backgroundImage: `url(${fondo})`,
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="sm:pl-16 mt-10 lg:mt-0 xl:mt-10  pt-14 xl:pt-14 lg:pt-0">
            <div className="flex justify-start items-start pt-10 mb-5 text-white">
              <div>
                <h5 className="text-xl sm:text-lg xl:text-3xl">ABOUT US</h5>
              </div>
            </div>
            <div className="flex justify-start items-start mb-10 xl:mb-10  text-white">
              <h1 className="text-3xl sm:text-7xl xl:text-8xl lg:text-5xl overflow-hidden">
                UNFORGETTABLE BURGERS<br></br> UNFORGETTABLE MEMORIES
              </h1>
            </div>
          </div>

          <div className="flex justify-start items-center text-center  lg:px-10 xl:px-16 gap-32 lg:gap-8 xl:gap-20">
            <div className="flex items-center justify-center flex-col">
              <div>
                <TbGrill
                  strokeWidth={1}
                  className="text-amarillo size-[80px] xl:size-[120px] lg:size-[60px]"
                />
              </div>
              <div className="text-white font-sans">
                Lorem ipsum dolor sit amet adipiscing elit
              </div>
            </div>
            <div className="flex items-center justify-center flex-col">
              <div>
                <GiKetchup
                  strokeWidth={1}
                  className="text-amarillo size-[80px] xl:size-[120px] lg:size-[60px]"
                />
              </div>
              <div className="text-white font-sans">
                Lorem ipsum dolor sit amet adipiscing elit
              </div>
            </div>
            <div className="flex items-center justify-center flex-col">
              <div>
                <TbToolsKitchen2
                  strokeWidth={1}
                  className="text-amarillo size-[80px] xl:size-[120px] lg:size-[60px]"
                />
              </div>
              <div className="text-white font-sans">
                Lorem ipsum dolor sit amet adipiscing elit
              </div>
            </div>
          </div>

          <div className="flex justify-start items-start px-10 mt-10 lg:pb-10 xl:pb-4 pb-4 xl:mt-18 xl:px-16 xl:mb-32">
            <div className="flex flex-row text-white bg-orange-600 px-8 cursor-pointer hover:bg-orange-800">
              <h1 className="font-bold text-2xl lg:text-xl xl:text-2xl pt-4 pb-4">
                Ver Menu
              </h1>
              <FaArrowRight size={30} className="mt-4 ml-3" />{" "}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="mr-10 hidden2-div">
            <img
              src={hamburgesa}
              className="w-[1000px] lg:w-[800px] xl:w-[1000px]"
              alt="jijija"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Portada;
