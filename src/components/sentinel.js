import React from 'react'
import { Card, Image } from 'semantic-ui-react'
// import Sword from '../assets/sword.svg'
// import Helmet from '../assets/helmet.svg'
// import Armor from '../assets/armor.svg'
// import Boot from '../assets/boot.svg'
// import Necklace from '../assets/necklace.svg'
import Watch from '../assets/watch.png'
const card = {
  background: 'none',
  border: '0px solid #666'
}
export default props => (
  <div>Sentinel Gear
    <Card style={card} fluid>
      <Image src={Watch} size='small'/>
      
    </Card>
  </div>
)
