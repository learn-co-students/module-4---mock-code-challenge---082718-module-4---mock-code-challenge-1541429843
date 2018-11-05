import React from 'react'

const MoreMoney = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault()
    const value = parseInt(event.target.querySelector('input').value, 10)
    if (value > 0) {
      props.topUp(value)
    }
  }

  return (
    <form
      className="more-money"
      onSubmit={handleSubmit}
    >
      <input type='number' />
      <button>get more cash</button>
    </form>
  )
}

export default MoreMoney
