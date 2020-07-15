import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Todolist from "./Todolist/Todolist";
import AppTodolist from "./Todolist/AppTodolist";
import Input from "./input/input";
import AppInput from "./input/App-input";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <AppTodolist />
    <AppInput />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
