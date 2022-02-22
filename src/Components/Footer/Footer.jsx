import React from "react";
import logo from "../../img/09 - Sublimaciones/Logo1.png";
import './Footer.css'

const Footer = () => {
  return (
    <footer className="pie-pagina">
      <div className="grupo-1">
        <div className="box">
          <figure>
            <a href="#">
              <img className="logo-img" src={logo} alt="logo"></img>
            </a>
          </figure>
        </div>
        <div className="box">
          <h2>SOBRE NOSOTROS</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            corrupti mollitia at ad rerum culpa.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione,
            tenetur.
          </p>
        </div>
        <div className="box">
          <h2>SIGUENOS</h2>
          <div className="red-social">
            <a href="#" className="fa fa-facebook"></a>
            <a href="#" className="fa fa-instagram"></a>
            <a href="#" className="fa fa-twitter"></a>
            <a href="#" className="fa fa-youtube"></a>
          </div>
        </div>
      </div>

      <div className="grupo-2">
        <small>&copy; 2022 <b>C.G</b> - Todos los Derechos Reservados</small>
      </div>

    </footer>
  );
};

export default Footer;
