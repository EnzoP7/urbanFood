import React from "react";
import foto1 from "../../assests/heroburgers/product1.png";
import foto2 from "../../assests/heroburgers/product2.png";
import foto4 from "../../assests/heroburgers/product4.png";
import foto3 from "../../assests/heroburgers/product3.png";
import { FaArrowRight } from "react-icons/fa6";
import Cajita from "../cajita/Cajita";

const Hero = () => {
  const burgers = [
    { id: 1, foto: foto1, nombre: "Chicken Burger", precio: "$370" },
    { id: 2, foto: foto2, nombre: "Black Burger", precio: "$370" },
    { id: 3, foto: foto3, nombre: "Fish Burger", precio: "$370" },
    { id: 4, foto: foto4, nombre: "Double Burger", precio: "$370" },
  ];

  return (
    <>
      <div className="flex justify-center items-center mt-10">
        <div>
          <h5 className="text-lg">OUR BURGERS</h5>
        </div>
      </div>
      <div className="flex justify-center items-center text-center">
        <h1 className="text-4xl sm:text-6xl">
          UNLEASH YOUR BURGER CRAVINGS WITH OUR MENU
        </h1>
      </div>

      <div className="flex justify-center flex-col sm:flex-row items-center gap-10">
        {burgers.map((burger) => (
          <div key={burger.id} className="flex justify-center items-center">
            <div className="hover:shadow-xl hover:transition coso relative group ">
              <img
                src={burger.foto}
                width={300}
                height={300}
                alt="jijija"
                className="px-4"
              />
              <Cajita />
              <div className="flex justify-center items-center">
                <p className="text-xl">{burger.nombre}</p>
              </div>
              <div className="flex justify-center items-center">
                <p className="text-lg">{burger.precio}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mt-4 pb-4">
        <div className="flex flex-row text-white bg-rojoanaranjado px-8 cursor-pointer hover:bg-rojoanaranjado/80">
          <h1 className="font-bold text-2xl pt-4 pb-4">Ver Menu</h1>
          <FaArrowRight size={30} className="mt-4 ml-3" />{" "}
        </div>
      </div>
    </>
  );
};

export default Hero;
