import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  const renderSushi = (props) => {
    return props.sushiArray.map(sushi => {
      return <Sushi key={sushi.id} datum={sushi} eatSushi={(event, price) => props.eatSushi(event, price)} sushiEaten={props.sushiEaten} currSushi={props.currSushi}/>
    })
  }

  return (
    <Fragment>
      <div className="belt">
        {
          /*
             Render Sushi components here!
          */
          renderSushi(props)
        }
        <MoreButton />
      </div>
    </Fragment>
  )
}



export default SushiContainer
