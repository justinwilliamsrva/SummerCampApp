import React, { useState, useEffect } from 'react'
import axios from "axios"
import { Link } from "react-router-dom"
import Nav from "./Nav"


export default function Login() {

    // create a state
    const [state, setState] = useState({

        name: "",
        password:""

    })

    const { name, password } = state
    const handleChange = name => event => {
        // console.log('name', name, 'event', event.target.value);
        setState({ ...state, [name]: event.target.value });
    };

    const handleSubmit = event => {
        event.preventDefault();
        console.table({ name, password });
        // axios
        //     .post(`${process.env.REACT_APP_API}/post`, { title, content, user })
        //     .then(response => {
        //         console.log(response);
        //         // empty state
        //         setState({ ...state, title: '', content: '', user: '' });
        //         // show sucess alert
        //         alert(`Post titled ${response.data.title} is created`);
        //     })
        //     .catch(error => {
        //         console.log(process.env.REACT_APP_API)
        //         console.log(error.response);
        //         alert("error");
        //     });
    };

    return (
        <div className="container pb-5">
            <Nav/>
            <h1>LOGIN</h1>
            <br />

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="text-muted">Name</label>
                    <input
                        onChange={handleChange('name')}
                        value={name}
                        type="text"
                        className="form-control"
                        placeholder="Your Name"
                        required
                    />
                </div>

                <div className="form-group">
                    <label className="text-muted">Password</label>
                    <input
                        onChange={handleChange('password')}
                        value={password}
                        type="text"
                        className="form-control"
                        placeholder="Your Password"
                        required
                    />
                </div>
                <div>
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
            </div>
    )}
