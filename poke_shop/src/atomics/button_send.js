import React,{Fragment } from 'react';
import IconSend from '../atomics/iconSend';

const style = 'btn btn-primary';
const SPACE = ' ';

const ButtonSend = ({
    className,
    onClick,
    label
}) =>{
    return(
        <Fragment>
            <button 
                className={style + SPACE + className}
                onClick={onClick}> {label}
            </button>
        </Fragment>
    )
}

export default ButtonSend;