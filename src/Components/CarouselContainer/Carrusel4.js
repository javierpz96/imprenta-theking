import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Carrusel.css";

import img4c1 from "./../../img/04 - Ploteos/01.jpg";
import img4c2 from "./../../img/04 - Ploteos/02.jpg";
import img4c3 from "./../../img/04 - Ploteos/03.jpg";
import img4c4 from "./../../img/04 - Ploteos/04.jpg";
import img4c5 from "./../../img/04 - Ploteos/05.jpg";
import img4c6 from "./../../img/04 - Ploteos/06.jpg";

import img4c8 from "./../../img/04 - Ploteos/08.jpg";
import img4c9 from "./../../img/04 - Ploteos/09.jpg";


const Carrusel4 = () => {
  return (
    <div className="Carrusel">
      
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img4c1}
            alt="First slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img4c2}
            alt="Second slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img4c3}
            alt="Third slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img4c4}
            alt="Third slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img4c5}
            alt="Third slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img4c6}
            alt="Third slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img4c8}
            alt="Third slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img4c9}
            alt="Third slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        
      </Carousel>
      <h4 className="h4">Se destaca por su gran posibilidad de utilidad tanto para la publicidad como para la decoración.  Ofrece un amplio abanico de posibilidades en cuanto a su uso y superficies de aplicación.</h4>

    </div>
  );
};

export default Carrusel4;