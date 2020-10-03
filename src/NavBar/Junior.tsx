import React, {ChangeEvent, useState} from "react";
import {EditableSpan} from "../common/EditableSpan/EditableSpan";
import s from "./prejunior.module.css";

export const Junior = () => {

    const [valueSpan, setValueSpan] = useState("Enter press")


    const ChangeValueInput = (e: ChangeEvent<HTMLInputElement>) => setValueSpan(e.currentTarget.value)

    return (
        <div className={s.component}>
            <EditableSpan value={valueSpan} onChange={ChangeValueInput} />
        </div>
    )
}