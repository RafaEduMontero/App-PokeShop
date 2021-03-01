import React,{Fragment} from 'react';
//react-router-dom
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
//Atomics
import DetalleBusquedaField from '../../atomics/detailBusqueda_field';
import IconCart from '../../atomics/iconCart';
import Spinner from '../../atomics/spinner';
//Hoooks
import use_fetch from '../../hooks/use_fetch_byId';
//Paths
import pokemones from '../../paths/pokemones';


const DetalleBusqueda = ({paquete}) =>{
    const {id} = useParams();
    const [pokemon,validate] = use_fetch(pokemones.getTodos+`${id}`);
    return(
        <Fragment>
            <div className="fondo2 container-fluid">
                <div className="row fixed-head justify-content-end p-2">
                    <Link className="btn btn-primary" to="/carrito"><IconCart paquete={paquete}/></Link>
                </div>
                <div className="row justify-content-center">
                    {validate?(<DetalleBusquedaField paquete={paquete} pokemon={pokemon} id={id}/>):(<Spinner/>)}
                </div>
            </div>            
        </Fragment>
    )
}

export default DetalleBusqueda;