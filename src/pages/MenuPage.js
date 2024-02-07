import React, { useState } from "react";
import hamburgesa1 from "../assests/heroburgers/product1.png";
import hamburgesa2 from "../assests/heroburgers/product2.png";
import hamburgesa3 from "../assests/heroburgers/product3.png";
import hamburgesa4 from "../assests/heroburgers/product4.png";
import pizza from "../assests/productos/product-18-copyright-768x768.png";
import hotDog from "../assests/productos/product-20-copyright-768x768.png";
import HotDog2 from "../assests/productos/product-22-copyright-768x768.png";
import CajaMenu from "../components/CajaMenu/CajaMenu";

const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("Destacados");

  const categorias = [
    { id: 3, title: "Destacados" },
    { id: 1, title: "Burgers" },
    { id: 2, title: "Pizzas" },
    { id: 4, title: "HotDogs" },
  ];
  const images = [hamburgesa2, hamburgesa1, hamburgesa3, hamburgesa4];
  const productosjeje = [
    {
      id: 1,
      title: "Black Burger",
      precio: 320,
      type: ["Destacados", "Burgers"],
      imagen: hamburgesa1,
    },
    {
      id: 12,
      title: "Fish Burger",
      precio: 120,
      type: ["Destacados", "Burgers"],
      imagen: hamburgesa2,
    },
    {
      id: 13,
      title: "Chicken Burger",
      precio: 120,
      type: ["Destacados", "Burgers"],
      imagen: hamburgesa3,
    },
    {
      id: 1312,
      title: "Super Burger",
      precio: 120,
      type: ["Destacados", "Burgers"],
      imagen: hamburgesa4,
    },
    {
      id: 1312,
      title: "Super Burger",
      precio: 120,
      type: ["Destacados", "Burgers"],
      imagen: hamburgesa4,
    },
    {
      id: 131212,
      title: "Hot Dog Super",
      precio: 120,
      type: ["Destacados", "HotDogs"],
      imagen: HotDog2,
    },
    {
      id: 412,
      title: "Pizza Margarita",
      precio: 120,
      type: ["Destacados", "Pizzas"],
      imagen: pizza,
    },
    {
      id: 412,
      title: "HotDog MAsterClass",
      precio: 120,
      type: ["Destacados", "HotDogs"],
      imagen: hotDog,
    },
  ];

  const filteredProducts = productosjeje.filter((producto) =>
    producto.type.includes(selectedCategory)
  );

  return (
    <>
      <div className="bg-amarillo">
        <div className="flex items-center justify-center text-7xl pt-12">
          <h3>Menu</h3>
        </div>

        <div className="flex items-center justify-center flex-row gap-3">
          {categorias.map((categoria) => (
            <div
              key={categoria.id}
              className={`bg-white p-3 rounded-md cursor-pointer hover:scale-110 ${
                selectedCategory === categoria.title ? "bg-gray-200" : ""
              }`}
              onClick={() => setSelectedCategory(categoria.title)}
            >
              <h3 className="sm:text-3xl">{categoria.title}</h3>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center"></div>
        <div className="flex flex-col items-center justify-center sm:flex-row sm:flex-wrap">
          {filteredProducts.map((producto) => (
            <CajaMenu producto={producto} />
          ))}
        </div>

        <div></div>
      </div>
    </>
  );
};

export default MenuPage;
