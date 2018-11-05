import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  const renderSushi = () => {
    return props.conveyorsushi.map(sushi => {
      return <Sushi key={sushi.id} nigiri={sushi} claimSushi={props.claimSushi}/>
    })
  }

  return (
    <Fragment>
      <div className="belt">
        {props.conveyorsushi.map(sushi => <Sushi key={sushi.id} nigiri={sushi} claimSushi={props.claimSushi}/>)}
        <MoreButton newSushi={props.newSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
