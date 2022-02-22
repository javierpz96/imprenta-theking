import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Carrusel.css";

import img1c1 from "./../../img/01 - Carteles Frontlight/01.jpg";
import img1c2 from "./../../img/01 - Carteles Frontlight/02.jpg";
import img1c3 from "./../../img/01 - Carteles Frontlight/03.jpg";
import img1c4 from "./../../img/01 - Carteles Frontlight/04.jpg";
import img1c5 from "./../../img/01 - Carteles Frontlight/05.jpg";
import img1c6 from "./../../img/01 - Carteles Frontlight/06.jpg";
import img1c7 from "./../../img/01 - Carteles Frontlight/07.jpg";
import img1c8 from "./../../img/01 - Carteles Frontlight/08.jpg";
import img1c9 from "./../../img/01 - Carteles Frontlight/09.jpg";
import img1c10 from "./../../img/01 - Carteles Frontlight/10.jpg";

const Carrusel = () => {
  return (
    <div className="Carrusel">
      
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img1c1}
            alt="First slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img1c2}
            alt="Second slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img1c3}
            alt="Third slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img1c4}
            alt="Third slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img1c5}
            alt="Third slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img1c6}
            alt="Third slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img1c7}
            alt="Third slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img1c8}
            alt="Third slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img1c9}
            alt="Third slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img1c10}
            alt="Third slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        
      </Carousel>
      <h4 className="h4">Carteles de lona montados sobre una estructura metalica. Se iluminan exteriormente.</h4>
    </div>
  );
};

export default Carrusel;
