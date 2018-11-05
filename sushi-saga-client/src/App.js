import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';


// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    wallet: 200,
    sushitachi:[],
    misezushi:[],
    eaten: []
  }

  componentWillMount(){
    fetch(API).then(res => res.json()).then(json => {
      let sample = []
      while (sample.length < 4) {
          sample.push(Math.floor(Math.random()*json.length))
      }
      let miseyuku = []
      for (let idx of sample){miseyuku.push(json[idx])}
      miseyuku.forEach(sushi => {
        sushi["eaten"] = false
      })
      this.setState({
        sushitachi: json,
        misezushi: miseyuku
        })})
  }

  claimSushi = (sushi) => {
    if(this.state.wallet > sushi.price){
      let updatedsushi = this.state.misezushi.map(zushi => {
        zushi.id === sushi.id ? zushi.eaten = true : null
        return zushi
      })
      this.setState({
        eaten: [...this.state.eaten,sushi],
        wallet: this.state.wallet-sushi.price,
        misezushi: updatedsushi
      }, console.log(this.state))
    }
    else {
      alert("You cannot afford that sushi!")
    }
  }

  newSushi = () => {
    let sample = []
    while (sample.length < 4) {
        sample.push(Math.floor(Math.random()*this.state.sushitachi.length))
    }
    let miseyuku = []
    for (let idx of sample){miseyuku.push(this.state.sushitachi[idx])}
    miseyuku.forEach(sushi => {
      sushi["eaten"] = false
    })
    this.setState({
      misezushi: miseyuku
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer conveyorsushi={this.state.misezushi} claimSushi={this.claimSushi} newSushi={this.newSushi}/>
        <Table eaten={this.state.eaten} wallet={this.state.wallet}/>
      </div>
    );
  }
}

export default App;
