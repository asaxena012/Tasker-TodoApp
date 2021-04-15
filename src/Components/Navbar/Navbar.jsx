import React from "react";
import navWave from "./../Navbar/wave.svg";
import navLoggedIn from "./../Navbar/navLoggedIn.svg";
import navLoggedOut from "./../Navbar/navLoggedOut.svg";
import "./Navbar.css";

const Navbar = ({ loggedIn }) => {
  return (
    <div className="navbar-container">
      <img className="nav-wave" src={navWave} alt="" />
      <div className="nav-row-container">
        <p className="nav-head-text">TASKER</p>
        <img
          className="nav-icon"
          src={loggedIn ? navLoggedIn : navLoggedOut}
          alt=""
        />
      </div>
    </div>
  );
};

export default Navbar;
