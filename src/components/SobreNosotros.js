import React from 'react'
import bootstrap from 'bootstrap'
import "./sobreNosotros.css"
import fabrica from "../media/fabricaAbout.jpg"

import 'bootstrap/dist/css/bootstrap.min.css';

function sobreNosotros() {
    return (
        <div class="jumbotron text-center">
            <div id="about" class="container-fluid">
                <div class="row">
                    <div class="col" >
                        <h2>About Company Page</h2>
                        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <button class="btn btn-default btn-lg">Get in Touch</button>

                    </div>

                    <div class="col">
                    <span class="glyphicon glyphicon-globe logo slideanim"><img className="value" src={fabrica}/></span>
                    </div>
                </div>
            </div>

            

            <div class="container-fluid bg-grey">
                <div class="row">
                    <div class="col">
                        <span class="glyphicon glyphicon-globe logo slideanim"><img className="value" src={fabrica}/></span>
                    </div>
                    <div class="col">
                        <h2>Our Values</h2>
                        <h4><strong>MISSION: </strong> Our mission lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4>
                        <p><strong>VISION: </strong> Our vision Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
            </div>

        </div>





    )
}

export default sobreNosotros
