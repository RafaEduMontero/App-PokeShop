import React from 'react';
import IconSearch from '../../atomics/iconSearch';
//Atomics
import TextField from '../../atomics/textfield';


const BusquedaHead = () =>{
    return(
        <div className="row">
                <form className="col-12">
                    <div className="input-group">
                        <TextField className="form-control"/>
                        <IconSearch/>
                    </div>
                </form>
        </div>
    )
}

export default BusquedaHead;