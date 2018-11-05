import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import AddMoney from '../components/AddMoney'
import RestartBelt from '../components/RestartBelt'
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
        <AddMoney takeMyTwenty={props.takeMyTwenty} takeMyMoneyyy={props.takeMyMoneyyy} />
        {props.plsNoMore <= 0 ? <RestartBelt restartBelt={props.restartBelt} /> : null}
      </div>
    </Fragment>
  )
}

export default SushiContainer
