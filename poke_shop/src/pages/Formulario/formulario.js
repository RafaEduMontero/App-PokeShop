import React from 'react';
//Component
import Form from '../../components/form';

const Formulario = ({cart}) =>{
    return(
        <div className="fondo4">
            <Form cart={cart}/>
        </div>
    )
}

export default Formulario;