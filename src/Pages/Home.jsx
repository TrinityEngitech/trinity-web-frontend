import { Link } from "react-router-dom";

// css
import "../assets/css/Home.css";
import "../assets/css/Heading.css";

// component
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import Counter from "../Component/Counter";
import Client_Slider from "../Component/Client_Slider";
import Home_Hero from "../Component/Home_Hero";

// img
import w1 from "../assets/images/w1.jpeg";
import service_bg from "../assets/images/services.png";
import hp1 from "../assets/images/hp1.jpeg";
import hp2 from "../assets/images/hp2.jpeg";
import hp3 from "../assets/images/hp3.jpeg";
import hp4 from "../assets/images/hp4.jpeg";
// import we from '../assets/images/we.png'
// import care from '../assets/images/care.png'
import wecare from "../assets/images/we-care.png";

function Home() {
  return (
    <div>
      <Header />

      <Home_Hero />

      <div className="container">
        {/* about  */}
        <div className="row mb-5" data-aos="fade-up">
          {/* heading  */}
          <div className="heading col-lg-12">
            <h6>ABOUT US</h6>
            <h1>Discover our story</h1>
            <div className="line"></div>
          </div>
          {/* heading  */}
          <div
            className="col-lg-12 d-flex flex-wrap flex-sm-wrap flex-md-wrap"
            id="about"
          >
            <div className="col-lg-5" id="ab-wrapper">
              <img src={w1} alt="" width={"550px"} id="ab-inner" />
            </div>
            <div className="col-lg-6 align-self-center ms-lg-5 mt-sm-3 mt-md-3">
              <p>
                TRINITY ENGITECH has been a leader in providing comprehensive
                Engineering, Procurement, Construction (EPC), and maintenance
                solutions for hydrocarbon gas plants, including LNG, propane,
                and LPG, since 1999. We are known for our innovation and
                sustainability, having commissioned over 500+ plants across
                India. Our services also include fuel conversion and hydrogen
                solutions, supporting the transition to cleaner energy sources.
              </p>
              <div id="ab_btn">
                <Link to="/about" className="btn">
                  <span>EXPLORE MORE</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* about  */}
        <hr />
        {/* we care  */}
        <div className="row mb-5 p-3 text-center" data-aos="fade-up">
          <div className="col-lg-12" id="wecare">
            <img src={wecare} alt="" className="img-fluid mb-5" />
            <p>
            "Our commitment to safety reflects our dedication to reliable service. At TRINITY ENGITECH, we prioritize customer well-being through high safety standards and timely support."

            </p>
          </div>
        </div>
        {/* we care  */}
        <hr />

        {/* products  */}
        <div className="row mb-5" data-aos="fade-up">
          {/* heading  */}
          <div className="heading col-lg-12">
            <h6>PRODUCTS</h6>
            <h1>
              Discover our <br /> Feature Products
            </h1>
            <div className="line"></div>
          </div>
          {/* heading  */}
          <div className="col-lg-12 d-flex flex-wrap  justify-content-around flex-md-wrap flex-sm-wrap">
            {/* 1 */}
            <div
              className="card text-center"
              style={{ width: "19rem" }}
              id="home-product"
            >
              <img src={hp1} className="card-img-top img-fulid" alt="..." />
              <div className="card-body">
                <h5 className="card-title">LPG / Propane Above Ground Storage Tank</h5>
                <p className="card-text">
                  These tanks are used in commercial as well as agricultural
                  sectors.
                </p>
                <Link to="/services#discover-product" className="btn">
                  EXPLORE
                </Link>
              </div>
            </div>
            {/* 2 */}
            <div
              className="card text-center"
              style={{ width: "19rem" }}
              id="home-product"
            >
              <img src={hp2} className="card-img-top img-fulid" alt="..." />
              <div className="card-body">
                <h5 className="card-title">LPG / Propane Mounded Storage Tank</h5>
                <p className="card-text">
                  Mounded vessels are little raised above ground level.
                </p>
                <Link to="/services#discover-product" className="btn">
                  EXPLORE
                </Link>
              </div>
            </div>
            {/* 3  */}
            <div
              className="card text-center"
              style={{ width: "19rem" }}
              id="home-product"
            >
              <img src={hp3} className="card-img-top img-fulid" alt="..." />
              <div className="card-body">
                <h5 className="card-title">LPG Cylinder Filling System</h5>
                <p className="card-text">
                  We Undertake Turnkey Contract For Bulk Installation Of Lpg
                  Bottling Plants For Filling Lpg Cylinders.
                </p>
                <Link to="/services#discover-product" className="btn">
                  EXPLORE
                </Link>
              </div>
            </div>
            {/* 4 */}
           <div
                         className="card text-center"
                         style={{ width: "19rem" }}
                         id="home-product"
                       >
                         <img src={hp4} className="card-img-top" alt="..." />
                         <div className="card-body">
                           <h5 className="card-title">LPG Semi Trailer Truck</h5>
                           <p className="card-text">
                           All safety aspects are ensured. Semi trailer tanks meet high industry standards for safe, efficient operation.
                           </p>
                           <Link to="/services#discover-product" className="btn">
                  EXPLORE
                </Link>
                         </div>
                       </div>
          </div>
        </div>
        {/* products  */}

        {/* services  */}
        <div className="row mb-5" data-aos="fade-up">
          {/* heading  */}
          <div className="heading col-lg-12">
            <h6>SERVICES</h6>
            <h1>
              Safe, Sustainable & <br /> Reliable Gas Solutions
            </h1>
            <div className="line"></div>
          </div>
          {/* heading  */}

          <div className="col-lg-12 d-flex justify-content-between">
            <div className="col-lg-6 m-0 p-0">
              {/* 1 */}
              <div className="d-flex text-center mb-3 m-0 p-0">
                <div id="sev1">
                  <h5>1.</h5>
                </div>
                <div id="sev2" className="col-lg-12">
                  <h6>Propane/LPG Storage Installation</h6>
                </div>
              </div>
              {/* 2 */}
              <div className="d-flex  text-center mb-3">
                <div id="sev1">
                  <h5>2.</h5>
                </div>
                <div id="sev2" className="col-lg-12">
                  <h6>LPG Manifold Installation</h6>
                </div>
              </div>
              {/* 3 */}
              <div className="d-flex text-center mb-3">
                <div id="sev1">
                  <h5>3.</h5>
                </div>
                <div id="sev2" className="col-lg-12">
                  <h6>Conversion Assistance</h6>
                </div>
              </div>
              {/* 4 */}
              <div className="d-flex text-center mb-3">
                <div id="sev1">
                  <h5>4.</h5>
                </div>
                <div id="sev2" className="col-lg-12">
                  <h6>Cryogenic Storage Installation</h6>
                </div>
              </div>
              {/* 5 */}
              <div className="d-flex text-center">
                <div id="sev1">
                  <h5>5.</h5>
                </div>
                <div id="sev2" className="col-lg-12">
                  <h6>Green Hydrogen Solution</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-5 align-self-end" id="service-bg">
              <img src={service_bg} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
        {/* services  */}

        <Client_Slider />
        <Counter />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
