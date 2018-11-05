import React, {Component, Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'


class SushiContainer extends Component{
  state = {
    sushi: [],
    displaySushi: []
  }

  componentDidMount(){
    fetch("http://localhost:3000/sushis")
    .then(res => res.json())
    .then(objArray => this.setState({sushi: objArray}, () => {console.log(this.state.sushi)}))
  }



  sushiMapper = () => {
    this.state.sushi.map((sushi)=> {
      return(
        <div>
          <Sushi name={sushi.name} price={sushi.price} id={sushi.id} img={sushi.img_url} />
        </div>
      )
    })
  }

  render() {
    return (
      <Fragment>
        <div className="belt">
          {this.sushiMapper()}
          <MoreButton />
        </div>
      </Fragment>
    )
  }
}
export default SushiContainer
