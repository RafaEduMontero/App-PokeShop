import React from 'react';

const IconSearch = ({filtrado}) =>{
    return(
        <span className="input-group-btn">
            <button onClick={filtrado} className="btn btn-info">
            <i className="text-white fas fa-search"></i>
            </button>
        </span>
    )
}

export default IconSearch;