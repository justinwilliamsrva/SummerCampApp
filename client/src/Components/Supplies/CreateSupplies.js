import React, { useState } from "react";
import axios from "axios";
import Nav from "../../Nav";
import { getUser, getToken } from "../../helpers";
import { useHistory } from "react-router-dom";
const Create = () => {
    // state
    const [state, setState] = useState({
        item: "",
        location: "",
        notes: ""
    });
    // destructure values from state
    const { item, location, notes} = state;

    // onchange event handler
    const handleChange = (name) => (event) => {
        // console.log('name', name, 'event', event.target.value);
        setState({ ...state, [name]: event.target.value });
    };

    let history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.table({ title, content, user });
        axios
            .post(
                `${process.env.REACT_APP_EQUIPT_API}/equiptment/create`,
                {item, location, notes}
            )
            .then((response) => {
                console.log(response);
                // empty state
                setState({ ...state, item:"", location:"", notes:""});
                // show sucess alert
                alert(`You have added ${response.data.item} to the supplies database`);
                let page = window.confirm("Would you like to add another item");
                if (page == true) {
                    history.push("/equiptment/create");
                }
                else { history.push("/equiptment"); }
            })
            .catch((error) => {

                console.log(error.response);
                alert("post error");
            });
    };

    return (
        <div className="container pb-5">
            <Nav />
            <h1>ADD AN ITEM</h1>
            <br />

            <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label className="text-muted">Item</label>
                <input
                    onChange={handleChange("item")}
                    value={item}
                    type="item"
                        className="form-control"
                        placeholder="Item Name"
                    required
                />
            </div>
            <div className="form-group">
                <label className="text-muted">Location</label>
                <input
                    onChange={handleChange("location")}
                    value={location}
                    type="text"
                        className="form-control"
                        placeholder="Where will this item be stored"
                    required
                />
            </div>
            <div className="form-group">
                <label className="text-muted">Notes</label>
                <input
                    onChange={handleChange("notes")}
                    value={notes}
                    type="text"
                        className="form-control"
                        placeholder="Extra information about condition or details"
                />
            </div>
            <div>
                <button className="btn btn-primary">Create</button>

            </div>
        </form>
        </div>
    );
};

export default Create;
