import React from "react";
import foto1 from "../../assests/heroburgers/product1.png";
import foto2 from "../../assests/heroburgers/product2.png";
import foto4 from "../../assests/heroburgers/product4.png";
import foto3 from "../../assests/heroburgers/product3.png";
import { FaArrowRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <div>
          <h5 className="text-lg">OUR BURGERS</h5>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <h1 className="text-4xl">UNLEASH YOUR BURGER CRAVINGS WITH OUR MENU</h1>
      </div>

      <div className="flex justify-center items-center gap-10">
        <div className="flex justify-center items-center">
          <div className="hover:shadow-xl hover:transition coso ">
            <img src={foto1} width={300} height={300} alt="jijija" />
            <div className="flex justify-center items-center">
              <p className="text-xl">Chicken Burger</p>
            </div>
            <div className="flex justify-center items-center">
              <p className="text-lg">$370</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="hover:shadow-xl hover:transition coso">
            <img src={foto2} width={300} height={300} alt="jijija" />
            <div className="flex justify-center items-center">
              <p className="text-xl">Black Burger</p>
            </div>
            <div className="flex justify-center items-center">
              <p className="text-lg">$370</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="hover:shadow-xl hover:transition coso">
            <img src={foto3} width={300} height={300} alt="jijija" />
            <div className="flex justify-center items-center">
              <p className="text-xl">Fish Burger</p>
            </div>
            <div className="flex justify-center items-center">
              <p className="text-lg">$370</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="hover:shadow-xl hover:transition coso">
            <img src={foto4} width={300} height={300} alt="jijija" />
            <div className="flex justify-center items-center">
              <p className="text-xl">Double Burger</p>
            </div>
            <div className="flex justify-center items-center">
              <p className="text-lg">$370</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center mt-4">
        <div className="flex flex-row text-white bg-orange-600 px-8 cursor-pointer hover:bg-orange-800">
          <h1 className="font-bold text-2xl pt-4 pb-4">Ver Menu</h1>
          <FaArrowRight size={30} className="mt-4 ml-3" />{" "}
        </div>
      </div>
    </>
  );
};

export default Hero;
