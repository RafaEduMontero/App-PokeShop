import React from 'react';
//Hooks
import use_fetch from '../../hooks/use_fetch'
//Paths
import pokemones from '../../paths/pokemones'
//Components
import BusquedaHead from '../../components/busquedaHead/busquedaHead';
import BusquedaBody from '../../components/busquedaHead/busquedaBody';

const Busqueda = () =>{
    var pokemons = new Array();
    const cantidad = 200;

    for(let i=1;i<=cantidad;i++){
        const [pokemon] = use_fetch(pokemones.getTodos.concat(`${i}`));
        pokemons.push(pokemon);
    }
    
    return(
        <div className="container fondo2">
            <BusquedaHead/>
            <BusquedaBody pokemons={pokemons}/>
        </div>
    )
}

export default Busqueda;