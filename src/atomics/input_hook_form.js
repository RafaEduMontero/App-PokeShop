import React from 'react';

const InputHookForm = ({
    className,
    name,
    placeholder,
    register
}) =>{
    return(
            <input 
                className={className} 
                name={name} 
                placeholder={placeholder} 
                ref={register({required: true})} />
    )
}

export default InputHookForm;