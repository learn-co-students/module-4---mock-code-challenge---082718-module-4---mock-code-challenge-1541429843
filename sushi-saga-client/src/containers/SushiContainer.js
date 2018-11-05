import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'


class SushiContainer extends React.Component {

  constructor(props){
    super(props)
    this.state ={
      four: this.copysushi().splice(0,4)
    }
  }
  copysushi =()=> this.props.sushis.splice(0,4)

sushiCom=()=>this.copysushi().splice(0,4).map(sushi=> <Sushi key={sushi.id} sushi={sushi}  eatSushi={this.props.eatSushi} isChosen={this.props.isChosen}/>)


  handelOnClick=(e)=> {
    // console.log(newcoy)
    // sushiCom= newcoy.splice(0,4).map(sushi=> <Sushi key={sushi.id} sushi={sushi}  />)
    // console.log(sushiCom)
    this.setState ({
      four:this.copysushi().splice(0,4)
    },()=>  console.log(this.state.four))
  }


  render (){
  console.log(this)
  return (
    <Fragment>
      <div className="belt">
        {this.sushiCom()}
        <MoreButton renderMore={this.handelOnClick}/>
      </div>
    </Fragment>
  )
}
}

export default SushiContainer
