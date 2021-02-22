import React,{Fragment} from 'react';
import {Link} from 'react-router-dom';
//images
import fondoHeader from '../images/bg-pattern-card.svg';
//Atomics
import ButtonSend from '../atomics/button_send';
import ImgField from './img_field';
import SpanField from './span_field';
import IconAddCart   from '../atomics/iconAddCart';
import funciones from '../functions/funciones';

const CardField = ({pokemon,i,paquete}) =>{

    const {addPokemon,primeraMayuscula} = funciones;

    const datos = {
        imagen : pokemon.sprites.front_default,
        nombre : pokemon.name,
        habilidad: pokemon.abilities[0].ability.name,
    }
    const {imagen,nombre,habilidad} = datos;
    
    return(
        <Fragment>
            <div key={i} className="col-6 p-2">
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
                                <Link className="card1-footer btn btn-info p-2" to={`/busqueda/detallebusqueda/${pokemon.id}`}><i className="fas fa-info-circle"></i></Link>
                            </div>
                            <div className="col-6 card1-footer">
                                <ButtonSend label={<IconAddCart/>} onClick={() => addPokemon(pokemon.id,paquete)} className="btn btn-success"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default CardField;

// `<div class="col p-4">
//                 <div class="card2">
//                     <img src=${fondoHeader} class="card1-header"/>
//                     <div class="card1-body">
//                         <img class="card2-body-img" alt="${name}" src="${image}"/>
//                         <h1 class="card1-body-title">
//                             ${primeraMayuscula(name)}
//                             <span>${hp}</span>
//                         </h1>
//                         <span>Habilidad: ${habilidad}</span>
//                     </div>
//                     <div class="card1-footer">
//                         <div class="card1-footer-social">
//                             <h3>${tipo}</h3>
//                             <p>Tipo</p>
//                         </div>
//                         <div class="card1-footer-social">
//                         <h3>${ataque}</h3>
//                         <p>Ataque</p>
//                         </div>
//                         <div class="card1-footer-social">
//                             <h3>${defensa}</h3>
//                             <p>Defensa</p>
//                         </div>
//                         <div class="card1-footer-social">
//                             <h3>${especial}</h3>
//                             <p>Especial</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>`