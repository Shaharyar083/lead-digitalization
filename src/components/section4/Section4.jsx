import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import AOS from "aos";
import "aos/dist/aos.css";

// import image
import pro from "../../assets/images/pro.png";
import cont from "../../assets/images/cont.png";
import pack from "../../assets/images/pack.png";

// import style
import "./section4.scss";

AOS.init({
  duration: 800,
  once: true,
});

const Show = (props) => {
  console.log(props.image);
  return (
    <>
      <div className="carousel-inner">
        <div className="image">
          <img src={props.image} alt="" />
        </div>
        <div className="line"></div>

        <div className="text">{props.msg}</div>
      </div>
    </>
  );
};

const Section4 = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
      partialVisibilityGutter: 50,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      // partialVisibilityGutter: 100,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      //   partialVisibilityGutter: 10,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <div className="section4" id="story">
        <div className="inner">
          <div
            className="content"
            data-aos={"fade-up"}
            data-aos-easing={"linear"}
            data-aos-duration={"1000"}
          >
            <div className="product-header">
              <h1>Voices of partners</h1>
            </div>

            <h2>
              We are a young team full of drive
              <br /> that offers pragmatic and turnkey solutions
              <br /> in the jungle of Industry 4.0.
            </h2>

            <h3>What our partners say:</h3>
          </div>

          <div
            className="carousel"
            data-aos={"fade-up"}
            data-aos-easing={"linear"}
            data-aos-duration={"1000"}
          >
            <Carousel
              className="overide"
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              arrows={false}
              showDots={true}
              // partialVisbile={true}
              // centerMode={true}
            >
              <Show
                image={cont}
                msg="Beim Kauf einer Anlage entscheiden immer häufiger die Zusatzleistungen. Mit LEAD als starkem Digitalisierungspartner können wir unsere Kunden zufrieden stellen und uns auf unsere eigentliche Kompetenz konzentrieren: Das Maschinenbauen."
              />
              <Show
                image={pro}
                msg="Wir konnten nicht nur unsere Wirtschaftlichkeit binnen acht Monate um mehr als 10% steigern, auch mein Alltag wurde deutlich einfacher."
              />
              <Show
                image={pack}
                msg="Mit dem Kauf einer Maschine fängt die Arbeit für unsere Kunden erst richtig an. Durch LEAD kann das Einfahren stark reduziert und die Anlage schnell auf Ihre maximale Leistungsfähigkeit gebracht werden."
              />
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section4;
