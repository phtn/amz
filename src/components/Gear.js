import React, { Component } from 'react'
import { Segment, Image } from 'semantic-ui-react'
// import Sword from '../assets/sword.svg'
// import Helmet from '../assets/helmet.svg'
// import Armor from '../assets/armor.svg'
// import Boot from '../assets/boot.svg'
// import Necklace from '../assets/necklace.svg'
const segment = {
  background: 'none',
  border: '0px solid #666',
  height: window.innerHeight
}
class Gear extends Component {

  componentWillMount(){
    if (this.props.items !== undefined){
      this.props.items.map(i=> { console.log(i.name)})
    }
  }
  render(){
    return (
      <div>
        <Segment style={segment}>
          
           {/* <ol>{this.getItems()}</ol> */}
        </Segment>
      </div>
    )
  }
}
export default Gear
