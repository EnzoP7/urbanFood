import React from "react";
import foto from "../../assests/parallaxBlanco/parallax-img-11-copyright.png";
import { FaArrowRight } from "react-icons/fa6";

const Publicidad = () => {
  return (
    <div className="bg-amarillo -my-56 mb-0 sm:p-32  lg:p-0 lg:pt-28 xl:p-32 pb-0 -z-50 relative">
      <div className="flex flex-col sm:flex-row justify-center px-10 sm:px-0 items-center pt-24 gap-20">
        <div className=" sm:pt-0 pt-28 sm:pl-24">
          <img src={foto} className="sm:w-[800px] w-[500px] " alt="jjejeje" />
        </div>
        <div className="text-white  sm:pr-10">
          <h2 className="text-xl sm:text-2xl sm:mt-0 sm:pt-0 -mt-16">
            OUR DINNER
          </h2>
          <h2 className="text-4xl sm:text-8xl   sm:hidden">
            WE MAKE THE BEST BURGERS IN TOWN
          </h2>
          <h2 className="hidden sm:block   text-4xl sm:text-8xl lg:text-5xl xl:text-8xl ">
            WE MAKE THE BEST BURGERS IN TOWN
          </h2>
          <p className="text-xl font-sans">
            Adipiscing elit, sed do eiusmod tempor incididunt ut <br />
            labore et dolore magna aliqua. Ut enim ad minim <br />
            veniam.natus error sit voluptatem accusantium <br />
            doloremque laudantium.
          </p>
          <p className="text-xl mt-5 font-sans">
            Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
          <div className="flex justify-center sm:items-center mt-10 pb-5">
            <div className="flex flex-row text-white bg-orange-600 px-10 cursor-pointer hover:bg-orange-800">
              <h1 className="font-bold text-2xl pt-4 pb-4">Ver Menu</h1>
              <FaArrowRight size={30} className="mt-4 ml-3" />{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publicidad;
