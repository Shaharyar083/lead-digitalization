import React from "react";
import { BsArrowRight } from "react-icons/bs";

// import style
import "./footer.scss";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="inner">
          <div className="content">
            <div className="about">
              <h2>Cloud App</h2>
              <div className="line"></div>
              <p>
                LEAD is a young team full of drive <br />
                that offers pragmatic and turnkey solutions
                <br /> in the jungle of Industry 4.0.
              </p>
            </div>

            <div className="useful">
              <h2>Useful links</h2>
              <div className="line"></div>
              <h3>Imprint</h3>
              <h3>Privacy</h3>
            </div>

            <div className="contact">
              <h2>Contact</h2>
              <div className="line"></div>
              <div className="btn">
                Contact form <BsArrowRight className="icon" />
              </div>
            </div>
          </div>

          <div className="brand">© LEAD Digitalisierung GmbH 2021</div>
        </div>
      </div>
    </>
  );
};

export default Footer;
