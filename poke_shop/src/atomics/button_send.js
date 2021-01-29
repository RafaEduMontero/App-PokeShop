import React,{Fragment } from 'react';

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
                onClick={onClick}>{label}
            </button>
        </Fragment>
    )
}

export default ButtonSend;