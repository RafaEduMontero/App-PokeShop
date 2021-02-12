import React from 'react';
//Atomics
import TextField from '../atomics/textfield';
import IconSearch from '../atomics/iconSearch';
import IconCart from '../atomics/iconCart';
//react-router
import {Link} from 'react-router-dom';
import funciones from '../functions/funciones';

const BusquedaHead = ({setEntrada,entrada,paquete,resultado}) =>{
    const{filtrado} =funciones;

    const handler = (e) =>{
        const {name,value} = e.target;
        setEntrada({
            [name] : value
        })
    }
    return(
        <div className="row fixed-head pb-2">
                    <div className="input-group mt-2">
                            <div className="col-8">
                                <TextField filtrado={() => filtrado(entrada,paquete)} handler={handler} name="entrada" className="form-control text-white bg-info" id="formulario"/>
                            </div>
                            {/* <div className="col-1">
                                <IconSearch filtrado={() => filtrado(entrada,paquete)}/>
                            </div> */}
                            <div className="col-1"></div>
                            <div className="col-1">
                                <Link to="/carrito" className="btn btn-primary"><IconCart paquete={paquete}/></Link>
                            </div>                                           
                    </div>
        </div>
    )
}

export default BusquedaHead;