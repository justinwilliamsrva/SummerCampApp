import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import axios from "axios";
import { Link } from "react-router-dom";

export default function App() {
    const [posts, setPosts] = useState([]);

    const fetchPosts = () => {
        axios
            .get(`${process.env.REACT_APP_API}/posts`)
            .then((response) => {
                console.log(response, setPosts(response.data));
            })
            .catch((error) => alert(error));
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <div className="container pb-5">
            <Nav />
            <h1>MERN CRUD</h1>
            <br />
            {posts.map((post, i) => (
                <div className="row" key={post._id}>
                    <div className="col pt-3 pb-2">
                        <div className="row">
                            <div className="col-md-10">
                                <Link to={`/post/${post.slug}`}>
                                    <h2>{post.title}</h2>
                                </Link>
                                <p className="lead">{post.content.substring(0, 10)}</p>
                                <p>
                                    Author<span className="badge">{post.user}</span> Published on
                                    {""}
                                    <span className="badge">
                                        {new Date(post.createdAt).toLocaleString()}
                                    </span>
                                </p>
                            </div>

                            <div className="col-md-2">
                      <Link to={`/post/update/${post.slug}`} className="btn btn-sm btn-outline-warning mr-1">
                                    Update
                      </Link>
                      <button className="btn btn-sm btn-outline-danger">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
