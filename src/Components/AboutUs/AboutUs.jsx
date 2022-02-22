import React from "react";
import "./AboutUs.css";
import ilu1 from "../../img/01 - Carteles Frontlight/iluxx1.png";

function AboutUs() {
  return (
    <main className="about-us-general-container">
      <div className="about-us-container">
        <img className="ilu1" src={ilu1} alt="segundologo"></img>

        <div className="texto-quienes-somos">
          <h2 className="text-center mb-5">¿Quienes somos? </h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ea illo
          nemo distinctio perferendis omnis? Totam velit voluptate eligendi! In
          minima ipsam consequatur non. Corporis quisquam consequuntur molestiae
          doloribus est.
        </div>
      </div>
    </main>
  );
}

export default AboutUs;
