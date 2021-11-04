import React from 'react'
import bootstrap from 'bootstrap'
import "./sobreNosotros.css"
import fabrica from "../media/fabricaAbout.jpg"
import imagen1 from "../media/instalacion.jpg"

import 'bootstrap/dist/css/bootstrap.min.css';

function sobreNosotros() {
    return (

        <div>

            <div class="container w-50 m-auto text-center mt-5" id="equipo">
                <h1 class="mb-5 fs-2">Expertos en <span class="text-primary">Diseño y Fabricacion</span>.</h1>
                <p class="fs-4 ">Siempre buscamos las personas adecuadas para que trabajen con nosotros. Si te sientes listo para este reto, te esperamos para que te unas a nosotros.</p>
            </div>

            <div class="mt-5 text-center">
                <img id="img-equipo" src={imagen1} alt="equipo" />
            </div>

            <div id="local" class="border-top border-2">
                <div class="mapa">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d21053.019311913446!2d-58.41566776450989!3d-34.60729449216318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1smapa!5e0!3m2!1ses!2sar!4v1636033576601!5m2!1ses!2sar" width="100%" height="450" allowfullscreen="" loading="lazy"></iframe>

                </div>
                <div>
                    <div class="wrapper-local">
                        <h2 class=" d-flex justify-content-center">Ubicados en Buenos Aires</h2>
                        <h2 class="text-primary mb-4" id="typewriter"></h2>
                        <p class="fs-7 text-body">Elijimos Miami para nuestra oficina con el objetivo de estar cerca a nuestros clientes. Estamos ubicados en Brickell, el corazon y el centro financiero de Miami, cerca de los mejores restaurantes, tiendas y tan solo 15 minutos de las playas. ¡Visitennos y no se arrepentiran!</p>
                        <section class="d-flex justify-content-center" id="numeros-local">
                            <div>
                                <p class="text-primary fs-5">248</p>
                                <p>Diseño</p>
                            </div>
                            <div>
                                <p class="text-primary fs-5">300</p>
                                <p>Fabricacion</p>
                            </div>
                            <div>
                                <p class="text-primary fs-5">187</p>
                                <p>Instalacion</p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>








        </div>





    )
}

export default sobreNosotros
