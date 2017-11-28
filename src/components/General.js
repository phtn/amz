import React from 'react'
import { Segment } from 'semantic-ui-react'
import XV from '../assets/xvlogo.png'
const container = {
  padding: 5,
  color: '#999',
  textAlign: 'center'
}
const segment = {
  backgroundColor: 'transparent'
}
const spectral = {fontFamily: 'Spectral SC, serif', color: '#F0B400'}
export default props => (
  <div style={container}>
    <img src={XV} alt='logo' height={200}/>
    <br/>
    <Segment style={segment}>
    Welcome Amazons
    <br/>
    <p style={spectral}>Final Fantasy XV: New Empire</p>
    </Segment>
  </div>
)