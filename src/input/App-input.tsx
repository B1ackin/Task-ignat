import React, {useState} from 'react';
import {v1} from "uuid";
import Input from "./input";


export type NewArray = {
    name: string,
    id: string
}

function AppInput() {
    const [message, setMessage] = useState<Array<NewArray>>([])

    let addName = (newMessage: string) => {
        if (newMessage) {
            let newName = {name: newMessage, id: v1()}
            let newArr = [...message, newName]
            setMessage(newArr)
        }
    }
    return (
        <Input addName={addName} message={message}/>

    )

}


export default AppInput;