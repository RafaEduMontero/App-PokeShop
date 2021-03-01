import React,{Fragment} from 'react';
//Atomics
import CardFieldCart from '../atomics/card_field_cart';
//react-router
import CartVacio from '../atomics/cartVacio';


const Cart = ({paquete}) =>{
    const{cart,tamaño} = paquete;
    return(
        <Fragment>
            {tamaño === 0 ? (<CartVacio/>) : (cart.map((pokemon) =>{
                return(
                    <Fragment>
                        <CardFieldCart pokemon={pokemon} paquete={paquete} />
                    </Fragment>
                )
            }))}
        </Fragment>
    )
}

export default Cart;