import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { Menu } from 'semantic-ui-react'
import NavObservables from '../observables/navObservable'
const observe = new NavObservables()
const container = { backgroundColor: 'transparent'}
const nav = {
  borderRadius: 2,
  cursor: 'pointer',
  backgroundColor: 'transparent',
  color: '#F0B400'
}
const item = {
  color: 'tomato',
  fontFamily: 'Spectral SC, serif'
}
const NAV = observer (
  class Nav extends Component {
    render(){
      return (
        <div style={container}>
          <Menu fluid widths={4} pointing secondary style={nav}>
          <Menu.Item color='yellow' style={item} name='General' active={observe.active === 'General'} onClick={(e)=> observe.setActive(e.target.innerHTML)} />
          <Menu.Item color='yellow' style={item} name='Attack' active={observe.active === 'Attack'} onClick={(e)=> observe.setActive(e.target.innerHTML)} />
          <Menu.Item color='yellow' style={item} name='Defense' active={observe.active === 'Defense'} onClick={(e)=> observe.setActive(e.target.innerHTML)} />
          <Menu.Item color='yellow' style={item} name='Hero' active={observe.active === 'Hero'} onClick={(e)=> observe.setActive(e.target.innerHTML)} />
        </Menu>
        <section>
          {observe.renderComponent}
        </section>
        </div>
      )
    }
  }
)
export default NAV