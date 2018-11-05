import React, { Component, Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

export default class SushiContainer extends Component {

  state={
    displayStart: 1,
    displayEnd: 4
  }

  showMore = () => {
    this.setState({
      displayStart: this.state.displayStart + 4,
      displayEnd: this.state.displayEnd + 4,
    })
  }

  render(){
    return (
      <Fragment>
        <div className="belt">
          {this.props.allSushi.filter(sushi => sushi.id >= this.state.displayStart && sushi.id <= this.state.displayEnd).map(sushi=> <Sushi key={sushi.id} sushi={sushi} deductPrice={this.props.deductPrice} wallet={this.props.wallet}/>)}
          <MoreButton showMore={this.showMore} />
        </div>
      </Fragment>
    )
  }
}
