import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Carrusel.css";

import img8c1 from "./../../img/08 - Termoestampado Textil/01.jpg";
import img8c2 from "./../../img/08 - Termoestampado Textil/02.jpg";
import img8c3 from "./../../img/08 - Termoestampado Textil/03.jpg";

import img8c5 from "./../../img/08 - Termoestampado Textil/05.jpg";
import img8c6 from "./../../img/08 - Termoestampado Textil/06.jpg";
import img8c7 from "./../../img/08 - Termoestampado Textil/07.jpg";
import img8c8 from "./../../img/08 - Termoestampado Textil/08.jpg";
import img8c9 from "./../../img/08 - Termoestampado Textil/09.jpg";


const Carrusel8 = () => {
  return (
    <div className="Carrusel">
      
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img8c1}
            alt="First slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img8c2}
            alt="Second slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img8c3}
            alt="Third slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img8c5}
            alt="Third slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img8c6}
            alt="Third slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img8c7}
            alt="Third slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img8c8}
            alt="Third slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img8c9}
            alt="Third slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        
        
      </Carousel>
      <h4 className="h4">El estampado de prendas con vinilo textil es una técnica muy utilizada debido a que se puede aplicar en cualquier color de prenda y material.</h4>
    </div>
  );
};

export default Carrusel8;