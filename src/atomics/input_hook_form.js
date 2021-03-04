import React from 'react';

const InputHookForm = ({
    className,
    name,
    placeholder,
    register,
    type
}) =>{
    return(
            <input 
                type={type}
                className={className} 
                name={name} 
                placeholder={placeholder} 
                ref={register({required: true})} />
    )
}

export default InputHookForm;