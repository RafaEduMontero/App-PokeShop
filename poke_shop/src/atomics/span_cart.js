import React from 'react';

const SpanCart = ({paquete}) =>{
    const{tamaño} = paquete
    return(
        <span className="badge badge-light bg-danger text-white">{tamaño}</span>
    )
}

export default SpanCart;