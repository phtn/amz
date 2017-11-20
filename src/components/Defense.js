import React from 'react'
import { Segment } from 'semantic-ui-react'
import Noctis from '../assets/noctis.png'
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
    <img src={Noctis} alt='logo' height={200}/>
    <br/>
    <Segment style={segment}>
    
    <br/>
    <p style={spectral}>{props.name} Page in development...</p>
    </Segment>
  </div>
)