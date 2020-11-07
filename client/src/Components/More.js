import React from 'react'
import Nav from '../Nav'
import Footer from "../Components/Global/Footer"
import "../Components/Messages/App.css"

export default function More() {
    return (
        <div>
            <Nav />
            <section>
                <div id="app-header">

                    <h1>More Options</h1>
                </div>
                <hr />
                <br/>

                <ul class="fa-ul">
  <li><h2>Calendar</h2></li>
  <li><h2>Contacts</h2></li>
  <li><h2>Room Sign Out</h2></li>
  <li><h2>Arrivals and Departures</h2></li>
</ul>

            </section>
            <Footer />
        </div>
    )
}
