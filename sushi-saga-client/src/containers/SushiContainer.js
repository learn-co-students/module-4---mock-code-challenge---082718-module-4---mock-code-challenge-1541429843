import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'


const SushiContainer = (props) => {


  let theSushi = () => {
    props.sushies.map((sushieObj, idx) => <Sushi sushi={sushieObj.name} img={sushieObj.img_url} price={sushieObj.price} key={idx} /> )
  }

  return (
    <Fragment>
      <div className="belt">
        { theSushi() }
        <MoreButton />
      </div>
    </Fragment>
  )
}

export default SushiContainer
