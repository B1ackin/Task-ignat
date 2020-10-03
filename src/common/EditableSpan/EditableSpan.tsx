import React, {ChangeEvent, useState} from "react";


export type PropsTypeInput = {
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}


export const EditableSpan = (props: PropsTypeInput) => {

    const [editMode, setEditMode] = useState(false)

    const dblClickSpanHandler = () => {
        setEditMode(true)
    }

    const onBlurHandler = () => {
        setEditMode(false)
    }



    return (
        <div>
            {editMode
            ? <input autoFocus onBlur={onBlurHandler} onChange={props.onChange}/>
                : <span onDoubleClick={dblClickSpanHandler}>{props.value}</span>}
        </div>
    )
}