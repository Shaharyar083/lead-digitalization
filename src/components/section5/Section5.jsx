import React from "react";
import { AiFillStar } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";

// import image
import admin from "../../assets/images/admin.svg";

// import style
import "./section5.scss";

AOS.init({
  duration: 800,
  once: true,
});

const Section5 = () => {
  return (
    <>
      <div className="section5">
        <div className="inner">
          <div
            className="cards-wrapper"
            data-aos={"fade-up"}
            data-aos-easing={"linear"}
            data-aos-duration={"1000"}
          >
            <div className="card-main">
              <div className="title">
                <h2>Cloud App</h2>
                <div className="line"></div>
              </div>

              <div className="image">
                <img src={admin} alt="digital" />
              </div>

              <div className="subtitle">
                <div className="para">
                  <div className="circle">
                    <AiFillStar size={30} color="white" />
                  </div>
                  <h4>IT security in your hands</h4>
                </div>

                <div className="para">
                  <div className="circle">
                    <AiFillStar size={30} color="white" />
                  </div>
                  <h4>Your server - you decide about your data</h4>
                </div>

                <div className="para">
                  <div className="circle">
                    <AiFillStar size={30} color="white" />
                  </div>
                  <h4>
                    Fast integration without major involvement of local IT
                  </h4>
                </div>
              </div>
            </div>
          </div>

          <div
            className="content"
            data-aos={"fade-up"}
            data-aos-easing={"linear"}
            data-aos-duration={"1000"}
          >
            <div className="text-div">
              <div className="product-header">
                <h1>
                  Online & Offline <br />
                  Integration
                </h1>
              </div>
              <h3>
                System constellations <br />
                Cloud App vs. On-Premise
              </h3>
              <p>
                Depending on your wishes, we provide LEAD in different variants
                for you. Either the web application is hosted in the cloud and
                your data from any location and machine is consolidated here, or
                you use a local server in your own network to be master of your
                data yourself. In any case, you can access your LEAD system from
                any device (tablet, PC, ...) within the network simply via a
                link in the Internet browser.
              </p>

              <div className="product-header-2">
                <h3>
                  On customer request also own cloud <br />
                  instance for maximum security.
                </h3>
              </div>
            </div>

            <div className="btn">
              <div className="btn-oem">Cloud App</div>

              <div className="btn-pro">On-Premise</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section5;
