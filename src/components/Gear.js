import React, { Component } from 'react'
import { Segment, Image, List, Divider } from 'semantic-ui-react'

import Helmet from '../assets/helmet.svg'
import Armor from '../assets/armor.svg'
import Boot from '../assets/boot.svg'
import Sword from '../assets/sword.svg'
import Necklace from '../assets/necklace.svg'
import Mitten from '../assets/mitten.svg'

const segment = {
  // background: 'rgba(238,238,238,0.8)',
  height: window.innerHeight,
  padding: 0,
  // border: '1px solid red'
}
const svg = [Helmet, Armor, Boot, Sword, Necklace, Necklace, Necklace]
const list = {height: 80}
class Gear extends Component {

  getItems(){
    if (this.props.items !== undefined){
      return this.props.items.map(i=> (
        <List.Item key={i.key}>
        <Image avatar src={svg[i.key]} />
        <List.Content>
          <List.Header>{i.name}</List.Header>
        </List.Content>
        <List.Content>
          <List size='mini' divided style={list}>{this.getAttr(i.attr)}</List>
        </List.Content>
        <Divider/>
        
      </List.Item>
      ))
    }
  }
  getAttr(attr){
    if (attr !== undefined){
      return attr.map(a=> (
        <List.Item key={a.key}>
          <List.Content verticalAlign='middle' floated='right'>
            {a.value[0]}
          </List.Content>
          <List.Content verticalAlign='middle'>
            {a.name}
          </List.Content>
        </List.Item>
      ))
    }
  }
  render(){
    return (
      <div>
        <Segment style={segment}>
          <List selection verticalAlign='middle'>
            {this.getItems()}
          </List>
        </Segment>
      </div>
    )
  }
}
export default Gear
