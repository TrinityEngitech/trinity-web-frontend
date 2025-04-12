// css
import "../assets/css/HeroSection.css";
import "../assets/css/Heading.css";
import "../assets/css/Services.css";

// icon
import { RiArrowRightWideFill } from "react-icons/ri";

import { Link } from "react-router-dom";

// img
import s1 from '../assets/images/s1.jpeg'
import s2 from '../assets/images/hp3.jpeg'
import s3 from '../assets/images/s3.jpg'
import s4 from '../assets/images/s4.jpeg'
import s5 from '../assets/images/s5.jpeg'

// component
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import Counter from "../Component/Counter";
import Client_Slider from "../Component/Client_Slider";
import Products from "./Products";
import { useEffect } from "react";

function Services() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);
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
                  HOME <RiArrowRightWideFill /> SERVICES
                </h6>
                <h3>Services & Products</h3>
              </div>
            </center>
          </div>
        </div>
      </div>
      {/* hero section  */}

      <div className="container">
        {/* heading  */}
        {/* <div className="row">
          <div className="heading col-lg-12">
            <h1>
            Safe, Sustainable &  <br /> Reliable Gas Solutions
            </h1>
            <div className="line"></div>
          </div>
        </div> */}
        {/* heading  */}

        {/* services1  */}
        <div className="row mb-5">
          <div className="service-heading col-lg-12" id="propane">
            <h1>
              1. Propane /LPG <br /> Storage Installation
            </h1>
            <div className="line"></div>
          </div>
          <div className="col-lg-12 d-flex flex-wrap justify-content-between flex-sm-wrap flex-md-wrap "  id="services">
            <div className="col-lg-5">
            <img src={s1} alt="" width={'500px'} height={'300px'} className='mb-5 img-fluid' />
            </div>
            <div className="col-lg-7">
            <p>
              We have a team of highly skilled engineers and technicians who can
              design and build state-of-the-art natural gas plants that comply
              with international standards and local regulations
            </p>
            <li>❒ Propane and LPG Bulk storage installation. (Mounded/Open)</li>
            <li>❒ Design and Peso Approval.</li>
            <li>❒ Auto – LPG Installations</li>
            <li>
              ❒ Installation audit, Safety Training and AMC for the All Kind of
              Bulk and Manifold installation.
            </li>
            <li>
              ❒ LOT, VOT, Jumbo, Sumo, Maxima and Hippo Cylinder Manifold
              Installation.
            </li>
            <li>❒ Gas Pipeline solutions (LPG/PROPANE/NG/LNG)</li> 

            </div>
          </div>
        </div>
        {/* services1  */}

        {/* services2  */}
        <div className="row mb-5">
          <div className="service-heading col-lg-12" id="lpg">
            <h1>
              2. LPG Manifold Installation: <br /> [VOT,LOT,425 kg, 450 kg,{" "}
              <br /> Cylinder Manifold Installation]
            </h1>
            <div className="line"></div>
          </div>
          <div className="col-lg-12 d-flex flex-wrap justify-content-between flex-md-wrap flex-sm-wrap" id="services">
          <div className="col-lg-5">
            <img src={s2} alt="" width={'500px'} height={'300px'} className='mb-5 img-fluid' />
            </div>
            <div className="col-lg-7">
            <p>
            We provide expert installation of LPG manifold systems for VOT, LOT, and large-capacity cylinders (425 kg, 450 kg). Our services ensure continuous, safe, and efficient gas supply for industrial and commercial operations.
            </p>
            <li>❒ Custom solutions for VOT, LOT, and large-capacity cylinders</li>
            <li>❒ Safe, reliable, and uninterrupted LPG supply.</li>
            <li>❒ Expert technicians ensuring high-quality installation.</li>
            
            </div>
          </div>
        </div>
        {/* services2  */}

        {/* services3  */}
        <div className="row mb-5">
          <div className="service-heading col-lg-12" id="conversion">
            <h1>3. Conversion Assistance</h1>
            <div className="line"></div>
          </div>
          <div className="col-lg-12 d-flex flex-wrap justify-content-between flex-md-wrap flex-sm-wrap" id="services">
          <div className="col-lg-5">
            <img src={s3} alt="" width={'500px'} height={'300px'} className='mb-5 img-fluid' />
            </div>
            <div className="col-lg-7">
            <p>
            We offer seamless conversion assistance to help you switch to an efficient LPG supply system, tailored to your needs. Our experts ensure a smooth, safe transition for uninterrupted gas usage.
            </p>
            <li>❒ Hassle-free conversion to LPG systems.</li>
            <li>❒ Expert guidance and support throughout the process.</li>
            <li>❒ Customized solutions for industrial and commercial needs.</li>
            </div>
          </div>
        </div>
        {/* services3  */}

        {/* services4  */}
        <div className="row mb-5">
          <div className="service-heading col-lg-12" id="Cryogenic">
            <h1>
              4. Cryogenic Storage Installation <br /> (LIN, LOX, LAR Etc.)
            </h1>
            <div className="line"></div>
          </div>
          <div className="col-lg-12 d-flex flex-wrap justify-content-between flex-md-wrap flex-sm-wrap" id="services">
          <div className="col-lg-5">
            <img src={s4} alt="" width={'500px'} height={'300px'} className='mb-5 img-fluid' />
            </div>
            <div className="col-lg-7">
              <p>
              We specialize in the installation of cryogenic storage systems for gases like LIN (Liquid Nitrogen), LOX (Liquid Oxygen), and LAR (Liquid Argon), ensuring safe and efficient storage for industrial applications.
              </p>
            <li>❒ LNG Storage and regasification facility.</li>
            <li>❒ Cryogenic storage installation (LIN, LOX, LAR Etc.)</li>
            <li>❒ Auto LNG & LCNG dispensing stations.</li>
            </div>
          </div>
        </div>
        {/* services4  */}

        {/* services5  */}
        <div className="row mb-5">
          <div className="service-heading col-lg-12" id="green">
            <h1>5. Green Hydrogen</h1>
            <div className="line"></div>
          </div>
          <div className="col-lg-12 d-flex flex-wrap justify-content-between flex-md-wrap flex-sm-wrap" id="services">
          <div className="col-lg-5">
            <img src={s5} alt="" width={'500px'} height={'300px'} className='mb-5 img-fluid' />
            </div>
            <div className="col-lg-7">
              <p>
              We provide innovative green hydrogen solutions, harnessing renewable energy sources for sustainable production. Our services support the transition to clean energy, helping industries reduce carbon footprints and meet environmental goals.
              </p>
            <li>
              ❒ Optimization of Storage Capacity with the Correct Analysis of
              Layout and Plot Plan.
            </li>
            <li>
              ❒ Depth knowledge about technical safety and risk Management.
            </li>
            <li>❒ End to End Expertise for cater all type of Application.</li>
            <li>
              ❒ Having Both equipment and technology to sustainably and safely
              transport both gaseous and Liquid hydrogen upto the uses point.
            </li>
            </div>
          </div>
        </div>
        {/* services5  */}

        <hr className="mt-3 mb-5" />

        <Products />

        <hr className="mt-3" />

        <Client_Slider />
        <Counter />
      </div>
      <Footer/>
    </div>
  );
}

export default Services;
