import React, { Fragment, Component } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

let sushiShowVar = 4

class SushiContainer extends Component {

  state = {
    numSushiRenders: 1
  }

  renderSushi = () => {
    console.log("rendering sushi");
    let sushiCounter = 0
    let sushiToRender =this.props.sushiList.slice(sushiShowVar-4, sushiShowVar)
    console.log(sushiToRender)
    return sushiToRender.map( sushi => <Sushi
                                        key={++sushiCounter}
                                        eaten={false}
                                        sushiProps={sushi}
                                        eatOneSushi={this.props.eatOneSushi}
                                        lowerPrice={this.props.lowerPrice}
                                        />
                            )
  }

  showMoreSushi = () => {
    sushiShowVar += 4
    console.log(sushiShowVar)
    this.setState({
      numSushiRenders: ++this.state.numSushiRenders
    })
    this.renderSushi()
  }

  render() {
    return (
        <Fragment>
          <div className="belt">
            {
              this.renderSushi()
            }
            <MoreButton showMoreSushi={this.showMoreSushi}/>
          </div>
        </Fragment>
    )
  }
}

export default SushiContainer
