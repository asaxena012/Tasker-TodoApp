import React from "react";
import "./LoginBlob.css";
import blob from "./blob.svg";
import googleIcon from "./google-icon.svg";

const LoginBlob = ({ signInWithGoogle }) => {
  return (
    <div className="loginBlob-container">
      <img className="blob" src={blob} alt="" />

      <img
        onClick={signInWithGoogle}
        className="google-icon"
        src={googleIcon}
        alt=""
      />
    </div>
  );
};

export default LoginBlob;
