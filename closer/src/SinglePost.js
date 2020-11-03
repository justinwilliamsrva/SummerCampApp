import React, { useState, useEffect } from "react";
import axios from "axios";
import Nav from "./Nav";

const SinglePost = (props) =>{
    const [post, setPost] = useState("");


    useEffect(() => {
        axios
        .get(`${process.env.REACT_APP_API}/post/${props.match.params.slug}`)
        .then((response) => {
            console.log(response, setPost(response.data));
        })
        .catch((error) => alert("Error loading single post"));
    }, []);

    return (
        <div className="container pb-5">
            <Nav />
            <br />
            <h2>{post.title}</h2>
            <p className="lead">{post.content}</p>
            <p>
                Author<span className="badge">{post.user}</span> Published on{""}
                <span className="badge">{new Date(post.createdAt).toLocaleString()}</span>
            </p>
        </div>
    );
}

export default SinglePost;