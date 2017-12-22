import React, { Component } from 'react'
import chalk from '../chalkboard.jpg'
import { Grid, Button } from 'semantic-ui-react'
import { observer } from 'mobx-react'
import HeroObservables from '../observables/heroObservable'

const obs = new HeroObservables()


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
              <Button color='grey' onClick={()=> obs.getColor(0)}></Button>
            </Grid.Column>
            <Grid.Column width={2}>
              <Button onClick={()=> obs.getColor(1)}></Button>
            </Grid.Column>
            <Grid.Column width={2}>
              <Button color='green' onClick={()=> obs.getColor(2)}></Button>
            </Grid.Column>
            <Grid.Column width={2}>
              <Button color='blue' onClick={()=> obs.getColor(3)}></Button>
            </Grid.Column>
            <Grid.Column width={2}>
              <Button color='purple' onClick={()=> obs.getColor(4)}></Button>
            </Grid.Column>
            <Grid.Column width={2}>
              <Button color='yellow' onClick={()=> obs.getColor(5)}></Button>
            </Grid.Column>
          </Grid>
        </div>
      )
    }
  }
)
export default gearLevel


