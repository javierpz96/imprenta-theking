import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Carrusel.css";

const Carrusel = () => {
  return (
    <div className="Carrusel">
      <p>NOVEDADES</p>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://olondriz.com/wp-content/uploads/2020/04/ambar-perrito-1-1024x899.jpg"
            alt="First slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://olondriz.com/wp-content/uploads/2020/04/ambar-perrito-1-1024x899.jpg"
            alt="Second slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://olondriz.com/wp-content/uploads/2020/04/ambar-perrito-1-1024x899.jpg"
            alt="Third slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carrusel;
