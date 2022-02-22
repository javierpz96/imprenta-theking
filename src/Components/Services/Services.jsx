import React, { useState, useEffect } from "react";
import "./Services.css";
import "../CarouselContainer/Carrusel";
import "../CarouselContainer/Carrusel2";
import ilu2 from "../../img/01 - Carteles Frontlight/ilustracionsinfondo.png";

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

import img2c1 from "./../../img/02 - Carteles Backlight/01.jpg";
import img2c2 from "./../../img/02 - Carteles Backlight/02.jpg";
import img2c3 from "./../../img/02 - Carteles Backlight/03.jpg";
import img2c4 from "./../../img/02 - Carteles Backlight/04.jpg";
import img2c5 from "./../../img/02 - Carteles Backlight/05.jpg";

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

import img4c1 from "./../../img/04 - Ploteos/01.jpg";
import img4c2 from "./../../img/04 - Ploteos/02.jpg";
import img4c3 from "./../../img/04 - Ploteos/03.jpg";
import img4c4 from "./../../img/04 - Ploteos/04.jpg";
import img4c5 from "./../../img/04 - Ploteos/05.jpg";
import img4c6 from "./../../img/04 - Ploteos/06.jpg";
import img4c7 from "./../../img/04 - Ploteos/07.jpg";
import img4c8 from "./../../img/04 - Ploteos/08.jpg";
import img4c9 from "./../../img/04 - Ploteos/09.jpg";
import img4c10 from "./../../img/04 - Ploteos/10.jpg";

import img5c1 from "./../../img/05 - Rotulaciones/01.jpg";
import img5c2 from "./../../img/05 - Rotulaciones/02.jpg";
import img5c3 from "./../../img/05 - Rotulaciones/03.jpg";
import img5c4 from "./../../img/05 - Rotulaciones/04.jpg";
import img5c5 from "./../../img/05 - Rotulaciones/05.jpg";
import img5c6 from "./../../img/05 - Rotulaciones/06.jpg";
import img5c7 from "./../../img/05 - Rotulaciones/07.jpg";
import img5c8 from "./../../img/05 - Rotulaciones/08.jpg";

import img6c1 from "./../../img/06 - Placas Rigidas/01.jpg";
import img6c2 from "./../../img/06 - Placas Rigidas/02.jpg";
import img6c3 from "./../../img/06 - Placas Rigidas/03.jpg";
import img6c4 from "./../../img/06 - Placas Rigidas/04.jpg";
import img6c5 from "./../../img/06 - Placas Rigidas/05.jpg";
import img6c6 from "./../../img/06 - Placas Rigidas/06.jpg";
import img6c7 from "./../../img/06 - Placas Rigidas/07.jpg";
import img6c8 from "./../../img/06 - Placas Rigidas/08.jpg";

import img7c1 from "./../../img/07 - Imanes Vehiculares/01.jpg";
import img7c2 from "./../../img/07 - Imanes Vehiculares/02.jpg";
import img7c3 from "./../../img/07 - Imanes Vehiculares/03.jpg";

import img8c1 from "./../../img/08 - Termoestampado Textil/01.jpg";
import img8c2 from "./../../img/08 - Termoestampado Textil/02.jpg";
import img8c3 from "./../../img/08 - Termoestampado Textil/03.jpg";
import img8c4 from "./../../img/08 - Termoestampado Textil/04.jpg";
import img8c5 from "./../../img/08 - Termoestampado Textil/05.jpg";
import img8c6 from "./../../img/08 - Termoestampado Textil/06.jpg";
import img8c7 from "./../../img/08 - Termoestampado Textil/07.jpg";
import img8c8 from "./../../img/08 - Termoestampado Textil/08.jpg";
import img8c9 from "./../../img/08 - Termoestampado Textil/09.jpg";
import img8c10 from "./../../img/08 - Termoestampado Textil/10.jpg";

import img9c1 from "./../../img/09 - Sublimaciones/01.jpg";
import img9c2 from "./../../img/09 - Sublimaciones/02.jpg";
import img9c3 from "./../../img/09 - Sublimaciones/03.jpg";
import img9c4 from "./../../img/09 - Sublimaciones/04.jpg";
import img9c5 from "./../../img/09 - Sublimaciones/05.jpg";
import img9c6 from "./../../img/09 - Sublimaciones/06.jpg";
import img9c7 from "./../../img/09 - Sublimaciones/07.jpg";
import img9c8 from "./../../img/09 - Sublimaciones/08.jpg";
import img9c9 from "./../../img/09 - Sublimaciones/09.jpg";
import img9c10 from "./../../img/09 - Sublimaciones/10.jpg";
import Carrusel from "../CarouselContainer/Carrusel";
import Carrusel1 from "../CarouselContainer/Carrusel1";
import Carrusel2 from "../CarouselContainer/Carrusel2";
import Carrusel3 from "../CarouselContainer/Carrusel3";
import Carrusel4 from "../CarouselContainer/Carrusel4";
import Carrusel5 from "../CarouselContainer/Carrusel5";
import Carrusel6 from "../CarouselContainer/Carrusel6";
import Carrusel7 from "../CarouselContainer/Carrusel7";
import Carrusel8 from "../CarouselContainer/Carrusel8";
import Carrusel9 from "../CarouselContainer/Carrusel9";

function Services() {
  const [imgList, setImgList] = useState("Carteles frontlight");
  const [imgSeteado, setImagenSeteado] = useState({
    id: "frontlight",
    name: "Carteles frontlight",
    img: [
      img1c1,
      img1c2,
      img1c3,
      img1c4,
      img1c5,
      img1c6,
      img1c7,
      img1c8,
      img1c9,
      img1c10,
    ],
    description:
      "Son carteles de lona montados sobre una estructura metalica. Se iluminan exteriormente.",
  });

  const serviceList = [
    {
      id: "frontlight",
      name: "Carteles frontlight",
      img: [
        img1c1,
        img1c2,
        img1c3,
        img1c4,
        img1c5,
        img1c6,
        img1c7,
        img1c8,
        img1c9,
        img1c10,
      ],
      description:
        "Son carteles de lona montados sobre una estructura metalica. Se iluminan exteriormente.",
    },
    {
      id: "backlight",
      name: "Carteles backlight",
      img: [img2c1, img2c2, img2c3, img2c4, img2c5],
      description:
        "Carteles construidos en estructura metalica tipo caja, son iluminados interiormente con tecnologia de led.",
    },
    {
      id: "corporeos",
      name: "Corpóreos",
      img: [
        img3c1,
        img3c2,
        img3c3,
        img3c4,
        img3c5,
        img3c6,
        img3c7,
        img3c8,
        img3c9,
        img3c10,
        img3c11,
      ],
      description:
        "Se destacan al impactar por su alta calidad y presencia. Puede realizarse, letras, escudos, logotipos y cualquier forma que se requiera.",
    },
    {
      id: "ploteos",
      name: "Ploteos",
      img: [
        img4c1,
        img4c2,
        img4c3,
        img4c4,
        img4c5,
        img4c6,
        img4c7,
        img4c8,
        img4c9,
        img4c10,
      ],
      description:
        "Se destaca por su gran posibilidad de utilidad tanto para la publicidad como para la decoración.  Ofrece un amplio abanico de posibilidades en cuanto a su uso y superficies de aplicación.",
    },
    {
      id: "rotulaciones",
      name: "Rotulaciones",
      img: [img5c1, img5c2, img5c3, img5c4, img5c5, img5c6, img5c7, img5c8],
      description:
        "Se destaca por su gran posibilidad de utilidad tanto para la publicidad como para la decoración.  Ofrece un amplio abanico de posibilidades en cuanto a su uso y superficies de aplicación.En este caso, solo se rotula el sector de la figura deseada.",
    },
    {
      id: "placas",
      name: "Placas rígidas",
      img: [img6c1, img6c2, img6c3, img6c4, img6c5, img6c6, img6c7, img6c8],
      description:
        "Es un sistema de comunicación visual muy versatil tanto para interior como para exterior.",
    },
    {
      id: "imanes",
      name: "Imanes vehiculares",
      img: [img7c1, img7c2, img7c3],
      description:
        "Se destaca por su versatilidad de colocarlo y extraerlo en el momento que uno lo requiera. Sirve para circular.",
    },
    {
      id: "textil",
      name: "Termoestampado textil",
      img: [
        img8c1,
        img8c2,
        img8c3,
        img8c4,
        img8c5,
        img8c6,
        img8c7,
        img8c8,
        img8c9,
        img8c10,
      ],
      description:
        "El estampado de prendas con vinilo textil es una técnica muy utilizada debido a que se puede aplicar en cualquier color de prenda y material.",
    },
    {
      id: "sublimaciones",
      name: "Sublimaciones",
      img: [
        img9c1,
        img9c2,
        img9c3,
        img9c4,
        img9c5,
        img9c6,
        img9c7,
        img9c8,
        img9c9,
        img9c10,
      ],
      description:
        "La sublimación es una de las técnicas de impresión digital que te permite crear productos personalizados tanto en prendas con poliester como en productos rigidos (tazas, vasos, porta lapices, etc.)",
    },
  ];

  const [myProfession, setMyProfession] = useState("Son carteles de lona montados sobre una estructura metalica. Se iluminan exteriormente.");

  return (
    <div id="servicios" className="img-list-container">
      <div className="servicios mt-4 ">
        <h2 className="text-center">Nuestros Servicios</h2>
        <img className="ilu2" src={ilu2}></img>
      </div>
      <div className="img-container">
        
        <button
          type="button"
          onClick={() =>
            setMyProfession(
              "Son carteles de lona montados sobre una estructura metalica. Se iluminan exteriormente."
            )
          }
          className="btn btn-dark m-3 p-2 btn-small"
        >
          {" "}
          Carteles frontlight
        </button>

        <button
          type="button"
          onClick={() =>
            setMyProfession(
              "Carteles construidos en estructura metalica tipo caja, son iluminados interiormente con tecnologia de led."
            )
          }
          className="btn btn-dark m-3 p-2 btn-small"
        >
          {" "}
          Carteles backlight
        </button>
        <button
          type="button"
          onClick={() =>
            setMyProfession(
              "Se destacan al impactar por su alta calidad y presencia. Puede realizarse, letras, escudos, logotipos y cualquier forma que se requiera."
            )
          }
          className="btn btn-dark m-3 p-2 btn-small"
        >
          {" "}
          Corpóreos
        </button>
        <button
          type="button"
          onClick={() =>
            setMyProfession(
              "Se destaca por su gran posibilidad de utilidad tanto para la publicidad como para la decoración.  Ofrece un amplio abanico de posibilidades en cuanto a su uso y superficies de aplicación."
            )
          }
          className="btn btn-dark m-3 p-2 btn-small"
        >
          {" "}
          Ploteos
        </button>
      </div>
      <div className="img-container">
        <button
          
          type="button"
          onClick={() =>
            setMyProfession(
              "Se destaca por su gran posibilidad de utilidad tanto para la publicidad como para la decoración.  Ofrece un amplio abanico de posibilidades en cuanto a su uso y superficies de aplicación.En este caso, solo se rotula el sector de la figura deseada."
            )
          }
          className="btn btn-dark m-3 p-2 btn-small"
        >
          {" "}
          Rotulaciones
        </button>
        <button
          type="button"
          onClick={() =>
            setMyProfession(
              "Es un sistema de comunicación visual muy versatil tanto para interior como para exterior."
            )
          }
          className="btn btn-dark m-3 p-2 btn-small"
        >
          {" "}
          Placas rígidas
        </button>
        <button
          type="button"
          onClick={() =>
            setMyProfession(
              "Se destaca por su versatilidad de colocarlo y extraerlo en el momento que uno lo requiera. Sirve para circular."
            )
          }
          className="btn btn-dark m-3 p-2 btn-small"
        >
          {" "}
          Imanes vehiculares
        </button>
        <button
          type="button"
          onClick={() =>
            setMyProfession(
              "El estampado de prendas con vinilo textil es una técnica muy utilizada debido a que se puede aplicar en cualquier color de prenda y material."
            )
          }
          className="btn btn-dark m-3 p-2 btn-small"
        >
          {" "}
          Termoestampado textil
        </button>
        <button
          type="button"
          onClick={() =>
            setMyProfession(
              "La sublimación es una de las técnicas de impresión digital que te permite crear productos personalizados tanto en prendas con poliester como en productos rigidos (tazas, vasos, porta lapices, etc.)"
            )
          }
          className="btn btn-dark m-3 p-2 btn-small"
        >
          {" "}
          Sublimaciones
        </button>
      </div>
      <div>
        {myProfession ===
        "Son carteles de lona montados sobre una estructura metalica. Se iluminan exteriormente." ? (
          <Carrusel1 />
        ) : (
          ""
        )}
      </div>
      <div>
        {myProfession ===
        "Carteles construidos en estructura metalica tipo caja, son iluminados interiormente con tecnologia de led." ? (
          <Carrusel2></Carrusel2>
        ) : (
          ""
        )}
      </div>
      <div>
        {myProfession ===
        "Se destacan al impactar por su alta calidad y presencia. Puede realizarse, letras, escudos, logotipos y cualquier forma que se requiera." ? (
          <Carrusel3></Carrusel3>
        ) : (
          ""
        )}
      </div>
      <div>
        {myProfession ===
        "Se destaca por su gran posibilidad de utilidad tanto para la publicidad como para la decoración.  Ofrece un amplio abanico de posibilidades en cuanto a su uso y superficies de aplicación." ? (
          <Carrusel4></Carrusel4>
        ) : (
          ""
        )}
      </div>
      <div>
        {myProfession ===
        "Se destaca por su gran posibilidad de utilidad tanto para la publicidad como para la decoración.  Ofrece un amplio abanico de posibilidades en cuanto a su uso y superficies de aplicación.En este caso, solo se rotula el sector de la figura deseada." ? (
          <Carrusel5></Carrusel5>
        ) : (
          ""
        )}
      </div>

      <div>
        {myProfession ===
        "Es un sistema de comunicación visual muy versatil tanto para interior como para exterior." ? (
          <Carrusel6></Carrusel6>
        ) : (
          ""
        )}
      </div>

      <div>
        {myProfession ===
        "Se destaca por su versatilidad de colocarlo y extraerlo en el momento que uno lo requiera. Sirve para circular." ? (
          <Carrusel7></Carrusel7>
        ) : (
          ""
        )}
      </div>
      <div>
        {myProfession ===
        "El estampado de prendas con vinilo textil es una técnica muy utilizada debido a que se puede aplicar en cualquier color de prenda y material." ? (
          <Carrusel8></Carrusel8>
        ) : (
          ""
        )}
      </div>
      <div>
        {myProfession ===
        "La sublimación es una de las técnicas de impresión digital que te permite crear productos personalizados tanto en prendas con poliester como en productos rigidos (tazas, vasos, porta lapices, etc.)" ? (
          <Carrusel9></Carrusel9>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Services;
