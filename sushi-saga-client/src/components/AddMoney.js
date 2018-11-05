import React from 'react'

const AddMoney = (props) => {
  this.amount = 0;

  return <div>
    <button onClick={props.takeMyMoney}>
      my bank account says no but my stomach says yes ($20)
    </button>
    <form onSubmit={(e) => props.takeMyMoneyyy(e, this.amount)}>
      amount to add :
      <input type="text" onChange={e => this.amount = e.target.value}>
      </input>
      <input type="submit" value="takemoney"></input>
    </form>
  </div>
}

export default AddMoney
