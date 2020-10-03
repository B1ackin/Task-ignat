import React from "react";
import {NavLink} from "react-router-dom";


export const NavBar = () => {
    return (
        <div>
            <div>
            <NavLink to="/prejunior">PreJunior</NavLink>
            </div>
            <div>
            <NavLink to="/junior">Junior</NavLink>
            </div>
            <div>
            <NavLink to="/juniorplus">Junior+</NavLink>
            </div>
        </div>
    )
}