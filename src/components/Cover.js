import React from "react";
import bootstrap from 'bootstrap'


import coverVideo from "../media/portada2.mp4"
import "./cover.css"
import Navegacion from "./Navegacion";





function Cover() {
    return (
        <div className="cover-container">
            <Navegacion/>
            <video className="video" src={coverVideo} autoPlay loop muted></video>

            <h1>Furniture Style</h1>
            <p>Diseño | Instalacion | Fabricacion </p>

          
            </div>



       
   

        


    )
}

export default Cover


