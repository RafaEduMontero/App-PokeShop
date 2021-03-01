import React from 'react';
//react-router-dom
import LinkTo from '../../atomics/linkto';
//import Email from '../../smpt/smtp'

const Principal = () =>{
    return(
        <div className="container-fluid fondo">
            <LinkTo className="btn btn-danger p-3 botonEntrar" label="ENTRAR" to="/busqueda"/>
        </div>
    )
}

export default Principal;