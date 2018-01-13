import React from 'react'
import { Image, List, Divider, Grid } from 'semantic-ui-react'

import Royal from '../assets/royal.svg'
import Head from '../assets/head.svg'

const container = {padding: 5, color: '#999', textAlign: 'center', height: '100%'}
const name={color: '#61DAFB'}
const desc = {color: '#666', fontFamily: 'Spectral SC, serif'}


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
        {props.council.map(c=> (
          <Grid.Column width={5} key={c.name}>
          <List.Item>
            <Image avatar src={Head}/>
            <List.Content>
              <List.Header style={name}>{c.name}</List.Header>
              <List.Description style={desc}>{c.desc}</List.Description>
            </List.Content>
          </List.Item>
        </Grid.Column>
        ))}
      </Grid>

      <Divider/>
      
      <Grid divided='vertically' textAlign='center'>
        {props.r3.map(c=> (
          <Grid.Column width={5} key={c.name}>
          <List.Item>
            <Image avatar src={Head}/>
            <List.Content>
              <List.Header style={name}>{c.name}</List.Header>
              <List.Description style={desc}>{c.desc}</List.Description>
            </List.Content>
          </List.Item>
        </Grid.Column>
        ))}
      </Grid>

    </List>
    

  </div>
)