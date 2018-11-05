import React, { Fragment } from 'react'

class Sushi extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      eaten: false
    }
  }

  eat = (event, sushi) => {
    if (this.props.eatSushi(event, sushi)) {
      this.setState({
        eaten: true
      })
    }
  }

  render() {
    return (
      <div className="sushi">
        <div className="plate"
             onClick={(event) => this.eat(event, this)}>
          {
            /* Tell me if this sushi has been eaten! */
            this.state.eaten ?
              null
            :
              <img src={this.props.img_url} width="100%" />
          }
        </div>
        <h4 className="sushi-details">
          {this.props.name} - ${this.props.price}
        </h4>
      </div>
    )
  }

}

export default Sushi
