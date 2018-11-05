import React, { Fragment } from 'react'

const Table = (props) => {
  console.log(props)
  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${ props.customer.moneyLeft} remaining!
        <br/>
        <button onClick={props.addTen}>Add $10</button>
      </h1>
      <div className="table">
        <div className="stack">
          {
            /*
               renderPlates takes an array
               and renders an empty plate
               for every element in the array
            */
            renderPlates(props.customer.eatenSushi)
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Table
