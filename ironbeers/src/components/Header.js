import React, { Component } from 'react';
import App from '../App';
import { Link } from "react-router-dom";

class Header extends Component {

    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Header;