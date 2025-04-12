// css
import "../assets/css/Header.css";

import { Link } from "react-router-dom";

// icons
import { IoLogoWhatsapp } from "react-icons/io";
import { RiShareFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { RiInstagramFill } from "react-icons/ri";
import { SiGmail } from "react-icons/si";
import { FaLocationDot } from "react-icons/fa6";
// import { IoMdPerson } from "react-icons/io";

// Logo
import header_logo from "../assets/logo/header_logo.png";

function Header() {
  return (
    <div>
      <div className="navbar">
        <div className="top_nav">
          <div className="container-fulid ">
            <div className="row m-0 p-0 d-flex justify-content-between">
              <div className="col-lg-6 col-md-sm-12  d-flex ">
                <li className="me-3">
                  <RiShareFill /> &nbsp; OUR SOCIALS
                </li>
                <li>
                  <Link
                    to="https://www.facebook.com/profile.php?id=100064120053205"
                    target="_blank"
                  >
                    <FaFacebookF />
                  </Link>
                  &nbsp;&nbsp;
                  <Link
                    to="https://www.linkedin.com/company/trinity-engi-tech/"
                    target="_blank"
                  >
                    <GrLinkedinOption />
                  </Link>
                  &nbsp;&nbsp;
                  <Link
                    to="https://www.instagram.com/trinity_engitech?igsh=YnN1c2UwZzI5aTlj"
                    target="_blank"
                  >
                    <RiInstagramFill />
                  </Link>
                  &nbsp;&nbsp;
                  <Link
                    to="https://wa.me/7046121161?text-HEllO from TRINITY"
                    target="_blank"
                  >
                    <IoLogoWhatsapp />
                  </Link>
                </li>
              </div>
              <div className="col-lg-6 d-flex justify-content-lg-end">
                <div>
                  <li className="me-3 flex-fill">
                    <SiGmail /> &nbsp; info@trinityengitech.com
                  </li>
                </div>
                <div>
                  <li>
                    <Link to="/contact">
                      <FaLocationDot /> &nbsp; Contact
                    </Link>
                  </li>
                </div>
                {/* <div>
                  <li>
                    <Link to="/login">
                      &nbsp; <IoMdPerson />
                    </Link>
                  </li>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        <div className="middle_nav">
          <div className="container">
            <div className="row">
              <div className="col-lg-md-sm-12 text-center pt-2">
                <img src={header_logo} alt="" width={"250px"} height={""} />
              </div>
            </div>
          </div>
          <hr />
        </div>

        <div className="bottom_nav">
          {/* <ul className="nav justify-content-center "> */}
          <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                id="toggle-btn"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav m-auto mb-lg-0 justify-content-center ">
                  <li className="nav-item align-self-center">
                    <Link to="/" className="nav-link " aria-current="page">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item align-self-center">
                    <Link to="/about" className="nav-link">
                      About Us
                    </Link>
                  </li>
                  <li className="nav-item align-self-center">
                    <Link to="/services" className="nav-link">
                      Services & Products
                    </Link>
                  </li>
                  {/* <li className="nav-item">
              <Link to="/products" className="nav-link">
                Products
              </Link>
            </li> */}
                  <li className="nav-item align-self-center">
                    <Link to="/ourworks" className="nav-link">
                      Our Work
                    </Link>
                  </li>
                  <li className="nav-item align-self-center">
                    <Link to="/client" className="nav-link">
                      Client
                    </Link>
                  </li>
                  <li className="nav-item align-self-center">
                    <Link to="/media" className="nav-link">
                      Media & Award
                    </Link>
                  </li>
                  <li className="nav-item align-self-center">
                    {/* <Link
                      to="/download"
                      className="nav-link"
                      aria-disabled="true"
                    >
                      Download
                    </Link> */}
                  </li>
                  <li className="nav-item align-self-center">
                    <Link
                      to="/contact"
                      className="nav-link"
                      aria-disabled="true"
                    >
                      Contact us
                    </Link>
                  </li>
                  <button className="btn" id="enquire">
                    <Link to="/contact" id="enquire-btn">
                      Enquire Now
                    </Link>
                  </button>
                </ul>
              </div>
            </div>
          </nav>
          {/* </ul> */}
        </div>
      </div>
    </div>
  );
}

export default Header;
