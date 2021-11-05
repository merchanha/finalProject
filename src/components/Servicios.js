import React from 'react'
import { Box, Grid } from '@material-ui/core'
import "./servicios.css"
import 'bootstrap/dist/css/bootstrap.min.css';

import figura1 from "../media/login.jpg"

function Servicios() {
    return (

        <div>

            <div class="container1">

                <h2>Nuestros Servicios</h2>
                <br/>
                <div class="card-group vgr-cards">
                    <div class="card">
                        <div class="card-img-body">
                            <img class="card-img" src={figura1}  alt="Card image cap" />
                        </div>
                        <div class="card-body">
                            <h4 class="card-title">Card title</h4>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little
                                bit longer.</p>
                           
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-img-body">
                            <img class="card-img" src={figura1} alt="Card image cap" /></div>
                        <div class="card-body">
                            <h4 class="card-title">Card title</h4>
                            <p class="card-text">This card has supporting text below as a natural lead-in to additional content. This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. This card has supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btn btn-outline-primary">Ver Productos</a>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-img-body">
                            <img class="card-img" src={figura1} alt="Card image cap" /></div>
                        <div class="card-body">
                            <h4 class="card-title">Card title</h4>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action. This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.</p>
                           
                        </div>
                    </div>
                </div>
            </div>




        </div>

    )



}

export default Servicios
