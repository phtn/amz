import React, { Component } from 'react'
import chalk from '../chalkboard.jpg'
import { Grid, Button } from 'semantic-ui-react'
import { observer } from 'mobx-react'



const container = {
  width: window.innerWidth,
  alignItems: 'center',
  position: 'fixed',
  bottom: 0,
  // backgroundColor: '#efefef',
  height: 80,
  textAlign: 'center',
  color: '#61DAFB',
  fontFamily: 'Roboto, sans-serif',
  fontWeight: 100,
  fontSize: 11,
  background: `url(${chalk})`,
  borderTop: '3px solid tomato'
}

const grid = {
  marginTop: 8
}

const gearLevel = observer (
  class GearLevel extends Component {
    
    render(){
      return (
        <div style={container}>
          <Grid centered divided='vertically' style={grid}>
            <Grid.Column width={2}>
              <Button color='grey'></Button>
            </Grid.Column>
            <Grid.Column width={2}>
              <Button></Button>
            </Grid.Column>
            <Grid.Column width={2}>
              <Button color='green'></Button>
            </Grid.Column>
            <Grid.Column width={2}>
              <Button color='blue'></Button>
            </Grid.Column>
            <Grid.Column width={2}>
              <Button color='purple'></Button>
            </Grid.Column>
            <Grid.Column width={2}>
              <Button color='yellow'></Button>
            </Grid.Column>
          </Grid>
        </div>
      )
    }
  }
)
export default gearLevel


