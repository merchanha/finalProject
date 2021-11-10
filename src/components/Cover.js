import React from "react";
import bootstrap from 'bootstrap'


import coverVideo from "../media/portada2.mp4"
import "./cover.css"






function Cover() {
    return (
        <div className="container-fluid cover-container">
            
            <video className="video" src={coverVideo} autoPlay loop muted></video>
            
            <h1>Piccolo Wood</h1>
            <p>Diseño | Fabricacion | Instalacion </p>

          
        </div>



       
   

        


    )
}

export default Cover


