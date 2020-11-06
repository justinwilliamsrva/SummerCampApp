import React, { useState, useEffect } from "react";
import axios from "axios";
import Nav from "../../Nav";
import { getUser, getToken } from "../../helpers";
import { useHistory } from "react-router-dom";
export default function UpdatePost(props) {
    const [state, setState] = useState({
        item: "",
        location: "",
        slug: "",
        user: "",
        availability: "",
        notes: "",
    })

    const { item, location, slug, user, availability, notes } = state;
    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_EQUIPT_API}/equiptment/${props.match.params.slug}`)
            .then((response) => {
                console.log(response);
                const { item, location, slug, user, availability, notes } = response.data;
                setState({ ...state, item, location, slug, user, availability, notes });
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
        // console.table({ title, content, user });
        axios
            .put(`${process.env.REACT_APP_EQUIPT_API}/equiptment/${slug}`, {
                item,
                location,
                slug,
                user,
                availability,
                notes,
            })
            .then((response) => {
                console.log(response);
                const { item, location, slug, user, availability, notes } = response.data;

                setState({ ...state, item, location, slug, user, availability, notes });
                // show sucess alert
                alert(`The item '${item}' is updated`);
                history.push("/equiptment");
            })
            .catch((error) => {
                console.log(error.response);
                alert("error");
            });
    };
    const deleteConfirm = (slug) => {
        let answer = window.confirm("Are you sure you want to delete this item?");

        if (answer) {
            deletePost(slug);
        }
    };


    const deletePost = (slug) => {

        axios
            .delete(`${process.env.REACT_APP_EQUIPT_API}/equiptment/${slug}`, {
                headers: { authorization: `Bearer ${getToken()}` },
            })
            .then((response) => {
                console.log(response);
                alert(response.data.message);
                history.push("/equiptment");

            })
            .catch((error) => alert(error));
    };


    const showUpdateForm = () => (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label className="text-muted">Location</label>
                <input
                    onChange={handleChange("location")}
                    value={location}
                    type="text"
                    className="form-control"
                    required
                />
            </div>

            <div className="form-group">
                <label className="text-muted">Status</label>
                <input
                    onChange={handleChange("availability")}
                    value={availability}
                    type="text"
                    className="form-control"
                    required
                />
            </div>

            <div className="form-group">
                <label className="text-muted">User</label>
                <input
                    onChange={handleChange("user")}
                    value={user}
                    type="text"
                    className="form-control"
                    required
                />
            </div>
            <div className="form-group">
                <label className="text-muted">Notes</label>
                <input
                    onChange={handleChange("notes")}
                    value={notes}
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
        <div className="container pb-5">
            <Nav />
            <br />
            <h1>
                Update <span style={{ color: "blue" }}>{item}</span> Information
            </h1>
            {showUpdateForm()}
            {getUser() && (
                <button
                    onClick={() => deleteConfirm(slug)}
                    className="btn btn-danger px-3">
                    Delete
                </button>
            )}

        </div>
    );
}
