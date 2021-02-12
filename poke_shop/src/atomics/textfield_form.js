import React from 'react';

const TextFieldForm = ({
    type,
    name,
    placeholder,
    onChange
}) =>{
    return(
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            className="form-control"
            onChange={onChange}
        />
    )
}

export default TextFieldForm;