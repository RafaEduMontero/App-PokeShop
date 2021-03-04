import React,{Fragment} from 'react';
import { useForm } from "react-hook-form";

const TextFieldForm = ({
    type,
    name,
    placeholder,
    onChange,
    value,
    className
}) =>{
    const { register,errors} = useForm();
    return(
        <Fragment>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                className={`form-control ${className}`}
                onChange={onChange}
                value={value}
                ref={
                    register({
                        required: true,
                        message: `Debe ingresar un ${name}`
                    })
                }
            />
            {errors.name && <p>This field is required</p>}
        </Fragment>
    )
}

export default TextFieldForm;