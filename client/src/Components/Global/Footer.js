import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./Footer.css";

const Footer = ({ history }) => {
    return (
        <footer id="footer" className="d-flex justify-content-center">
            <ul className="nav ">
                <li className=" px-2 pt-3 pb-3">
                    <Link to="/campers">Campers</Link>
                </li>
                <li className="px-2 pt-3 pb-3">
                    <Link to="/">Messages</Link>
                </li>
                <li className="px-2 pt-3 pb-3">
                    <Link to="/equiptment"><img src="/petition.png"/></Link>
                </li>
                <li className="px-2 pt-3 pb-3">
                    <Link to="/more"><img src="/more-24px.png"/></Link>
                </li>
            </ul>
        </footer>
    );
};

export default withRouter(Footer);
