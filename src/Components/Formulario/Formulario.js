import emailjs from "emailjs-com";
import React from "react";
import './Formulario.css'
import ilu5 from "../../img/01 - Carteles Frontlight/email1.jpg";

export default function ContactUs() {

  

  return (
    <div  id="contacto" className="container mt-3 mb-3">
      <img className="ilu5" src={ilu5}></img>
        <form 
        name="formulario-contacto"
        action="https://formsubmit.co/javpeniaz@gmail.com"
        method="POST"
        >
            <h3 className="text-center contact m-3">
                CONTACTO
            </h3>
            <label for="nombre">Nombre</label>
            <input name="name" type="text" id="name" placeholder="Tu nombre" required></input>
            <label for="email">Email</label>
            <input name="email" type="email" id="email" placeholder="Email" required></input>
            <label for="email">Teléfono</label>
            <input name="telefono" type="text" id="phone" placeholder="Numero de teléfono" required></input>
            <label for="email">Mensaje</label>
            <textarea name="mensaje" id="message" rows="4" placeholder="¿Cómo podemos ayudarte?"></textarea>
            <input className="botonc" id="enviarCorreo" type="submit"></input>
        </form>

  


    </div>
  );
}
