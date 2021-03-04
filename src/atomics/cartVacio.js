import React,{Fragment} from 'react';
//react-router
import { Link } from 'react-router-dom';
//Atomics
import IconBack from './iconBack';
import PField from './p_field';

const CartVacio = () =>{
    const p = "Por favor regrese a la página de búsqueda para agregar pokémones a su pokebola :)";
    return(
            <div className="row justify-content-center">
                <div className="col-12">
                    <div className="jumbotron bg-warning">
                        <h1 className="display-4">La Pokebola está Vacía :(</h1>
                        <PField contenido={p}/>
                        <Link className="btn btn-info mb-2" to="/busqueda"><IconBack/></Link>
                    </div>
                </div>
            </div>        
    )
}

export default CartVacio;