import React, { Component } from 'react';

class ThumbBeer extends Component {

    render() {
        const { name, image_url, tagline, contributed_by } = this.props.beer
        return (
            <div className="thumbbeer">
                <div className="thumbbeer-image">
                    <img src={image_url} alt="beer" />
                </div>
                <div className="thumbbeer-info">
                    <div className="thumbbeer-name">{name}</div>
                    <div className="thumbbeer-tagline">{tagline}</div>
                    <div className="thumbbeer-created-by"><strong>Created by: </strong>{contributed_by}</div>
                </div>
            </div>
        )
    }
}

export default ThumbBeer;