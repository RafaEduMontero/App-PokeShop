import React,{Fragment, useState} from 'react';
import Axios from 'axios';
import VerImage from '../../atomics/verimg';
import use_fetch from '../../hooks/use_fetch'
import pokemones from '../../paths/pokemones'
import axios from 'axios';

const Busqueda = () =>{
    var pokemons = new Array();
    const cantidad = 100;

    for(let i=1;i<=cantidad;i++){
        const [pokemon] = use_fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        pokemons.push(pokemon);
    }
    
    return(
        <div className="container fondo2">
            <div className="row">
                {pokemons.map((item,i) =>{
                    const {name,abilities,sprites,game_indices} = item;
                    return(
                        <Fragment>
                            <div key={i} className="col-6 p-2">
                                <div class="card">
                                    <img src={sprites.front_default} className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">{name}</h5>
                                        <a href="#" className="btn btn-primary">Ver+</a>
                                    </div>
                                </div>
                            </div>
                        </Fragment>
                    )
                })}
            </div>
        </div>
    )
}

export default Busqueda;