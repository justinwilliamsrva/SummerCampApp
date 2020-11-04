import React, { useState, useEffect } from "react";
import axios from "axios";
import Nav from "./Nav";
import { getUser, getToken } from "./helpers";

export default function UpdatePost(props) {
    const [state, setState] = useState({
        title: "",
        content: "",
        slug: "",
        user: "",
    });

    const { title, content, slug, user } = state;
    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API}/post/${props.match.params.slug}`)
            .then((response) => {
                console.log(response);
                const { title, content, slug, user } = response.data;
                setState({ ...state, title, content, slug, user });
            })
            .catch((error) => alert("Error loading single post"));
    }, []);
    const handleChange = (name) => (event) => {
        // console.log('name', name, 'event', event.target.value);
        setState({ ...state, [name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.table({ title, content, user });
        axios
            .put(
                `${process.env.REACT_APP_API}/post/${slug}`,
                { title, content, user },
                { headers: { authorization: `Bearer ${getToken()}` } }
            )
            .then((response) => {
                console.log(response);
                const { title, content, slug, user } = response.data;

                setState({ ...state, title, content, user, slug });
                // show sucess alert
                alert(`Post titled ${title} is updated`);
            })
            .catch((error) => {
                console.log(process.env.REACT_APP_API);
                console.log(error.response);
                alert("error");
            });
    };

    const showUpdateForm = () => (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label className="text-muted">Title</label>
                <input
                    onChange={handleChange("title")}
                    value={title}
                    type="text"
                    className="form-control"
                    placeholder="Post title"
                    required
                />
            </div>
            <div className="form-group">
                <label className="text-muted">Content</label>
                <textarea
                    onChange={handleChange("content")}
                    value={content}
                    type="text"
                    className="form-control"
                    placeholder="Write something.."
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
                    placeholder="Your name"
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
            <h1>Update Post</h1>
            {showUpdateForm()}
        </div>
    );
}
