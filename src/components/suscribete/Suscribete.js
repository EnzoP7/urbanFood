import React from "react";
import { IoIosSend } from "react-icons/io";

const Suscribete = () => {
  return (
    <div className="bg-amarillo py-20">
      <div className="flex sm:flex-row flex-col justify-center items-center gap-10 sm:gap-44 py-1">
        <div>
          <h1 className="text-3xl sm:text-6xl lg:text-5xl xl:text-6xl font-bold text-center sm:mb-8">
            SUBSCRIBE FOR EXCLUSIVE <br />
            UPDATES AND HOT OFFERS!
          </h1>
        </div>
        <div>
          <div className="flex  gap-5 sm:flex-row flex-col">
            <div>
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="p-4  w-full max-w-lg text-2xl font-sans shadow-md"
              />
            </div>
            <div className="flex flex-row text-white bg-orange-600 px-8 cursor-pointer hover:bg-orange-800">
              <IoIosSend size={30} className="mt-4 ml-3" />{" "}
              <h1 className="font-bold text-2xl  p-4">Suscribete</h1>
            </div>
          </div>
          <div className="flex flex-row">
            <input type="radio" className="px-5" />
            <p className="font-sans text-white">
              I agree to the <span className="underline">Privacy Policy</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suscribete;
