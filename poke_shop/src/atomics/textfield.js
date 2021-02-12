import React,{Fragment} from 'react';

const TextField = ({
    id,
    className,
    name,
    handler,
    filtrado
}) => {
    return(
        <Fragment>
            <input 
                type="text"
                className={className}
                id={id}
                name={name}
                onChange={handler}
                onKeyUp={filtrado}
            />
        </Fragment>
    )
}

export default TextField;