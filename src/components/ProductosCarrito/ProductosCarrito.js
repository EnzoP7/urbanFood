import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import hamburgesa from "../../assests/heroburgers/product1.png";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const ProductosCarrito = () => {
  const [contador, setcontador] = useState(1);

  const AumentarContador = () => {
    if (contador == 12) {
      return;
    }
    setcontador(contador + 1);
  };
  const decrementarContador = () => {
    if (contador > 1) {
      setcontador(contador - 1);
    }
  };
  return (
    <>
      <div className="bg-amarillo">
        <div className="p-5 sm:hidden">
          <div className="flex justify-between">
            <div className="text-xl">Producto:</div>
            <div className="text-3xl">
              <MdClose className="hover:text-rojoanaranjado" />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="text-xl">
              <img src={hamburgesa} className="w-24" alt="jeje" />
            </div>
            <div className="text-xl pt-10">Hamburgesa</div>
          </div>
          <div className="flex justify-between">
            <div className="text-xl">Precio:</div>
            <div className="text-xl">$10.00</div>
          </div>
          <div className="flex justify-between pt-5">
            <div className="text-xl pt-5">Cantidad:</div>
            <div className="text-xl">
              <div className="flex justify-between items-center p-2 border-black border-[1px]">
                <div className="px-8">
                  <h2 className="text-xl">{contador}</h2>
                </div>
                <div className="flex flex-col gap-1">
                  <div>
                    <IoIosArrowUp size={20} onClick={AumentarContador} />
                  </div>
                  <div>
                    <IoIosArrowDown size={20} onClick={decrementarContador} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between pt-5">
            <div className="text-xl">Subtotal:</div>
            <div className="text-xl">$10.00</div>
          </div>
          <hr className="border-black mt-3 pt-3" />
        </div>

        <div className="hidden sm:flex px-48 mx-48 items-center justify-between text-xl">
          <div className="flex flex-row">
            <div className="-ml-52">
              <img
                src={hamburgesa}
                className="w-40"
                alt="Imagen de la hamburgesa"
              />
            </div>
            <div className="flex items-center justify-center">
              <h3>Super Burger</h3>
            </div>
          </div>
          <div>$28</div>
          <div className="flex items-center justify-start pt-3 pb-10 gap-5">
            <div className="flex justify-between items-center p-2 border-black border-[1px]">
              <div className="px-8">
                <h2 className="text-2xl">{contador}</h2>
              </div>
              <div className="flex flex-col gap-1">
                <div>
                  <IoIosArrowUp size={20} onClick={AumentarContador} />
                </div>
                <div>
                  <IoIosArrowDown size={20} onClick={decrementarContador} />
                </div>
              </div>
            </div>
          </div>
          <div>$28</div>
          <div>
            {" "}
            <MdClose
              size={40}
              className="hover:text-rojoanaranjado cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductosCarrito;
