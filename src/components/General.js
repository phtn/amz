import React from 'react'
import { Grid } from 'semantic-ui-react'
import XV from '../assets/xvlogo.png'
const container = {
  padding: 5,
  color: '#666',
}
export default props => (
  <div style={container}>
    <Grid>
      <Grid.Column width={6}>
      </Grid.Column>

      <Grid.Column width={6}>
      <img src={XV} alt='logo' height={300}/>
      </Grid.Column>
      
      <Grid.Column width={6}>
      </Grid.Column>
    </Grid>
  </div>
)