import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state={
    allSushi: [],
    customer: {
      eatenSushi:[],
      moneyLeft:100
    }
  }

  getSushi = () =>{
    fetch("http://localhost:3000/sushis")
      .then(res=> res.json())
      .then(parsed=> {
        this.setState({
          ...this.state,
          allSushi: parsed
        })
      })
  }

  deductPrice = (price) =>{
    // debugger
    this.setState({
      ...this.state,
      customer:{
        eatenSushi: [...this.state.customer.eatenSushi, price],
        moneyLeft: this.state.customer.moneyLeft - price
      }
    })
  }

  addTen=()=>{
    this.setState({
      ...this.state,
      customer:{
        ...this.state.customer,
        moneyLeft: this.state.customer.moneyLeft +10
      }
    })
  }

  componentDidMount(){
    this.getSushi()
  }

  render() {
    return (
      <div className="app">
        {this.state.customer.moneyLeft > 10 ? this.state.allSushi.length === 0 ? "Getting Sushi!" : <SushiContainer  allSushi={this.state.allSushi} deductPrice={this.deductPrice} wallet={this.state.customer.moneyLeft}/> : "Too poor for sushi!"}
        <Table customer={this.state.customer} addTen={this.addTen}/>
      </div>
    );
  }
}

export default App;
