// css
import "../assets/css/HeroSection.css";
import "../assets/css/Heading.css";
import "../assets/css/About.css";

// icon
import { RiArrowRightWideFill } from "react-icons/ri";

// img
import ab1 from "../assets/images/ab1.png";
import ab2 from "../assets/images/ab2.JPG";
import founder from '../assets/images/founder.jpg'

// component
import Counter from "../Component/counter";
import Client_Slider from '../Component/Client_Slider';

import Header from "../Component/Header";
import Footer from "../Component/Footer";


function About() {
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
                  HOME <RiArrowRightWideFill /> ABOUT US
                </h6>
                <h1>About Us</h1>
              </div>
            </center>
          </div>
        </div>
      </div>
      {/* hero section  */}

      <div className="container">
        {/* heading  */}
        <div className="row">
          <div className="heading col-lg-12" data-aos="fade-up">
            <h6>OUR HISTORY</h6>
            <h1>
              Discover the heart <br /> of our journey.
            </h1>
            <div className="line"></div>
          </div>
        </div>
        {/* heading  */}

        <div className="row">
          <div className="col-lg-7" id="history" data-aos="fade-up">
            <div className="ab-wrapper">
              <img
                src={ab1}
                alt=""
                width={"750px"}
                height={"400px"}
                className="ab-inner"
              />
            </div>
            <p className="mt-5">
              TRINITY ENGITECH was founded in 1999 with a vision to
              revolutionize the clean fuel industry in India. Since our
              inception, we have grown significantly, establishing ourselves as
              a trusted partner for numerous clients. Our journey has been
              marked by the successful commissioning of over 500+ plants across
              the country and a significant presence in Gujarat, reflecting our
              capacity to meet evolving market demands and technological
              advancements.
            </p>
          </div>
          <div className="col-lg-5 " data-aos="fade-up">
            <div className="accordion accordion-flush" id="accordionFlushExample">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                    style={{color:"#9b070e"}}
                  >
                    Our Vision
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <p className="fs-6" style={{color:"#1f284e"}}>
                      {" "}
                      To lead the global shift towards sustainable energy by
                      providing advanced technologies and services, setting new
                      standards in quality and efficiency while prioritizing
                      environmental sustainability.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                    style={{color:"#9b070e"}}
                  >
                    Our Mission
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <p className="fs-6" style={{color:"#1f284e"}}>
                      {" "}
                      To offer superior EPC services for hydrocarbon gas
                      facilities and emerging technologies like hydrogen,
                      ensuring efficient, sustainable solutions and building
                      long-term client relationships through exceptional service
                      and transparency.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item" >
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                    style={{color:"#9b070e"}}
                  >
                    Our Value
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <p className="fs-6" style={{color:"#1f284e"}}>
                      {" "}
                      At TRINITY ENGITECH, we value innovation, sustainability,
                      and excellence. We continuously advance our technologies
                      while prioritizing environmental responsibility. Our
                      commitment to high quality and client satisfaction fosters
                      lasting relationships through transparency and ethical
                      practices, driving us toward superior performance and
                      continuous improvement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr className="mt-3 mb-4" />

          {/* heading  */}
          <div className="heading col-lg-12" data-aos="fade-up">
            <h6>ABOUT US</h6>
            <h1>Discover our story</h1>
            <div className="line"></div>
          </div>
          {/* heading  */}

          {/* about  */}
          <div className="row" data-aos="fade-up">
            <div className="col-lg-7" id="history">
              <p>
                TRINITY ENGITECH has been a leader in providing comprehensive
                Engineering, Procurement, Construction (EPC), and maintenance
                solutions for hydrocarbon gas plants, including LNG, propane,
                and LPG, since 1999. We are known for our innovation and
                sustainability, having commissioned over 500+ plants across India. Our services also include fuel
                conversion and hydrogen solutions, supporting the transition to
                cleaner energy sources.
              </p>
              <p>
                Our expertise extends beyond traditional EPC services to include
                comprehensive management of complex projects involving
                transportation, storage, and maintenance. As we embrace the era
                of hydrogen, TRINITY ENGITECH is poised to offer end-to-end
                solutions across the hydrogen value chain. Our diverse team of
                professionals and our focus on research and development ensure
                that we remain at the forefront of clean energy production,
                aiming to build long-term client partnerships and expand our
                global footprint.
              </p>
            </div>
            <div className="col-lg-4 ms-5" id="ab_img">
              {/* <img src={ab1} alt=""  width={'400px'} height={'300px'} /> */}
              <figure>
              <img
                src={ab2}
                alt=""
                id="ab-img"
              />
              </figure>
            </div>
          </div>
          {/* about  */}

          <hr className="mt-3 mb-4" />

          {/* heading  */}
          {/* <div className="heading col-lg-12" data-aos="fade-up">
            <h6>OUR MEMBERS</h6>
            <h1>
              Leading with Vision, <br /> Driving Success
            </h1>
            <div className="line"></div>
          </div> */}
          {/* heading  */}

          {/* member  */}
          {/* <div className="row" data-aos="fade-up">
            <div className="col-lg-12 d-flex justify-content-center flex-sm-wrap flex-md-wrap" id="member">
             
              <div className="card m-1" style={{width:'15rem' , height:'auto'}}>
                <img src={founder} className="card-img-top" alt="..." />
                <div className="card-body text-center">
                  <p className="card-text">
                  Dharmesh Jobanputra
                  </p>
                  <h6>Founder</h6>
                </div>
              </div>
             
              <div className="card m-1" style={{width:'15rem' , height:'auto'}}>
                <img src={founder} className="card-img-top" alt="..." />
                <div className="card-body text-center">
                  <p className="card-text">
                  Tanvi Jobanputra
                  </p>
                  <h6>Co-Founder</h6>
                </div>
              </div>
            
              <div className="card m-1" style={{width:'15rem' , height:'auto'}}>
                <img src={founder} className="card-img-top" alt="..." />
                <div className="card-body text-center">
                  <p className="card-text">
                  Sachin Jobanputra
                  </p>
                  <h6>Co-Founder</h6>
                </div>
              </div>
              
              <div className="card m-1" style={{width:'15rem' , height:'auto'}}>
                <img src={founder} className="card-img-top" alt="..." />
                <div className="card-body text-center">
                  <p className="card-text">
                  Jignesh Jobanputra
                  </p>
                  <h6>Co-Founder</h6>
                </div>
              </div>
              
              <div className="card m-1" style={{width:'15rem' , height:'auto'}}>
                <img src={founder} className="card-img-top" alt="..." />
                <div className="card-body text-center">
                  <p className="card-text">
                  Roshan Nayak 
                  </p>
                  <h6>Co-Founder</h6>
                </div>
              </div>
              
            </div>
          </div> */}
          {/* member  */}

          {/* <hr className="mt-3 mb-3" /> */}

          <Client_Slider/>
          <Counter />
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default About;
