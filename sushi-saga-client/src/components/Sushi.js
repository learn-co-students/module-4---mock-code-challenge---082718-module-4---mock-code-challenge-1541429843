import React, { Component } from 'react'

// const Sushi = (props) => {
//   debugger
// }

export default class Sushi extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nommed: false,
    }
  }

  nomming = () => {
    this.setState({
      nommed: true,
    })
    this.props.wheresMyMoney(this.props.sushi.price)
  }

  render() {
    return (
      <div className="sushi">
        <div className="plate"
          onClick={this.nomming}>
          {
            this.state.nommed ?
            null
            :
            <img src={this.props.sushi.img_url} width="100%" />
          }
        </div>
        <h4 className="sushi-details">
          {this.props.sushi.name} - ${this.props.sushi.price}
        </h4>
      </div>
    )
  }

}

// export default Sushi
