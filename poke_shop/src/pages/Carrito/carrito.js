import React,{Fragment} from 'react';
import { Link } from 'react-router-dom';
//Components
import Cart from '../../components/cart';

const Carrito = ({paquete}) =>{
    const {tamaño} = paquete;
    let display;
    if(tamaño !==0){
        display = "btn btn-success";
    }else{
        display = "d-none"
    }
    return(
        <Fragment>
            <div className="container fondo3">            
                <Cart paquete={paquete}/>
                <Link className={display} to="/formulario">Comprar</Link>
                <div className="pt-2"></div>
            </div>
        </Fragment>
    )
}

export default Carrito