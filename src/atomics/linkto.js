import React from 'react';
import {Link} from 'react-router-dom';

const LinkTo = ({to,label,className}) =>{
    return(
        <Link className={className} to={to}>{label}</Link>
    )
}

export default LinkTo;