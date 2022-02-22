import React from "react"
import logo from "../../img/Logo.png"
import "./NavBar.css"

function NavBar() {



    
    return(
        

        <nav className="navbar-container">
            <img src={logo} className="logo-img" />
            <div className="navbar-buttons-container">
                <a  href="#">INICIO</a>
                <a href="#servicios">SERVICIOS</a>
                <a href="#contacto">CONTACTO</a>
            </div>
        </nav>
    )
}

export default NavBar