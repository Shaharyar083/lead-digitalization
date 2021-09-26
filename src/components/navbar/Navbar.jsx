import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

// import image
import logo from "../../assets/images/logo.svg";

// import style
import "./navbar.scss";

const Navbar = () => {
  const [english, setEnglish] = useState(true);
  const [german, setGerman] = useState(false);

  const handleGerman = () => {
    setGerman(true);
    setEnglish(false);
  };

  const handleEnglish = () => {
    setEnglish(true);
    setGerman(false);
  };

  return (
    <>
      <div className="navbar">
        <div>
          <img src={logo} alt="logo here" />
        </div>

        <div className="links">
          <a href="#product">Products</a>
          <a href="#benefit">Benefits</a>
          <a href="#service">Services</a>
          <a href="#story">Stories</a>
          <Link to="/login">Contact</Link>
        </div>

        <div className="login-div">
          <div className="language">
            <span className={german ? "light" : "dark"} onClick={handleGerman}>
              German
            </span>
            <span className="bar">|</span>
            <span
              className={english ? "light" : "dark"}
              onClick={handleEnglish}
            >
              English
            </span>
          </div>

          <div className="login">
            <Link to="/login">Login</Link>
          </div>
        </div>

        <div className="hamburger">
          <GiHamburgerMenu color="white" size={30} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
