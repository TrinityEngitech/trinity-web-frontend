// css
import "../assets/css/HeroSection.css";
import "../assets/css/Heading.css";
import "../assets/css/Media.css";

// icon
import { RiArrowRightWideFill } from "react-icons/ri";

// img
import certificates from "../assets/images/certificates.jpg";

// component
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import Counter from '../Component/Counter';
import Client_Slider from '../Component/Client_Slider';

function Media() {
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
                  HOME <RiArrowRightWideFill /> MEDIA & AWARD
                </h6>
                <h3>Media & Award</h3>
              </div>
            </center>
          </div>
        </div>
      </div>
      {/* hero section  */}

      <div className="container">
        {/* heading  */}
        <div className="row" data-aos="fade-up">
          <div className="heading col-lg-12" >
            <h1>
              Award-Winning <br /> Gas Solutions
            </h1>
            <div className="line"></div>
          </div>
        </div>
        {/* heading  */}

        <div className="container-fulid">
          <div className="row" data-aos="fade-up">
            <div className="col-lg-12 mt-3">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Certifications
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <div className="card mb-4" style={{ width: "auto" , height:"auto "}}>
                        <div className="row g-0">
                          <div className="col-md-3">
                            <img
                              src={certificates}
                              className="img-fluid rounded-start text-center border-end"
                              alt="..."
                              width={'300px'}
                            />
                          </div>
                          <div className="col-md-8">
                            <div className="card-body p-5">
                              <h3 className="card-title"  style={{color:"#9b070e"}}>ISO 9001 :2015</h3>
                              <p className="card-text" style={{color: "rgb(47, 47, 47)"}}>
                                This certificate states that the management
                                system of Trinity Engi-Tech, a company dealing
                                with the manufacturing and installation of gas
                                tanks and vaporizers, is certified to meet the
                                requirements of ISO 9001: 2015.
                              </p>
                              <p className="card-text"  style={{color: "rgb(47, 47, 47)"}}>
                                The certificate is issued by ICV Assessments
                                Pvt. Ltd. <br />
                                <br />
                                The certificate is a powerful tool for Trinity
                                Engi-Tech, as it demonstrates to customers and
                                stakeholders that the company has a robust
                                quality management system in place. This can
                                help to build trust, improve credibility, and
                                increase competitiveness.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Awards
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body d-flex flex-wrap justify-content-between">
                      <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
                       
                       
                        {/* 1 */}
                        <div
                          className="card m-2"
                          style={{ width: "300px", height: "450px" }}
                        >
                          <img
                            src="https://trigas.co.in/wp-content/uploads/2024/07/1.jpg.webp"
                            className="card-img-top"
                            alt="..."
                            height={"350px"}
                          />
                          <div className="card-body text-center">
                            <h5 className="card-title fs-6" style={{color:"#1f284e"}}>
                            Safety awareness programme(SAP2023)
                            </h5>
                          </div>
                        </div>
                        
                        {/* 2 */}
                        <div
                          className="card m-2"
                          style={{ width: "300px", height: "450px" }}
                        >
                          <img
                            src="https://trigas.co.in/wp-content/uploads/2024/07/2.jpg.webp"
                            className="card-img-top"
                            alt="..."
                            height={"350px"}
                          />
                          <div className="card-body text-center">
                            <h5 className="card-title fs-6" style={{color:"#1f284e"}}>
                            BEST BUSSINESS ASSOCIATE – 2019 INDIAN OIL CORPORATION LIMITE
                            </h5>
                          </div>
                        </div>
                           {/* 3 */}
                           <div
                          className="card m-2"
                          style={{ width: "300px", height: "450px" }}
                        >
                          <img
                            src="https://trigas.co.in/wp-content/uploads/2024/07/4.jpg.webp"
                            className="card-img-top"
                            alt="..."
                            height={"350px"}
                          />
                          <div className="card-body text-center">
                            <h5 className="card-title fs-6" style={{color:"#1f284e"}}>
                            Indian oil corporation Limited 2023
                            </h5>
                          </div>
                        </div>
                        {/* 4*/}
                        <div
                          className="card m-2"
                          style={{ width: "300px", height: "450px" }}
                        >
                          <img
                            src="https://trigas.co.in/wp-content/uploads/2024/07/5.jpg.webp"
                            className="card-img-top"
                            alt="..."
                            height={"350px"}
                          />
                          <div className="card-body text-center">
                            <h5 className="card-title fs-6" style={{color:"#1f284e"}}>
                            Highest Bulk LPG Sales -220046 MT in FY 2023 -24
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Client_Slider/>
        <Counter/>
      </div>
      <Footer/>
    </div>
  );
}

export default Media;
