import React,{Fragment  } from 'react';
import use_fetch from '../hooks/use_fetch';
import imagen from '../images/fondo.jpg';
import pokemones from '../paths/pokemones';

const VerImage = () =>{
    
    return(
        <div className="container fondo">
                <button className="btn btn-danger p-3 botonEntrar">ENTRAR</button>
        </div>
    )
}

export default VerImage;