import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {props.sushis.map(sushi => {
          return <Sushi
            sushi={sushi}
            epicMealTime={props.epicMealTime}
           />
        })}
        <MoreButton mayIhaveAnother={props.mayIhaveAnother} />
      </div>
    </Fragment>
  )
}

export default SushiContainer
