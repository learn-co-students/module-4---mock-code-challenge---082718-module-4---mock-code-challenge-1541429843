import React, { Component } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

// const SushiContainer = (props) => {
//   return (
//     <Fragment>
//       <div className="belt">
//         {props.sushis.map(sushi => {
//           return <Sushi sushi={sushi} nommed={props.nommed} />
//         })}
//         <MoreButton />
//       </div>
//     </Fragment>
//   )
// }
//
// export default SushiContainer

export default class SushiContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nommed: [],
    }
  }

  componentDidUpdate() {
    if (this.state.nommed.length === 4) {
      this.props.mayIhaveAnother();
    }
  }

  render() {
    return (
      <div className="belt">
        {this.props.sushis.map(sushi => {
          return <Sushi sushi={sushi} wheresMyMoney={this.props.wheresMyMoney} />
        })}
        <MoreButton mayIhaveAnother={this.props.mayIhaveAnother} />
      </div>
    )
  }

}
