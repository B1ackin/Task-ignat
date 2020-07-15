import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {NewArray} from "./App-input";

export type InputType = {
    message: Array<NewArray>
    addName: (name: string) => void
}

function Input(props: InputType) {
    const [newMessage, setNewMessage] = useState(""); // для инпута

    function Hello(newMessage: string) {
        if (newMessage) alert("Hi " + newMessage)
    }

    const onClickPress = () => {
        props.addName(newMessage)
        Hello(newMessage)
        setNewMessage('')
    }
    const onKeyPress = (e: KeyboardEvent) => {
        if(e.charCode === 13) {
            props.addName(newMessage)
            Hello(newMessage)
            setNewMessage('')
        }
    }

    const ChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setNewMessage(e.currentTarget.value)
    }

    return (
        <div>
            <input value={newMessage}
                   onChange={ChangeInput}
                   onKeyPress={onKeyPress}
            />
            <button onClick={onClickPress}>+</button>
            <span>{props.message.length}</span>
        </div>
    )
}


export default Input;