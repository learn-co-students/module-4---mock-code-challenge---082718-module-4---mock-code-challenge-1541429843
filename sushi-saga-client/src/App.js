import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor(props){
      super(props)
      this.state = {
          sushis: []
      }
  }

  componentDidMount = () => {
    fetch(API)
      .then(res => res.json())
      // .then(resJ => console.log(resJ))
      .then(resJson => this.setState({
        sushis: resJson
      }))
    }

  removeSushi = () => {
    debugger
  }



  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushis} removeSushi={this.removeSushi}/>
        <Table />
      </div>
    );
  }
}

export default App;
