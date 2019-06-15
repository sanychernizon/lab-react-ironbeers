import React, { Component } from 'react';
import axios from 'axios';

class NewBeer extends Component {

    constructor() {
        super()

        this.state = {
            name: '',
            tagline: '',
            description: '',
            first_brewed: '',
            brewers_tips: '',
            attenuation_level: 0,
            contributed_by: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()
        
        axios.post('https://ih-beer-api.herokuapp.com/beers/new', this.state)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });

        this.setState({
            name: '',
            tagline: '',
            description: '',
            first_brewed: '',
            brewers_tips: '',
            attenuation_level: 0,
            contributed_by: ''
        })
    }

    handleOnChange = (event) => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className="container">
                <div className="container-form">
                    <form method="POST" onSubmit={this.handleSubmit}>
                        <input type="text" name="name" placeholder="name" onChange={this.handleOnChange}></input>
                        <input type="text" name="tagline" placeholder="tagline" onChange={this.handleOnChange}></input>
                        <textarea type="text-area" name="description" placeholder="description" onChange={this.handleOnChange}></textarea>
                        <input type="text" name="first_brewed" placeholder="first brewed" onChange={this.handleOnChange}></input>
                        <input type="text" name="brewers_tips" placeholder="brewers tips" onChange={this.handleOnChange}></input>
                        <input type="number" name="attenuation_level" placeholder="attenuation level" onChange={this.handleOnChange}></input>
                        <input type="text" name="contributed_by" placeholder="contributed by" onChange={this.handleOnChange}></input>
                        <button onclick="submit">Add New</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default NewBeer;