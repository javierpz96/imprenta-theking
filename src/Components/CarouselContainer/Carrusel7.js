import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Carrusel.css";

import img7c1 from "./../../img/07 - Imanes Vehiculares/01.jpg";
import img7c2 from "./../../img/07 - Imanes Vehiculares/02.jpg";
import img7c3 from "./../../img/07 - Imanes Vehiculares/03.jpg";

const Carrusel7 = () => {
  return (
    <div className="Carrusel">
      
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img7c1}
            alt="First slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img7c2}
            alt="Second slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img7c3}
            alt="Third slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
    
        
      </Carousel>
      <h4 className="h4">Se destaca por su versatilidad de colocarlo y extraerlo en el momento que uno lo requiera. Sirve para circular.</h4>
    </div>
  );
};

export default Carrusel7;