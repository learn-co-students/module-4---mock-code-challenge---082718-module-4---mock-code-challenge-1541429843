import React from 'react'

const Sushi = (props) => {

  const handleClick = () =>{
    if (props.wallet < props.sushi.price){
      alert("You're too poor for this sushi!")
    } else if (props.sushi.eaten === false){
      props.deductSushi(props.sushi.price, props.sushi.id)
    } else {
      alert("You already ate that!")
    }
  }

    return (
      <div className="sushi">
        <div className="plate"
             onClick={handleClick}>
          { props.sushi.eaten ? null : <img src={props.sushi.img_url} alt={props.sushi.name} width="100%" /> }
        </div>
        <h4 className="sushi-details">
          {props.sushi.name} - ${props.sushi.price}
        </h4>
      </div>
    )
}

export default Sushi
