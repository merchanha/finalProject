import {useState} from 'react'
import Axios from "axios";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import {Registro} from './Registro';

import "./registro.css"


function Login(){

  
    const[user, setuser]= useState("")
    const[password, setPassword] = useState("");

    const login =()=>{
    
        Axios.post("http://localhost:3001/Login", { 


            user: user,
            password: password,

        }).then((response)=>{
            console.log(response)   
        });

        
    };



    return (
        <div className="main">
             <form class="formulario">
    
    <h1>Login</h1>
     <div class="contenedor">
     
     
         
         <div class="input-contenedor">
        
         <input id="input" type="text" placeholder="Correo Electronico" onChange={(e)=>{
             setuser(e.target.value);
             
             }}/>
         
         </div>
         
         <div class="input-contenedor">
   
         <input id="input" type="password" placeholder="Contraseña"  onChange={(e)=>{
             setPassword(e.target.value);
             
             }}/>
         
         </div>
         <input type="submit" value="Login" class="button" onClick={login}/>
         <p>Al registrarte, aceptas nuestras Condiciones de uso y Política de privacidad.</p>
         <p>¿No tienes una cuenta? <Link className="btnd" to = "/Registro">Registrate</Link></p>
     </div>
    </form>
    
            
        </div>

      
    )




}

export default Login
