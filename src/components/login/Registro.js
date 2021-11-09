import {useState} from 'react'
import Axios from "axios";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import "./registro.css"




function Registro() {

    const[nameReq, setNameReq] = useState("");
    const[userReq, setuserReq]= useState("")
    const[passwordReq, setPasswordReq] = useState("");

    const register =()=>{

     

        const header = {
            "Content-Type": "application/json"
        }


        Axios.post("http://localhost:3001/user", {
            name: nameReq,
            user: userReq,
            password: passwordReq,

        }).then((response)=>{
            console.log(response)   
        });



        
    };



    return (
        <div className ="main">

<form class="formulario">
    
    <h1>Registrate</h1>
     <div class="contenedor">
     
     <div class="input-contenedor">
      
         <input type="text" placeholder="Nombre Completo" onChange={(e)=>{
             setNameReq(e.target.value);
             
             }}
             />
         
         </div>
         
         <div class="input-contenedor">
       
         <input type="text" placeholder="Correo Electronico" onChange={(e)=>{
             setuserReq(e.target.value);
             
             }}/>
         
         </div>
         
         <div class="input-contenedor">
      
         <input type="password" placeholder="Contraseña" onChange={(e)=>{
             setPasswordReq(e.target.value);
             
             }}/>
         
         </div>
         <input type="submit" value="Registrate" class="button" onClick={register}/>
         <p>Al registrarte, aceptas nuestras Condiciones de uso y Política de privacidad.</p>
         <p>¿Ya tienes una cuenta?<Link className="btnd" to = "/Login">Iniciar Sesion</Link></p>
     </div>
    </form>
            
        </div>
    )
}

export default Registro
