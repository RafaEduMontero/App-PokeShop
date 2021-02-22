import React from 'react';

const TextFieldForm = ({
    type,
    name,
    placeholder,
    onChange,
    value
}) =>{
    return(
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            className="form-control"
            onChange={onChange}
            value={value}
        />
    )
}

export default TextFieldForm;