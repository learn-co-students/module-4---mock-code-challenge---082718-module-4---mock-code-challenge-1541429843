import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor() {
    super();
    this.state = {
      sushiArray: [],
      sushiEaten: false,
      currSushi: '',
      totalMoney: '100'
    }
  }

  componentDidMount() {
    this.getSushi()
  }

  render() {
    return (
      <div className="app">
        <SushiContainer  sushiArray={this.state.sushiArray}  currSushi={this.state.currSushi} sushiEaten={this.state.sushiEaten} eatSushi={(event) => this.eatSushi(event)}/>
        <Table totalMoney={this.state.totalMoney}/>
      </div>
    );
  }

  getSushi = () => {
    fetch(API)
    .then(response => response.json())
    .then(json => {
      console.log('this is the returned array', json)
      this.setState({
        sushiArray: json
      })
    })
  }

  eatSushi = (event, price) => {
    debugger
    const newBalance = (this.state.bankAccount - price)
    console.log('eating the sushi')
    this.setState({
      sushiEaten: true,
      currSushi: event.target.id,
      bankAccount: newBalance
    }, () => console.log(this.state.currSushi))
  }

}//end of class

export default App;
