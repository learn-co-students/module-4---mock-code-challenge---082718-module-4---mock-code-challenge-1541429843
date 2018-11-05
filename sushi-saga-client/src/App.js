import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushiList: [],
    eatenSushi: [],
    budget: 50
  }

  eatOneSushi = () => {
    const eatenSushi = 1
    this.setState({
      numEatenSushi: this.state.eatenSushi.push(eatenSushi)
    })
  }

  componentDidMount() {
    fetch(API)
    .then(r => r.json())
    .then((sushiRes) => {
      this.setState({
        sushiList: sushiRes
      })
    })
  }

  lowerPrice = (sushiPrice) => {
    this.setState({
      budget: this.state.budget - sushiPrice
    })
  }

  render() {
    // console.log(this.state.sushiList);
    return (
      <div className="app">
        <SushiContainer lowerPrice={this.lowerPrice} sushiList={this.state.sushiList} eatOneSushi={this.eatOneSushi} />
        <Table budget={this.state.budget} eatenSushi={this.state.eatenSushi} />
      </div>
    );
  }
}

export default App;
