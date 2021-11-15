import { useState } from "react";
 
 import Axios from "axios";
 import { Link, Redirect } from "react-router-dom";
 import "./registro.css";
 
 function Login() {
   const [user, setuser] = useState("");
   const [password, setPassword] = useState("");
   const [redirect, setRedirect] = useState(false);
 
   const goLogin = (e) => {
     e.preventDefault();
 
     Axios.post("http://localhost:3001/Login", {
       user: user,
       password: password,
     })
       .then((response) => {
         if (response.data.error) alert(response.data.error);
         if (response.data.authorized) {
           setRedirect(true);
         }
       })
       .catch((res) => console.log(res));
   };
 
   return (
     <div className="main">
       {/* esta linea es la que hace el redirect */}
       {redirect ? <Redirect to="/profile" /> : ""}
 
       <form className="formulario" onSubmit={goLogin}>
         <h1>Login</h1>
         <div className="contenedor">
           <div className="input-contenedor">
             <input
               id="input"
               type="text"
               placeholder="Correo Electronico"
               onChange={(e) => {
                 setuser(e.target.value);
               }}
             />
           </div>
 
           <div className="input-contenedor">
             <input
               id="input"
               type="password"
               placeholder="Contraseña"
               onChange={(e) => {
                 setPassword(e.target.value);
               }}
             />
           </div>
           <input type="submit" value="Login" className="button" />
           <p>
             Al registrarte, aceptas nuestras Condiciones de uso y Política de
             privacidad.
           </p>
           <p>
             ¿No tienes una cuenta?{" "}
             <Link className="btnd" to="/Registro">
               Registrate
             </Link>
           </p>
         </div>
       </form>
     </div>
   );
 }





/* function Login(){

  
    const[user, setuser]= useState("")
    const[password, setPassword] = useState("");

    const login =()=>{
    
        Axios.post("http://localhost:3001/Login", { 


            user: user,
            password: password,

        }).then((response)=>{
            
            if(response.data.error) alert(response.data.error)
            if(response.data)  <Redirect>{Profile}</Redirect>
            
            
            // alert(`Bienvenido ${user}`)

        
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




} */

export default Login
