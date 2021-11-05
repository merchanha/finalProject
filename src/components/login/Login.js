import React from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import {Registro} from './Registro';

import "./registro.css"







function Login() {
    return (
        <div className="main">
             <form class="formulario">
    
    <h1>Login</h1>
     <div class="contenedor">
     
     
         
         <div class="input-contenedor">
         <i class="fas fa-envelope icon"></i>
         <input type="text" placeholder="Correo Electronico"/>
         
         </div>
         
         <div class="input-contenedor">
        <i class="fas fa-key icon"></i>
         <input type="password" placeholder="Contraseña"/>
         
         </div>
         <input type="submit" value="Login" class="button"/>
         <p>Al registrarte, aceptas nuestras Condiciones de uso y Política de privacidad.</p>
         <p>¿No tienes una cuenta? <Link className="btnd" to = "/Registro">Registrate</Link></p>
     </div>
    </form>
    
            
        </div>

      
    )
}

export default Login
