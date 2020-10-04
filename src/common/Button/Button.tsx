import React from 'react';
import classes from './Button.module.css'


export type ButtonHelpType = {
    name: string
    // class: "button-help"
    onClick?: () => void
}

export function ButtonUniversal(props: ButtonHelpType) {


    return (
        <button onClick={props.onClick}>{props.name}</button>
    )
}