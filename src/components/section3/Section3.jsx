import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BsPlus } from "react-icons/bs";

// import image
import admin from "../../assets/images/admin.svg";

// import style
import "./section3.scss";

AOS.init({
  duration: 800,
  once: true,
});

const Section3 = () => {
  const [show, setShow] = useState(1);

  const handleClick = (e) => {
    if (e === 1) {
      setShow(1);
    } else if (e === 2) {
      setShow(2);
    } else if (e === 3) {
      setShow(3);
    }
  };

  return (
    <>
      <div className="section3" id="service">
        <div className="inner">
          <div
            className="content"
            data-aos={"fade-up"}
            data-aos-easing={"linear"}
            data-aos-duration={"1000"}
          >
            <div className="product-header">
              <h1>Services</h1>
            </div>

            <h2>
              Smart services for <br />
              your Smart Factory
            </h2>

            <h3>
              Trust and reliability are the basis of every business
              relationship. That's why we are always there for you if you have
              questions or need support. With numerous professional Services, we
              accompany your journey of digital transformation - from pilot
              project to roll-out to permanent optimization.
            </h3>
          </div>

          <div
            className="accordion"
            data-aos={"fade-up"}
            data-aos-easing={"linear"}
            data-aos-duration={"1000"}
          >
            <div
              className={show === 1 ? "dis" : "open"}
              onClick={() => {
                handleClick(1);
              }}
            >
              <div className="text">Digital transformation</div>
              <BsPlus size={30} color="#4156f5" />
            </div>

            <div className={show === 1 ? "show" : "dis"}>
              <div className="d-1">
                <h1>Digital transformation</h1>
                <div className="line"></div>

                <h2>
                  Through LEAD, empirical data-based decisions can be made. This
                  can significantly improve the organizational structure of the
                  company: Reduced intervention times, team meetings at monitors
                  in the shopfloor, control and evaluation of actions, digital
                  documentation ...
                </h2>
              </div>

              <div className="d-2">
                <h1>Your advantage</h1>
                <div className="line"></div>

                <h2>
                  With fully LEAD-transformed production, the focus is on value
                  creation, putting people at the center and establishing a new
                  inclusive infrastructure.
                </h2>
              </div>

              <div className="image">
                <img src={admin} alt="admin" />
              </div>
            </div>

            <div
              className={show === 2 ? "dis" : "open"}
              onClick={() => {
                handleClick(2);
              }}
            >
              <div className="text">Implementation</div>
              <BsPlus size={30} color="#4156f5" />
            </div>

            <div className={show === 2 ? "show" : "dis"}>
              <div className="d-1">
                <h1>Implementation</h1>
                <div className="line"></div>

                <h2>
                  We believe that pragmatic solutions and integration at a pace
                  that suits you are the key to success in digital
                  transformation. Our lean software is easy to integrate, easy
                  to use, but can easily grow and scale with your needs.
                </h2>
              </div>

              <div className="d-2">
                <h1>Your advantage</h1>
                <div className="line"></div>

                <h2>
                  - Integration of heterogeneous machines
                  <br />
                  - Support of all commercially usual controls
                  <br />
                  - Minimal time and resources required
                  <br />- Retrofitting for existing machines
                </h2>
              </div>

              <div className="image">
                <img src={admin} alt="admin" />
              </div>
            </div>

            <div
              className={show === 3 ? "dis" : "open"}
              onClick={() => {
                handleClick(3);
              }}
            >
              <div className="text">Training and coaching</div>
              <BsPlus size={30} color="#4156f5" />
            </div>

            <div className={show === 3 ? "show" : "dis"}>
              <div className="d-1">
                <h1>Training and coaching</h1>
                <div className="line"></div>

                <h2>
                  Even the best digital transformation only works if all users
                  along the value chain are involved in the change process. We
                  accompany you not only with initial training, but also support
                  you in follow-up meetings to design digital processes and
                  define parameters for continuous improvement.
                </h2>
              </div>

              <div className="d-2">
                <h1>Your advantage</h1>
                <div className="line"></div>

                <h2>
                  - Benefit from our I4.0 experience
                  <br />
                  - Intimate training on the software
                  <br />- Teach-in of first digital processes
                </h2>
              </div>

              <div className="image">
                <img src={admin} alt="admin" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section3;
