import React from "react";
import { Link, withRouter } from "react-router-dom";
import {getUser, logout} from "./helpers"

const Nav = ({history}) => {
    return (
        <nav>
        <ul className="nav nav-tabs">
            {/* <li className="nav-item pr-3 pt-3 pb-3">
                <Link to="/calendar">Calendar</Link>
            </li> */}
            <li className="nav-item pr-3 pt-3 pb-3">
                <Link to="/campers">Campers</Link>
                </li>
                <li className="nav-item pr-3 pt-3 pb-3">
                <Link to="/">Messages</Link>
                </li>
                <li className="nav-item pr-3 pt-3 pb-3">
                <Link to="/equiptment">Supplies</Link>
                </li>


                {!getUser() && (
                    <li className="nav-item ml-auto pr-3 pt-3 pb-3">
                        <Link to="/login">Login</Link>
                    </li>
                )}
                   {getUser() && (
                    <li onClick={() => logout(() => history.push("/"))} style={{cursor: "pointer"}}className="nav-item ml-auto pr-3 pt-3 pb-3">
                        Logout
                    </li>
                )}
        </ul>
    </nav>
    )
}

export default withRouter(Nav);
