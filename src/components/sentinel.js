import React, { Component } from 'react'
import { Card, Image, Divider, Icon } from 'semantic-ui-react'
import Helmet from '../assets/helmet.svg'
// import Sword from '../assets/sword.svg'
// import Helmet from '../assets/helmet.svg'
// import Armor from '../assets/armor.svg'
// import Boot from '../assets/boot.svg'
// import Necklace from '../assets/necklace.svg'
const card = {
  background: 'none',
  border: '1px solid #666'
}

const c = {border: '1px solid #666'}
export default props => (
  <div>Sentinel Gear
    <Divider/>
    
  

    <Card style={card}>
      <Card.Content header='Sentinel' />
      <Card.Content />
      <Card.Content extra>
        <Icon name='user' />
        Helmet
      </Card.Content>
    </Card>

  </div>
)
