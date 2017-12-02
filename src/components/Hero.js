import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { Grid, Divider, Dropdown } from 'semantic-ui-react'
import HeroObservables from '../observables/heroObservable'

const grid = { margin: 5, textAlign: 'center'}
// const segment = {backgroundColor: 'transparent'}
const title = {fontFamily: 'Spectral SC, serif', color: '#666', opacity: 0.8}
// const sentinel = {fontFamily: 'Roboto, sans-serif', fontWeight: 100, color: '#F0B400', textAlign: 'center'}
// const arbiter = {fontFamily: 'Roboto, sans-serif', fontWeight: 100, color: '#61DAFB', textAlign: 'center'}
const dropdown = { backgroundColor: 'rgba(0,0,0,0.5)', color: '#666'}
const options = [
  {key: 1, text: 'Hunter', value: 'Hunter'},
  {key: 2, text: 'Gunslinger', value: 'Gunslinger'},
  {key: 3, text: 'Sentinel', value: 'Sentinel'},
  {key: 4, text: 'Arbiter', value: 'Arbiter'},
  {key: 5, text: 'Winged Assasin', value: 'Winged Assasin'},
  {key: 6, text: 'Aranea', value: 'Aranea'},
  {key: 7, text: 'Undertaker', value: 'Undertaker'},
  {key: 8, text: 'Reaper', value: 'Reaper'},
]
const observe = new HeroObservables()

const Hero = observer (
  class HeroComponent extends Component {
    render(){
      return (
        <Grid divided='vertically' centered style={grid}>
          <Grid.Row><h2 style={title} onClick={()=> observe.loop()}>Gear Comparison</h2></Grid.Row>
          <Grid.Row>
            <Grid.Column width={8}>
              <Dropdown 
                button floating fluid
                style={dropdown} 
                options={options}
                
                onChange={(e)=> observe.leftDropdown(e.target.innerText)}
                defaultValue={observe.left} />
            </Grid.Column>
            <Grid.Column width={8}>
              <Dropdown 
                button floating fluid
                style={dropdown} 
                options={options}
                onChange={(e)=> observe.rightDropdown(e.target.innerText)}
                defaultValue={options[2].value} />
              </Grid.Column>
          </Grid.Row>
          <Grid.Column width={8}>
            {observe.leftColumn}
          </Grid.Column>
          <Grid.Column width={8}>
            {observe.rightColumn}
          </Grid.Column>
        </Grid>
      )
    }
  }
)
export default Hero