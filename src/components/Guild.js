import React from 'react'
import { Image, List, Divider, Grid } from 'semantic-ui-react'

import Royal from '../assets/royal.svg'
import Head from '../assets/head.svg'

const container = {padding: 5, color: '#999', textAlign: 'center', height: window.innerHeight}
const name={color: '#61DAFB'}
const desc = {color: '#666', fontFamily: 'Spectral SC, serif'}

// const council = {
//   lyandra: {name: 'Lyandra', desc: 'R4 - VP'},
//   therefore: {name: 'ThereforeIAm', desc: 'R4 - War Chief'},
//   juicy: {name: 'Whos Juicy', desc: 'R4 - Event Master'},
// }

export default props => (
  <div style={container}>
    <List>
    <Divider/>
      <List.Item>
        <Image avatar src={Royal}/>
        <List.Content>
          <List.Header style={name}>AmazonsPrime</List.Header>
          <List.Description style={desc}>V - Leader</List.Description>
        </List.Content>
      </List.Item>
      <Divider/>
      <Grid divided='vertically' textAlign='center'>
      <Grid.Column width={5}>
      <List.Item>
        <Image avatar src={Head}/>
        <List.Content>
          <List.Header style={name}>Lyandra</List.Header>
          <List.Description style={desc}>IV - VP</List.Description>
        </List.Content>
      </List.Item>
      </Grid.Column>
      <Grid.Column width={5}>
      <List.Item>
        <Image avatar src={Head}/>
        <List.Content>
          <List.Header style={name}>ThereforeIAm</List.Header>
          <List.Description style={desc}>IV - War Chief</List.Description>
        </List.Content>
      </List.Item>
      </Grid.Column>
      <Grid.Column width={5}>
      <List.Item>
        <Image avatar src={Head}/>
        <List.Content>
          <List.Header style={name}>Whos Juicy</List.Header>
          <List.Description style={desc}>IV - Event Master</List.Description>
        </List.Content>
      </List.Item>
      </Grid.Column>
      <Grid.Column width={5}>
      <List.Item>
        <Image avatar src={Head}/>
        <List.Content>
          <List.Header style={name}>Lord Organic</List.Header>
          <List.Description style={desc}>IV</List.Description>
        </List.Content>
      </List.Item>
      </Grid.Column>
      <Grid.Column width={5}>
      <List.Item>
        <Image avatar src={Head}/>
        <List.Content>
          <List.Header style={name}>The Red Keep</List.Header>
          <List.Description style={desc}>IV</List.Description>
        </List.Content>
      </List.Item>
      </Grid.Column>
      <Grid.Column width={5}>
      <List.Item>
        <Image avatar src={Head}/>
        <List.Content>
          <List.Header style={name}>McMasterful</List.Header>
          <List.Description style={desc}>IV</List.Description>
        </List.Content>
      </List.Item>
      </Grid.Column>
      </Grid>

    </List>
    

  </div>
)