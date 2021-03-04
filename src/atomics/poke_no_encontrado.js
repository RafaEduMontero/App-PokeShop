import React,{Fragment} from 'react';

const PokeNoEncontrado = () =>{
    return(
            <div className="row justify-content-center">
                <div className="col-12">
                    <div className="jumbotron bg-warning">
                        <h1 className="display-4">Pokémon no encontrado :(</h1>
                    </div>
                </div>
            </div>
    )
}

export default PokeNoEncontrado;