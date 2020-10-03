import React from "react";
import {DialogApp} from "../DialogApp";
import AppTodolist from "../Todolist/AppTodolist";
import AppInput from "../input/App-input";
import AllComponentn from "../common/AllComponent/AllComponent";
import s from "./prejunior.module.css"

export const PreJunior = () => {
    return (
        <div className={s.component}>

            <DialogApp />
            <AppTodolist />
            <AppInput />
            <AllComponentn />
        </div>
    )
}