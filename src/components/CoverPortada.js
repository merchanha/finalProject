import React from 'react'
import instalacionPortada from "../media/InstalacionPortada.jpg"
import planos from "../media/planos.jpg"
import producto from "../media/producto.jpg"
import "./coverPortada.css"


function CoverPortada() {
    return (
        <div className="container-fluid">



            <h2>Nuestros Servicios</h2>

            <div class="row row-cols-1 row-cols-md-3 g-3 p-3">
                <div class="col">
                    <div class="card1 h-100">
                        <img src={planos} class="card1-img-top" alt="..." />
                        <div class="card1-body">
                            <h5 class="card1-title">Diseño</h5>
                            <p class="card1-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <div class="card1-footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card1 h-100">
                        <img src={producto}  class="card1-img-top " alt="..." />
                        <div class="card1-body">
                            <h5 class="card1-title">Fabricacion</h5>
                            <p class="card1-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        </div>
                        <div class="card1-footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card1 h-100">
                        <img src={instalacionPortada} class="card1-img-top" alt="..." />
                        <div class="card1-body">
                            <h5 class="card1-title">Instalacion</h5>
                            <p class="card1-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                        </div>
                        <div class="card1-footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default CoverPortada
