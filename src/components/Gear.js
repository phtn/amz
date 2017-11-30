import React from 'react'
import { Segment, Image } from 'semantic-ui-react'
// import Sword from '../assets/sword.svg'
// import Helmet from '../assets/helmet.svg'
// import Armor from '../assets/armor.svg'
// import Boot from '../assets/boot.svg'
// import Necklace from '../assets/necklace.svg'
const segment = {
  background: 'none',
  border: '0px solid #666'
}
export default props => (
  <div>
    <Segment style={segment}>
      {props.name} Gear
    </Segment>
  </div>
)
