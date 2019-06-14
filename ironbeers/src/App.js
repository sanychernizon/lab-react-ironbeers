import React, { Component } from 'react';
import { Route, Switch, Link } from "react-router-dom";
import axios from 'axios';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import ListBeer from './components/ListBeer';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';


class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      beers: '' 
    }
  }

  componentDidMount() {
    let allBeers = [];
    axios.get('https://ih-beer-api.herokuapp.com/beers')
      .then(function (response) {
        console.log(response.data)
        allBeers.push(response.data)
      }).catch(error => console.log(error))
    this.setState({beers: allBeers})
    console.log(this.state.beers);
  }

  render() {
    return (
      <div className="App">
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/beers" component={ListBeer} />
            <Route exact path="/random" component={RandomBeer} />
            <Route exact path="/new" component={NewBeer} />
          </Switch>
        </div>
      </div>
    );
  }

}

export default App;
