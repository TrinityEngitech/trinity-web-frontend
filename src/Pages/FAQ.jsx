import React from "react";
// css
import "../assets/css/HeroSection.css";
import "../assets/css/Footer_page.css";
import Counter from "../Component/Counter";

// icon
import { RiArrowRightWideFill } from "react-icons/ri";

// component
import Header from "../Component/Header";
import Footer from "../Component/Footer";

function FAQ() {
  return (
    <div>
      <Header/>
      {/* hero section  */}
      <div className="container-fulid">
        <div className="row">
          <div className="col-lg-12">
            <div className="hero_bg mt-3 shadow p-3 mb-5"></div>
            <center>
              <div className="hero_container shadow-sm p-3 mb-5 rounded">
                <h6>
                  HOME <RiArrowRightWideFill /> FAQ
                </h6>
                <h1 className="fs-1">FAQ</h1>
              </div>
            </center>
          </div>
        </div>
      </div>
      {/* hero section  */}

      <div className="container" id="footer-pages">
        <div className="row mb-5">
          <p>
            At TRINITY ENGITECH, we understand you may have questions about our gas
            process solutions and services. This FAQ section is designed to
            address some of the most common inquiries. If you don't find the
            answer you're looking for here, please don't hesitate to contact us.
          </p>
        </div>
         {/* 1 */}
         <div className="row mb-5">
          <div className="col-lg-12">
            <h1>What services does TRINITY ENGITECH offer?</h1>
            <div className="line"></div>
          </div>
          <div className="col-lg-12">
            <p>
            We offer comprehensive gas process solutions, including engineering & construction (EPC) of natural gas plants, expertise in LNG, Propane & LPG, safe and efficient transportation & storage, and Green Hydrogen solutions.
            </p>
          </div>
        </div>
        {/* 2 */}
        <div className="row mb-5">
          <div className="col-lg-12">
            <h1>What types of fuel does TRINITY ENGITECH handle?</h1>
            <div className="line"></div>
          </div>
          <div className="col-lg-12">
            <p>
            We have extensive experience with Propane, LPG, Butane, LNG, and Green Hydrogen.
            </p>
          </div>
        </div>
        {/* 3 */}
        <div className="row mb-5">
          <div className="col-lg-12">
            <h1>Where is TRINITY ENGITECH located?</h1>
            <div className="line"></div>
          </div>
          <div className="col-lg-12">
            <p>
            Our corporate office is located in Rajkot, Gujarat, India. However, we serve clients across the entire nation.
            </p>
          </div>
        </div>
        {/* 4 */}
        <div className="row mb-5">
          <div className="col-lg-12">
            <h1>How can I contact TRINITY ENGITECH?</h1>
            <div className="line"></div>
          </div>
          <div className="col-lg-12">
            <p>
            There are several ways to connect with us! You can fill out the contact form on our website, call us directly at +91 9714299399, send us an email at  info@trinityengitech.com.in, or visit our corporate office in Rajkot.
            </p>
          </div>
        </div>
        <Counter/>
      </div>
      <Footer/>
    </div>
  );
}

export default FAQ;
