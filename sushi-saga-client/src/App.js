import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      sushis: []
    };
  }// constructor starts with initial array as empty

  componentDidMount() {
    fetch(API)
    .then((response) => {
      return response.json()
    })
    .then((sushiObj) => {
        this.setState = {
          sushis: sushiObj
        }
      })
    }


  render() {
    let newList = this.state.sushis.slice(0,4) //only four elements in the array
    let sushiList = newList.map((sushi) => {
      return(
        <div key={sushi.id}>
           <h1>sushi.name</h1>
           <img src={sushi.img_url}/>
         </div>
       )
   })

    return (
      <div className="app">
        {sushiList}
        <SushiContainer />
        <Table />
      </div>
    );
  }


} //end of class app


export default App;
