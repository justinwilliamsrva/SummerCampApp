import React, { useState, useEffect } from "react";
import Nav from "../../Nav";
import axios from "axios";
import { Link } from "react-router-dom";
import { getUser, getToken } from "../../helpers";
import "./App.css";
import Footer from "../Global/Footer"
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
        <div>
            <Nav />
            <section>
            <h1>All Messages</h1>
            {getUser() && (
                <Link to={`/create`} className="btn btn-lg btn-primary">
                    Create a New Message
                </Link>
                )}
                <hr />
     
            {posts.map((post, i) => (
                <div className="row" key={post._id}>
                    <div className="col pt-3 pb-2">
                        <div className="row">
                            <div className="col-md-10">
                                <h2>{post.title}</h2>

                                <p className="lead">{post.content}</p>
                                <p>
                                    From<span className="badge">{post.user}</span> Published on
                                    {""}
                                    <span className="badge">
                                        {new Date(post.updatedAt).toLocaleString()}
                                    </span>
                                </p>
                            </div>

                            {getUser() && (
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
                            )}
                        </div>
                        <hr/>
                    </div>
                </div>
            ))}
                </section>
             <Footer />
        </div>

    );
}
