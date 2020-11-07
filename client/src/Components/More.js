import React from "react";
import Nav from "../Nav";
import Footer from "../Components/Global/Footer";
import "../Components/Messages/App.css";

export default function More() {
    return (
        <div>
            <Nav />
            <section>
                <div id="app-header">
                    <h1>More Options</h1>
                </div>
                <hr />
                <br />

                <ul style={{listStyleType:"none"}}>
                    <li>

                        <h2><img src="/calendar.png" /> Calendar</h2>
                    </li>
                    <li>
                        <h2><img src="/phone-book.png" /> Contacts</h2>
                    </li>
                    <li>
                        <h2><img src="/door.png" /> Room Sign Out</h2>
                    </li>
                    <li>
                        <h2><img src="/airplane.png" /> Arrivals and Departures</h2>
                    </li>
                </ul>
            </section>
            <Footer />
        </div>
    );
}
