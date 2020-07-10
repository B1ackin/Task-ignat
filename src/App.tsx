import React from 'react';
import c from './App.module.css';
import ava from './minion.jpg';
import Dialog from "./Dialog";


function App() {
    return (
        <div className={c.telegram}>
            <div className={c.row}>
                <img className={c.img} src={ava}/>
            </div>
            <div className={c.row}>
                <div className={c.dialog}>
                    <Dialog message="Привет, как дела?" name="Valera" time="20:00"/>
                </div>
            </div>
        </div>
    );
}

export default App;
