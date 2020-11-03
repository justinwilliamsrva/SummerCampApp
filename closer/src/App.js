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
                        <Link to={`/post/${post.slug}`}><h2>{post.title}</h2></Link>
                        <p className="lead">{post.content.substring(0,10)}</p>
                        <p>
                            Author<span className="badge">{post.user}</span> Published on{""}
                            <span className="badge">
                                {new Date(post.createdAt).toLocaleString()}
                            </span>
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}
