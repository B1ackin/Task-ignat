import React from 'react';
import classes from './InputUniversal.module.css'


type PropsType = {
    class: 'green-input' | 'red-input' | 'standard-input'
    label?: string
    message?: string
    error?: string
    onChange: (value: string) => void
    value: string
}

export function InputUniversal(props: PropsType) {
    return (
            <div className={classes[props.class]}>
            <label>{props.label}</label>
            <input type="text" value={props.value} onChange={e => props.onChange(e.currentTarget.value)} />
            <div>{props.message}</div>
        </div>
    )
}




