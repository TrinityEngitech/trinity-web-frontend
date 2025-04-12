import React from "react";
import "../assets/css/Whatsapp.css";
import whatsapp from "../assets/images/whatsapp.png";

function Whatsapp() {
  return (
    <div  id="whatsapp">
      <a
        href="https://wa.me/8866299399?text=Hello!%20I'm%20contacting%20you%20through%20your%20website%20regarding%20your%20services."
        target="_blank"
        className="btn-whatsapp-pulse btn-whatsapp-pulse-border"
rel="noopener noreferrer"
      >
        <img src={whatsapp} alt="" width={"50px"} />
      </a>
    </div>
  );
}

export default Whatsapp;
