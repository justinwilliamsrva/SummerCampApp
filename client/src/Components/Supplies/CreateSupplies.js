import React, { useState } from "react";
import axios from "axios";
import Nav from "../../Nav";
import { getUser, getToken } from "../../helpers";
import { useHistory } from "react-router-dom";
import "../Messages/App.css";
import Footer from "../Global/Footer";
const Create = () => {
    // state
    const [state, setState] = useState({
        item: "",
        availability:"",
        location: "",
        notes: ""
    });
    // destructure values from state
    const { item, location,availability, notes} = state;

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
                {item, location, availability, notes}
            )
            .then((response) => {
                console.log(response);
                // empty state
                setState({ ...state, item:"",availability:"", location:"", notes:""});
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
        <div>
            <Nav />
            <section>
            <h1>ADD AN ITEM</h1>
            <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label className="text-muted">Item</label>
                <input
                    onChange={handleChange("item")}
                    value={item}
                    type="text"
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
                        placeholder="Where will this item be stored?"
                    required
                />
                </div>
               <div className="form-group">
                <label className="text-muted">Status</label>
                <input
                    onChange={handleChange("availability")}
                    value={availability}
                    type="text"
                        className="form-control"
                        placeholder="What is the Status?"
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
            </section>
            <Footer />
        </div>
    );
};

export default Create;
