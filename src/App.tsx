import React from 'react';
import {HashRouter, Route,Redirect} from "react-router-dom";
import {PreJunior} from "./NavBar/PreJunior";
import {Junior} from "./NavBar/Junior";
import {JuniorPlus} from "./NavBar/JuniorPlus";
import NavBar from "./NavBar/NavBar";



function App() {
    return (
        <HashRouter>
            <div>
                <NavBar/>
            <Route exact path="/prejunior" component={PreJunior}/>
                <Redirect to="/prejunior " />
            <Route path="/junior" component={Junior}/>
            <Route path="/juniorplus" component={JuniorPlus}/>
            </div>
        </HashRouter>
    );
}

export default App;
