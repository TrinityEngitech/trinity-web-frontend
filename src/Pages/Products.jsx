// css
import "../assets/css/Heading.css";
import { Link } from "react-router-dom";
// img
import hp1 from "../assets/images/hp1.jpeg";
import hp2 from "../assets/images/hp2.jpeg";
import hp3 from "../assets/images/hp3.jpeg";
import hp4 from "../assets/images/hp4.jpeg";
import hp5 from "../assets/images/hp5.jpeg";
import hp6 from "../assets/images/hp6.jpeg";
import hp7 from "../assets/images/hp7.jpeg";
import hp8 from "../assets/images/hp8.jpeg";
import hp9 from "../assets/images/hp9.jpeg";
import hp10 from "../assets/images/hp10.jpeg";
import hp11 from "../assets/images/hp11.jpeg";
import hp12 from "../assets/images/hp12.jpeg";

function Products() {
  return (
    <div id="discover-product">
      <div className="container">
        <div className="row mb-5" data-aos="fade-up" >
          {/* heading  */}
          <div className="heading col-lg-12" id="products">
            <h6>PRODUCTS</h6>
            <h1>
              Discover our <br /> Feature Products
            </h1>
            <div className="line"></div>
          </div>
          {/* heading  */}
          <div className="col-lg-12 d-flex flex-wrap justify-content-between flex-md-wrap flex-sm-wrap">
            {/* 1 */}
            <div
              className="card text-center"
              style={{ width: "19rem" }}
              id="home-product"
            >
              <img src={hp1} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">LPG / Propane Above Ground Storage Tank</h5>
                <p className="card-text">
                  These tanks are used in commercial as well as agricultural
                  sectors.
                </p>
              </div>
            </div>
            {/* 2 */}
            <div
              className="card text-center"
              style={{ width: "19rem" }}
              id="home-product"
            >
              <img src={hp2} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">LPG / Propane Mounded Storage Tank</h5>
                <p className="card-text">
                  Mounded vessels are little raised above ground level.
                </p>
              </div>
            </div>
            {/* 3  */}
            <div
              className="card text-center"
              style={{ width: "19rem" }}
              id="home-product"
            >
              <img src={hp3} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">LPG Cylinder Filling System</h5>
                <p className="card-text">
                  We Undertake Turnkey Contract For Bulk Installation Of Lpg
                  Bottling Plants For Filling Lpg Cylinders.
                </p>
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
                  All safety aspects have been taken into consideration Semi
                  trailer tanks
                </p>
              </div>
            </div>
            {/* 5  */}
            <div
              className="card text-center"
              style={{ width: "19rem" }}
              id="home-product"
            >
              <img src={hp5} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">LPG Spherical Tank</h5>
                <p className="card-text">
                  The reason why LPG is stored in spherical tank is liquid form
                  gas is to be highly pressurized
                </p>
              </div>
            </div>
            {/* 6 */}
            <div
              className="card text-center"
              style={{ width: "19rem" }}
              id="home-product"
            >
              <img src={hp6} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">LPG Bobtail</h5>
                <p className="card-text">
                  The unit comes with all safety features as per norms. The
                  tanks are provided with unloading pumps for decanting.
                </p>
              </div>
            </div>
            {/* 7 */}
            <div
              className="card text-center"
              style={{ width: "19rem" }}
              id="home-product"
            >
              <img src={hp7} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Turnkey Project</h5>
                <p className="card-text">
                  We Undertake Turnkey Contract For Bulk Installation Of Lpg
                  Bottling Plants For Filling Lpg Cylinders.
                </p>
              </div>
            </div>
            {/* 8 */}
            <div
              className="card text-center"
              style={{ width: "19rem" }}
              id="home-product"
            >
              <img src={hp8} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Carbon Dioxide Storage Tank</h5>
                <p className="card-text">
                  Those in the industrial construction business design the view,
                  optimize workflows, and ensure structural integrity.
                </p>
              </div>
            </div>
            {/* 9 */}
            <div
              className="card text-center"
              style={{ width: "19rem" }}
              id="home-product"
            >
              <img src={hp9} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">LOX - Liquid Oxygen</h5>
                <p className="card-text">
                  We harness our vast resources of worldwide engineers,
                  designers, and experts to create groundbreaking solutions.
                </p>
              </div>
            </div>
            {/* 10  */}
            <div
              className="card text-center"
              style={{ width: "19rem" }}
              id="home-product"
            >
              <img src={hp10} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">LIN - Liquid Nitrogen</h5>
                <p className="card-text">
                  Many rodents and insects can cause allergies and some have
                  poisonous bites or stings.
                </p>
              </div>
            </div>
            {/* 11  */}
            <div
              className="card text-center"
              style={{ width: "19rem" }}
              id="home-product"
            >
              <img src={hp11} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">LAR - Liquid Argon</h5>
                <p className="card-text">
                  Bridge construction typically involves methods using
                  relatively sophisticated engineering techniques and materials.
                </p>
              </div>
            </div>
            {/* 12  */}
            <div
              className="card text-center"
              style={{ width: "19rem" }}
              id="home-product"
            >
              <img src={hp12} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Petroleum Storage Tank</h5>
                <p className="card-text">
                  Working in a hazardous environment, Trinity Engitech has
                  identified key factors for safety and efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
