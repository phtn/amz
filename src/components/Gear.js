import React, { Component } from 'react'
import { Segment, Image, List } from 'semantic-ui-react'
// import Sword from '../assets/sword.svg'
import Helmet from '../assets/helmet.svg'
// import Armor from '../assets/armor.svg'
// import Boot from '../assets/boot.svg'
// import Necklace from '../assets/necklace.svg'
const segment = {
  // background: 'none',
  height: window.innerHeight,
  padding: 0,
  border: '1px solid red'
}
class Gear extends Component {

  getItems(){
    if (this.props.items !== undefined){
      return this.props.items.map(i=> (
        <List.Item key={i.key}>
        <Image avatar src={Helmet} />
        <List.Content>
          <List.Header>{i.name}</List.Header>
        </List.Content>
        <List.Content>
          <List>{this.getAttr(i.attr)}</List>
        </List.Content>
      </List.Item>
      ))
    }
  }
  getAttr(attr){
    if (attr !== undefined){
      return attr.map(a=> (
        <List.Item key={a.key}>
          <List.Content>
            {a.name}
          </List.Content>
          <List.Content floated='right'>
            {a.key}
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
