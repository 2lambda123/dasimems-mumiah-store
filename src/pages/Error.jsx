import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";
import PageNotFoundErr from "../assets/lotties/404.json"
import "../assets/styles/error/error.css";
import {Link} from "react-router-dom";

function Error(props) {
  return (
    <div className="page-error">

      <Player 
        src={PageNotFoundErr}
        autoplay
        loop
        className="page-error-anim"
      
      />
      <h1 className="error-title">Page Not Found!</h1>
      <Link to="/" className="error-link">Back to home</Link>
    </div>
  );
}

export default Error;
