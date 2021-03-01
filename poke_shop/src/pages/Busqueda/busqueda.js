import React, { useState } from 'react';
//Components
import BusquedaHead from '../../components/busquedaHead';
import BusquedaBody from '../../components/busquedaBody';

const Busqueda = ({paquete}) =>{
    const[entrada,setEntrada] = useState('');
    return(
        <div className="container-fluid fondo2">
            <BusquedaHead entrada={entrada} setEntrada={setEntrada} paquete={paquete}/>
            <BusquedaBody paquete={paquete} entrada={entrada}/>
        </div>
    )
}

export default Busqueda;