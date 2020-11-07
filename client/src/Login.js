import React, { useState, useEffect } from 'react'
import axios from "axios"
import { Link, withRouter } from "react-router-dom"
import Nav from "./Nav"
import { authenticate, getUser } from "./helpers"
import "./Components/Messages/App.css";
import Footer from "./Components/Global/Footer";



const Login = (props) => {

    // create a state
    const [state, setState] = useState({

        name: "",
        password: ""

    });

    useEffect(() => {
        getUser() && props.history.push('/')
    }, []);
    const { name, password } = state
    const handleChange = name => event => {
        // console.log('name', name, 'event', event.target.value);
        setState({ ...state, [name]: event.target.value });
    };

    const handleSubmit = event => {
        event.preventDefault();
        console.table({ name, password });
        axios
            .post(`${process.env.REACT_APP_API}/login`, { name,password })
            .then(response => {
                console.log(response);
                // response will contain token
                authenticate(response,()=> props.history.push('/'))
                // redirect to
            })
            .catch(error => {
                console.log(process.env.REACT_APP_API)
                console.log(error.response);
                alert(error.response.data.error);
            });
    };

    return (
        <div>
            <Nav />
            <section>
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
            </section>
            <Footer />
            </div>
    )}
export default withRouter(Login);