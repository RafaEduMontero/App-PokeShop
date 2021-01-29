import React,{Fragment} from 'react';

const TextField = ({
    name,
    value,
    className,
    onChange
}) => {
    return(
        <Fragment>
            <input 
                type="text"
                name={name}
                value={value}
                className={className}
                onChange={onChange}
            />
        </Fragment>
    )
}

export default TextField;