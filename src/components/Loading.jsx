import React from "react";
import "../assets/styles/loader/loader.css"
import { Player } from "@lottiefiles/react-lottie-player";
import Loader from "../assets/lotties/loader.json"

const Loading = () => {

    return(

        <>

            <section className="loader-container inner-loader">
                <Player
                  src={Loader}
                  className="loader-animation"
                  autoplay
                  loop
                />
            </section>
        
        </>

    )

}

export default Loading