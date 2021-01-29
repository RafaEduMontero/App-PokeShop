import React from 'react';
import LinkTo from '../../atomics/linkto';

const Principal = () =>{
    return(
        <div className="container fondo">
            <LinkTo className="btn btn-danger p-3 botonEntrar" label="ENTRAR" to="/busqueda"/>
        </div>
    )
}

export default Principal;