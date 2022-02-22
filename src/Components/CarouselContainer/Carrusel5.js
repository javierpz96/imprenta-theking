import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Carrusel.css";


import img5c2 from "./../../img/05 - Rotulaciones/02.jpg";
import img5c3 from "./../../img/05 - Rotulaciones/03.jpg";

import img5c5 from "./../../img/05 - Rotulaciones/05.jpg";

import img5c7 from "./../../img/05 - Rotulaciones/07.jpg";
import img5c8 from "./../../img/05 - Rotulaciones/08.jpg";

const Carrusel5 = () => {
  return (
    <div className="Carrusel">
      
      <Carousel>
        
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img5c2}
            alt="Second slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img5c3}
            alt="Third slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img5c5}
            alt="Third slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img5c7}
            alt="Third slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img5c8}
            alt="Third slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        
      </Carousel>
      <h4 className="h4">Se destaca por su gran posibilidad de utilidad tanto para la publicidad como para la decoración.  Ofrece un amplio abanico de posibilidades en cuanto a su uso y superficies de aplicación.En este caso, solo se rotula el sector de la figura deseada.</h4>
    </div>
  );
};

export default Carrusel5;