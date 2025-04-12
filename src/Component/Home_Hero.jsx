import React from "react";
import { Link } from "react-router-dom";
// css
import "../assets/css/Home_Hero.css";
// img
import arrow from "../assets/images/hero-btn-arrow.gif";
function Home_Hero() {
  return (
    <div>
      <div className="container-fulid mt-2 mb-5">
        <div className="row">
          <div className="col-lg-12">
            <div className="transbox">
              <div className="hero-box">
                <h5>WELCOME TO TRINITY ENGITECH</h5>
                <h4 className="wordCarousel d-flex">
                  <span className=" text-center">
                  End-to-End Solutions For All Kinds Of Gas Processes
                  </span>
                 
                </h4>
                <div className="hero-btn">
                  <Link to="/contact">
                    Enquire Now
                    <img src={arrow} alt="" width={"40px"} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home_Hero;
