import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";
import ErrorAnim from "../assets/lotties/unknown_error.json"
import "../assets/styles/error/error.css";
import {AiOutlineReload} from "react-icons/ai"

function Error(props) {

  return (
    <div className="page-error">

      <Player 
        src={ErrorAnim}
        autoplay
        loop
        className="page-error-anim"
      
      />
      <h1 className="error-title normal-title">An unknown Error Occurred!</h1>
      <button className="reload-button" onClick={()=>{
        window.location.reload();

      }}>Reload &nbsp; <AiOutlineReload /></button>
    </div>
  );
}

export default Error;
