import React from "react";
import {DialogApp} from "../DialogApp";
import AppTodolist from "../Todolist/AppTodolist";
import AppInput from "../input/App-input";
import AllComponentn from "../common/AllComponent/AllComponent";

export const PreJunior = () => {
    return (
        <div>
            <DialogApp />
            <AppTodolist />
            <AppInput />
            <AllComponentn />
        </div>
    )
}