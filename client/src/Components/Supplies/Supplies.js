import React, { useState, useEffect } from "react";
import Nav from "../../Nav";
import axios from "axios";
import { Link } from "react-router-dom";
import { getUser, getToken } from "../../helpers";
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

    const deleteConfirm = (slug) => {
        let answer = window.confirm("Are you sure you want to delete this item?");

        if (answer) {
            deleteitem(slug);
        }
    };

    const deleteitem = (slug) => {
        axios
            .delete(`${process.env.REACT_APP_EQUIPT_API}/equiptment/${slug}`, {
                headers: { authorization: `Bearer ${getToken()}` },
            })
            .then((response) => {
                console.log(response);
                alert(response.data.message);
                fetchitems();
            })
            .catch((error) => alert(error));
    };

    return (
        <div className="container pb-5">
            <Nav />
            <h1>All Equiptment</h1>

            {getUser() && (
                <Link to={`equiptment/create`} className="btn btn-lg btn-primary">
                    Create a Item
                </Link>
            )}
            <br />
            <table class="table table-striped mt-1">
                <thead>
                    <tr>
                        <th scope="col">Item</th>
                        <th scope="col">Location</th>
                        <th scope="col">Available</th>
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
                            {item.availability ? <td>In Stock</td> : <td>Being Used</td>}
                            <td>{item.user}</td>
                            <td>{item.notes}</td>
                            </tr>

                    ))}

                </tbody>
            </table>
        </div>
    );
}
