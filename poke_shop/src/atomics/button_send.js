import React,{Fragment } from 'react';

const style = 'btn btn-primary';
const SPACE = ' ';

const ButtonSend = ({
    className,
    onClick,
    label,
    disabled
}) =>{
    return(
        <Fragment>
            <button
                disabled={disabled} 
                className={style + SPACE + className}
                onClick={onClick}> {label}
            </button>
        </Fragment>
    )
}

export default ButtonSend;