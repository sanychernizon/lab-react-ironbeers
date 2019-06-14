import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Home extends Component {

    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to="/beers">All Beers</Link>
                    </li>
                    <li>
                        <Link to="/random">Random Beers</Link>
                    </li>
                    <li>
                        <Link to="/new">New Beer</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Home;