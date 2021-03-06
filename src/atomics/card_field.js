import React from 'react';
//react-router
import {Link} from 'react-router-dom';
//images
import fondoHeader from '../images/bg-pattern-card.svg';
//Atomics
import ButtonSend from '../atomics/button_send';
import ImgField from './img_field';
import SpanField from './span_field';
import IconAddCart   from '../atomics/iconAddCart';
//funciones
import funciones from '../functions/funciones';

const CardField = ({pokemon,i,paquete}) =>{

    const {addPokemon,primeraMayuscula} = funciones;
    const{cart} = paquete;

    const datos = {
        imagen : pokemon.sprites.front_default,
        nombre : pokemon.name,
        habilidad: pokemon.abilities[0].ability.name,
    }
    const {imagen,nombre,habilidad} = datos;
    
    const pokemonEnCarrito = cart.find(poke =>poke.id === pokemon.id);
    return(
            <div key={i} className="col-6 col-lg-3 col-md-4 p-2">
                <div className="card1" key={i}>
                    <ImgField src={fondoHeader} className="card1-header"/>
                    <div className="card1-body">
                    <ImgField className="card1-body-img" src={imagen}/>
                        <h1 className="card1-body-title">
                            {primeraMayuscula(nombre)}
                        </h1>
                        <SpanField contenido={habilidad}/>
                        <div className="row mb-2 mt-2">
                            <div className="col-6 card1-footer">
                                <Link 
                                    className="card1-footer btn btn-info p-2" 
                                    to={`/busqueda/detallebusqueda/${pokemon.id}`}>
                                        <i className="fas fa-info-circle pr-1 pl-1"></i>
                                </Link>
                            </div>
                            <div className="col-6 card1-footer">
                                <ButtonSend 
                                    label={<IconAddCart/>} 
                                    onClick={() => addPokemon(pokemon.id,paquete)} 
                                    className={`btn ${pokemonEnCarrito ? 'btn-dark' : 'btn-success'}`} 
                                    disabled={pokemonEnCarrito}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default CardField;