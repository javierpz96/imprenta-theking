import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Carrusel.css";



import img6c3 from "./../../img/06 - Placas Rigidas/03.jpg";
import img6c4 from "./../../img/06 - Placas Rigidas/04.jpg";

import img6c6 from "./../../img/06 - Placas Rigidas/06.jpg";
import img6c7 from "./../../img/06 - Placas Rigidas/07.jpg";
import img6c8 from "./../../img/06 - Placas Rigidas/08.jpg";

const Carrusel6 = () => {
  return (
    <div className="Carrusel">
      
      <Carousel>
        
        
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img6c3}
            alt="Third slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img6c4}
            alt="Third slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img6c6}
            alt="Third slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img6c7}
            alt="Third slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img6c8}
            alt="Third slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        
      </Carousel>
      <h4 className="h4">Es un sistema de comunicación visual muy versatil tanto para interior como para exterior.</h4>
    </div>
  );
};

export default Carrusel6;