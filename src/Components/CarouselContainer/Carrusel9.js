import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Carrusel.css";

import img9c1 from "./../../img/09 - Sublimaciones/01.jpg";
import img9c2 from "./../../img/09 - Sublimaciones/02.jpg";
import img9c3 from "./../../img/09 - Sublimaciones/03.jpg";

import img9c5 from "./../../img/09 - Sublimaciones/05.jpg";
import img9c6 from "./../../img/09 - Sublimaciones/06.jpg";

import img9c8 from "./../../img/09 - Sublimaciones/08.jpg";
import img9c9 from "./../../img/09 - Sublimaciones/09.jpg";


const Carrusel9 = () => {
  return (
    <div className="Carrusel">
      
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img9c1}
            alt="First slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img9c2}
            alt="Second slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img9c3}
            alt="Third slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img9c5}
            alt="Third slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img9c6}
            alt="Third slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img9c8}
            alt="Third slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img9c9}
            alt="Third slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        
        
      </Carousel>
      <h4 className="h4">La sublimación es una de las técnicas de impresión digital que te permite crear productos personalizados tanto en prendas con poliester como en productos rigidos (tazas, vasos, porta lapices, etc.)</h4>
    </div>
  );
};

export default Carrusel9;