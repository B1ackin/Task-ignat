import React, {ChangeEvent, useState} from "react";
import {EditableSpan} from "../common/EditableSpan/EditableSpan";
import s from "./prejunior.module.css";
import {restoreState, saveState} from "../HW6plus/localStorage";
import {ButtonUniversal} from "../common/Button/Button";

export const Junior = () => {

    const [valueSpan, setValueSpan] = useState("Enter press")

    const handlerSave = () => {
        saveState<string>('state', valueSpan)
    }
    const handlerRestore = () => {
       const state = restoreState<string>('state', valueSpan)
        setValueSpan(state)
    }
    const ChangeValueInput = (e: ChangeEvent<HTMLInputElement>) => setValueSpan(e.currentTarget.value)

    return (
        <div className={s.component}>
            <EditableSpan value={valueSpan} onChange={ChangeValueInput} />
            <ButtonUniversal onClick={handlerSave} name={"Save"}/>
            <ButtonUniversal onClick={handlerRestore} name={"Restore"}/>

        </div>
    )
}