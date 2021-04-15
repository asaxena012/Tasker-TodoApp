import React from "react";
import "./LoginBlob.css";
import blob from "./blob.svg";
import googleIcon from "./google-icon.svg";

const LoginBlob = () => {
  return (
    <div className="loginBlob-container">
      <img className="blob" src={blob} alt="" />

      <img className="google-icon" src={googleIcon} alt="" />
    </div>
  );
};

export default LoginBlob;
