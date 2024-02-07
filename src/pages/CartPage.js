import React from "react";
import ProductosCarrito from "../components/ProductosCarrito/ProductosCarrito";

const CartPage = () => {
  return (
    <>
      <div className="bg-amarillo">
        <div className="flex justify-center items-center py-5">
          <h3 className="text-3xl">Carrito</h3>
        </div>

        <div className="flex items-start justify-center flex-col sm:flex-row gap-5 pb-5">
          <div className="flex flex-row gap-4 pl-5">
            <div className="bg-rojoanaranjado text-white text-xl px-5 py-2">
              1
            </div>
            <div className="flex items-center justify-center">
              <h3 className="text-xl">Productos</h3>
            </div>
          </div>
          <div className="flex flex-row gap-4 pl-5">
            <div className="bg-rojoanaranjado text-white text-xl px-5 py-2">
              2
            </div>
            <div className="flex items-center justify-center">
              <h3 className="text-xl">Envio de WhatsApp</h3>
            </div>
          </div>
          <div className="flex flex-row gap-4 pl-5">
            <div className="bg-rojoanaranjado text-white text-xl px-5 py-2">
              3
            </div>
            <div className="flex items-center justify-center">
              <h3 className="text-xl">Pedido Recibido</h3>
            </div>
          </div>
        </div>

        <div className="bg-white hidden sm:flex  items-center justify-between px-48 mx-48 py-3">
          <div>Producto</div>
          <div>Precio</div>
          <div>Cantidad</div>
          <div>Subtotal</div>
          <div>Eliminar</div>
        </div>

        <ProductosCarrito />
        <ProductosCarrito />

        <div className="flex justify-start items-start sm:justify-center sm:items-center py-5 px-5">
          <h3 className="text-3xl">Total Final</h3>
        </div>

        <div className="px-5 flex items-center justify-center pb-5">
          <table className="border border-black">
            <tbody>
              <tr>
                <td className="bg-white border border-black text-xl p-3 sm:text-3xl sm:p-5">
                  Subtotal
                </td>
                <td className="border border-black w-40 text-xl pl-4 sm:text-3xl">
                  $28
                </td>
              </tr>
              <tr>
                <td className="bg-white border border-black text-xl p-3 sm:text-3xl sm:p-5">
                  Total
                </td>
                <td className="border border-black w-40 text-xl pl-4 sm:text-3xl">
                  $28
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-center pb-10">
          <div className="bg-rojoanaranjado py-3 px-8 sm:px-16 sm:py-3 cursor-pointer">
            <h3 className="text-2xl text-white">Realizar Pedido</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
