import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  this.makeSushis = (sushis, offset) => {
    const sushiSet = sushis.slice(offset, offset + 4)
    return sushiSet.map( sushi => {
      return (
        <Sushi
          name={sushi.name}
          price={sushi.price}
          img_url={sushi.img_url}
          key={sushi.id}
          eatSushi={props.eatSushi}
          eaten={sushi.eaten}
        />
      )
    })
  }

  return (
    <Fragment>
      <div className="belt">
        {
          this.makeSushis(props.sushis, props.offset)
        }
        <MoreButton handleNext={props.handleNext}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
