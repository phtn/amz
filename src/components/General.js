import React from 'react'
// import { Grid } from 'semantic-ui-react'
import XV from '../assets/xvlogo.png'
const container = {
  padding: 5,
  color: '#666',
  textAlign: 'center'
}
export default props => (
  <div style={container}>
    <img src={XV} alt='logo' height={200}/>
  </div>
)