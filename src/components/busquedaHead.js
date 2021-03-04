import React from 'react';
//Atomics
import TextField from '../atomics/textfield';
import IconCart from '../atomics/iconCart';
//react-router
import {Link} from 'react-router-dom';
//funtions
import funciones from '../functions/funciones';

const BusquedaHead = ({setEntrada,entrada,paquete}) =>{
    const{filtrado} =funciones;

    const handler = (e) =>{
        const {name,value} = e.target;
        setEntrada({
            [name] : value.toLowerCase()
        })
    }
    return(
        <div className="row fixed-head pb-2">
                    <div className="input-group mt-2 col-12">
                            <div className="col-8">
                                <TextField filtrado={() => filtrado(entrada,paquete)} handler={handler} name="entrada" className="form-control text-white bg-info" id="formulario"/>
                            </div>
                            <div className="ml-auto">
                                <Link to="/carrito" className="btn btn-info"><IconCart paquete={paquete}/></Link>
                            </div>                                           
                    </div>
        </div>
    )
}

export default BusquedaHead;