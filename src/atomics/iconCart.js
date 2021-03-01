import React from 'react';
import SpanCart from './span_cart';

const IconCart = ({paquete}) =>{
    return(
        <i className="fas fa-shopping-cart d-flex"><SpanCart paquete={paquete}/></i>
    )
}

export default IconCart;