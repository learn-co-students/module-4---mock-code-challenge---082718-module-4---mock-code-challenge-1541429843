import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"


class App extends Component {
  constructor(props){
    super(props)
    this.state= {
      sushiData: [],
      isChosen: false
    }
  }
  componentDidMount(){
    fetch("http://localhost:3000/sushis")
      .then(r=>r.json())
      .then(resJson=> {
        this.setState({
          sushiData: resJson
        })
      })
  }
  showImage =(e)=>{
    let id = e.target.id
    let targetSushi =this.state.sushiData.find(sushi=> sushi.id === id)
    targetSushi.setState ({
      isChosen: true
    })
  }
  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushiData} eatSushi= {this.showImage}  isChosen={this.state.isChosen}/>
        <Table />
      </div>
    );
  }
}

export default App;
