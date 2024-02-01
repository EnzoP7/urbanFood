import { AiOutlineTwitter } from "react-icons/ai";
import t1 from "../../assests/imagenes/img-10-copyright-890x664.jpg";
import t2 from "../../assests/imagenes/img-10-copyright-890x664.jpg";
import t3 from "../../assests/imagenes/img-10-copyright-890x664.jpg";
import t4 from "../../assests/imagenes/img-10-copyright-890x664.jpg";

import React from "react";

const Prueba = () => {
  return (
    <div className="container mx-auto text-center pb-5">
      <p className="w-fit p-5 text-red-600 bg-base-100 mx-auto text-5xl">
        Barberos
      </p>

      <h1 className="text-white pt-5 text-5xl">Descubre a tu Barbero</h1>

      <div className="grid grid-cols-1 sm:grid sm:grid-cols-4 gap-5 px-3 mt-10">
        {/* Es este XD */}
        <div>
          <div className="relative group">
            <img
              className="w-full h-full object-cover opacity-100 transition-opacity duration-300 ease-in-out group-hover:opacity-50"
              // src="https://picsum.photos/500/500"
              src={t1}
              alt=""
            />
            <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <a href="#" className="mx-2">
                <AiOutlineTwitter className="text-3xl text-gray-100 hover:text-blue-500 transition-colors duration-300 ease-in-out" />
              </a>
              <a href="#" className="mx-2">
                <AiOutlineTwitter className="text-3xl text-gray-100 hover:text-pink-500 transition-colors duration-300 ease-in-out" />
              </a>
              <a href="#" className="mx-2">
                <AiOutlineTwitter className="text-3xl text-gray-100 hover:text-blue-400 transition-colors duration-300 ease-in-out" />
              </a>
            </div>
          </div>

          <div className="bg-base-300 mx-auto text-center">
            <h1 className="text-white text-3xl py-5">Juan </h1>
            <p className="text-red-600 text-xl pb-3">Barbero</p>
          </div>
        </div>
        {/* Es este XD */}
        <div>
          <div className="relative group">
            <img
              className="w-full h-full object-cover opacity-100 transition-opacity duration-300 ease-in-out group-hover:opacity-50"
              // src="https://picsum.photos/500/500"
              src={t2}
              alt=""
            />
            <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <a href="#" className="mx-2">
                <AiOutlineTwitter className="text-3xl text-gray-100 hover:text-blue-500 transition-colors duration-300 ease-in-out" />
              </a>
              <a href="#" className="mx-2">
                <AiOutlineTwitter className="text-3xl text-gray-100 hover:text-pink-500 transition-colors duration-300 ease-in-out" />
              </a>
              <a href="#" className="mx-2">
                <AiOutlineTwitter className="text-3xl text-gray-100 hover:text-blue-400 transition-colors duration-300 ease-in-out" />
              </a>
            </div>
          </div>

          <div className="bg-base-300 mx-auto text-center">
            <h1 className="text-white text-3xl py-5">Miguel </h1>
            <p className="text-red-600 text-xl pb-3">Barbero</p>
          </div>
        </div>
        {/* Es este XD */}
        <div>
          <div className="relative group">
            <img
              className="w-full h-full object-cover opacity-100 transition-opacity duration-300 ease-in-out group-hover:opacity-50"
              // src="https://picsum.photos/500/500"
              src={t3}
              alt=""
            />
            <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <a href="#" className="mx-2">
                <AiOutlineTwitter className="text-3xl text-gray-100 hover:text-blue-500 transition-colors duration-300 ease-in-out" />
              </a>
              <a href="#" className="mx-2">
                <AiOutlineTwitter className="text-3xl text-gray-100 hover:text-pink-500 transition-colors duration-300 ease-in-out" />
              </a>
              <a href="#" className="mx-2">
                <AiOutlineTwitter className="text-3xl text-gray-100 hover:text-blue-400 transition-colors duration-300 ease-in-out" />
              </a>
            </div>
          </div>

          <div className="bg-base-300 mx-auto text-center">
            <h1 className="text-white text-3xl py-5">Osvaldo </h1>
            <p className="text-red-600 text-xl pb-3">Barbero</p>
          </div>
        </div>
        {/* Es este XD */}
        <div>
          <div className="relative group">
            <img
              className="w-full h-full object-cover opacity-100 transition-opacity duration-300 ease-in-out group-hover:opacity-50"
              // src="https://picsum.photos/500/500"
              src={t4}
              alt=""
            />
            <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <a href="#" className="mx-2">
                <AiOutlineTwitter className="text-3xl text-gray-100 hover:text-blue-500 transition-colors duration-300 ease-in-out" />
              </a>
              <a href="#" className="mx-2">
                <AiOutlineTwitter className="text-3xl text-gray-100 hover:text-pink-500 transition-colors duration-300 ease-in-out" />
              </a>
              <a href="#" className="mx-2">
                <AiOutlineTwitter className="text-3xl text-gray-100 hover:text-blue-400 transition-colors duration-300 ease-in-out" />
              </a>
            </div>
          </div>

          <div className="bg-base-300 mx-auto text-center">
            <h1 className="text-white text-3xl py-5">Oscar </h1>
            <p className="text-red-600 text-xl pb-3">Barbero</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prueba;
