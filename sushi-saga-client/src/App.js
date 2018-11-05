import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor() {
    super()
    this.state = {
      sushis: [],
      nomming: [],
      remnantsOfRavenousGluttony: [],
      cashMoney: 500,
    }
    this.mayIhaveAnother = this.mayIhaveAnother.bind(this)
  }

  getSushis = () => {
    return fetch(API)
      .then(resp => resp.json())
  }

  setSushiState = (sushisJSON) => {
    const allSushis = sushisJSON.map(sushi => {
      return Object.assign({}, sushi, {nommed: false})
    })
    this.setState(Object.assign({}, this.state, {
      sushis: allSushis,
    }))
  }

  componentDidMount() {
    this.getSushis()
    .then(sushis => {
      this.setSushiState(sushis)
    })
    .then(() => {
      this.getServed()
    })
  }

  getServed = (i=0) => {
    const current = this.state.sushis.slice(i, i+4);
    this.setState(Object.assign({}, this.state, {
      sushis: this.state.sushis.slice(4),
      nomming: current,
    }))
  }

  mayIhaveAnother = () => {
    if (this.state.cashMoney > 0) {
      this.getServed();
    }
  }


  epicMealTime = (nomz) => {
    if (this.state.cashMoney - nomz.price >= 0) {
      if (nomz.nommed === false) {
        const i = this.state.nomming.findIndex(sushi => sushi.id === nomz.id);
        const newNomming = this.state.nomming.slice();
        newNomming[i] = Object.assign({}, nomz, {nommed: true})
        this.setState(Object.assign({}, this.state, {
          nomming: newNomming,
          cashMoney: this.state.cashMoney - nomz.price,
          remnantsOfRavenousGluttony: [...this.state.remnantsOfRavenousGluttony, nomz]
        }))
      }
    } else {
      alert('not enough mana')
    }
  }

  takeMyMoney = () => {
    this.setState(Object.assign({}, this.state, {
      cashMoney: this.state.cashMoney + 20,
    }))
  }

  render() {
    return (
      <div className="app">
        <SushiContainer
          sushis={this.state.nomming}
          mayIhaveAnother={this.mayIhaveAnother}
          wheresMyMoney={this.wheresMyMoney}
          takeMyMoney={this.takeMyMoney}
          epicMealTime={this.epicMealTime}
        />
        <Table
          cashMoney={this.state.cashMoney}
          remnantsOfRavenousGluttony={this.state.remnantsOfRavenousGluttony}
        />
      </div>
    );
  }
}

export default App;
