import React,{Fragment} from 'react';
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


const CardFieldCart = ({pokemon,paquete}) =>{

    const {mostrarAlert,primeraMayuscula} = funciones;
    
    const {name,abilities,sprites,id} = pokemon;
    const datos = {
        imagen : sprites.front_default,
        nombre : name,
        habilidad: abilities[0].ability.name,
    }
    const {imagen,nombre,habilidad} = datos;

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
                            <ButtonSend 
                                label={<IconDeleteCart/>} 
                                onClick={() => mostrarAlert(nombre,pokemon.id,paquete)} 
                                className="btn btn-danger"
                            />
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