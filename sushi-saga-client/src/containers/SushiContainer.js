import React, {Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props)=> {

    return (
      <Fragment>
        <div className="belt">
          {props.allSushi.filter(sushi => sushi.id >= props.display.start && sushi.id <= props.display.end).map(sushi=> <Sushi key={sushi.id} sushi={sushi} deductSushi={props.deductSushi} wallet={props.wallet}/>)}
          <MoreButton showMore={props.showMore} />
        </div>
      </Fragment>
    )
}

export default SushiContainer
