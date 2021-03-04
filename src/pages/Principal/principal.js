import React from 'react';
//react-router-dom
import {Link} from 'react-router-dom';

const Principal = () =>{
    return(
        <div className="container-fluid fondo">
            <Link className="btn btn-danger p-3 botonEntrar" to="/busqueda">ENTRAR</Link>
        </div>
    )
}

export default Principal;