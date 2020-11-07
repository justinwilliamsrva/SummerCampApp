import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./Footer.css";

const Footer = ({ history }) => {
    return (
        <footer id="footer"className="d-flex justify-content-between" >
            <ul id="footerList" className="nav mx-4 py-1 py-md-2 py-lg-2 d-flex justify-content-between">
                <li className="pt-1 pt-lg-0 pb-2">
                    <Link to="/campers"><img src="/boy.png"/></Link>
                </li>
                <li className="pt-2 pt-lg-0 pb-2">
                    <Link to="/"><img src="/message.png"/></Link>
                </li>
                <li className="pt-1 pt-lg-0 pb-2">
                    <Link to="/equiptment"><img src="/petition.png"/></Link>
                </li>
                <li className="pt-1 pt-lg-0 pb-2">
                    <Link to="/more"><img src="/more.png"/></Link>
                </li>
                
            </ul>
        </footer>
    );
};

export default withRouter(Footer);
