import React from "react";
import ProductSlideShow from "../components/SlideShow/ProductSlideShow";
import hamburgesa1 from "../assests/heroburgers/product1.png";
import hamburgesa2 from "../assests/heroburgers/product2.png";
import hamburgesa3 from "../assests/heroburgers/product3.png";
import hamburgesa4 from "../assests/heroburgers/product4.png";

import Producto1 from "../assests/productos/product-18-copyright-768x768.png";
import producto2 from "../assests/productos/product-20-copyright-768x768.png";
import producto3 from "../assests/productos/product-22-copyright-768x768.png";

import ProductSlideMovile from "../components/SlideShow/ProductSlideMovile";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
import { LuShoppingCart } from "react-icons/lu";
import Cajita from "../components/cajita/Cajita";
const ProductPage = () => {
  const [contador, setcontador] = useState(1);
  const images = [hamburgesa2, hamburgesa1, hamburgesa3, hamburgesa4];

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

  const prodcutosRelacionados = [
    { id: 1, title: "MArgarita", precio: 320, imagen: Producto1 },
    { id: 12, title: "Hot Dog Americano", precio: 120, imagen: producto2 },
    { id: 13, title: "Pancho Porteño", precio: 120, imagen: producto3 },
  ];

  return (
    <>
      <div className="bg-amarillo">
        <div className="sm:hidden">
          <div className="flex items-center justify-center flex-col">
            <div>
              <h3 className="text-4xl pt-5">SHOP</h3>
            </div>
            <div>
              <IoIosArrowDown size={20} />
            </div>
          </div>
          <ProductSlideMovile images={images} />
          <div className=" px-4">
            <h3 className="pt-8 font-bold text-3xl">Black Burger</h3>
            {/* //! RATING */}
            <div className="rating pt-1">
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star  bg-rojoanaranjado"
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star bg-rojoanaranjado"
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star  bg-rojoanaranjado"
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star  bg-rojoanaranjado"
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star  bg-rojoanaranjado"
                checked
              />
            </div>
            {/* //! Precio */}
            <h3 className="text-3xl">
              <span className="text-slate-500 line-through">$320</span>
              <span className="text-rojoanaranjado"> $ 280</span>{" "}
            </h3>
            {/* //! DESCRIPCION  */}
            <p className="font-serif pt-5">
              Dicta sunt explicabo. Nemo enim ipsam voluptatem voluptas sit odit
              aut fugit, sed quia consequuntur. Lorem ipsum dolor. Aquia sit
              amet, elitr, sed diam nonum eirmod tempor invidunt labore et
              dolore.
            </p>
            <p className="font-serif py-4">
              At vero accusam et justo duo dolores et ea rebum. Stet clitain
              vidunt ut labore eirmod tempor invidunt magna aliquyam.
            </p>

            {/* //! CONTADOR  + COMPRAR*/}
            <div className="flex items-center justify-start pt-3 pb-10 gap-5">
              <div className="flex justify-between items-center p-2 border-black border-[1px]">
                <div className="px-8">
                  <h2 className="text-2xl">{contador}</h2>
                </div>
                <div className="flex flex-col">
                  <div>
                    <IoIosArrowUp size={20} onClick={AumentarContador} />
                  </div>
                  <div>
                    <IoIosArrowDown size={20} onClick={decrementarContador} />
                  </div>
                </div>
              </div>

              <div className="flex items-center text-white p-3 justify-center bg-rojoanaranjado hover:bg-rojoanaranjado/90">
                <LuShoppingCart size={30} />
                <h3 className="text-xl pl-6">Buy Now</h3>
              </div>
            </div>
            {/* //! ETIQUETAS */}
            <div>
              <h3 className="">
                <span className="font-semibold ">Categoria: </span>
                Hamburgesas & Papitas
              </h3>
              <h3 className="">
                <span className="font-semibold">TAgs: </span>
                Oferta - Especial
              </h3>
              <h3 className="">
                <span className="font-semibold">Producto ID: </span>
                11234
              </h3>
            </div>

            {/* //! TABS */}
            <div role="tablist" className="tabs tabs-bordered pt-10">
              <input
                type="radio"
                name="my_tabs_1"
                role="tab"
                className="tab text-2xl"
                aria-label="Descripción"
              />
              <div role="tabpanel" className="tab-content p-10">
                Dicta sunt explicabo. Nemo enim ipsam voluptatem voluptas sit
                odit aut fugit, sed quia consequuntur. Lorem ipsum dolor. Aquia
                sit amet, elitr, sed diam nonum eirmod tempor invidunt labore et
                dolore magna aliquyam.erat, sed diam voluptua. At vero accusam
                et justo duo dolores et ea rebum. Stet clitain vidunt ut labore
                eirmod tempor invidunt magna aliquyam.
              </div>

              <input
                type="radio"
                name="my_tabs_1"
                role="tab"
                className="tab text-2xl"
                aria-label="Reviews"
                checked
              />
              <div role="tabpanel" className="tab-content p-10">
                <div>
                  <h3 className="text-3xl mb-5">Review For Black Burger</h3>
                  <div className="flex justify-start items-center">
                    <div className="avatar">
                      <div className="w-28 rounded">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                      </div>
                    </div>
                    <div className="mx-5">
                      <h3 className="font-light text-xl">
                        Melisa Perez{" "}
                        <span className="font-light text-sm ">
                          -Enero 17,2024
                        </span>
                        <p className="text-sm font-serif">
                          Stet clitain vidunt ut labore eirmod tempor invidunt
                          magna aliquyam.
                        </p>
                        <div className="rating pt-1">
                          <input
                            type="radio"
                            name="rating-1"
                            className="mask mask-star w-4  bg-rojoanaranjado"
                          />
                          <input
                            type="radio"
                            name="rating-1"
                            className="mask mask-star w-4 bg-rojoanaranjado"
                          />
                          <input
                            type="radio"
                            name="rating-1"
                            className="mask mask-star w-4 bg-rojoanaranjado"
                          />
                          <input
                            type="radio"
                            name="rating-1"
                            className="mask mask-star w-4 bg-rojoanaranjado"
                          />
                          <input
                            type="radio"
                            name="rating-1"
                            className="mask mask-star w-4 bg-rojoanaranjado"
                            checked
                          />
                        </div>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* //! Productos RELACIONADOS */}

            <div className="flex flex-col pb-10">
              <h3 className="text-3xl">Productos Relacionados</h3>

              {prodcutosRelacionados.map((producto) => (
                <>
                  <div
                    key={producto.id}
                    className="flex items-center justify-center cursor-pointer"
                  >
                    <Cajita />
                    <img src={producto.imagen} alt="producto" />
                  </div>
                  <h3 className="text-3xl text-center cursor-pointer hover:text-rojoanaranjado">
                    {producto.title}
                  </h3>
                  <h3 className="text-center mb-10 text-3xl">
                    ${producto.precio}
                  </h3>
                </>
              ))}
            </div>
          </div>
        </div>
        {/* <ProductSlideShow images={images} /> */}
      </div>
    </>
  );
};

export default ProductPage;
