import React,{Fragment,useState} from 'react';
//react-router
import {Link} from 'react-router-dom';
//images
import fondoHeader from '../images/bg-pattern-card.svg';
//Atomics
import ButtonSend from '../atomics/button_send';
import IconDeleteCart from '../atomics/iconDeleteCart';
import ImgField from './img_field';
import SpanField from './span_field';
import IconBack from './iconBack';
//funciones
import funciones from '../functions/funciones';
import swal from 'sweetalert';

const CardFieldCart = ({pokemon,paquete}) =>{

    const {delPokemon,primeraMayuscula} = funciones;
    
    const {name,abilities,sprites,id} = pokemon;
    const datos = {
        imagen : sprites.front_default,
        nombre : name,
        habilidad: abilities[0].ability.name,
    }
    const {imagen,nombre,habilidad} = datos;

    const mostrarAlert = () =>{
        swal({
            title: 'Eliminar',
            text: `¿Está seguro de eliminar a ${primeraMayuscula(nombre)}?`,
            icon: 'warning',
            buttons: ["No","Si"]
        }).then(respuesta =>{
            if(respuesta){
                delPokemon(pokemon.id,paquete);
                swal({
                    text: `¡${primeraMayuscula(nombre)} fué Elimina con Éxito!`,
                    icon: 'success'
                })
            }
        })
    }

    return(
        <Fragment>
            <div key={id} className="col-12 col-lg-3 col-md-4 col-sm-6 p-2">
                <div className="card2">
                    <ImgField src={fondoHeader} className="card1-header"/>
                    <div className="card1-body">
                        <ImgField className="card1-body-img" src={imagen}/>
                        <h1 className="card1-body-title">
                            {primeraMayuscula(nombre)}
                        </h1>
                        <SpanField contenido={habilidad}/>
                    </div>
                    <div className="row justify-content-center mt-3 mb-2">
                        <div className="col-3">
                            <Link className="card1-footer btn btn-info p-2 pb-2" to={`/busqueda/detallebusqueda/${pokemon.id}`}><i className="fas fa-info-circle pb-1"></i></Link>
                        </div>
                        <div className="col-3">
                            <ButtonSend label={<IconDeleteCart/>} onClick={() => mostrarAlert()} className="btn btn-danger"/>
                        </div>
                        <div className="col-3">
                            <Link className="btn btn-info" to="/busqueda"><IconBack/></Link>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default CardFieldCart;