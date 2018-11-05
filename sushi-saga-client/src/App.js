import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushis: [],
    nomming: [],
    nommed: [],
    cashMoney: 500,
  }

  getSushis = () => {
    return fetch(API)
      .then(resp => resp.json())
  }

  setSushiState = (sushisJSON) => {
    this.setState(Object.assign({}, this.state, {
      sushis: sushisJSON,
    }))
  }

  componentDidMount() {
    this.getSushis()
    .then(sushis => {
      this.setSushiState(sushis)
    })
    .then(() => {
      this.setState(Object.assign({}, this.state, {
        nomming: this.getServed(this.state.sushis, 0)
      }))
    })
  }

  getServed = (sushis, i) => {
    const current = sushis.slice(i, i+4);
    this.setState(Object.assign({}, this.state, {
      sushis: sushis.slice(4),
    }))
    return current;
  }

  mayIhaveAnother = () => {
    if (this.state.cashMoney > 0) {
      this.getServed(this.state.sushis, 0)
    }
  }

  wheresMyMoney = (sushiPrice) => {
    this.setState(Object.assign({}, this.state, {
      cashMoney: this.state.cashMoney - sushiPrice,
    }))
  }

  render() {
    return (
      <div className="app">
        <SushiContainer
          sushis={this.state.nomming}
          mayIhaveAnother={this.mayIhaveAnother}
          wheresMyMoney={this.wheresMyMoney} />
        <Table cashMoney={this.state.cashMoney} />
      </div>
    );
  }
}

export default App;
