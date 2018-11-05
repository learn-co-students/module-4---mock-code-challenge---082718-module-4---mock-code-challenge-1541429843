import React, { Fragment, Component } from 'react'

class Sushi extends Component {

  state = {
    eaten: this.props.eaten
  }

  toggleEaten = () => {

    if (!this.state.eaten){
      this.setState({
        eaten: true
      })
      this.props.eatOneSushi()
      this.props.lowerPrice(this.props.price)
    }



  }

  render(){
      return (

        <div className="sushi">
          <div className="plate"
               onClick={this.toggleEaten}>
            { this.state.eaten ? null: <img src={this.props.sushiProps.img_url} width="100%" />}
          </div>
          <h4 className="sushi-details">
            {this.props.sushiProps.name} - ${this.props.sushiProps.price}
          </h4>
        </div>
      )
  }

}

export default Sushi
