import React, { Fragment } from 'react'

const Sushi = (props) => {

  let handleClick = () => {
    props.claimSushi(props.nigiri)
  }

  return (
    <div className="sushi">
      <div className="plate"
           onClick={handleClick}>
        {props.eaten ?
            null
          :
            <img src={props.nigiri.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.nigiri.name} - ${props.nigiri.price}
      </h4>
    </div>
  )
}

export default Sushi
