// css
import "../assets/css/Footer.css";

// icons
import { FaFacebookF } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { RiInstagramFill } from "react-icons/ri";
import { SiGmail } from "react-icons/si";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import Whatsapp from "./Whatsapp.jsx";
import { Link } from "react-router-dom";
// logo
import logo_white from "../assets/logo/Trinity_logo_white.png";

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="container-fulid">
          <div
            className="row d-flex justify-content-evenly "
            id="footer-bottom"
          >
            <div className="col-lg-3">
              <h4>
                <img src={logo_white} alt="" width={"55px"} />
              </h4>
              <p>
                Trinity EngiTech is a Leading EPC Comapny For Turnkey
                Intsallation of PROPANE, LPG, LNG Since Last 25 Years.
              </p>
              <div className="col-lg-12">
                <li className="social">
                  <Link
                    to="https://www.facebook.com/profile.php?id=100064120053205"
                    target="_blank"
                  >
                    <FaFacebookF />
                  </Link>
                  &nbsp;
                  <Link to="https://www.linkedin.com/company/trinity-engi-tech/">
                    <GrLinkedinOption />
                  </Link>
                  &nbsp;
                  <Link
                    to="https://www.instagram.com/trinity_engitech?igsh=YnN1c2UwZzI5aTlj"
                    target="_blank"
                  >
                    <RiInstagramFill />
                  </Link>
                  &nbsp;
                  <Link
                    to="https://wa.me/7046121161?text-HEllO from TRINITY"
                    target="_blank"
                  >
                    <IoLogoWhatsapp />
                  </Link>
                </li>
              </div>
            </div>
            <div className="col-lg-3">
              <h4>Services</h4>
              <li>
                <Link to="/services#propane" id="Link">
                  Propane /LPG Storage Installation
                </Link>
              </li>
              <li>
                <Link to="/services#lpg" id="Link">
                LPG Manofold Installation
                </Link>
              </li>
              <li>
                <Link to="/services#conversion" id="Link">
                Conversion Assistance
                </Link>
              </li>
              <li>
                <Link to="/services#Cryogenic" id="Link">
                Cryogenic Storage Installation
                </Link>
              </li>
              <li>
                <Link to="/services#green" id="Link">
                Green Hydrogen Solutions
                </Link>
              </li>
              
            </div>
            <div className="col-lg-2">
              <h4>Qulick Links:</h4>
              <li>
                <Link to="/about" target="_top" id="Link">
                  {" "}
                  About Us
                </Link>
              </li>
              <li>
                {" "}
                <Link to="/contact" target="_top" id="Link">
                  Inquiries
                </Link>
              </li>
              <li>
                {" "}
                <Link to="/faq" target="_top" id="Link">
                  FAQs
                </Link>
              </li>
              <li>
                {" "}
                <Link to="/terms" target="_top" id="Link">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                {" "}
                <Link to="/policy" target="_top" id="Link">
                  Privacy Policys
                </Link>
              </li>
            </div>
            <div className="col-lg-3">
              <h4>Our Location</h4>
              <p>
                <FaLocationDot /> &nbsp; 415,R.k. World Tower, Nr Sheetal Park
                Chowk, 150 ft Ring Road, Rajkot, Gujarat 360006. INDIA
              </p>
              <li>
                <SiGmail /> &nbsp; info@trinityengitech.com
              </li>
              <li>
                <FaPhoneAlt /> &nbsp; +91 9714299399
              </li>
            </div>
          </div>
        </div>
        <hr className="mt-4 text-light" />
        <p className="text-center mt-3 mb-0 pb-0">© Copyright 2024 TrinityEngitech. All Rights Reserved.</p>
        <Whatsapp />
      
      </div>
    </div>
  );
}

export default Footer;
