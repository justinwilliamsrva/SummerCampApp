import React, { useState, useEffect } from "react";
import axios from "axios";
import Nav from "../../Nav";
import { getUser, getToken } from "../../helpers";
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom";


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
        <div className="container pb-5">
            <Nav />
            <br />
            <div className="col-md-10">
            <div>
            <Link
                    to={`/campers`}
                    className="btn btn-sm btn-outline-primary mr-1">
                    Campers
                </Link>
                    <Link
                    to={`/camper/update/${camper.slug}`}
                    className="btn btn-sm btn-outline-warning mr-1">
                    Update
                </Link>
                    {getUser() && (<button
                        onClick={() => deleteConfirm(camper.slug)}
                        className="btn btn-sm btn-outline-danger">
                        Delete
                </button>)}

                <h2>{camper.first_name}  {camper.last_name} </h2>
                </div>

                <hr/>
                <br />
                <p>Counselor: {camper.counselor} </p>
                <p>Address: {camper.address} </p>
                <p>Camper number: {camper.camper_number} </p>
                <p>Parent names: {camper.parent_names} </p>
                <p>Parent number: {camper.parent_number} </p>
                <p>Parent email: {camper.parent_email} </p>
                <p>Age: {camper.age} </p>
                <p>Gender: {camper.gender} </p>
                <p>Allergies: {camper.allergies} </p>


            </div>

        </div>
    );
};

export default SingleCamper;
