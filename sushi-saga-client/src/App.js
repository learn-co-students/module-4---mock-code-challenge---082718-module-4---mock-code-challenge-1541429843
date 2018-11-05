import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
// const API = "http://localhost:3000/sushis"

class App extends Component {

  state={
    allSushi: [],
    display: {
      start: 1,
      end: 4
    },
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
          allSushi: parsed.map(sushiObj=> {
            return sushiObj= {
              ...sushiObj,
              eaten: false}
          })
        })
      })
  }

  deductSushi = (price, sushiID) =>{
    const sushi = this.state.allSushi.map(sushiObj=>{
      return sushiObj.id === sushiID ? sushiObj.eaten = true : sushiObj
    })

    this.setState({
      ...this.state,
      sushi,
      customer:{
        eatenSushi: [...this.state.customer.eatenSushi, sushiID],
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

  showMore = () => {
    if (this.state.display.end > this.state.allSushi.length-4) {
      this.setState({
        ...this.state,
        display:{
          start: 1,
          end: 4
        }
      })
    } else {
      this.setState({
        ...this.state,
        display:{
          start: this.state.display.start +4,
          end: this.state.display.end +4,
        }
      })
    }
  }

  componentDidMount(){
    this.getSushi()
  }

  render() {
    return (
      <div className="app">
        {this.state.customer.moneyLeft > 9 ? this.state.allSushi.length === 0 ? "Getting Sushi!" : <SushiContainer  allSushi={this.state.allSushi} deductSushi={this.deductSushi} wallet={this.state.customer.moneyLeft} showMore={this.showMore} display={this.state.display}/> : "Too poor for sushi!"}
        <Table customer={this.state.customer} addTen={this.addTen}/>
      </div>
    );
  }
}

export default App;
