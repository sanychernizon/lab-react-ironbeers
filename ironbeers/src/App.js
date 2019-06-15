import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import axios from 'axios';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import ListBeer from './components/ListBeer';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import DetailsBeer from './components/DetailsBeer';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      beers: [],
      beerFound: '',
      randomBeer: ''
    }

    this.findItem= this.findItem.bind(this)
  }

  handleListComponent = () => <ListBeer beers={this.state.beers} />
  handleRandomBeer = () => <RandomBeer randomBeer={this.state.randomBeer} />
  handleDetailsBeer = (props) => <DetailsBeer beers={this.state.beers} props={props} findItem={this.findItem}  />
  
  findItem(id) {
    let copyBeers = [...this.state.beers]
    const beerFound = copyBeers.find((item) => {
        return item._id === id
    })
    console.log(copyBeers)
    console.log(beerFound)
    this.setState({beerFound: beerFound})
  }

  componentDidMount() {
    axios.get('https://ih-beer-api.herokuapp.com/beers')
      .then((response) => {
        this.setState({ beers: response.data })
      }).catch(error => console.log(error))

    axios.get('https://ih-beer-api.herokuapp.com/beers/random')
    .then((response) => {
      this.setState({ randomBeer: response.data })
    }).catch(error => console.log(error))
  }
    
    render() {
    
    return (
      <div className="App">
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/beers" render={this.handleListComponent} />
            <Route path="/beers/:id" render={this.handleDetailsBeer} />
            <Route exact path="/random" render={this.handleRandomBeer} />
            <Route exact path="/new" component={NewBeer} />
          </Switch>
        </div>
      </div>
    );
  }

}

export default App;
