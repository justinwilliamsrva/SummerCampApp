import React, { useState, useEffect } from "react";
import axios from "axios";
import Nav from "../../Nav";
import { getUser, getToken } from "../../helpers";
import { useHistory } from "react-router-dom";
import "../Messages/App.css";
import Footer from "../Global/Footer";

export default function UpdatePost(props) {
    const [state, setState] = useState({
        counselor: "",
        address: "",
        camper_number: "",
        parent_names: "",
        parent_number: "",
        parent_email: "",
        age: "",
        gender: "",
        allergies: "",
    });

    const { first_name, slug, last_name, counselor,address,camper_number,parent_names,parent_number,parent_email,age,gender,allergies } = state;
    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_CAMPER_API}/camper/${props.match.params.slug}`)
            .then((response) => {
                console.log(response);
                const { first_name, last_name, slug, counselor,address,camper_number,parent_names,parent_number,parent_email,age,gender,allergies } = response.data;
                setState({ ...state, first_name, slug, last_name, counselor,address,camper_number,parent_names,parent_number,parent_email,age,gender,allergies  });
            })
            .catch((error) => alert("Error loading single post"));
    }, []);
    const handleChange = (name) => (event) => {
        // console.log('name', name, 'event', event.target.value);
        setState({ ...state, [name]: event.target.value });
    };
    let history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .put(`${process.env.REACT_APP_CAMPER_API}/camper/${slug}`, {
                first_name, last_name, counselor,address,camper_number,parent_names,parent_number,parent_email,age,gender,allergies
            })
            .then((response) => {
                console.log(response);
                const { first_name, last_name, slug, counselor,address,camper_number,parent_names,parent_number,parent_email,age,gender,allergies  } = response.data;

                setState({ ...state, first_name, slug, last_name, counselor,address,camper_number,parent_names,parent_number,parent_email,age,gender,allergies });
                // show sucess alert
                alert(`${first_name}, ${last_name}'s information was updated`);
                history.push(`/camper/${slug}`);
            })
            .catch((error) => {
                console.log(error.response);
                alert("error");
            });
    };


    const showUpdateForm = () => (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label className="text-muted">Couneslor</label>
                <input
                    onChange={handleChange("counselor")}
                    value={counselor}
                    type="text"
                    className="form-control"
                />
            </div>

            <div className="form-group">
                <label className="text-muted">Address</label>
                <input
                    onChange={handleChange("address")}
                    value={address}
                    type="text"
                    className="form-control"
                    required
                />
            </div>
            <div className="form-group">
                <label className="text-muted">Camper Number</label>
                <input
                    onChange={handleChange("camper_number")}
                    value={camper_number}
                    type="text"
                    className="form-control"
                />
            </div>
            <div className="form-group">
                <label className="text-muted">Parent Names</label>
                <input
                    onChange={handleChange("parent_names")}
                    value={parent_names}
                    type="text"
                    className="form-control"
                    required
                />
            </div>
            <div className="form-group">
                <label className="text-muted">Parent Number</label>
                <input
                    onChange={handleChange("parent_number")}
                    value={parent_number}
                    type="text"
                    className="form-control"
                    required
                />
            </div>
            <div className="form-group">
                <label className="text-muted">Parent Email</label>
                <input
                    onChange={handleChange("parent_email")}
                    value={parent_email}
                    type="text"
                    className="form-control"
                    required
                />
            </div>
            <div className="form-group">
                <label className="text-muted">Age</label>
                <input
                    onChange={handleChange("age")}
                    value={age}
                    type="text"
                    className="form-control"
                    required
                />
            </div>
            <div className="form-group">
                <label className="text-muted">Gender</label>
                <input
                    onChange={handleChange("gender")}
                    value={gender}
                    type="text"
                    className="form-control"
                    required
                />
            </div>
            <div className="form-group">
                <label className="text-muted">Allergies</label>
                <input
                    onChange={handleChange("allergies")}
                    value={allergies}
                    type="text"
                    className="form-control"
                    required
                />
            </div>
            <div>
                <button className="btn btn-primary">Update</button>
            </div>
        </form>
    );

    return (
        <div>
            <Nav />
            <section>
            <br />
            <h1>
                Update <span style={{ color: "blue" }}>{first_name} {last_name}'s</span> Information
            </h1>
            {showUpdateForm()}
            </section>
            <Footer />
        </div>
    );
}
