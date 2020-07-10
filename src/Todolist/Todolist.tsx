import React from 'react';
import './TodolistStyle.css';
import {FilterValueType} from "./AppTodolist";

export type TaskType = {
    id: number
    name: string
    priority: string
}

type PropsType = {
    tasks: Array<TaskType>
    removeTask: (id: number) => void
    setFilter: (value: FilterValueType) => void
}

function Todolist(props:PropsType) {
    return (
        <div className={"bgall"}>
        <div >
            <ul >
                {

                    props.tasks.map( task => <li className={"column"}>
                        <div className="priority">Name: {task.name}</div>
                            <div className="priority"><b>Priority: {task.priority}</b></div>
                            <button onClick={ () => { props.removeTask(task.id)}}>Удалить</button>
                        </li>
                    )
                }
            </ul>
        </div>
            <div className={"buttons"}>

                <button className="button-filter" onClick={() => props.setFilter('All')}>ALL</button>
                <button className="button-filter" onClick={() => props.setFilter('high')}>HIGH</button>
                <button className="button-filter" onClick={() => props.setFilter('middle')}>MIDDLE</button>
                <button className="button-filter" onClick={() => props.setFilter('low')}>LOW</button>
            </div>



        </div>

    );
}


export default Todolist;