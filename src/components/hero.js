import React from 'react'
import { Grid, Menu, Segment, Image } from 'semantic-ui-react'
import Sword from '../assets/sword.svg'
import Helmet from '../assets/helmet.svg'
import Armor from '../assets/armor.svg'
import Boot from '../assets/boot.svg'
import Necklace from '../assets/necklace.svg'
const container = { margin: 5, textAlign: 'center'}
const segment = {backgroundColor: 'transparent'}
const title = {fontFamily: 'Spectral SC, serif', color: '#666'}
export default props => (
  <div style={container}>
    <Segment inverted style={segment}>
      <h1 style={title}>Gear Comparison</h1>
      <Grid>
        <Grid.Column width={8}>
          Sentinel
        </Grid.Column>
        <Grid.Column width={8}>
          Arbiter
        </Grid.Column>  
      </Grid>  
    </Segment>


    {/* <Menu compact={true} inverted>
      <Menu.Item><Image src={Sword} height={25}/></Menu.Item>
      <Menu.Item><Image src={Helmet} height={25}/></Menu.Item>
      <Menu.Item><Image src={Armor} height={25}/></Menu.Item>
      <Menu.Item><Image src={Boot} height={25}/></Menu.Item>
      <Menu.Item><Image src={Necklace} height={25}/></Menu.Item>
    </Menu> */}
      
  </div>
)