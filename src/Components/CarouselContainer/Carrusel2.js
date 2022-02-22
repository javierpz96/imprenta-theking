import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Carrusel.css";

import img2c1 from "./../../img/02 - Carteles Backlight/01.jpg";
import img2c2 from "./../../img/02 - Carteles Backlight/02.jpg";
import img2c3 from "./../../img/02 - Carteles Backlight/03.jpg";
import img2c4 from "./../../img/02 - Carteles Backlight/04.jpg";
import img2c5 from "./../../img/02 - Carteles Backlight/05.jpg";

const Carrusel2 = () => {
  return (
    <div className="Carrusel">
      
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img2c1}
            alt="First slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img2c2}
            alt="Second slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img2c3}
            alt="Third slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img2c4}
            alt="Third slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img2c5}
            alt="Third slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <h4 className="h4">Se destacan al impactar por su alta calidad y presencia. Puede realizarse, letras, escudos, logotipos y cualquier forma que se requiera.</h4>
    </div>
  );
};

export default Carrusel2;
