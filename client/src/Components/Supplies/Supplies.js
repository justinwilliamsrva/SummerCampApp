import React, { useState, useEffect } from "react";
import Nav from "../../Nav";
import axios from "axios";
import { Link } from "react-router-dom";
import { getUser, getToken } from "../../helpers";
import "../Messages/App.css";
import Footer from "../Global/Footer";

export default function Supplies() {
    const [items, setitems] = useState([]);

    const fetchitems = () => {
        axios
            .get(`${process.env.REACT_APP_EQUIPT_API}/equiptment`)
            .then((response) => {
                console.log(response, setitems(response.data));
            })
            .catch((error) => alert(error));
    };

    useEffect(() => {
        fetchitems();
    }, []);


    return (
        <div>

            <Nav />
            <section>
            <h1>All Equiptment</h1>

            {getUser() && (
                <Link to={`equiptment/create`} className="btn btn-lg btn-primary">
                    Create a Item
                </Link>
            )}
            <br />
            <table class="table table-striped mt-1 table-responsive ">
                <thead>
                    <tr>
                        <th scope="col">Item</th>
                        <th scope="col">Location</th>
                        <th scope="col">Status</th>
                        <th scope="col">Last User</th>
                        <th scope="col">Notes</th>
                    </tr>
                </thead>
                <tbody>

                    {items.map((item, i) => (

                        <tr>
                            <Link to={`/equiptment/update/${item.slug}`}>
                                <th key={item._id}>{item.item}</th>
                                </Link>
                            <td>{item.location}</td>
                            <td>{item.availability}</td>
                            <td>{item.user}</td>
                            <td>{item.notes}</td>
                            </tr>

                    ))}

                </tbody>
                </table>
            </section>
            <Footer />
        </div>
    );
}
