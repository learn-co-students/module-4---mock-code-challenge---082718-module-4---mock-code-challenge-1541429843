import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {sushies: [] }
  }


  getInfo = () => {
    fetch(API)
    .then((response) => {
      return response.json();
    })
    .then((myJson) => {
      this.setState({sushies: myJson})
      console.log(myJson);
    });
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushies={this.state.sushies}  />
        <Table />
      </div>
    );
  }

  componentDidMount() {
    this.getInfo()
  }

}

export default App;
