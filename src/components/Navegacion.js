import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa'
import logo from "../media/logo.png"


function Navegacion() {
    return (

        <div>

            <Navbar collapseOnSelect fixed='top' expand='sm' bg='dark' variant='dark'>
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav"> 
                    
                        <Nav>

                            <Nav.Link href="/"><img className="imagenLogo mx-2" src={logo} alt="img" width="40px" height="auto"></img></Nav.Link>
                            <Nav.Link href="/Sobre">Nosotros</Nav.Link> 
                            <Nav.Link href="/Servicios">Servicios</Nav.Link>
                            <Nav.Link href="/Producto">Productos</Nav.Link>
                            <Nav.Link href="/Login">Login</Nav.Link>
                            <Nav.Link href="/Registro">Registro</Nav.Link>


                        </Nav>

                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text className="d-flex">
                                <Nav.Link href="https://instagram.com/piccolowood.ar?utm_medium=copy_link"><FaInstagram  className="mx-1" size={30}/></Nav.Link>
                                <Nav.Link href=""><FaFacebook className="mx-1" size={30}/></Nav.Link>    
                            </Navbar.Text>
                        </Navbar.Collapse>

                    </Navbar.Collapse>



                </Container>






            </Navbar>









        </div>






    )
}

export default Navegacion
