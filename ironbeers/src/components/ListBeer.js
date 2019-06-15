import React, { Component } from 'react';
import ThumbBeer from './ThumbBeer';
import { NavLink } from "react-router-dom";

class ListBeer extends Component {

    render() {
        return (
            <div className="list-beers">
                {
                    this.props.beers.slice(0,15).map((item, index) => {
                        return <NavLink to={`/beers/${item._id}`} className="navlink"><ThumbBeer beer={item} key={index} /></NavLink>
                    })
                }
            </div>
        )
    }
}

export default ListBeer;