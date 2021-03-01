import React,{Fragment} from 'react';
//react-router
import { Link } from 'react-router-dom';
//Components
import Cart from '../../components/cart';

const Carrito = ({paquete}) =>{
    const {tamaño} = paquete;
    let display;
    let display2;
    if(tamaño !==0){
        display = "btn btn-success";
        display2 = "text-white bg-info"
    }else{
        display = "d-none"
        display2 = "d-none"
    }
    return(
        <Fragment>
            <div className="container-fluid fondo3">
                <h1 className={display2}>En hora buena, estás cargando tu PokéBola :)</h1>
                <div className="row justify-content-center">
                    <Cart paquete={paquete}/>
                </div>            
                <Link className={display} to="/formulario">Comprar</Link>
                <div className="pt-2"></div>
            </div>
        </Fragment>
    )
}

export default Carrito