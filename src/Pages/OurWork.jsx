// css
import "../assets/css/HeroSection.css";
import "../assets/css/Heading.css";
import "../assets/css/OurWork.css";

// icon
import { RiArrowRightWideFill } from "react-icons/ri";

// imges
import w1 from "../assets/images/w1.jpeg";
import w2 from "../assets/images/w2.jpeg";
import w3 from "../assets/images/w3.JPG";
import w4 from "../assets/images/w4.JPG";
import w5 from "../assets/images/w5.JPG";

// component
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import Counter from "../Component/Counter";
import Client_Slider from "../Component/Client_Slider";

function OurWork() {
  return (
    <div>
      <Header />
      {/* hero section  */}
      <div className="container-fulid">
        <div className="row">
          <div className="col-lg-12">
            <div className="hero_bg mt-3 shadow p-3 mb-5"></div>
            <center>
              <div className="hero_container shadow-sm p-3 mb-5 rounded">
                <h6>
                  HOME <RiArrowRightWideFill /> OUR WORK
                </h6>
                <h1>Our Work</h1>
              </div>
            </center>
          </div>
        </div>
      </div>
      {/* hero section  */}

      <div className="container">
        {/* heading  */}
        <div className="row"></div>
        {/* heading  */}

        <div className="row">
          <div className="heading col-lg-3 align-self-center">
            <h1>
              Years of Experience, <br /> Proven Results
            </h1>
            <div className="line"></div>
          </div>
          <div className="col-lg-9">
            <section id="container">
              <div id="gallery-wrapper">
                <figure id="gallery-item">
                  <img src={w1} alt="" id="item-image" />
                </figure>

                <figure id="gallery-item">
                  <img src={w2} alt="" id="item-image" />
                </figure>

                <figure id="gallery-item">
                  <img src={w3} alt="" id="item-image" />
                </figure>

                <figure id="gallery-item">
                  <img src={w4} alt="" id="item-image" />
                </figure>

                <figure id="gallery-item">
                  <img src={w5} alt="" id="item-image" />
                </figure>
              </div>
            </section>
          </div>
        </div>
        {/* <hr className="mt-5" />
        <div className="row">
          <div className="heading col-lg-3 align-self-center">
            <h1>
            Shaping the Future with TRIGAS Projects 
            </h1>
            <div className="line"></div>
          </div>
          <div className="col-lg-9">
          <div className="video mt-5 p-0 m-0">
            <iframe
              src="https://drive.google.com/file/d/1GDKKv0h5qH1IMvgYIuLsQxKIDMLMFavn/preview"
              frameborder="0"
              allow=" fullscreen"
              allowfullscreen
            ></iframe>
          </div>
          </div>
        </div> */}
        <hr className="mt-5" />
        <Client_Slider />
        <Counter />
      </div>
      <Footer />
    </div>
  );
}

export default OurWork;
