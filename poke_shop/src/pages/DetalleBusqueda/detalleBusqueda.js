import React,{Fragment} from 'react';
//react-router-dom
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
//Atomics
import DetalleBusquedaField from '../../atomics/detailBusqueda_field';
import IconCart from '../../atomics/iconCart';
//Hoooks
import use_fetch from '../../hooks/use_fetch_byId';
//Paths
import pokemones from '../../paths/pokemones';


const DetalleBusqueda = ({paquete}) =>{
    const {id} = useParams();
    const [pokemon,validate] = use_fetch(pokemones.getTodos+`${id}`);
    return(
        <Fragment>
            <div className="fondo2 container">
                <div className="row justify-content-end">
                    <Link className="btn btn-primary" to="/carrito"><IconCart paquete={paquete}/></Link>
                </div>
                {validate?(<DetalleBusquedaField paquete={paquete} pokemon={pokemon} id={id}/>):(<h3>Loading...</h3>)}
            </div>            
        </Fragment>
    )
}

export default DetalleBusqueda;