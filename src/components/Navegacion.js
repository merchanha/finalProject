import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';







function Navegacion() {
    return (

        <div>

            <Navbar collapseOnSelect fixed='top' expand='sm' bg='dark' variant='dark'>
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>

                            <Nav.Link href="/">Inicio</Nav.Link>
                            <Nav.Link href="/Sobre">Sobre</Nav.Link>
                            <Nav.Link href="/Servicios">Servicios</Nav.Link>
                            <Nav.Link href="/Contacto">Contactos</Nav.Link>
                            <Nav.Link href="/Login">Login</Nav.Link>
                            <Nav.Link href="/Registro">Registro</Nav.Link>


                        </Nav>

                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text>
                                REDES SOCIALES
                            </Navbar.Text>
                        </Navbar.Collapse>

                    </Navbar.Collapse>



                </Container>






            </Navbar>









        </div>






    )
}

export default Navegacion
