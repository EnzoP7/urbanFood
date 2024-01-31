import React, { Component } from "react";
import Slider from "react-slick";
import foto1 from "../../assests/imagenes/img-116-copyright.jpg";
import foto2 from "../../assests/imagenes/img-115-copyright.jpg";

export default class Carrusel extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 3000,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true, // Agregado para habilitar el efecto fade
      cssEase: "linear",
      autoplaySpeed: 5000,
    };

    return (
      <div className="flex w-full items-center justify-center -mb-4">
        <Slider {...settings} className="w-full ">
          <div className="w-full h-full">
            <img
              src={foto1}
              className="w-full h-full object-cover"
              alt="Imagen 1"
            />
          </div>
          <div className="w-full h-full">
            <img
              src={foto2}
              className="w-full h-full object-cover"
              alt="Imagen 2"
            />
          </div>
        </Slider>
      </div>
    );
  }
}
