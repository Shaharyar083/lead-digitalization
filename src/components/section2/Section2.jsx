import React from "react";
import { BsArrowRight } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

// Import component
import ProfitComp from "./ProfitComp";

// import images
import code from "../../assets/images/code.png";
import de from "../../assets/images/de.png";
import isw from "../../assets/images/isw.png";
import pack from "../../assets/images/pack.png";

// import style
import "./section2.scss";

AOS.init({
  duration: 800,
  once: true,
});

const Section2 = () => {
  return (
    <>
      <div className="section2" id="benefit">
        <div
          className="text-div"
          data-aos={"fade-up"}
          data-aos-easing={"linear"}
          data-aos-duration={"1000"}
        >
          <div className="product-header">
            <h1>Benefits</h1>
          </div>
          <h2>
            Stay competitive through <br />a digital transformation
          </h2>
          <p>
            LEAD supports companies with turnkey IT solutions to master the
            challenges of digital transformation in the long term by reducing
            costs, increasing efficiency, and enhancing competitiveness - and
            thus the overall value of the company.
          </p>
        </div>

        <div
          className="btn"
          data-aos={"fade-up"}
          data-aos-easing={"linear"}
          data-aos-duration={"1000"}
        >
          <div className="btn-oem">OEM</div>

          <div className="btn-pro">Producer</div>
        </div>

        <div
          className="profit-section"
          data-aos={"fade-up"}
          data-aos-easing={"linear"}
          data-aos-duration={"1000"}
        >
          <ProfitComp />
        </div>
      </div>

      <div className="section2-more">
        <div
          className="feature-div"
          data-aos={"fade-up"}
          data-aos-easing={"linear"}
          data-aos-duration={"1000"}
        >
          <div className="title">Featured</div>

          <div className="brand">
            <div className="center">
              <img src={code} alt="code" />
            </div>

            <div className="center">
              <img src={de} alt="code" />
            </div>

            <div className="center">
              <img src={isw} alt="code" />
            </div>

            <div className="center">
              <img src={pack} alt="code" />
            </div>
          </div>
        </div>

        <div
          className="future-div"
          data-aos={"fade-up"}
          data-aos-easing={"linear"}
          data-aos-duration={"1000"}
        >
          <h1>Future? Now!</h1>
          <h3>Already more than</h3>
          <h2>1600023576</h2>
          <h3>parts are produced annually & worldwide with LEAD.</h3>
          <div className="btn">
            Request demo <BsArrowRight className="icon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2;
