import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor(){
    super()
    this.state = {

    }
  }



  render() {
    return (
      <div className="app">
        <SushiContainer
        api={API}/>
        <Table />
      </div>
    );
  }
}

export default App;
