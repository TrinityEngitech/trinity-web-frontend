import React from 'react';
// css
import "../assets/css/HeroSection.css";
import "../assets/css/Footer_page.css";
import Counter from "../Component/Counter";

// icon
import { RiArrowRightWideFill } from "react-icons/ri";

// component
import Header from "../Component/Header";
import Footer from "../Component/Footer";

function Policy() {
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
                <h3>Privacy Policy</h3>
              </div>
            </center>
          </div>
        </div>
      </div>
      {/* hero section  */}

      <div className="container" id="footer-pages">
        <div className="row mb-5">
            <p>TRINITY ENGITECH is committed to protecting your privacy. This Privacy Policy (“Policy”) explains how we collect, use, disclose, and protect your personal information when you visit our website (the “Service”) and the choices you have associated with your personal information.</p>
        </div>
        {/* 1 */}
        <div className="row mb-5">
          <div className="col-lg-12">
            <h1>1. Information We Collect</h1>
            <div className="line"></div>
          </div>
          <div className="col-lg-12">
            <p>
            We collect several types of information for various purposes to improve our Service to you.
            </p>
            <li>❒ <span>Contact Information:</span> When you fill out the contact form on our website, we may collect your name, company name, email address, phone number (optional), and project description.</li>
            <li>❒ <span>Usage Data:</span> We may collect information about your activity on our Service, such as the pages you visit, the time you spend on the pages, and the links you click.</li>
            <li>❒ <span>Cookies and Tracking Technologies:</span> We may use cookies and other tracking technologies to collect and store information about your use of the Service. This information may include your IP address, browser type, operating system, referral URL, and the pages you visit on our Service.</li>
          </div>
        </div>
        {/* 2 */}
        <div className="row mb-5">
          <div className="col-lg-12">
            <h1>2. Use of Your Information</h1>
            <div className="line"></div>
          </div>
          <div className="col-lg-12">
            <p>
            We use the information we collect for various purposes, including:
            </p>
            <li>❒ To provide and maintain the Service</li>
            <li>❒ To respond to your inquiries and fulfill your requests</li>
            <li>❒ To send you important information about our services and updates</li>
            <li>❒ To improve the content and functionality of the Service</li>
            <li>❒ To personalize your experience on the Service</li>
            <li>❒ To comply with legal and regulatory obligations</li>
          </div>
        </div>
        {/* 3 */}
        <div className="row mb-5">
          <div className="col-lg-12">
            <h1>3. Disclosure of Your Information</h1>
            <div className="line"></div>
          </div>
          <div className="col-lg-12">
            <p>
            We may disclose your information to third-party service providers who help us operate and improve the Service. These service providers are obligated to keep your information confidential and use it only for the purposes we have disclosed.
            </p>
            <p>We may also disclose your information if we are required to do so by law or in the good faith belief that such disclosure is necessary to:</p>
            <li>❒ Comply with a legal obligation</li>
            <li>❒ Protect the rights or safety of TRINITY ENGITECH, our employees, or others</li>
            <li>❒ Prevent or investigate fraud or other wrongdoing</li>
          </div>
        </div>
        {/* 4 */}
        <div className="row mb-5">
          <div className="col-lg-12">
            <h1>4. Cookies and Tracking Technologies</h1>
            <div className="line"></div>
          </div>
          <div className="col-lg-12">
            <p>
            We use cookies and other tracking technologies on our Service. Cookies are small data files that are stored on your device when you visit a website. You can configure your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you refuse cookies, you may not be able to use some portions of our Service.
            </p>
          </div>
        </div>
        {/* 5 */}
        <div className="row mb-5">
          <div className="col-lg-12">
            <h1>5. Data Security</h1>
            <div className="line"></div>
          </div>
          <div className="col-lg-12">
            <p>
            We take reasonable steps to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no internet transmission or electronic storage method is 100% secure. Therefore, we cannot guarantee the absolute security of your information.
            </p>
          </div>
        </div>
        {/* 6 */}
        <div className="row mb-5">
          <div className="col-lg-12">
            <h1>6. Children’s Privacy</h1>
            <div className="line"></div>
          </div>
          <div className="col-lg-12">
            <p>
            Our Service is not directed to children under the age of 18. We do not knowingly collect personal information from children under 18. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us. If we become aware that we have collected personal information from a child under 18, we will take steps to remove that information from our servers.
            </p>
          </div>
        </div>
        {/* 7 */}
        <div className="row mb-5">
          <div className="col-lg-12">
            <h1>7. Your Rights</h1>
            <div className="line"></div>
          </div>
          <div className="col-lg-12">
            <p>
            You have certain rights with respect to your personal information. These rights may vary depending on the laws of your jurisdiction. Here are some examples of your rights:
            </p>
            <li>❒ The right to access your personal information</li>
            <li>❒ The right to rectify inaccurate personal information</li>
            <li>❒ The right to object to the processing of your personal information</li>
            <li>❒ The right to withdraw your consent to the processing of your personal information</li>
          </div>
        </div>
        {/* 8 */}
        <div className="row mb-5">
          <div className="col-lg-12">
            <h1>8. Changes to This Privacy Policy</h1>
            <div className="line"></div>
          </div>
          <div className="col-lg-12">
            <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our Service. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </div>
        </div>
        {/* 9 */}
        <div className="row mb-5">
          <div className="col-lg-12">
            <h1>9. Contact Us</h1>
            <div className="line"></div>
          </div>
          <div className="col-lg-12">
            <p>
            If you have any questions about these Terms and Conditions, please contact us at: 415, R.K.World Tower, Nr Sheetal Park Chowk, 150 Ft Ring Road, Rajkot, Gujarat 360006. INDIA. Email: info@trinityengitech.com
            </p>
          </div>
        </div>
        <Counter/>
      </div>
      <Footer/>
    </div>
  );
}

export default Policy;
