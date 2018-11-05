import React, {Component} from 'react'

class Sushi extends Component{

  state = {
    eaten: false
  }

  callback = () => {
    debugger
  }


  render(){
    return (
      <div className="sushi">
        <div className="plate"
             onClick={ this.callback }>
          { this.state.eaten  ?
              null
            :
              <img src={this.props.img} width="100%" alt="" />
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
