import React, { Component } from 'react';
import axios from 'axios';

class DetailsBeer extends Component {

    constructor(props) {
        super(props)

        this.state = {
            beerFound: ''
        }
    }

    componentWillMount() {
        const { id } = this.props.props.match.params;

        axios.get(`https://ih-beer-api.herokuapp.com/beers/${id}`)
            .then((response) => {
                this.setState({ beerFound: response.data })
            }).catch(error => console.log(error))
    }


    render() {

        const { 
            name,
            image_url,
            attenuation_level,
            tagline,
            first_brewed,
            description,
            contributed_by
        } = this.state.beerFound

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

export default DetailsBeer;