import React from 'react';
import classes from './Button.module.css'


export type ButtonHelpType = {
    name: string
    class: "button-help"
}

export function ButtonUniversal(props: ButtonHelpType) {


    return (
        <button className={classes[props.class]}>{props.name}</button>
    )
}