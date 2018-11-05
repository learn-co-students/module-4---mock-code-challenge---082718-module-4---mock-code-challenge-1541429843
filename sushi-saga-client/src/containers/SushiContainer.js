import React, { Component } from 'react';
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends Component {

  constructor() {
    super()
    this.state = {

    }
  }

  // renderSushi = () => {
  //
  // }


  mapThroughSushi = (json) => {
    return json.map(sushi => {
      return <Sushi sushi={sushi}/>
    })
  }

  componentDidMount() {
    fetch("http://localhost:3000/sushis")
    .then(resp => resp.json())
    .then(json => {
      return this.mapThroughSushi(json)
      }
    )
  }


  render () {
    return (
      <div>
      <div className="belt">
          {}
          <MoreButton />
        </div>
      </div>
    )
  }
}

export default SushiContainer
