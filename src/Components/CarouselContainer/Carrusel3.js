import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Carrusel.css";

import img3c1 from "./../../img/03 - Corporeos/01.jpg";
import img3c2 from "./../../img/03 - Corporeos/02.jpg";
import img3c3 from "./../../img/03 - Corporeos/03.jpg";
import img3c4 from "./../../img/03 - Corporeos/04.jpg";
import img3c5 from "./../../img/03 - Corporeos/05.jpg";
import img3c6 from "./../../img/03 - Corporeos/06.jpg";
import img3c7 from "./../../img/03 - Corporeos/07.jpg";
import img3c8 from "./../../img/03 - Corporeos/08.jpg";
import img3c9 from "./../../img/03 - Corporeos/09.jpg";
import img3c10 from "./../../img/03 - Corporeos/10.jpg";
import img3c11 from "./../../img/03 - Corporeos/11.jpg";

const Carrusel3 = () => {
  return (
    <div className="Carrusel">
      
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img3c1}
            alt="First slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img3c2}
            alt="Second slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img3c3}
            alt="Third slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img3c4}
            alt="Third slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img3c5}
            alt="Third slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img3c6}
            alt="Third slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img3c7}
            alt="Third slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img3c8}
            alt="Third slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img3c9}
            alt="Third slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img3c10}
            alt="Third slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img3c11}
            alt="Third slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <h4 className="h4">Carteles de lona montados sobre una estructura metalica. Se iluminan exteriormente.</h4>
    </div>
  );
};

export default Carrusel3;