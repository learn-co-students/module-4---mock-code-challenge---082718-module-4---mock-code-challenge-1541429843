import React from 'react'

const Sushi = (props) => {
  const sushi = props.sushi

  const displayIfUneaten = () => {
    if (!props.checkEaten(sushi.id)) {
      return <img src={sushi.img_url} width="100%" alt={sushi.name} />
    }
  }

  const eat = () => {
    props.eat(sushi)
  }

  return (
    <div className="sushi">
      <div className="plate"
           onClick={eat}>
        {displayIfUneaten()}
      </div>
      <h4 className="sushi-details">
        {sushi.id}. {sushi.name} - ${sushi.price}
      </h4>
    </div>
  )
}

export default Sushi
