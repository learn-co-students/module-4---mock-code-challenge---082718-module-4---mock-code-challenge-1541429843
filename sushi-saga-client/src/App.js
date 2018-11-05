import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      sushis: [],
      offset: 0,
      money: 100,
      eatenSushis: []
    }
  }

  componentDidMount() {
    fetch(API)
    .then(res => res.json())
    .then(json => this.addSushis(json))
  }

  addSushis = (jsonArray) => {
    const newSushis = jsonArray.map( sushi => {
      sushi.eaten = false
      return sushi
    })

    this.setState({
      sushis: newSushis
    })
  }

  nextSushiSet = () => {
    let newOffSet = this.state.offset + 4
    if (newOffSet >= 100) {
      newOffSet = 0
    }
    this.setState({
      offset: newOffSet
    })
  }

  eatSushi = (event, sushi) => {
    event.preventDefault()
    console.log(this.state.money - sushi.props.price)
    if (this.state.money - sushi.props.price < 0) {
      return false
    }
    this.setState({
      money: this.state.money - sushi.props.price,
      eatenSushis: this.state.eatenSushis.concat(sushi)
    })
    return true
  }

  render() {
    return (
      <div className="app">
        <SushiContainer
          sushis={this.state.sushis}
          offset={this.state.offset}
          handleNext={this.nextSushiSet}
          eatSushi={this.eatSushi}
          />
        <Table
          money={this.state.money}
          eaten={this.state.eatenSushis} />
      </div>
    );
  }
}

export default App;
