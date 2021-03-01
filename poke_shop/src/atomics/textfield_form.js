import React from 'react';

const TextFieldForm = ({
    type,
    name,
    placeholder,
    onChange,
    value,
    className
}) =>{
    return(
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            className={`form-control ${className}`}
            onChange={onChange}
            value={value}
        />
    )
}

export default TextFieldForm;