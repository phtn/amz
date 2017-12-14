import React, { Component } from 'react'
import { List } from 'semantic-ui-react'

const text = {
  color: '#eee',
  fontWeight: 'bold'
}
const list = {height: 80}
class Attributes extends Component {
  getAttr(attr){
    // console.log(attr)
    if (attr !== undefined){
      return attr.map(a=> (
        <List.Item key={a.key}>
          <List.Content verticalAlign='middle' floated='right' style={text}>
            {a.value[0]}
          </List.Content>
          <List.Content verticalAlign='middle' style={text}>
            {a.name}
          </List.Content>
        </List.Item>
      ))
    }
  }

  getItems(att){
    if (this.props.items !== undefined){
      return this.props.items.map(i=> (
            <List size='mini' divided style={list}>{this.getAttr(i.attr)}</List>
      ))
    }
  }

  render(){
    return (
      <div>
      
        {this.getItems(this.props.attr)}
          
      </div>
    )
  }
}
export default Attributes