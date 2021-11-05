import React from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import "./registro.css"

function Registro() {
    return (
        <div className ="main">

<form class="formulario">
    
    <h1>Registrate</h1>
     <div class="contenedor">
     
     <div class="input-contenedor">
      
         <input type="text" placeholder="Nombre Completo"/>
         
         </div>
         
         <div class="input-contenedor">
       
         <input type="text" placeholder="Correo Electronico"/>
         
         </div>
         
         <div class="input-contenedor">
      
         <input type="password" placeholder="Contraseña"/>
         
         </div>
         <input type="submit" value="Registrate" class="button"/>
         <p>Al registrarte, aceptas nuestras Condiciones de uso y Política de privacidad.</p>
         <p>¿Ya tienes una cuenta?<Link className="btnd" to = "/Login">Iniciar Sesion</Link></p>
     </div>
    </form>
            
        </div>
    )
}

export default Registro
