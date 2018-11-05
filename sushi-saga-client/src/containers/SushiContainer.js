import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  console.log('sushi container rendered')

  const sushi = props.sushis.map( sushi => {
    return <Sushi key={sushi.id} sushi={sushi} clicked={false}/>
  })

  // changeClickedState(){
  //   return props.clicked = !clicked
  // }

  return (
    <Fragment>
      <div className="belt">
        {sushi}
        <MoreButton />
      </div>
    </Fragment>
  )
}

export default SushiContainer
