import React, { useState, useEffect } from "react";
import axios from "axios";
import Nav from "../../Nav";
import { getUser, getToken } from "../../helpers";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "../Messages/App.css";
import Footer from "../Global/Footer";

const SingleCamper = (props) => {
    const [camper, setCamper] = useState("");

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_CAMPER_API}/camper/${props.match.params.slug}`)
            .then((response) => {
                console.log(response, setCamper(response.data));
            })
            .catch((error) => alert("Error loading single camper"));
    }, []);
    const deleteConfirm = (slug) => {
        let answer = window.confirm("Are you sure you want to delete this post?");

        if (answer) {
            deletePost(slug);
        }
    };
    let history = useHistory();

    const deletePost = (slug) => {
        axios
            .delete(`${process.env.REACT_APP_CAMPER_API}/camper/${slug}`, {
                headers: { authorization: `Bearer ${getToken()}` },
            })
            .then((response) => {
                console.log(response);
                alert(response.data.message);
                history.push("/campers");
            })
            .catch((error) => alert(error));
    };

    return (
        <div>
            <Nav />
            <section>
                <div id="app-header"  className="row">
                    <div className="col-md-8 col-lg-9">
                        <h2>
                            {camper.first_name} {camper.last_name} - {camper.age} - {camper.gender}
                        </h2>
                    </div>
                    <div className="col-md-4 col-lg-3">
                        <Link to={`/campers`} className="btn btn-sm btn-outline-primary mr-1">
                            Campers
                        </Link>
                        <Link
                            to={`/camper/update/${camper.slug}`}
                            className="btn btn-sm btn-outline-warning mr-1">
                            Update
                        </Link>
                        {getUser() && (
                            <button
                                onClick={() => deleteConfirm(camper.slug)}
                                className="btn btn-sm btn-outline-danger">
                                Delete
                            </button>
                        )}
                    </div>

                </div>
                <hr />
                <table>
                    <tr>
                        <th>Counselor:</th>
                        <td>{camper.counselor}</td>
                    </tr>
                    <tr>
                        <th>Address:</th>
                        <td>{camper.address}</td>
                    </tr>
                    <tr>
                        <th>Camper number:</th>
                        <td>{camper.camper_number}</td>
                    </tr>
                    <tr>
                        <th>Parent names: </th>
                        <td>{camper.parent_names}</td>
                    </tr>
                    <tr>
                        <th>Parent number:</th>
                        <td>{camper.parent_number}</td>
                    </tr>
                    <tr>
                        <th>Parent email: </th>
                        <td>{camper.parent_email}</td>
                    </tr>
                    <tr>
                        <th>Allergies: </th>
                        <td>{camper.allergies} </td>
                    </tr>
                </table>
            </section>
            <Footer />
        </div>
    );
};

export default SingleCamper;
