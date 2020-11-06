import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./Footer.css";

const Footer = ({ history }) => {
    return (
        <footer id="footer" className="d-flex justify-content-center">
            <ul className="nav ">
                <li className=" px-3 pt-3 pb-3">
                    <Link to="/campers">Campers</Link>
                </li>
                <li className="px-3 pt-3 pb-3">
                    <Link to="/">Messages</Link>
                </li>
                <li className="nav-item px-3 pt-3 pb-3">
                    <Link to="/equiptment">Supplies</Link>
                </li>
                <li className="nav-item px-3 pt-3 pb-3">
                    <Link to="/more">More</Link>
                </li>
            </ul>
        </footer>
    );
};

export default withRouter(Footer);
