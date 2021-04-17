import React, { useEffect } from "react";
import navWave from "./../Navbar/wave.svg";
import navLoggedIn from "./../Navbar/navLoggedIn.svg";
import navLoggedOut from "./../Navbar/navLoggedOut.svg";
import "./Navbar.css";

const Navbar = ({ loggedIn }) => {
  useEffect(() => {
    const elImgTop = document.querySelector(".image-top");
    const elImgBottom = document.querySelector(".image-bottom");

    if (loggedIn) {
      elImgTop.classList.add("hidden");
      elImgBottom.classList.remove("hidden");
    } else {
      elImgTop.classList.remove("hidden");
      elImgBottom.classList.add("hidden");
    }
  });

  return (
    <div className="navbar-container">
      <img className="nav-wave" src={navWave} alt="" />
      <div className="nav-row-container">
        <p className="nav-head-text">TASKER</p>
        <div className="nav-image-container" data-aos="flip-left">
          <img className="nav-icon image-top" src={navLoggedOut} alt="" />
          <img
            className="nav-icon image-bottom hidden"
            src={navLoggedIn}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
