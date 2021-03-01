import React,{Fragment} from 'react';
//Atomics
import CardFieldCart from '../atomics/card_field_cart';
import CartVacio from '../atomics/cartVacio';


const Cart = ({paquete}) =>{
    const{cart,tamaño} = paquete;
    return(
        <Fragment>
            {tamaño === 0 ? (<CartVacio/>) : (cart.map((pokemon,i) =>{
                return(
                    <Fragment>
                        <CardFieldCart key={i} pokemon={pokemon} paquete={paquete} />
                    </Fragment>
                )
            }))}
        </Fragment>
    )
}

export default Cart;