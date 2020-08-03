import React from 'react';
import classes from './Checkbox.module.css'


export type CheckboxType = {
    checked: boolean
    onChange: (check: boolean) => void
    class: "checkbox"
}

export function CheckboxUniversal(props: CheckboxType) {

    return (
        <div>
            <input type="checkbox"
                   className={classes[props.class]}
                   checked={props.checked}
                   onChange={e => props.onChange(e.currentTarget.checked)}
            />
        </div>
    )

}