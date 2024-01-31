import React from "react";
import fondo from "../../assests/fondos/decoration-bg-4.png";

const PreciosMenu = () => {
  const hamburguesas = [
    {
      id: 1,
      title: "SOUTHWEST CHICKEN BURGER",
      ingredientes:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse.",
      precio: 10,
    },
    {
      id: 2,
      title: "CLASSIC BEEF BURGER",
      ingredientes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      precio: 12,
    },
    {
      id: 3,
      title: "VEGGIE DELIGHT BURGER",
      ingredientes:
        "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam.",
      precio: 9,
    },
    {
      id: 4,
      title: "SPICY JALAPEÑO BURGER",
      ingredientes:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      precio: 11,
    },
    {
      id: 5,
      title: "BBQ BACON CHEESEBURGER",
      ingredientes:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      precio: 13,
    },
    {
      id: 6,
      title: "MUSHROOM SWISS BURGER",
      ingredientes:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      precio: 10,
    },
  ];

  return (
    <div
      className="paddingdecoso "
      style={{ backgroundImage: `url(${fondo})`, backgroundSize: "cover" }}
    >
      <div className="flex justify-center items-center pt-10 mb-5 text-white">
        <div>
          <h5 className="text-2xl sm:text-lg">OUR Menu</h5>
        </div>
      </div>
      <div className="flex justify-center items-center mb-10 text-white">
        <h1 className="text-3xl sm:text-7xl">YOUR ONE-STOP BURGER SHOP</h1>
      </div>

      <div className="px-10 sm:mx-32 flex sm:flex-row flex-col justify-center items-center gap-10 text-white sm:pt-20">
        <div>
          <div className="sm:block hidden">
            {hamburguesas.map((hamburguesa) => (
              <div key={hamburguesa.id}>
                <div className="mb-10">
                  <h3 className="sm:text-4xl text-2xl">
                    {hamburguesa.title}
                    <span className="text-gray-400">
                      {" "}
                      .........................{" "}
                    </span>
                    ${hamburguesa.precio.toFixed(2)}
                  </h3>
                  <p className="text-gray-400 text-lg">
                    {hamburguesa.ingredientes}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="sm:hidden ">
            {hamburguesas.map((hamburguesa) => (
              <div key={hamburguesa.id}>
                <div className="mb-10">
                  <h3 className="sm:text-4xl text-xl">
                    {hamburguesa.title}
                    <span className="text-gray-400 sm:block hidden">
                      {" "}
                      .........................{" "}
                    </span>{" "}
                    - ${hamburguesa.precio.toFixed(2)}
                  </h3>
                  <p className="text-gray-400 text-lg">
                    {hamburguesa.ingredientes}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="sm:block hidden">
            {hamburguesas.map((hamburguesa) => (
              <div key={hamburguesa.id}>
                <div className="mb-10">
                  <h3 className="sm:text-4xl text-2xl">
                    {hamburguesa.title}
                    <span className="text-gray-400">
                      {" "}
                      .........................{" "}
                    </span>
                    ${hamburguesa.precio.toFixed(2)}
                  </h3>
                  <p className="text-gray-400 text-lg">
                    {hamburguesa.ingredientes}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="sm:hidden ">
            {hamburguesas.map((hamburguesa) => (
              <div key={hamburguesa.id}>
                <div className="mb-10">
                  <h3 className="sm:text-4xl text-xl">
                    {hamburguesa.title}
                    <span className="text-gray-400 sm:block hidden">
                      {" "}
                      .........................{" "}
                    </span>{" "}
                    - ${hamburguesa.precio.toFixed(2)}
                  </h3>
                  <p className="text-gray-400 text-lg">
                    {hamburguesa.ingredientes}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreciosMenu;
