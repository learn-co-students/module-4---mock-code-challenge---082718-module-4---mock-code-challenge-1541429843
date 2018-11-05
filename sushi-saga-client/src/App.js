import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: []
  }

  getSushis = () => {
    fetch(API)
      .then(response => response.json())
      .then(sushiObjs => {
        this.setState({
          sushis: sushiObjs
        })
      })
  }

  componentDidMount(){
    this.getSushis()
  }

  render() {
    console.log('app rendered')
    console.log(this.state)
    return (
      <div className="app">
        <SushiContainer
          sushis={this.state.sushis}/>
        <Table />
      </div>
    );
  }
}

export default App;
