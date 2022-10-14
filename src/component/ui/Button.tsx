import React from 'react';
import './Button.css'

type ButtonType={
    children: JSX.Element
    callback:()=>void
    style:string
}


const Button = (props:ButtonType) => {
   const {style,callback,children}=props

    const onClickHandler=()=>{
        callback()

    }

    return (
        <button className={style} onClick={onClickHandler}>

            {children}

        </button>

    );
};

export default Button;