import React, { Component } from 'react'
import { Card, Image } from 'semantic-ui-react'
import Helmet from '../assets/helmet.svg'
// import Sword from '../assets/sword.svg'
// import Helmet from '../assets/helmet.svg'
// import Armor from '../assets/armor.svg'
// import Boot from '../assets/boot.svg'
// import Necklace from '../assets/necklace.svg'
import Watch from '../assets/watch.png'
const card = {
  background: 'none',
  border: '1px solid #666'
}
const header = {fontFamily: 'Spectral SC, serif'}
export default props => (
  <div>Sentinel Gear
    
  

    <Card style={card} fluid>
      <Image src={Watch}/>
      <Card.Content extra>
        Helmet
      </Card.Content>
    </Card>

  </div>
)
