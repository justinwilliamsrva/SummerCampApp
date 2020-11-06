import React from "react";
import { Link, withRouter } from "react-router-dom";
import { getUser, logout } from "./helpers";
import "./Nav.css";

const Nav = ({ history }) => {
    return (
        <nav id="nav"className="nav nav-tabs">
            <img src="/fire1.png" width="50" height="50" />
            <h3>Camp Fire</h3>

            <ul className="nav ml-auto">
                {!getUser() && (
                    <li className="nav-item ml-auto pr-3">
                        <Link to="/login">Login</Link>
                    </li>
                )}
                {getUser() && (
                    <li
                        onClick={() => logout(() => history.push("/"))}
                        style={{ cursor: "pointer" }}
                        className="nav-item ml-auto pr-3">
                        Logout
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default withRouter(Nav);
