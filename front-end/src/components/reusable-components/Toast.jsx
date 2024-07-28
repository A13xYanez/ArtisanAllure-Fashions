import React from 'react';
import { IoClose } from "react-icons/io5";
import success from './assets/success-icon.png';
import error from './assets/error-icon.png';
import warning from './assets/warning-icon.png';

export default function Toast(props) {
    return (
        <div className={props.type == "success" ? "toast-green toast-box" :
                        props.type == "warning" ? "toast-yellow toast-box" :
                        "toast-red toast-box"}>
                            
            {props.type == "success" ? <img src={success} className='toast-type-icon' /> :
            props.type == "warning" ?  <img src={warning} className='toast-type-icon' /> :
            <img src={error} className='toast-type-icon' />}

            {props.type == "success" ? <h3>Success!</h3> :
            props.type == "warning" ? <h3>Warning!</h3> :
            <h3>Error!</h3>}

            <p>{props.message}</p>

            <IoClose className='toast-close-icon' />
        </div>
    )
};