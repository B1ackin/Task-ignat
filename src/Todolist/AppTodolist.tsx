import React, {useState} from 'react';
import Todolist, {TaskType} from "./Todolist";

export type FilterValueType = "All" | "high" | "middle" | "low"

function AppTodolist() {

    let [tasks, setTasks] = useState([
        {id: 1, name: "Work", priority: "high"},
        {id: 2, name: "Play", priority: "low"},
        {id: 3, name: "Learn", priority: "high"},
        {id: 4, name: "Game", priority: "low"},
        {id: 5, name: "Walk", priority: "middle"}

    ]);

    let [filter, setFilter] = useState<FilterValueType>("All")

    function removeTask(id: number) {
        let filteredTask = tasks.filter( task => task.id !== id) // Пробегается по массиву и создает новый массив с отфильтрованными тасками
        setTasks(filteredTask)
    }


    let tasksForToDoList = tasks;
    if(filter === "high") {
        tasksForToDoList = tasks.filter(task => task.priority === "high")
    }
    if(filter === "middle") {
        tasksForToDoList = tasks.filter(task => task.priority === "middle")
    }
    if(filter === "low") {
            tasksForToDoList = tasks.filter(task => task.priority === "low")
    }

    // if(filter === "completed") {
    //     tasksForToDoList = tasks.filter(task => task. === true)
    // }

    return (
        <div>
            <Todolist tasks={tasksForToDoList}
                      removeTask={removeTask}
                      setFilter={setFilter}/>
        </div>
    );


    //
}



export default AppTodolist;