// css
import "../assets/css/Counter.css";

import { useEffect } from "react";

// counter images 
import i1 from '../assets/images/i1.png'
import i2 from '../assets/images/i2.png'
import i3 from '../assets/images/i3.png'
import i4 from '../assets/images/i4.png'
import i5 from '../assets/images/i5.png'

function Counter() {
  useEffect(() => {
    function counter(id, start, end, duration) {
      let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration / range)),
        timer = setInterval(() => {
          current += increment;
          if (obj) obj.textContent = current; // Check if obj exists
          if (current === end) {
            clearInterval(timer);
          }
        }, step);
    }

    // Call the counter function after the component is mounted
    counter("count1", 1, 25, 4000);
    counter("count2", 3, 100, 4000);
    counter("count3", 3, 500, 4000);
    counter("count4", 3, 500, 4000);
    counter("count5", -100, 0, 4000);
  }, []); // Empty array to run this effect only once on mount

  return (
    <div>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
        rel="stylesheet"
      />

<section className="counter-wrapper">
  <div className="counter-inner">
    <div className="container-fluid">
      <div className="row g-3 justify-content-center">
        {/* Counter Item */}
        <div className="col-md-4 col-lg-2 col-sm-6 text-center counter-item">
          <div>
            <img src={i1} alt="Experience" width="40px" className="mt-3" />
          </div>
          <div className="py-2 count">
            <span>25</span>+
          </div>
          <div>Years Experiences</div>
        </div>
        
        {/* Counter Item */}
        <div className="col-md-4 col-lg-2 col-sm-6 text-center counter-item">
          <div>
            <img src={i2} alt="Staff" width="40px" className="mt-3" />
          </div>
          <div className="py-2 count">
            <span>100</span>+
          </div>
          <div>Trained Staff</div>
        </div>
        
        {/* Counter Item */}
        <div className="col-md-4 col-lg-2 col-sm-6 text-center counter-item">
          <div>
            <img src={i3} alt="Projects" width="40px" className="mt-3" />
          </div>
          <div className="py-2 count">
            <span>500</span>+
          </div>
          <div>Complete Projects</div>
        </div>
        
        {/* Counter Item */}
        <div className="col-md-4 col-lg-2 col-sm-6 text-center counter-item">
          <div>
            <img src={i4} alt="Satisfaction" width="40px" className="mt-3" />
          </div>
          <div className="py-2 count">
            <span>500</span>+
          </div>
          <div>Client Satisfaction</div>
        </div>
        
        {/* Counter Item */}
        <div className="col-md-4 col-lg-2 col-sm-6 text-center counter-item">
          <div>
            <img src={i5} alt="Accident" width="40px" className="mt-3" />
          </div>
          <div className="py-2 count">
            <span>0</span>
          </div>
          <div>Road Accident</div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  );
}

export default Counter;
