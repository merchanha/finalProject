import React, {Fragment, useState} from 'react'


import './form.css'

const Form = () => {
    
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
            <h1>Contactanos</h1>
            <form className="row" onSubmit={enviarDatos}>
                <div className="col-md-4">
                    <input 
                    placeholder="Nombre"
                    className="form-control"
                    name="nombre"
                    onChange={handleInputChange}
                    ></input>
                </div>
                <div className="col-md-4">
                    <input
                    placeholder="Apellido"
                    className="form-control"
                    name="apellido"
                    onChange={handleInputChange}
                    ></input>
                </div>
                <div className="col-md-4">
                    <input
                    placeholder="Nro. Telefónico"
                    className="form-control"
                    name="telefono"
                    onChange={handleInputChange}
                    ></input>
                </div>
                <div className="col-md-4">
                    <textarea
                    placeholder="Comentanos"
                    className="form-control"
                    name="comentario"
                    onChange={handleInputChange}
                    ></textarea>
                </div>
                <div className="col-md-3">
                    <button className="btn btn-primary" type="submit">Enviar</button>
                </div>
            </form>
        </Fragment>

    )
}

export default Form