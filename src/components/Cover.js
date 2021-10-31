import React from "react";
import bootstrap from 'bootstrap'
import coverVideo from "../media/cover.mp4"
import "./cover.css"
import Navegacion from "./Navegacion";




function Cover() {
    return (
        <div className="cover-container">
            <Navegacion/>



            <video className="video" src={coverVideo} autoPlay loop muted></video>

            
        </div>
    )
}

export default Cover


