import React from "react";
import { BsArrowRight } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

// import image
import admin from "../../assets/images/admin.svg";
import digital from "../../assets/images/digital.svg";

AOS.init({
  duration: 800,
  once: true,
});

const CardComp = () => {
  return (
    <>
      <div className="cards-wrapper">
        <div
          className="card-main"
          data-aos={"fade-up"}
          data-aos-easing={"linear"}
          data-aos-duration={"1000"}
        >
          <div className="title">
            <h2>Diagnostic plug</h2>
            <div className="line"></div>
          </div>

          <div className="image">
            <img src={admin} alt="digital" />
          </div>

          <div className="subtitle">
            <h3>
              The diagnostic plug <br /> for your assembly system
            </h3>
            <div className="line"></div>
            <h4>
              Discover now how you can use Lean Effieciency Adding
              Digitalization to improve your asset efficiency, reduce costs and
              secure liquidity. secure.
            </h4>
          </div>

          <div className="btn-wrapper">
            <div className="btn">
              More info <BsArrowRight className="icon" />
            </div>
            <div className="btn">
              Test now <BsArrowRight className="icon" />
            </div>
          </div>
        </div>

        <div
          className="card-main"
          data-aos={"fade-up"}
          data-aos-easing={"linear"}
          data-aos-duration={"1000"}
        >
          <div className="title">
            <h2>Die digitale Serviceabteilung</h2>
            <div className="line"></div>
          </div>

          <div className="image">
            <img src={digital} alt="digital" />
          </div>

          <div className="subtitle">
            <h3>Planung von Wartungen durch Hersteller für Betreiber</h3>
            <div className="line"></div>
            <h4>
              Transformieren Sie Ihre Service Abteilung zu einer lukrativen
              Business-Unit: Stellen Sie sicher, dass Verschleißteile
              rechtzeitig ausgetauscht werden und der gesamte Bestellprozess von
              Ersatzteilen schlank und automatisiert abläuft.
            </h4>
          </div>

          <div className="btn-wrapper">
            <div className="btn">
              More info <BsArrowRight className="icon" />
            </div>
            <div className="btn">
              Test now <BsArrowRight className="icon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardComp;
