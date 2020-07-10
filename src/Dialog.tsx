import React from 'react';
import d from './Dialog.module.css';

type MessageTypeProps = {
    name: string
    message: string
    time: string
}

function Dialog(props: MessageTypeProps) {
    return (
        <div className={d.dialog}>
            <div className={d.name}>{props.name}</div>
            <div className={d.message}>{props.message}</div>
            <div className={d.time}>{props.time}</div>
        </div>
    );
}


export default Dialog;
