import React from 'react'

const callback = () => {
  debugger
}

const MoreButton = (props) => {
    return (<button onClick={callback}>
            More sushi!
          </button>)
}

export default MoreButton
