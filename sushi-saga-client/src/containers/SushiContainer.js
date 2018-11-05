import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  console.log(props)

  const getSushi = () => {
    return props.sushis.slice(props.sushiCounter, props.sushiCounter + 4).map( sushi => {
      return(
        <Sushi
          key={sushi.id}
          id={sushi.id}
          name={sushi.name}
          image={sushi["img_url"]}
          price={sushi.price}
          eaten={sushi.eaten}
          eatSushi={props.eatSushi}
        />
      )
    })
  }

  return (
    <Fragment>
      <div className="belt">
        {getSushi()}
        <MoreButton moreSushi={props.updateCounter} />
      </div>
    </Fragment>
  )
}

export default SushiContainer
