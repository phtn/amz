import React, { Component } from 'react'
import { observer } from 'mobx-react'

// import Sword from '../assets/sword.svg'
// import Helmet from '../assets/helmet.svg'
// import Armor from '../assets/armor.svg'
// import Boot from '../assets/boot.svg'
// import Necklace from '../assets/necklace.svg'

const Arbiter = observer (
  class ArbiterComponent extends Component {
    render(){
      return(
        <div> Arbiter Gear </div>
      )
    }
  }
)
export default Arbiter