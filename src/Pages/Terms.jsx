import React from "react";
// css
import "../assets/css/HeroSection.css";
import "../assets/css/Footer_page.css";
import Counter from "../Component/Counter";

// icon
import { RiArrowRightWideFill } from "react-icons/ri";

// component
import Header from "../Component/Header";
import Footer from "../Component/Footer";

function Terms() {
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
                  HOME <RiArrowRightWideFill /> POLICIES
                </h6>
                <h3>Terms & Conditions</h3>
              </div>
            </center>
          </div>
        </div>
      </div>
      {/* hero section  */}

      {/* terms & condition  */}
      <div className="container" id="footer-pages">
        <div className="row mb-5">
          <p>
            Welcome to the TRINITY ENGITECH website! These Terms and Conditions ("Terms",
            "Conditions", "Terms of Use") govern your use of this website (the
            "Service") operated by TRINITY ENGITECH ("us", "we", or "our").
          </p>

          <p>
            Please read these Terms and Conditions carefully before accessing or
            using our Service.
          </p>

          <p>
            By accessing or using the Service, you agree to be bound by these
            Terms and Conditions. If you disagree with any part of the Terms and
            Conditions, then you may not access or use the Service.
          </p>
        </div>

        {/* 1 */}
        <div className="row mb-5">
          <div className="col-lg-12">
            <h1>1. Acceptance of Terms</h1>
            <div className="line"></div>
          </div>
          <div className="col-lg-12">
            <p>
              These Terms and Conditions constitute a binding agreement between
              you and TRINITY ENGITECH concerning your access and use of the Service.
            </p>
          </div>
        </div>
        {/* 2 */}
        <div className="row mb-5">
          <div className="col-lg-12">
            <h1>2. Changes to Terms and Conditions</h1>
            <div className="line"></div>
          </div>
          <div className="col-lg-12">
            <p>
              We reserve the right to update or modify these Terms and
              Conditions at any time without prior notice. It is your
              responsibility to check these Terms and Conditions periodically
              for changes. Your continued use of the Service following the
              posting of any changes to the Terms and Conditions constitutes
              acceptance of those changes.
            </p>
          </div>
        </div>
        {/* 3 */}
        <div className="row mb-5">
          <div className="col-lg-12">
            <h1>3. Information Accuracy and Availability</h1>
            <div className="line"></div>
          </div>
          <div className="col-lg-12">
            <p>
              The information on the Service is provided for informational
              purposes only and is not intended as a substitute for professional
              advice. We strive to provide accurate and up-to-date information
              on the Service, but we make no warranties or guarantees, express
              or implied, regarding the accuracy, completeness, reliability, or
              timeliness of the information.
            </p>
          </div>
        </div>
        {/* 4 */}
        <div className="row mb-5">
          <div className="col-lg-12">
            <h1>4. Intellectual Property</h1>
            <div className="line"></div>
          </div>
          <div className="col-lg-12">
            <p>
              The content of the Service, including the design, text, graphics,
              logos, images, audio, video, and software, is the property of
              TRINITY ENGITECH or its licensors and is protected by copyright, trademark,
              and other intellectual property laws. You may not modify, publish,
              transmit, reproduce, create derivative works from, distribute, or
              commercially exploit any content on the Service without our prior
              written consent.
            </p>
          </div>
        </div>
        {/* 5 */}
        <div className="row mb-5">
          <div className="col-lg-12">
            <h1>5. User Conduct</h1>
            <div className="line"></div>
          </div>
          <div className="col-lg-12">
            <p>
              You agree to use the Service in a lawful and responsible manner.
              You agree not to use the Service for any unlawful purpose or in
              any manner that could damage, disable, overburden, or impair the
              Service.
            </p>
          </div>
        </div>
        {/* 6 */}
        <div className="row mb-5">
          <div className="col-lg-12">
            <h1>6. Disclaimer of Warranties</h1>
            <div className="line"></div>
          </div>
          <div className="col-lg-12">
            <p>
              THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT ANY
              WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. WE DISCLAIM ALL
              WARRANTIES, INCLUDING BUT NOT LIMITED TO, WARRANTIES OF
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
              NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE
              UNINTERRUPTED, SECURE, OR ERROR-FREE. WE DO NOT WARRANT THAT THE
              RESULTS THAT MAY BE OBTAINED FROM THE USE OF THE SERVICE WILL BE
              ACCURATE OR RELIABLE.
            </p>
          </div>
        </div>
        {/* 7 */}
        <div className="row mb-5">
          <div className="col-lg-12">
            <h1>7. Limitation of Liability</h1>
            <div className="line"></div>
          </div>
          <div className="col-lg-12">
            <p>
              WE WILL NOT BE LIABLE FOR ANY DAMAGES ARISING OUT OF OR IN
              CONNECTION WITH YOUR USE OF THE SERVICE, INCLUDING BUT NOT LIMITED
              TO, DIRECT, INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL,
              PUNITIVE, OR EXEMPLARY DAMAGES.
            </p>
          </div>
        </div>
        {/* 8 */}
        <div className="row mb-5">
          <div className="col-lg-12">
            <h1>8. Termination</h1>
            <div className="line"></div>
          </div>
          <div className="col-lg-12">
            <p>
              We may terminate your access to the Service at any time, for any
              reason or no reason, without notice.
            </p>
          </div>
        </div>
        {/* 9 */}
        <div className="row mb-5">
          <div className="col-lg-12">
            <h1>9. Governing Law</h1>
            <div className="line"></div>
          </div>
          <div className="col-lg-12">
            <p>
              These Terms and Conditions shall be governed by and construed in
              accordance with the laws of India.
            </p>
          </div>
        </div>
        {/* 10 */}
        <div className="row mb-5">
          <div className="col-lg-12">
            <h1>10. Dispute Resolution</h1>
            <div className="line"></div>
          </div>
          <div className="col-lg-12">
            <p>
              Any dispute arising out of or relating to these Terms and
              Conditions shall be subject to the exclusive jurisdiction of the
              courts located in Rajkot, Gujarat, India.
            </p>
          </div>
        </div>
        {/* 11 */}
        <div className="row mb-5">
          <div className="col-lg-12">
            <h1>11. Entire Agreement</h1>
            <div className="line"></div>
          </div>
          <div className="col-lg-12">
            <p>
              These Terms and Conditions constitute the entire agreement between
              you and us regarding your use of the Service.
            </p>
          </div>
        </div>
        {/* 12 */}
        <div className="row mb-5">
          <div className="col-lg-12">
            <h1>12. Contact Us</h1>
            <div className="line"></div>
          </div>
          <div className="col-lg-12">
            <p>
              If you have any questions about these Terms and Conditions, please
              contact us at: 415, R.K.World Tower, Nr Sheetal Park Chowk, 150 Ft
              Ring Road, Rajkot, Gujarat 360006. INDIA. Email:
              info@trinityengitech.com
            </p>
          </div>
        </div>
      <Counter/>
      </div>
      {/* terms & condition  */}
      <Footer/>
    </div>
  );
}

export default Terms;
