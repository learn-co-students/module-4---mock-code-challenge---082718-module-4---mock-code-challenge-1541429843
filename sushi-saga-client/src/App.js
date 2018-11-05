import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
// const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      sushis: [],
      cash: 100,
      sushiCounter: 0,
    }
  }

  componentDidMount() {
    this.getSushis()
  }

  addEaten = (sushiArray) => {
    sushiArray.map(sushi => {
      sushi.eaten = false
    })
    this.setState({
      sushis: sushiArray
    })
  }

  getSushis = () => {
    fetch("http://localhost:3000/sushis")
    .then(result => result.json())
    .then(result => this.addEaten(result))
  }

  updateSushiCounter = () => {
    let updatedSushiCounter = this.state.sushiCounter + 4
    this.setState({
      sushiCounter: updatedSushiCounter
    })
  }

  eatSushi = (id, price) => {
    console.log(id)
    console.log(price)
    if ((this.state.cash - price) >= 1) {
      let updatedState = this.state.sushis.map(sushi => {
          return (id === sushi.id ? { ...sushi, eaten: true } : sushi)
        }
      )
      this.setState({
        sushis: updatedState,
        cash: this.state.cash - price
      })
    }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushis} sushiCounter={this.state.sushiCounter} updateCounter={this.updateSushiCounter} eatSushi={this.eatSushi} />
        <Table moneyLeft={this.state.cash} />
      </div>
    );
  }
}

export default App;
