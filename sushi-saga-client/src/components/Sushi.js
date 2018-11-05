import React from 'react'

const Sushi = (props) => {
  return (
    <div>
      <div className="sushi" onClick={() => props.eatSushi(props.id, props.price)} id={props.id}>
        <div className="plate" >
          {props.eaten === true ? null : <img src={props.image} width="100%" alt="" />}
        </div>
        <h4 className="sushi-details">
          {props.name} - ${props.price}
        </h4>
      </div>
    </div>
  )
}

export default Sushi

// onClick={/* Give me a callback! */ null}>
// {
// /* Tell me if this sushi has been eaten! */
// true ?
//  null
// :
//  <img src={props.image} width="100%" alt="" />
// }
