import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import MoreMoney from './components/MoreMoney';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  getSushi = () => {
    fetch(API)
    .then(r => r.json())
    .then(sushis => {
      this.setState({
        sushis: sushis
      })
    })
    .then(() => this.displayFour())
  }

  displayFour = () => {
    const index = this.state.displayIndex
    const sushis = this.state.sushis
    const displayedSushis = sushis.slice(index, index + 4)

    this.setState({
      displayedSushis: displayedSushis
    })
  }

  more = () => {
    const newDisplayIndex = (this.state.displayIndex + 4) % this.state.sushis.length
    this.setState(
      {
        displayIndex: newDisplayIndex
      },
      () => this.displayFour()
    )
  }

  eat = (sushi) => {
    if (!this.checkEaten(sushi.id) && this.canPay(sushi)) {
      const newEatenSushis = this.state.eatenSushis.push(sushi.id)
      this.setState({
        eatensushis: newEatenSushis
      })

      this.payForSushi(sushi)
    }
  }

  checkEaten = (id) => {
    return this.state.eatenSushis.includes(id)
  }

  canPay = (sushi) => {
    return sushi.price <= this.state.money
  }

  payForSushi = (sushi) => {
    const newMoney = this.state.money - sushi.price
    this.setState({
      money: newMoney
    })
  }

  topUp = (value) => {
    const newMoney = this.state.money + value
    this.setState({
      money: newMoney
    })
  }

  /////////////////////////////

  constructor() {
    super()
    this.state = {
      sushis: [],
      eatenSushis: [],
      displayIndex: 0,
      displayedSushis: [],
      money: 100
    }
  }

  componentDidMount() {
    this.getSushi()
  }

  render() {
    return (
      <div className="app">
        <SushiContainer
          displayedSushis={this.state.displayedSushis}
          more={this.more}
          eat={this.eat}
          checkEaten={this.checkEaten}
        />
        <Table
          eatenSushis={this.state.eatenSushis}
          money={this.state.money}
        />
        <MoreMoney
          topUp={this.topUp}
        />
      </div>
    );
  }
}

export default App;
