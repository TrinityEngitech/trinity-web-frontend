import { useState } from "react";
import axios from 'axios';

// css
import "../assets/css/HeroSection.css";
import "../assets/css/Heading.css";
import "../assets/css/Services.css";
import '../assets/css/Contact.css'

// icon
import { RiArrowRightWideFill } from "react-icons/ri";
import { MdMyLocation } from "react-icons/md";
import { PiPhoneCallFill } from "react-icons/pi";
import { SiGmail } from "react-icons/si";

// toast 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// page
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import Counter from "../Component/Counter.jsx";

const initial = {
  name: '',
  email: '',
  number: '',
  message: ''
};

function Contact() {
  const [formData, setFormData] = useState(initial);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validation function
  const validate = () => {
    let tempErrors = {};
    let isValid = true;

    // Name Validation: Should not contain numbers
    if (!formData.name.trim()) {
      tempErrors.name = "Name is required.";
      isValid = false;
    } else if (/\d/.test(formData.name)) {
      tempErrors.name = "Name should not contain numbers.";
      isValid = false;
    }

    // Email Validation: Must include @gmail.com
    if (!formData.email) {
      tempErrors.email = "Email is required.";
      isValid = false;
    } else if (!/\S+@gmail\.com$/.test(formData.email)) {
      tempErrors.email = "Email must be a valid @gmail.com address.";
      isValid = false;
    }

    // Number Validation: Should be exactly 10 digits and contain no letters
    if (!formData.number.trim()) {
      tempErrors.number = "Mobile number is required.";
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.number)) {
      tempErrors.number = "Mobile number must be exactly 10 digits.";
      isValid = false;
    }

    // Message Validation: Required field
    if (!formData.message.trim()) {
      tempErrors.message = "Message is required.";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handlesubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      setIsSubmitting(true); 
      axios.post('http://localhost:9000/contact', formData)
        .then((response) => {
          console.log('Response:', response.data);
          setFormData(initial);
          toast.success('Thanks! We’ll respond soon.', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        })
        .catch((error) => {
          console.error('Error:', error);
        }).finally(() => {
          setIsSubmitting(false); // Stop loader
        });
    } else {
      toast.error('Please correct the errors before submitting.', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div>
      <Header />
      <div className="container-fulid">
        <div className="row">
          <div className="col-lg-12">
            <ToastContainer
              position="top-center"
              autoClose={1500}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
            <div className="hero_bg mt-3 shadow p-3 mb-5"></div>
            <center>
              <div className="hero_container shadow-sm p-3 mb-5 rounded">
                <h6>
                  HOME <RiArrowRightWideFill /> CONTACT US
                </h6>
                <h1>Contact Us</h1>
              </div>
            </center>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row" data-aos="fade-up">
          <div className="heading col-lg-12">
            <h1>
              Get in Touch, <br /> We're Here to Help
            </h1>
            <div className="line"></div>
          </div>
        </div>

        <div className="row mb-5" data-aos="fade-up" id="contact">
          <div className="col-lg-4 text-center border p-3">
            <i className="fs-2">
              <MdMyLocation />
            </i>
            <h5 className="fw-bold mt-3">OUR OFFICE</h5>
            <p className="w-75 m-auto">
              417, R.K. World Tower, Nr Sheetal Park Chowk, 150 ft Ring Road,
              Rajkot, Gujarat 360006. INDIA.
            </p>
          </div>
          <div className="col-lg-4 text-center border p-3">
            <i className="fs-2">
              <PiPhoneCallFill />
            </i>
            <h5 className="fw-bold mt-3">PHONE</h5>
            <p>+91 8866299399 <br /> +91 9714299399</p>
          </div>
          <div className="col-lg-4 text-center border p-3">
            <i className="fs-2">
              <SiGmail />
            </i>
            <h5 className="fw-bold mt-3">MAIL</h5>
            <p>info@trinityengitech.com</p>
          </div>
        </div>

        <div className="row" data-aos="fade-up">
          <div className="col-lg-6">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118110.48923438566!2d70.61489189726564!3d22.317625200000016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959cbc438eaeecd%3A0xe26a0863e7b29ea8!2sTRINITY%20ENGI%20TECH!5e0!3m2!1sen!2sin!4v1744348535767!5m2!1sen!2sin"  allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              id="iframe"
              class="img-fluid"/>
          </div>
          <div className="col-lg-6">
            <form onSubmit={handlesubmit}>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  name="name"
                  className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                  id="floatingInput"
                  placeholder="name@example.com"
                  value={formData.name}
                  onChange={handleChange}
                />
                <label htmlFor="floatingInput">Full Name</label>
                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  name="email"
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  id="floatingInput"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
                <label htmlFor="floatingInput">Email</label>
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className={`form-control ${errors.number ? 'is-invalid' : ''}`}
                  id="floatingInput"
                  name="number"
                  placeholder="name@example.com"
                  value={formData.number}
                  onChange={handleChange}
                />
                <label htmlFor="floatingInput">Mobile No</label>
                {errors.number && <div className="invalid-feedback">{errors.number}</div>}
              </div>
              <div className="form-floating">
                <textarea
                  className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                  placeholder="Leave a comment here"
                  id="floatingTextarea2"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  style={{ height: "150px" }}
                ></textarea>
                <label htmlFor="floatingTextarea2">Your Message</label>
                {errors.message && <div className="invalid-feedback">{errors.message}</div>}
              </div>
             <div  >
             <button type="submit" className="btn mt-4 w-100 m-auto" id="con-btn" disabled={isSubmitting}> {isSubmitting ? (
      <span>
        <i className="fa fa-spinner fa-spin me-2"></i>Submitting...
      </span>
    ) : (
      "Submit"
    )}</button>
             </div>
            </form>
          </div>
        </div>
        <Counter />
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
