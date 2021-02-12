import React,{Fragment } from 'react';
//images
import fondoHeader from '../images/bg-pattern-card.svg'
//Atomics
import ButtonSend from '../atomics/button_send';
import IconAddCart   from '../atomics/iconAddCart';
import IconBack from './iconBack';
import SpanField from './span_field';
import PField from './p_field';
//react-router
import {Link} from 'react-router-dom';
//funciones
import funciones from '../functions/funciones';


const DetalleBusquedaField = ({pokemon,paquete}) =>{
    
    const{primeraMayuscula,addPokemon} = funciones;

    const datos={
        imagen : pokemon.sprites.other.dream_world.front_default,
        name : pokemon.name,
        habilidad: pokemon.abilities[0].ability.name,
        hp: pokemon.stats[0].base_stat,
        ataque: pokemon.stats[1].base_stat,
        especial: pokemon.stats[2].base_stat,
        defensa: pokemon.stats[3].base_stat,
        tipo: pokemon.types[0].type.name
    }

    const {imagen,name,habilidad,hp,tipo,defensa,especial,ataque} = datos;
    return(
        <Fragment>
            <div className="col p-4">
                <div className="card2">
                    <img src={fondoHeader} className="card1-header"/>
                    <div className="card1-body">
                        <img className="card2-body-img" src={imagen}/>
                        <h1 className="card1-body-title">
                            {primeraMayuscula(name)}
                            <SpanField contenido={hp}/>
                        </h1>
                        <SpanField contenido={`Habilidad: ${habilidad}`}/>
                    </div>
                    <div className="card1-footer">
                        <div className="card1-footer-social">
                            <h3>{tipo}</h3>
                            <PField contenido="Tipo"/>
                        </div>
                        <div className="card1-footer-social">
                        <h3>{ataque}</h3>
                            <PField contenido="Ataque"/>
                        </div>
                        <div className="card1-footer-social">
                            <h3>{defensa}</h3>
                            <PField contenido="Defensa"/>
                        </div>
                        <div className="card1-footer-social">
                            <h3>{especial}</h3>
                            <PField contenido="Especial"/>
                        </div>
                    </div>
                    <div className="row mb-2">
                        <div className="col-6">
                            <Link className="btn btn-info" to="/busqueda"><IconBack/></Link>
                        </div>
                        <div className="col-6">
                            <ButtonSend label={<IconAddCart/>} onClick={() => addPokemon(pokemon.id,paquete)} className="btn btn-success"/>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default DetalleBusquedaField;