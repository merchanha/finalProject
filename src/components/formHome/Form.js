import React, {Fragment, useState} from 'react'
import Axios from 'axios';


import './form.css'

function Formulario () {
    const[nombreReq, setNombreReq] = useState("");
    const[apellidoReq, setApellidoReq] = useState("");
    const[telefonoReq, setTelefonoReq] = useState("");
    const[imagenReq, setImagenReq] = useState("");
    const[comentariosReq, setComentariosReq] = useState("");

    const Form = () => {

        Axios.post("http://localhost:3001/Form", {
            nombre: nombreReq,
            apellido: apellidoReq,
            telefono: telefonoReq,
            imagen: imagenReq,
            comentarios: comentariosReq,


        }).then((response)=>{
            console.log(response)   
        });

    };


    return(
        <Fragment>
            <div className="container-fluid py-3 form-container mt-1 mb-2">
            <h1 className="titulo-contacto py-3">¿Como podemos ayudarte?</h1>
            <p className="pb-3">Envianos tu consulta, en breve nuestros equipo te brindara atencon personalizada.</p>
           
            <form className="row justify-content-center">
                
                <div className="col-md-8 col-xl-5 mb-2 form-input">
                    <input
                    type="text"
                    placeholder="Nombres"
                    onChange={(e)=>{setNombreReq(e.target.value)}}/>
                </div>
                <div class="w-100"></div>
                
                <div className="col-md-8 col-xl-5 mb-2 form-input">
                <input
                    type="text"
                    placeholder="Apellidos"
                    onChange={(e)=>{setApellidoReq(e.target.value)}}/>
                </div>
                <div class="w-100"></div>
                
                <div className="col-md-8 col-xl-5 mb-2 form-input">
                <input
                    type="number"
                    placeholder="+54 9 11 xxxxxxxx"
                    className="form-control"
                    onChange={(e)=>{setTelefonoReq(e.target.value)}}/>
                </div>

                <div class="w-100"></div>
                <div className="col-md-8 col-xl-5 mb-2 form-input">
                    <input
                    type="file"
                    placeholder="Imagen"
                    className="form-control"
                    name="avatar"
                    onChange={(e)=>{setImagenReq(e.target.value)}}
                    />
                </div>

                <div class="w-100"></div>
                <div className="col-md-8 col-xl-5 mb-2 form-input">
                <textarea
                    type="text"
                    placeholder="Comentanos"
                    className="form-control"
                    onChange={(e)=>{setComentariosReq(e.target.value)}}/>
                </div>
                <div class="w-100"></div>
                <div className="col-md-8 col-xl-5 mb-2 justify-content-center">
                    <button className="btn btn-primary" type="submit" onClick={Form}>Enviar</button>
                </div>
            </form>
            </div>
        </Fragment>
)

}

export default Formulario



/* const Form = () => {
    
    const [datos, setDatos] = useState({
        nombre: '',
        apellido: '',
        telefono: '',
        comentario:''
    })

    const handleInputChange = (event) => {
        // console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault();
        // console.log(datos.nombre + ' ' + datos.apellido + datos.telefono + datos.comentario)
    }

    return(
        <Fragment>
            <div className="container-fluid py-3 form-container mt-1 mb-2">
            <h1 className="titulo-contacto py-3">¿Como podemos ayudarte?</h1>
            <p className="pb-3">Envianos tu consulta, en breve nuestros equipo te brindara atencon personalizada.</p>
            <form className="row justify-content-center" onSubmit={enviarDatos}>
                <div className="col-md-8 col-xl-5 mb-2 form-input">
                    <input 
                    placeholder="Nombre"
                    className="form-control"
                    name="nombre"
                    onChange={handleInputChange}
                    ></input>
                </div>
                <div class="w-100"></div>
                <div className="col-md-8 col-xl-5 mb-2 form-input">
                    <input
                    placeholder="Apellido"
                    className="form-control"
                    name="apellido"
                    onChange={handleInputChange}
                    ></input>
                </div>
                <div class="w-100"></div>
                <div className="col-md-8 col-xl-5 mb-2 form-input">
                    <input
                    placeholder="Nro. Telefónico"
                    className="form-control"
                    name="telefono"
                    onChange={handleInputChange}
                    ></input>
                </div>
                <br/>

               
                <div class="w-100"></div>
                <div class="col-md-8 col-xl-5 mb-2">Si deseas puedes adjuntar tu diseño</div>

                <div class="w-100"></div>
                <div className="col-md-8 col-xl-5 mb-2 form-input">
                    <input
                    type="file"
                    placeholder="Adjuntanos tu diseño"
                    className="form-control"
                    name="imagen"
                    
                    ></input>
                </div>



                <div class="w-100"></div>
                <div className="col-md-8 col-xl-5 mb-2 form-input">
                    <textarea
                    placeholder="Comentanos"
                    className="form-control"
                    name="comentario"
                    onChange={handleInputChange}
                    ></textarea>
                </div>
                <div class="w-100"></div>
                <div className="col-md-8 col-xl-5 mb-2 justify-content-center">
                    <button className="btn btn-primary" type="submit">Enviar</button>
                </div>
            </form>
            </div>
        </Fragment>

    )
}

export default Form */