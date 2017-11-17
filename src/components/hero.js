import React from 'react'
import { Grid, Menu, Segment, Image, Divider } from 'semantic-ui-react'
import HeroObservables from '../observables/heroObservable'

const container = { margin: 5, textAlign: 'center'}
const segment = {backgroundColor: 'transparent'}
const title = {fontFamily: 'Spectral SC, serif', color: '#666'}
const sentinel = {fontFamily: 'Roboto, sans-serif', fontWeight: 100, color: '#F0B400', textAlign: 'center'}
const arbiter = {fontFamily: 'Roboto, sans-serif', fontWeight: 100, color: '#61DAFB', textAlign: 'center'}

const observe = new HeroObservables()

export default props => (
  <div style={container}>
    <Segment inverted style={segment}>
      <h1 style={title}>Gear Comparison</h1>
      <Grid centered>
        <Grid.Column width={7}>
          <section style={sentinel}>{observe.leftComponent}</section>
          
        </Grid.Column>
        <Grid.Column width={1}>
        </Grid.Column>
        <Grid.Column width={7}>
        <p style={arbiter}>Arbiter</p>
        <Divider/>
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