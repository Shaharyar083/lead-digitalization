import React from "react";
import YouTube from "react-youtube";
import AOS from "aos";
import "aos/dist/aos.css";

// import component
import CardComp from "./CardComp";

// import style
import "./section1.scss";

AOS.init({
  duration: 800,
  once: true,
});

const Section1 = () => {
  const opts = {
    playerVars: {
      autoplay: 1,
    },
  };

  function _onReady(event) {
    event.target.pauseVideo();
  }
  return (
    <>
      <div className="section1">
        <div className="youtube-main">
          <div
            className="youtube-inner"
            data-aos={"fade-up"}
            data-aos-easing={"linear"}
            data-aos-duration={"1000"}
          >
            <YouTube
              videoId="l2veETa-oek"
              className="youtube"
              opts={opts}
              onReady={_onReady}
            />
          </div>
        </div>

        <div className="highlights-section" id="product">
          <div
            className="text-div"
            data-aos={"fade-up"}
            data-aos-easing={"linear"}
            data-aos-duration={"1000"}
          >
            <div className="product-header">
              <h1>Highlights</h1>
            </div>
            <h2>
              Our solutions for the digital transformation
              <br /> of your business processes
            </h2>
          </div>

          <CardComp />
        </div>
      </div>
    </>
  );
};

export default Section1;
