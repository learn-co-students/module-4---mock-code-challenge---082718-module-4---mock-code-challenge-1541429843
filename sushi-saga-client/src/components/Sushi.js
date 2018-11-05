import React, { Component } from 'react'

export default class Sushi extends Component {

  state ={
    eaten: false
  }

  handleClick = () =>{
    if (this.props.wallet < this.props.sushi.price){
      alert("You're too poor for this sushi!")
    } else {
      this.setState({
        eaten: true
      }, ()=> this.props.deductPrice(this.props.sushi.price))
    }
  }

  render() {
    return (
      <div className="sushi">
        <div className="plate"
             onClick={this.handleClick}>
          { this.state.eaten ? null : <img src={this.props.sushi.img_url} width="100%" /> }
        </div>
        <h4 className="sushi-details">
          {this.props.sushi.name} - ${this.props.sushi.price}
        </h4>
      </div>
    )
  }
}
