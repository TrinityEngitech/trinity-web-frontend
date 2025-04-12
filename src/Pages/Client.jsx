// css
import "../assets/css/HeroSection.css";
import "../assets/css/Heading.css";
import "../assets/css/Client.css";

// component
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import Counter from "../Component/Counter";
import Client_Slider from "../Component/Client_Slider";

// icon
import { RiArrowRightWideFill } from "react-icons/ri";
import { FaQuoteLeft } from "react-icons/fa";

//our Clients images
import c1 from "../assets/images/c1.jpg";
import c2 from "../assets/images/c2.jpg";
import c3 from "../assets/images/c3.jpg";
import c4 from "../assets/images/c4.jpg";
import c5 from "../assets/images/c5.jpg";
import c6 from "../assets/images/c6.jpg";
import c7 from "../assets/images/c7.jpg";
import c8 from "../assets/images/c8.jpg";
import c9 from "../assets/images/c9.jpg";
// import c10 from "../assets/images/c10.jpg";
import c11 from "../assets/images/c11.jpg";
import c12 from "../assets/images/c12.jpg";
import c13 from "../assets/images/c13.jpg";
import c14 from "../assets/images/c14.jpg";

function Client() {
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
                  HOME <RiArrowRightWideFill /> CLIENT
                </h6>
                <h1>Client</h1>
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
            <h1>
              Our Clients, <br /> Our Partners
            </h1>
            <div className="line"></div>
          </div>
        </div>
        {/* heading  */}

        {/* clients  */}
        <div className="row">
          <div className="col-lg-12 d-flex flex-wrap " data-aos="fade-up">
            {/* 1 */}
            <div className="img-wrapper">
              <img className="inner-img" src={c1} />
            </div>
            {/* 2 */}
            <div className="img-wrapper">
              <img className="inner-img" src={c2} />
            </div>
            {/* 3  */}
            <div className="img-wrapper">
              <img className="inner-img" src={c3} />
            </div>
            {/* 4 */}
            <div className="img-wrapper">
              <img className="inner-img" src={c4} />
            </div>
            {/* 5 */}
            <div className="img-wrapper">
              <img className="inner-img" src={c5} />
            </div>
            {/* 6 */}
            <div className="img-wrapper">
              <img className="inner-img" src={c6} />
            </div>
            {/* 7 */}
            <div className="img-wrapper">
              <img className="inner-img" src={c7} />
            </div>
            {/* 8 */}
            <div className="img-wrapper">
              <img className="inner-img" src={c8} />
            </div>
            {/* 9 */}
            <div className="img-wrapper">
              <img className="inner-img" src={c9} />
            </div>
            {/* 10
            <div className="img-wrapper">
              <img className="inner-img" src={c10} />
            </div> */}
            {/* 11 */}
            <div className="img-wrapper">
              <img className="inner-img" src={c11} />
            </div>
            {/* 12 */}
            <div className="img-wrapper">
              <img className="inner-img" src={c12} />
            </div>
            {/* 13 */}
            <div className="img-wrapper">
              <img className="inner-img" src={c13} />
            </div>
            {/* 14  */}
            <div className="img-wrapper">
              <img className="inner-img" src={c14} />
            </div>
          </div>
        </div>
        {/* clients  */}

        {/* client testimontial  */}
        <div className="row">
          <div
            className="col-lg-12 d-flex flex-wrap justify-content-evenly flex-md-wrap flex-sm-wrap"
            id="review"
          >
            <div id="review-1">
              <span>
                <FaQuoteLeft />
              </span>
              <h1>
                See What Our <br /> Clients Have to Say
              </h1>
            </div>

            <div className="card shadow-sm p-2 rounded">
              <img src={c3} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title" style={{ color: "#1f284e" }}>
                  1. Wings Agriculture Pvt Ltd
                </h4>
                <p className="card-text" style={{ color: "rgb(47, 47, 47)" }}>
                  This company has been our go-to gas supplier for years. They
                  are incredibly reliable and We've never has any issues with
                  our deliveries. Their effciency and professionalism are
                  unmatched!!
                </p>
              </div>
            </div>

            <div className="card shadow-sm p-2 rounded">
              <img src={c1} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title" style={{ color: "#1f284e" }}>
                  2. Varmora Granito Pvt Ltd
                </h4>
                <p className="card-text" style={{ color: "rgb(47, 47, 47)" }}>
                  I’ve dealt with several gas suppliers in the past, and this
                  company is by far the best. They are dependable, affordable,
                  and their customer service is always responsive and helpful.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* client testimontial  */}

        <Client_Slider />

        <Counter />
      </div>
      <Footer/>
    </div>
  );
}

export default Client;
