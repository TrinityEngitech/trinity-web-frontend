// css
import "../assets/css/HeroSection.css";
import "../assets/css/Heading.css";
import "../assets/css/Download.css";

// icon
import { RiArrowRightWideFill } from "react-icons/ri";
import { RiDownload2Fill } from "react-icons/ri";

// component
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import Counter from "../Component/Counter";
import Client_Slider from "../Component/Client_Slider";

function Download() {
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
                  HOME <RiArrowRightWideFill /> DOWNLOAD
                </h6>
                <h1>Download</h1>
              </div>
            </center>
          </div>
        </div>
      </div>
      {/* hero section  */}

      <div className="container">
        {/* heading  */}
        <div className="row" data-aos="fade-up">
          <div className="heading col-lg-12">
            <h1>
              Download Valuable <br /> Gas Information
            </h1>
            <div className="line"></div>
          </div>
        </div>
        {/* heading  */}

        {/* downloads pdf */}
        <div className="row"data-aos="fade-up" >
          <div className="col-lg-12">
            <a
              href=""
              download="TrinityEngitech_Cateloge"
              className="d-flex justify-content-between ps-5 pe-5"
              id="download"
            >
              <h3>1.Catalogue</h3>
              <i>
                <RiDownload2Fill />
              </i>
            </a>
          </div>
          <div className="col-lg-12">
            <a
              href=""
              download="TrinityEngitech_Broucher"
              className="d-flex justify-content-between ps-5 pe-5"
              id="download"
            >
              <h3>2.Broucher</h3>
              <i>
                <RiDownload2Fill />
              </i>
            </a>
          </div>
        </div>
        {/* downloads pdf */}

        <Client_Slider />
        <Counter />
      </div>
      <Footer/>
    </div>
  );
}

export default Download;
