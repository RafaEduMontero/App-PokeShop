import React,{Fragment} from 'react';

const PokeNoEncontrado = () =>{
    return(
        <Fragment>
            <div className="jumbotron bg-warning">
                <div className="row bg-warning justify-content-center">
                    <h1 className="display-4">Pokémon no Encontrado :(</h1>
                    <hr className="my-4"/>
                </div>
            </div>
        </Fragment>
    )
}

export default PokeNoEncontrado;