import React, { useState, useEffect } from "react";
import Nav from "../../Nav";
import axios from "axios";
import { Link } from "react-router-dom";
import { getUser, getToken } from "../../helpers";
import "../Messages/App.css";
import Footer from "../Global/Footer";
export default function Supplies() {
    const [campers, setcampers] = useState([]);

    const fetchcampers = () => {
        axios
            .get(`${process.env.REACT_APP_CAMPER_API}/campers`)
            .then((response) => {
                console.log(response, setcampers(response.data));
            })
            .catch((error) => alert(error));
    };

    useEffect(() => {
        fetchcampers();
    }, []);

    return (
        <div>
            <Nav />
            <section>
            <div id="app-header">
                <h1>All Campers</h1>
</div>
                <br />
                <div className="table-responsive">
                    <table class="table table-striped mt-1">
                        <thead>
                            <tr>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Number</th>
                                <th scope="col">Allergies</th>
                            </tr>
                        </thead>
                        <tbody>
                            {campers.map((camper, i) => (
                                <tr>
                                    <Link to={`/camper/${camper.slug}`}>
                                        <th key={camper._id}>{camper.first_name}</th>
                                    </Link>
                                    <td>{camper.last_name}</td>
                                    <td>{camper.camper_number}</td>
                                    <td>{camper.allergies}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
            <Footer />
        </div>
    );
}
