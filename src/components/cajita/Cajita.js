import React, { useEffect, useState } from "react";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { LuShoppingCart } from "react-icons/lu";
import { FaArrowRightLong } from "react-icons/fa6";

import { AiOutlineTwitter } from "react-icons/ai";
import { useCartStore } from "../../store/Store.ts";
import { MdDone } from "react-icons/md";
export const laVisible = () => {
  const caja = document.querySelector("#laCajetaHover");

  if (caja) {
    caja.classList.contains("hidden")
      ? caja.classList.replace("hidden", "flex")
      : caja.classList.replace("flex", "hidden");
  }
};

const Cajita = ({ producto }) => {
  // const { id, nombre, precio } = producto;
  const toastSeAgregoAlCarruto = () =>
    toast("producto Agregado al Carrito", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Slide,
    });

  const addItemToCart = useCartStore((state) => state.addItemToCart);
  const verCarrito = useCartStore((state) => state.verCarrito);
  const [enCarro, setEnCarro] = useState(false);

  const yaEstaEnCarro = async () => {
    const carrito = await verCarrito();
    return carrito.some((item) => item.id === producto.id);
  };

  const handleAddCart = async () => {
    if (!yaEstaEnCarro()) {
      console.log("EL PRODUCTO QUE TENEMOS: ", producto);
      addItemToCart(producto);
      console.log(verCarrito());
      return toastSeAgregoAlCarruto();
    } else {
      console.log("Producto Ya en Carrito");
    }
  };
  useEffect(() => {
    setEnCarro(yaEstaEnCarro());
  }, [verCarrito()]);
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="absolute inset-0 gap-3 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
        <div className="flex cursor-pointer  w-[50px] h-[50px] bg-white justify-center items-center hover:-translate-y-3 hover:ease-out hover:duration-700 hover:text-rojoanaranjado">
          {enCarro ? <MdDone /> : <LuShoppingCart onClick={handleAddCart} />}
        </div>
        <div className=" flex cursor-pointer  w-[50px] h-[50px] bg-white justify-center items-center hover:-translate-y-3 hover:ease-out hover:duration-700 hover:text-rojoanaranjado">
          <FaArrowRightLong />
        </div>
      </div>
    </>
  );
};

export default Cajita;
