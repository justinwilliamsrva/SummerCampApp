import React, { useState, useEffect } from "react";
import axios from "axios";
import Nav from "./Nav";
import { getUser, getToken } from "./helpers";
import {Link} from "react-router-dom"

const SinglePost = (props) => {
    const [post, setPost] = useState("");

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API}/post/${props.match.params.slug}`)
            .then((response) => {
                console.log(response, setPost(response.data));
            })
            .catch((error) => alert("Error loading single post"));
    }, []);

    const fetchPosts = () => {
        axios
            .get(`${process.env.REACT_APP_API}/posts`)
            .then((response) => {
                console.log(response, setPost(response.data));
            })
            .catch((error) => alert(error));
    };

    const deleteConfirm = (slug) => {
        let answer = window.confirm("Are you sure you want to delete this post?");

        if (answer) {
            deletePost(slug);
        }
    };

    const deletePost = (slug) => {
        axios
            .delete(`${process.env.REACT_APP_API}/post/${slug}`, {
                headers: { authorization: `Bearer ${getToken()}` },
            })
            .then((response) => {
                console.log(response);
                alert(response.data.message);
                fetchPosts();
            })
            .catch((error) => alert(error));
    };

    return (
        <div className="container pb-5">
            <Nav />
            <br />
            <div className="col-md-10">
                <h2>{post.title}</h2>
                <p className="lead">{post.content}</p>
                <p>
                    Author<span className="badge">{post.user}</span> Published on{""}
                    <span className="badge">{new Date(post.createdAt).toLocaleString()}</span>
                </p>
            </div>
            <div className="col-md-2">
                <Link
                    to={`/post/update/${post.slug}`}
                    className="btn btn-sm btn-outline-warning mr-1">
                    Update
                </Link>
                <button
                    onClick={() => deleteConfirm(post.slug)}
                    className="btn btn-sm btn-outline-danger">
                    Delete
                </button>
            </div>
        </div>
    );
};

export default SinglePost;
