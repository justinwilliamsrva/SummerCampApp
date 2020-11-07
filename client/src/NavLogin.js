import React from "react";
import { Link, withRouter } from "react-router-dom";
import { getUser, logout } from "./helpers";
import "./Nav.css";

const NavLogin = ({ history }) => {
    return (
        <nav id="nav"className="nav nav-tabs">
            <img src="/fire1.png" width="50" height="50" />
            <h3>Camp Fire<span id="heading"> Staff App</span></h3>
        </nav>
    );
};

export default NavLogin;
