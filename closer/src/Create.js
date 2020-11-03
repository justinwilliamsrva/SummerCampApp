import React, { useState } from "react";

export default function Create() {
    const [state, setState] = useState({
        // state
        title: "",
        content: "",
        user: "",
    });

    const { title, content, user } = state;

    function handleChange(name) {
        return function (event) {
            // console.log("name", name, "event", event.target.value)
            setState({ ...state, [name]: event.target.value })


        }
    }

    return (
        <div className="container p-5">
            <h1>CREATE POST</h1>
            <br />
            <form>
                <div className="form-group">
                    <label className="text-muted">Title</label>
                    <input
                        onChange={handleChange("title")}
                        value={title}
                        type="text"
                        className="form-control"
                        placeholder="Post Title"
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
                        placeholder="Write Something.."
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
                    <button className="btn btn-primary">Create</button>
                </div>
            </form>
        </div>
    );
}
