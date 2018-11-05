import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  const displaySushis = () => {
    return props.displayedSushis.map(sushi => {
      return(
        <Sushi
          sushi={sushi}
          key={sushi.id}
          eat={props.eat}
          checkEaten={props.checkEaten}
        />
      )
    })
  }

  return (
    <Fragment>
      <div className="belt">
        {displaySushis()}
        <MoreButton
          more={props.more}
        />
      </div>
    </Fragment>
  )
}

export default SushiContainer
