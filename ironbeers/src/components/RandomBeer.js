import React, { Component } from 'react';

class RandomBeer extends Component {

    render() {
        const {
            name,
            image_url,
            attenuation_level,
            tagline,
            first_brewed,
            description,
            contributed_by
        } = this.props.randomBeer
        return (
            <div className="container center">
                <div className="beer-details">
                    <div className="beer-img">
                        <img src={image_url} alt={name} />
                    </div>
                    <div className="beer-name">
                        {name}
                    </div>
                    <div>
                        {attenuation_level}
                    </div>
                    <div>
                        {tagline}
                    </div>
                    <div>
                        {first_brewed}
                    </div>
                    <div>
                        {description}
                    </div>
                    <div>
                        {contributed_by}
                    </div>
                </div>
            </div>
        )
    }
}

export default RandomBeer;