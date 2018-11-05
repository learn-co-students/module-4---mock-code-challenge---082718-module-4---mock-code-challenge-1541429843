import React, { Fragment } from 'react'


const Sushi = (props) => {

  const showImg = (props) => {
    return (props.datum.id === props.currSushi) && props.sushiEaten ? null : <img src={props.datum.img_url} alt='' width="100%"/>
  }

  const price = props.datum.price

  return (
    <div className="sushi">
      <div className="plate" onClick={(event, price) => props.eatSushi(event, price)}>
        {showImg(props)}
      </div>
      <h4 className="sushi-details">
        {props.datum.name} - ${props.datum.price}
      </h4>
    </div>
  )
}

export default Sushi
