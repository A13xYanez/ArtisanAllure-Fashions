import React from 'react';
import { FaCheckCircle } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { MdError } from "react-icons/md";
import { IoWarning } from "react-icons/io5";

export default function Toast(props) {
    return (
        <div className={props.type == "check" ? "toast-green toast-box" :
                        props.type == "warning" ? "toast-yellow toast-box" :
                        "toast-red toast-box"}>
                            
            {props.type == "check" ? <FaCheckCircle className='toast-type-icon' /> :
                props.type == "warning" ?  <IoWarning className='toast-type-icon' /> :
                <MdError className='toast-type-icon' />}

            <p>{props.message}</p>

            <IoClose className='toast-close-icon' />
        </div>
    )
};