import React, { Component } from 'react'

const Sushi = (props) => {

  const handleClick = () =>{
    if (props.wallet < props.sushi.price){
      alert("You're too poor for this sushi!")
    } else {
      props.deductPrice(props.sushi.price, props.sushi.id)
    }
  }

    return (
      <div className="sushi">
        <div className="plate"
             onClick={handleClick}>
          { props.sushi.eaten ? null : <img src={props.sushi.img_url} width="100%" /> }
        </div>
        <h4 className="sushi-details">
          {props.sushi.name} - ${props.sushi.price}
        </h4>
      </div>
    )
}

export default Sushi
