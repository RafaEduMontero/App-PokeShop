import React,{Fragment} from 'react';
//Atomics
import CardFieldCart from '../atomics/card_field_cart';
//react-router
import CartVacio from '../atomics/cartVacio';

const Cart = ({paquete}) =>{
    const{cart} = paquete;
    return(
        <Fragment>
            {cart.length === 0 ? (<CartVacio/>) : (cart.map((pokemon,i) =>{
                return(
                    <Fragment>
                        <CardFieldCart pokemon={pokemon} i={i} paquete={paquete} />
                    </Fragment>
                )
            }))}
        </Fragment>
    )
}

export default Cart;